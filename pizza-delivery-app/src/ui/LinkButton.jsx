import { Link } from "react-router-dom";

function LinkButton({Children, to}) {
  return (
    <Link to={to} 
     className='text-sm text-blue-500
      hover:text-blue-600 '>
        {Children}
    </Link>
  );
}

export default LinkButton;
