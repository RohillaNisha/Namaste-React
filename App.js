import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./images/logo.jpg";
import hotel1 from "./images/hotel1.jpg";

/* 
 * Header
   - Logo
   - Nav items
   - Cart

 * Body
   - Search component
   - RestaurantContainer 
        - RestaurantCard
            - Image
            - Name of Res, star rating, cuisine, delivery time

 * Footer
    - Copyright
    - Links
    - Address
    - Contact

*/

const Header = () =>{
    return(
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
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return(
        <div className="res-card">
            <img src={hotel1} className="hotel"/>
            <h3>Meghana Foods</h3>
            <h4> Indian Food,Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>    
        </div>
    )
}
const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container" >
            <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
         <Header/>
         <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);