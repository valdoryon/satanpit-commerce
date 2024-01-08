import {
  Navbar,
  Footer,
  CartProductCard,
} from '../../components/components-routes';

import AmericanExpressLogo from '/icons/amex-logo.svg';
import VisaLogo from '/icons/visa-logo.svg';
import BitcoinLogo from '/icons/bitcoin-logo.svg';
import MasterCardLogo from '/icons/mastercard-logo.svg';
import PaypalLogo from '/icons/paypal-logo.svg';
import { useCartStore } from '../../store/store';

import { Fragment } from 'react';

const CartPage = () => {
  const myCart = useCartStore((state) => state.cart);
  const removeCartItem = useCartStore((state) => state.removeCartProduct);

  const getTotal = () => {
    let total = 0;
    for (const clothes of myCart) {
      total += clothes.clothes_price * clothes.clothes_quantity;
    }

    return total;
  };

  const handleRemoveProduct = (id: string) => {
    removeCartItem(id);
  };

  if (myCart.length === 0) {
    return (
      <>
        <Navbar />
        <div className='cart-page_container'>
          <h1>YOUR CART IS EMPTY</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className='cart-page_container'>
        <div className='cart-page_products-container'>
          <h2>SHOPPING CART</h2>
          <div className='spacer' />
          {myCart.map((product) => (
            <Fragment
              key={
                product.clothes_name +
                product.clothes_size +
                product.clothes_color
              }
            >
              <CartProductCard
                cartproduct_id={product.clothes_id}
                cartproduct_name={product.clothes_name}
                cartproduct_price={product.clothes_price}
                cartproduct_image={product.clothes_image}
                cartproduct_color={product.clothes_color.toUpperCase()}
                cartproduct_size={product.clothes_size.toUpperCase()}
                cartproduct_quantity={product.clothes_quantity}
                removeProduct={() => {
                  handleRemoveProduct(product.clothes_id);
                }}
              />
              <div className='spacer' />
            </Fragment>
          ))}
        </div>

        <div className='cart-page_checkout'>
          <div className='cart-page_total'>
            <h2>ORDER SUMMARY</h2>
            <div className='spacer' />
          </div>
          <div className='cart-page_cost-details'>
            <div className='cart-page_detail'>
              <span>Subtotal</span>
              <span>${getTotal()}</span>
              <span>Taxes</span>
              <span>$0</span>
              <span>Shipment</span>
              <span>FREE!</span>
            </div>

            <div className='cart-page_estimated-total'>
              <span>Estimated Total</span>
              <span>${getTotal()}</span>
            </div>
          </div>
          <div className='spacer' />
          <div className='cart-page_buttons'>
            <span>Duties and regional taxes NOT included</span>
            <button className='button main-button'>Checkout</button>
          </div>
          <div className='cart-page_payment-methods'>
            <span>Accepted payment methods</span>
            <div>
              <img src={VisaLogo} alt='visa logo' />
              <img src={MasterCardLogo} alt='mastercard logo' />
              <img src={PaypalLogo} alt='paypal logo' />
              <img src={BitcoinLogo} alt='bitcoin logo' />
              <img src={AmericanExpressLogo} alt='american express logo' />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
