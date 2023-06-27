import React from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useState , useEffect } from 'react';



function Body() {

    const [listOfRestaurants, setListOfRestaurants] = useState(resList)

    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data =  await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.7093202&lng=77.21384429999999");

        const json = await data.json();

        console.log(json.data.success.cards[5].gridWidget.gridElements.infoWithStyle.restaurants);
        
        //  console.log(json.data.success.cards[5].gridWidget.gridElements.infoWithStyle.restaurants[0].info.id);


        setListOfRestaurants(json.data.success.cards[5].gridWidget.gridElements.infoWithStyle.restaurants);
    }
        return(
            <div className="body">
                <div className="filter">
                    <button className='filter-btn' onClick={()=>{
                       const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                       setListOfRestaurants(filteredList);
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="res-container" >
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
    
                </div>
            </div>
        )
}

export default Body