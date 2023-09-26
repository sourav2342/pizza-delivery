import { formatCurrency } from "../../utilities/helpers";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import DeleteItem from "../../ui/DeleteItem";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(id));

  const isInCart = currentQuantity > 0;

  function handleAddToCart(){
    const newItem = 
      {
          pizzaId: id,
          name,
          quantity: 1,
          unitPrice,
          totalPrice: unitPrice,
      }

      dispatch(addItem(newItem));
  
  }

  return (
    <li className="flex gap-3 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opacity-50 grayscale': ''}`}  />
      <div className="flex flex-col grow">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic capitalize text-stone-500">{ingredients.join(', ')}</p>
        <div className=" flex mt-auto items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-am uppercase font-medium text-stone-500">Sold out</p>}
          
          {
            isInCart && (
               <div className="flex items-center gap-3 sm:gap-8">
                <UpdateItemQuantity 
                  pizzaId={id}
                  currentQuantity={currentQuantity}
                />
                <DeleteItem pizzaId={id}/>
               </div>
                
            )
          }
          
          {!soldOut && !isInCart && (<Button type="primary" 
            onClick={handleAddToCart}
          >Add to Cart</Button>)
        }
       </div>
      </div>
    </li>
  );
}
{/* //children, disabled, to, type, onClick */}

export default MenuItem;
