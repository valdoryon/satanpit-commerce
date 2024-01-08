import { Link } from 'react-router-dom';

const ClothesCategoryCard = (props: {
  imageURL: string;
  category: string;
  linkUrl: string;
}) => {
  return (
    <article className='clothes-category-card__container'>
      <Link to={props.linkUrl}>
        <div className='clothes-category-card__info'>
          <h1>{props.category}</h1>
          <span>Ver Categoria</span>
        </div>
        <img src={props.imageURL} alt={props.category} />
      </Link>
    </article>
  );
};

export default ClothesCategoryCard;
