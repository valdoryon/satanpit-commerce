import { useLocation, useParams } from 'react-router-dom';
import {
  ColorSelector,
  Footer,
  Navbar,
  QuantityCounter,
  SizeSelector,
} from '../../components/components-routes';

import { useFetch } from '../../hook/useFetch';
import { CartItem, useCartStore } from '../../store/store';
import { useState } from 'react';

const ProductInfoPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [quantity, setQuantity] = useState(1);

  const { product } = useParams();
  const selectedSize = searchParams.get('size') || 'm';
  const selectedColor = searchParams.get('color') || 'black';

  const BASE_URL = `http://localhost:3001/v1/product/${product}`;

  const { data } = useFetch(BASE_URL);

  const sizeVariants = ['xs', 's', 'm', 'l', 'xl', 'xxl'];
  const colorVariants = ['black', 'white', 'red', 'blue'];

  const addCart = useCartStore((state) => state.addNewCartItem);

  const handleAddCartClick = () => {
    const cart = {
      clothes_id: data[0].clothes_id.toString() + selectedSize + selectedColor,
      clothes_name: data[0]?.clothes_name,
      clothes_color: selectedColor,
      clothes_size: selectedSize,
      clothes_quantity: quantity,
      clothes_price: data[0]?.clothes_price,
      clothes_image: data[0]?.clothes_image,
    };

    addCart(cart as CartItem);
  };

  return (
    <>
      <Navbar />

      <div className='product-info-page__container'>
        <div className='product-info-page__image'>
          <img
            alt={data[0]?.clothes_name}
            src={
              data[0]?.clothes_image ||
              'http://localhost:3001/images/image_not-found.png'
            }
          />
        </div>
        <div className='product_info-page__info'>
          <div className='product-info-page__product-details'>
            <h1>{data[0]?.clothes_name.toUpperCase()}</h1>
            <span>${data[0]?.clothes_price}</span>
          </div>
          <div className='product-info-page__options'>
            <h3>TALLES</h3>
            <div>
              {sizeVariants.map((size) => (
                <SizeSelector
                  key={size}
                  size={size}
                  selectedColor={selectedColor}
                  selectedSize={selectedSize}
                />
              ))}
            </div>
          </div>
          <div className='product-info-page__options'>
            <h3>COLORES</h3>
            <div>
              {colorVariants.map((color) => (
                <ColorSelector
                  key={color}
                  color={color}
                  selectedSize={selectedSize}
                  selectedColor={selectedColor}
                />
              ))}
            </div>
            <h3>CANTIDAD</h3>
            <div>
              <QuantityCounter quantity={quantity} setQuantity={setQuantity} />
            </div>
          </div>
          <div>
            <button
              onClick={handleAddCartClick}
              className='button main-button animated-button'
            >
              AGREGAR AL CARRITO
            </button>
          </div>
          <div className='spacer' />
          <div className='product-info-page__description'>
            <h3>DESCRIPCIÓN Y DETALLES</h3>
            <span>{data[0]?.clothes_description}</span>
            <div className='spacer' />
            <h3>COMPOSICIÓN</h3>
            <span>{data[0]?.clothes_material}</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductInfoPage;
