import Button from '../../ui/Button';
import CartItem from '../../features/cart/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  
  const dispatch = useDispatch();

  const name  = useSelector(state => state.user.username);
  
  const cart = useSelector(getCart);

  if(!cart.length ) return <EmptyCart />
  return (
    <div className='px-4 py-3'>
      
      {/* <LinkButton to="/menu">&larr; Back to menu</LinkButton> */}

      <Link to='/menu' className='text-sm text-blue-500 hover:text-blue-600 '>
        &larr; Back to menu</Link>

      <h2 className='mt-7 text-xl font-semibold'>Your 
      cart, {name}</h2>

      <ul className='divide-y mt-3 divide-stone-200 border-b'>
        {cart.map((item)=> (
          <CartItem item={item} key={item.key}  />
        ))}
      </ul>

      <div className='mt-6 space-x-2 space-y-4 sm:space-y-0'>
        {/* <Link to="/order/new">Order pizzas</Link> */}
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={()=> dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
