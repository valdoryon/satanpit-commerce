interface CartProductCardProps {
  cartproduct_id: string;
  cartproduct_name: string;
  cartproduct_price: number;
  cartproduct_image: string;
  cartproduct_color: string;
  cartproduct_size: string;
  cartproduct_quantity: number;

  removeProduct: () => void;
}

import { CiSquareRemove } from 'react-icons/ci';
import { QuantityCounter } from '../components-routes';

const CartProductCard = (props: CartProductCardProps) => {
  return (
    <div className='cart-product-card_container'>
      <div className='cart-product-card_product'>
        <img
          alt='clothes'
          src={
            props.cartproduct_image
              ? props.cartproduct_image
              : 'http://localhost:3001/images/image_not-found.png'
          }
        />
        <div className='cart-product-card_info'>
          <h3>{props.cartproduct_name.toUpperCase()}</h3>
          <span>${props.cartproduct_price}</span>
          <span>Color: {props.cartproduct_color}</span>
          <span>Size: {props.cartproduct_size}</span>
        </div>
      </div>

      <div className='cart-product-card_quantity'>
        <QuantityCounter
          quantity={props.cartproduct_quantity}
          cartproduct_id={props.cartproduct_id}
        />
      </div>
      <div className='cart-product-card_total'>
        <span>${props.cartproduct_price * props.cartproduct_quantity}</span>
      </div>
      <div className='cart-product-card_remove'>
        <CiSquareRemove
          onClick={props.removeProduct}
          size={40}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default CartProductCard;
