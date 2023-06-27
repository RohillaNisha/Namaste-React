import React from 'react';
import { CDN_URL } from '../utils/contants';

function RestaurantCard(props) {
    const {resData} = props;
    const {name, cuisines, deliveryTime, avgRating, cloudinaryImageId} = resData?.info
    return(
        <div className="res-card">
            <img src={CDN_URL + cloudinaryImageId} className="hotel"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{deliveryTime}</h4>   
            <h4>{avgRating}</h4> 
        </div>
    )
}

export default RestaurantCard