import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
   const [listOfRestaurants, setListOfRestaurants] = useState(resList);

   useEffect(() => {
      // console.log("useEffect called");
      fetchData();
   }, []);

   const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      
      const  json = await data.json();
      console.log(json);
   }

   console.log("body rendered");
   
   return (
      <div className="body">
         <div className="filter">
            <button className="filter-btn" onClick = {() => {
               const filteredList = listOfRestaurants.filter((res) => res.data.avgRating > 4)
               setListOfRestaurants(filteredList);
            }}
            >Top Rated Restaurants</button>
         </div>
         <div className="res-container">
            {listOfRestaurants.map((restaurant) => 
            <RestaurantCard key={restaurant.data.id} resdata={restaurant.data} 
            />)}

         {/* {console.log = (restaurant.data.data)} */}
            
         </div>
      </div>
   )
}

export default Body;