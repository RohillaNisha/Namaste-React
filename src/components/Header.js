import React , {useState , useEffect} from 'react';
import logo from "../../images/logo.jpg";


function Header() {
    const [btnName, setBtnName] = useState("Login")

  return (
    <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=> { btnName === "Login" ?
                        setBtnName("Logout"): setBtnName("Login");
                    }}> {btnName}</button>
                </ul>
            </div>
        </div>
  )
}

export default Header
