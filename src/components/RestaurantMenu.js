import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

   const {resId} = useParams();
   console.log(resId);

   // I want to access this data inside ItemList
   const dummy = "dummy data";

   const resInfo = useRestaurantMenu(resId);

   const [showIndex, setShowIndex] = useState();

   if (resInfo === null) return <Shimmer />

   // const {name, id, price, imageId} = resInfo[1]?.card?.info;

   // console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.["@type"]);

   const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
   console.log(categories);

   return (
      <div className="text-center" >
         {/* <h1 className="font-bold my-6 text-2xl">{resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[14].card?.card?.name}</h1> */}
         {/* Categories accordian */}
         {categories.map((category, index) => (
            <RestaurantCategory key={category?.card?.card?.title} showItems={index==showIndex ? true : false}  data={category?.card?.card} 
            setShowIndex={() => setShowIndex(index)}
            dummy={dummy}
            />
         ))}
      </div> 
   )
}

export default RestaurantMenu;