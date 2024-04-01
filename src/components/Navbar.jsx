import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:"space-between"}}>

    <span className='logo'>Redux Store</span>
    <div>
    <Link className="navlink" to='/'>Home</Link>
    <Link className="navlink" to='/'>Cart</Link>

    <span className='cartCount'>Cart item:0</span>
    </div>
    </div>
  )
}

export default Navbar