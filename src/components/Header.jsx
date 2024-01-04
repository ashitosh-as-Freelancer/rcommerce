import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar className="bg-black px-4  mb-5">
          <NavLink to="/" className='text-white text-decoration-none py-2' style={{fontSize:"20px"}}>pizzaStore</NavLink>
      </Navbar>
    </>
  );
}

export default Header;