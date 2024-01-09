import { Link } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  price: number;
  imageURL?: string | null;
}

const ProductCard = (props: ProductCardProps) => {
  return (
    <div className='product-card__container'>
      <Link to={`/producto/${props.title}`}>
        <img
          src={
            props.imageURL || 'http://localhost:3001/images/image_not-found.png'
          }
          rel='preload'
          alt={props.title}
        />
      </Link>
      <div className='product-card__info'>
        <h5>{props.title}</h5>
        <span>${props.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
