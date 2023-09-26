import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {

  const menu = useLoaderData();// custom hook to access fetched data by loader 
  console.log(menu);
  return <ul className="divide-y divide-stone-200 px-2 ">
    {menu.map(pizza=>{
      return <MenuItem pizza={pizza} key={pizza.id}/>
    })}
  </ul>;
}

export async function loader(){// loader is a  function to fetch data perform asyn oprn.
    const menu = await getMenu();
    return menu;
}

export default Menu;
