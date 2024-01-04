import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar className="bg-black px-4  mb-5">
          <Navbar.Brand href="#0" className='text-white'>pizzaStore</Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Header;