import { Link } from 'react-router-dom';

interface SizeSelectorProps {
  size: string | null;
  selectedSize: string | null;
  selectedColor: string | null;
}

const SizeSelector = (props: SizeSelectorProps) => {
  const generateQueryString = () => {
    const queryParams = [];

    if (props.size) {
      queryParams.push(`size=${props.size}`);
    }

    if (props.selectedColor) {
      queryParams.push(`color=${props.selectedColor}`);
    }

    return queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
  };

  return (
    <Link
      className={
        'size-selector__button' +
        (props.size === props.selectedSize ? ' selected' : '')
      }
      to={generateQueryString()}
    >
      <span>{props.size}</span>
    </Link>
  );
};

export default SizeSelector;
