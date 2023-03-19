import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// ChartJS.register(
//     ArcElement,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//     Filler
// )

export const CartId = () => {
  const [cart, setCart] = useState({});
  const [chartData, setChartData] = useState({});
  const { cartId } = useParams();

  useEffect(() => {
    const fetchCart = async () => {
      const { data } = await axios.get(`https://dummyjson.com/carts/${cartId}`);
        setCart(data);
         setChartData({
           labels: cart.products.map(({ title }) => title),
           datasets: [
             {
               label: 'Price',
               data: cart.products.map(({ price }) => price),
               fill: true,
               borderColor: '#de07f1',
               backgroundColor: '#1794dd',
             },
           ],
         });
    };
    fetchCart();
  }, []);

   

  return <div></div>;
};
