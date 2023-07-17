import React from 'react';
import RestaurantCard from './RestaurantCard';
import { useState , useEffect } from 'react';
import Shimmer from './Shimmer';



function Body() {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data =  await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.7093202&lng=77.21384429999999");

        const json = await data.json();

        console.log(json.data.success.cards[5].gridWidget.gridElements.infoWithStyle.restaurants);

        //  console.log(json.data.success.cards[5].gridWidget.gridElements.infoWithStyle.restaurants[0].info.id);


        setListOfRestaurants(json?.data?.success?.cards[5]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.success?.cards[5]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    };

        return listOfRestaurants.length === 0 ? (<Shimmer/>) : (
            <div className="body">
                <div className="filter">
                    <div className="search">
                        <input type="text" className="search-box" value={searchText} onChange={(e) => {
                            setSearchText(e.target.value);
                        }}/>
                        <button className="search-btn" onClick={() => {
                            const searchedRestaurant = listOfRestaurants.filter( (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurant(searchedRestaurant);
                        }}>Search</button>
                    </div>
                    <button className='filter-btn' onClick={()=>{
                       const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                       setFilteredRestaurant(filteredList);
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="res-container" >
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
    
                </div>
            </div>
        )
}

export default Body