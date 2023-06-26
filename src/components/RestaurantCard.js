import React from 'react';
import hotel1 from '../../images/hotel1.jpg';

function RestaurantCard(props) {
    const {resData} = props;
    const {name, cuisines, deliveryTime, rating} = resData?.data
    return(
        <div className="res-card">
            <img src={hotel1} className="hotel"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{deliveryTime}</h4>   
            <h4>{rating}</h4> 
        </div>
    )
}

export default RestaurantCard