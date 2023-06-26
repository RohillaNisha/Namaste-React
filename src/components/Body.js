import React from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useState } from 'react';



function Body() {

    const [listOfRestaurants, setListOfRestaurants] = useState(resList)
        return(
            <div className="body">
                <div className="filter">
                    <button className='filter-btn' onClick={()=>{
                       const filteredList = listOfRestaurants.filter((res) => res.data.rating > 4);
                       setListOfRestaurants(filteredList);
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="res-container" >
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.resid} resData={restaurant} />
                ))}
    
                </div>
            </div>
        )
}

export default Body