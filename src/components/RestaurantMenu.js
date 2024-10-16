import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

   const {resId} = useParams();
   console.log(resId);

   const resInfo = useRestaurantMenu(resId);

   if (resInfo === null) return <Shimmer />

   // const {name, id, price, imageId} = resInfo[1]?.card?.info;

   return (
      <div className="menu" >
         <h2>Menu</h2>
         {/* <h1>{name}</h1> */}
         <ul>
            {resInfo.map((res) => 
            <li key={res?.card?.info?.id}>{res?.card?.info?.name}</li>)}
         </ul>
      </div>
   )
}

export default RestaurantMenu;