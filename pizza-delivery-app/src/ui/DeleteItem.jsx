import { useDispatch } from "react-redux";
import { deleteItem } from "../features/cart/cartSlice";
import Button from "./Button";

function DeleteItem({pizzaId}) {
    const dispatch = useDispatch();

    function handleDelete() {
        dispatch(deleteItem(pizzaId));
     }
  return (
    <div className="">
      <Button type="small" onClick={handleDelete}>Delete</Button>
    </div>
  );
}

export default DeleteItem;
