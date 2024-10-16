import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
   const [listOfRestaurants, setListOfRestaurants] = useState([]);
   const [filteredRestaurant, setFilteredRestaurant] = useState([]);

   const [searchText, setSearchText] = useState("");

   // with every searchtext key press(state changes) body getting rendered each time
   // console.log("body rendered");

   useEffect(() => {
      // console.log("useEffect called");
      fetchData();
   }, []);

   const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      
      const  json = await data.json();

      // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ;

      setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }

   const onlineStatus = useOnlineStatus();
   if(onlineStatus === false) return <h1>Looks like you are Offline, Please check your internet connection</h1>

   //conditional rendering
   return listOfRestaurants.length === 0 ? <Shimmer /> : (
      <div className="body">
         <div className="filter">

            <div className="search">
               <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
               <button onClick={() => {
                  //</div>filter the restaurants and update ui
                  //search text
                  console.log(searchText);
                  const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                  setFilteredRestaurant(filteredRestaurant);

               }}>Search</button>
            </div>

            <button className="filter-btn" onClick = {() => {
               const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4)
               setListOfRestaurants(filteredList);
            }}
            >Top Rated Restaurants</button>
         </div>

         <div className="res-container">
            {filteredRestaurant.map((restaurant) => (
            <Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resdata={restaurant?.info} 
            /></Link>))}

         {/* {console.log = (restaurant.data.data)} */}
            
         </div>
      </div>
   )
}

export default Body;