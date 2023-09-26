import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({pizzaId, currentQuantity}) {
  
  const dispatch = useDispatch(pizzaId);

//   const quantity = useSelector(state => state.cart.cart);

//   console.log(quantity);

  function handleInc(){
    dispatch(increaseItemQuantity(pizzaId))
  }

  function handleDec(){
    dispatch(decreaseItemQuantity(pizzaId))
  }

  return (
    <div className="flex gap-1  items-center md:gap-3">
        <Button type="round" onClick={()=> handleDec(pizzaId)} >-</Button>
        <span className="text-sm">{currentQuantity}</span>
        <Button type="round" onClick={()=> handleInc(pizzaId)}>+</Button>
    </div>
  );
}

export default UpdateItemQuantity;
