import React, { useState } from 'react'
import "./Navbar.css"
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';


const Navbar = () => {

  const[menu,setMenu] = useState("shop");
  return (
    <div className="navbar" >
      <div className="nav-logo">
        <img src={logo} alt='' />
        <p>SHOPPER</p>
      </div>

      <ul className='nav-manu'>
        <li onClick={() =>{setMenu("shop")}}><Link style = {{textDecoration: "none"}} to="/">Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu("Men")}}><Link style = {{textDecoration: "none"}} to="/mens">Mens</Link>  {menu==="Men"?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu("women")}}><Link style = {{textDecoration: "none"}} to="/women">Womens</Link>  {menu==="women"?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu("kids")}}><Link style = {{textDecoration: "none"}} to="/kids">Kids</Link>  {menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-logine-cart">
        <Link to= "/login"><button>Logine</button></Link>
         <Link to="/cart"><img src={cart_icon} alt="icon" /></Link>
        <div className="nav-logine-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
