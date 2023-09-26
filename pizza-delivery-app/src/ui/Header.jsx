import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header  className="bg-yellow-500 border-b border-stone-500
    uppercase px-4 py-4 sm:px-6 sm:py-6 flex items-center justify-between">
        <Link to='/' className="tracking-widest">Fast React Pizza co</Link>
        <SearchOrder/>
        <Username/>
    </header>
  );
}

export default Header;
