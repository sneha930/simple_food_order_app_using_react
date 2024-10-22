import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex, dummy}) => {
   // console.log(data);

   // [showItems, setShowItems] = useState(false);

   handleClick = () => {
      setShowIndex();
   }

   // handleClick = () => {
   //    console.log("clicked");
   //    setShowItems(!showItems);
   // }

   return (
      <div>
         <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
               <span className="font-bold text-lg">{data.title} ({data?.itemCards?.length})</span>
               <span className="">{"⬇"}</span>
            </div>
            
            {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
            
         </div>
      </div>
   )
}

export default RestaurantCategory;