import { useEffect } from 'react';
import {
  ChartModalBodyStyled,
  ChartModalOverlayStyled,
  ChartModalContainerStyled,
  ChartModalCloseButtonStyled,
} from './ChartModal.styled';
import PropTypes from 'prop-types';
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
import { AiOutlineClose } from 'react-icons/ai';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const ChartModal = ({ cart, onClose }) => {
  const chartData = {
    labels: cart.products.map(({ title }) => title),
    datasets: [
      {
        label: 'Price',
        data: cart.products.map(({ price }) => price),
        fill: true,
        borderColor: 'blue',
      },
      {
        label: 'Discounted price',
        data: cart.products.map(({ discountedPrice }) => discountedPrice),
        fill: true,
        borderColor: 'green',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: `Cart number: ${cart.id}`,
      },
    },
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <ChartModalOverlayStyled onClick={handleOverlayClick}>
      <ChartModalBodyStyled>
        <ChartModalContainerStyled>
          {Object.keys(cart) !== 0 && (
            <Line data={chartData} options={chartOptions} />
          )}
          <ChartModalCloseButtonStyled onClick={() => onClose()}>
            <AiOutlineClose />
          </ChartModalCloseButtonStyled>
        </ChartModalContainerStyled>
      </ChartModalBodyStyled>
    </ChartModalOverlayStyled>
  );
};

ChartModal.propTypes = {
  cart: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};
