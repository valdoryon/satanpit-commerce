import { Link } from 'react-router-dom';

interface ColorSelectorProps {
  color: string | null;
  selectedSize: string | null;
  selectedColor: string | null;
}
const ColorSelector = (props: ColorSelectorProps) => {
  const generateQueryString = () => {
    const queryParams = [];

    if (props.selectedSize) {
      queryParams.push(`size=${props.selectedSize}`);
    }

    if (props.color) {
      queryParams.push(`color=${props.color}`);
    }

    return queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
  };
  return (
    <Link
      className={
        'color-selector__button' +
        (props.color === props.selectedColor ? ' selected' : '')
      }
      to={generateQueryString()}
    >
      <span>{props.color}</span>
    </Link>
  );
};

export default ColorSelector;
