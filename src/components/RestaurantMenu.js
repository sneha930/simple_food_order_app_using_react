import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
   const [resInfo, setResInfo] = useState(null);

   const {resId} = useParams();
   console.log(resId);

   useEffect(() => {
      fetchMenu();
   }, []);

   const fetchMenu = async() => {
      const data = await fetch(MENU_API+resId+"&catalog_qa=undefined&submitAction=ENTER");
      const json = await data.json();
      console.log(json?.data?.cards[0]?.card?.card?.text);
      console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards);

      setResInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards);
      
   };

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