import { useCartStore } from '../../store/store';
interface QuantityCounterProps {
  cartproduct_id?: string;
  setQuantity?: React.Dispatch<React.SetStateAction<number>>;
  quantity: number;
}
const QuantityCounter = (props: QuantityCounterProps) => {
  const setQuantity = useCartStore((state) => state.changeQuantity);

  const handlePlusClick = () => {
    if (props.quantity < 10) {
      props.setQuantity
        ? props.setQuantity((prev) => prev + 1)
        : setQuantity(props.cartproduct_id!, props.quantity + 1);
    } else {
      return;
    }
  };

  const handleMinusClick = () => {
    if (props.quantity > 1) {
      props.setQuantity
        ? props.setQuantity((prev) => prev - 1)
        : setQuantity(props.cartproduct_id!, props.quantity - 1);
    } else {
      return;
    }
  };

  return (
    <div className='quantity-counter'>
      <button onClick={handleMinusClick} className='quantity-counter__button'>
        <span>-</span>
      </button>
      <span className='quantity-counter__value'>{props.quantity}</span>
      <button onClick={handlePlusClick} className='quantity-counter__button'>
        <span>+</span>
      </button>
    </div>
  );
};

export default QuantityCounter;
