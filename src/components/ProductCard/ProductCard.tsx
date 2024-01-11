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
          src={props.imageURL || import.meta.env.VITE_API_IMG_NOT_FOUND}
          rel='preload'
          alt={props.title}
        />
      </Link>
      <div className='spacer' />
      <div className='product-card__info'>
        <h5>{props.title}</h5>
        <span>${props.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
