"use strict";(self.webpackChunkcart_test_task=self.webpackChunkcart_test_task||[]).push([[482],{6482:function(n,t,e){e.r(t),e.d(t,{default:function(){return hn}});var r,i,o,a,s,d,c,l,p,u=e(9439),x=e(168),g=e(7402),m=g.Z.ul(r||(r=(0,x.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));\n  grid-gap: 20px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 50px;\n  padding-bottom: 50px;\n"]))),h=g.Z.li(i||(i=(0,x.Z)(["\n  position: relative;\n  background-color: #1d1d1d;\n  border-radius: 4px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  svg {\n    width: 30px;\n    height: 30px;\n  }\n  &:hover {\n    transition: 500ms;\n    transform: scale(1.03);\n  }\n"]))),f=g.Z.p(o||(o=(0,x.Z)(["\n  margin: 0;\n  margin-bottom: 5px;\n  &:first-of-type {\n    margin-top: 5px;\n    margin-bottom: 10px;\n    font-size: 18px;\n  }\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),b=g.Z.button(a||(a=(0,x.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background-color: black;\n  color: #cecccc;\n  margin: 0;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 1px, solid, #cecccc;\n  &:hover,\n  &:focus {\n    color: red;\n    transition: 500ms;\n  }\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n"]))),j=g.Z.a(s||(s=(0,x.Z)(["\n  cursor: pointer;\n  color: #cecccc;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  text-decoration: none;\n"]))),v=e(9434),y=e(8697),w=e(9126),Z=e(8820),k=e(4855),C=e(8966),T=e(184),I=function(n){var t=n.total,e=n.discountedTotal,r=n.userId,i=n.id,o=(0,v.I0)(),a=(0,v.v9)(y.b5);return(0,T.jsxs)(h,{children:[(0,T.jsx)(b,{onClick:function(){return o((0,k.al)(i))},disabled:a,children:a?(0,T.jsx)(C.NB,{}):(0,T.jsx)(Z.oHP,{})}),(0,T.jsxs)(j,{id:i,children:[(0,T.jsx)(w.rpL,{}),(0,T.jsxs)(f,{children:["User number: ",r]}),(0,T.jsxs)(f,{children:["Total: ",t]}),(0,T.jsxs)(f,{children:["Discounted Total: ",e]})]})]})},q=e(2791),z=g.Z.div(d||(d=(0,x.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),D=g.Z.div(c||(c=(0,x.Z)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),P=g.Z.div(l||(l=(0,x.Z)(["\n  position: relative;\n  background-color: white;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n  border-radius: 4px;\n  width: 270px;\n  @media (min-width: 480px) {\n    width: 450px;\n  }\n  @media (min-width: 768px) {\n    width: 730px;\n  }\n  @media (min-width: 1280px) {\n    width: 1200px;\n  }\n"]))),A=g.Z.button(p||(p=(0,x.Z)(["\n  position: absolute;\n  top: 10px;\n  border: none;\n  right: 10px;\n  background-color: transparent;\n  margin: 0;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    color: red;\n    transition: 500ms;\n  }\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n"]))),L=e(152),E=e(3623);L.kL.register(L.qi,L.uw,L.f$,L.od,L.jn,L.Dx,L.u,L.De,L.Gu);var S,_,F,N,H,O,Q,U,B,G,V,X=function(n){var t=n.cart,e=n.onClose,r={labels:t.products.map((function(n){return n.title})),datasets:[{label:"Price",data:t.products.map((function(n){return n.price})),fill:!0,borderColor:"blue"},{label:"Discounted price",data:t.products.map((function(n){return n.discountedPrice})),fill:!0,borderColor:"green"}]},i={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Cart number: ".concat(t.id)}}};(0,q.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,T.jsx)(z,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,T.jsx)(D,{children:(0,T.jsxs)(P,{children:[0!==Object.keys(t)&&(0,T.jsx)(E.x1,{data:r,options:i}),(0,T.jsx)(A,{onClick:function(){return e()},children:(0,T.jsx)(Z.oHP,{})})]})})})},Y=function(){var n=(0,v.v9)(y.N5),t=(0,q.useState)(!1),e=(0,u.Z)(t,2),r=e[0],i=e[1],o=(0,q.useState)({}),a=(0,u.Z)(o,2),s=a[0],d=a[1],c=(0,q.useCallback)((function(){i(!r)}),[r]);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(m,{onClick:function(t){if(t.target.closest("a")){var e=n.find((function(n){return n.id.toString()===t.target.closest("a").id}));d(e),c()}},children:n.map((function(n){var t=n.id,e=n.total,r=n.discountedTotal,i=n.userId;return(0,T.jsx)(I,{total:e,discountedTotal:r,userId:i,id:t},t)}))}),r&&(0,T.jsx)(X,{cart:s,onClose:c})]})},$=e(2606),J=e(4270),K=e(4321),M=e(5612),R=g.Z.p(S||(S=(0,x.Z)(["\n  padding-top: 50px;\n  text-align: center;\n  margin: 0;\n  font-size: 35px;\n  font-weight: 500;\n  margin-bottom: 25px;\n"]))),W=g.Z.form(_||(_=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 15px;\n"]))),nn=g.Z.label(F||(F=(0,x.Z)(["\n  display: flex;\n\n  align-items: center;\n  font-weight: 500;\n  margin-right: 10px;\n  &:last-child {\n    margin-right: 0;\n  }\n"]))),tn=g.Z.input(N||(N=(0,x.Z)(["\n  margin-left: 5px;\n  width: 40px;\n  outline: none;\n  border-radius: 2px;\n  border: 1px solid gray;\n  &:hover,\n  &:focus,\n  &:active {\n    border-color: #de07f1;\n    transition: 500ms;\n  }\n"]))),en=g.Z.button(H||(H=(0,x.Z)(["\n  font-size: 16px;\n  color: #cecccc;\n  background-color: #1794dd;\n  margin: 0;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  &:hover,\n  &:focus {\n    color: #de07f1;\n    transition: 500ms;\n  }\n  svg {\n    width: 20px;\n    height: 20px;\n    margin-left: 5px;\n    @media (max-width: 479px) {\n      margin: 0;\n    }\n  }\n  span {\n    display: block;\n    @media (max-width: 479px) {\n      display: none;\n    }\n  }\n"]))),rn=g.Z.ul(O||(O=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n  margin-bottom: 20px;\n"]))),on=g.Z.li(Q||(Q=(0,x.Z)(["\n  position: relative;\n  padding: 10px;\n  border-radius: 4px;\n  background-color: #1d1d1d;\n  margin-bottom: 15px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),an=g.Z.p(U||(U=(0,x.Z)(["\n  font-size: 20px;\n  color: #cecccc;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  width: 375px;\n  svg {\n    margin-right: 5px;\n  }\n  @media (max-width: 479px) {\n    width: 150px;\n  }\n"]))),sn=g.Z.button(B||(B=(0,x.Z)(["\n  position: absolute;\n  top: 50;\n  right: 10px;\n  background-color: transparent;\n  color: #cecccc;\n  margin: 0;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 1px, solid, #cecccc;\n  &:hover,\n  &:focus {\n    color: red;\n    transition: 500ms;\n  }\n  svg {\n    width: 20px;\n    height: 20px;\n  }\n"]))),dn=g.Z.p(G||(G=(0,x.Z)(["\n  font-size: 20px;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  color: red;\n"]))),cn=g.Z.button(V||(V=(0,x.Z)(["\n  font-size: 16px;\n  color: #cecccc;\n  background-color: #1794dd;\n  margin: 0;\n  padding: 5px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  &:hover,\n  &:focus {\n    color: #de07f1;\n    transition: 500ms;\n  }\n  svg {\n    width: 20px;\n    height: 20px;\n    margin-left: 5px;\n  }\n"]))),ln=e(4494),pn=function(n){var t=n.title,e=n.quantity,r=n.id,i=(0,v.I0)();return(0,T.jsxs)(on,{children:[(0,T.jsx)(sn,{onClick:function(){i((0,ln.Ir)(r))},children:(0,T.jsx)(Z.oHP,{})}),(0,T.jsxs)(an,{children:[t," "]}),(0,T.jsxs)(an,{children:["Quantity: ",e]})]})},un=e(7692),xn=e(4373),gn=e(9085),mn=function(){var n=(0,v.I0)(),t=(0,v.v9)(ln.Xp),e=(0,v.v9)(ln.L_);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(R,{children:"Add a new cart"}),(0,T.jsxs)(W,{onSubmit:function(e){e.preventDefault();var r=e.currentTarget.elements[0].value,i=e.currentTarget.elements[1].value;return""===r||""===i?gn.Am.warn("Oops, you are missing a required field"):t.some((function(n){return Number(r)===n.id}))?gn.Am.warn("This product is already in cart"):(n((0,M.d)({id:r,quantity:i})),void e.currentTarget.reset())},children:[(0,T.jsxs)(nn,{children:["Product ID:",(0,T.jsx)(tn,{type:"number",min:"0"})]}),(0,T.jsxs)(nn,{children:["Quantity:",(0,T.jsx)(tn,{type:"number",min:"0"})]}),(0,T.jsxs)(en,{children:[(0,T.jsx)("span",{children:"Add product"}),(0,T.jsx)(xn.Lgw,{})]})]}),e&&(0,T.jsx)(K.a,{}),0!==t.length?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(rn,{children:t.map((function(n){var t=n.title,e=n.quantity,r=n.id;return(0,T.jsx)(pn,{title:t,quantity:e,id:r},r)}))}),(0,T.jsxs)(W,{onSubmit:function(e){e.preventDefault();var r=e.currentTarget.elements[0].value;if(""===r)return gn.Am.warn("Please enter your user number");var i=t.map((function(n){return{id:n.id,quantity:n.quantity}}));n((0,k.Z5)({userId:r,products:i})),e.currentTarget.reset()},children:[(0,T.jsxs)(nn,{children:["User number:",(0,T.jsx)(tn,{type:"number",min:"0"})]}),(0,T.jsxs)(cn,{children:["Add cart ",(0,T.jsx)(un.F55,{})]})]})]}):(0,T.jsx)(dn,{children:"Your cart is currently empty"})]})},hn=function(){var n=(0,v.v9)(y.Vc),t=(0,v.v9)(y.N5),e=(0,v.I0)();return(0,q.useEffect)((function(){e((0,k.l2)())}),[e]),(0,T.jsxs)($.I,{children:[(0,T.jsx)(J.q,{children:(0,T.jsx)("title",{children:"Carts"})}),(0,T.jsx)(mn,{}),n&&(0,T.jsx)(K.a,{}),0!==t.length&&(0,T.jsx)(Y,{})]})}}}]);
//# sourceMappingURL=482.5a16b6d2.chunk.js.map