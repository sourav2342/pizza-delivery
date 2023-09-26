import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
 import { getTotalPrize, getTotalQuantity } from "./cartSlice";

function CartOverview() {
  
  const noOfPizzas = useSelector(
    getTotalQuantity);
  
  const totalPrice = useSelector(
    getTotalPrize);

  if(noOfPizzas === 0) {
     return null;
  }

  return (
    <div className="p-4 bg-stone-800
     uppercase text-stone-200 sm:p-6 flex items-center  justify-between">
      <p className="font-semibold text-stone-300 space-x-4 ">
        <span>{noOfPizzas} pizzas</span>
        <span>{totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
