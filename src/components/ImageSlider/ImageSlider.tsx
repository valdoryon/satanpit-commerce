import { Link } from 'react-router-dom';

const ImageSlider = (props: {
  imageURL: string;
  rel: string;
  alt: string;
  loading: 'eager' | 'lazy' | undefined;
  toURL: string;
}) => {
  return (
    <Link to={props.toURL}>
      <div className='image-slider'>
        <img
          rel={props.rel}
          alt={props.alt}
          loading={props.loading}
          src={props.imageURL}
        />
      </div>
    </Link>
  );
};

export default ImageSlider;
