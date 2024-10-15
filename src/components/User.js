import {useEffect, useState } from "react";

const User = (props) => {

   const [count] = useState(0);
   const [count2] = useState(0);

   useEffect(() => {
      const timer = setInterval(() => {console.log("Hello")}, 1000)

      console.log("useEffect");

      // this function is called when you are unmounting it
      return () => {
         console.log("useEffect return");
         clearInterval(timer);
      }
   }, [])

   console.log("render");

   return (
      <div className="user-card">
         <h1>Count: {count}</h1>
         <h1>Count2: {count2}</h1>
         <h2>Name: {props.name}</h2>
         <h3>Location: Pune</h3>
         <h4>Contact: 4756746574</h4>
      </div>
   )
}

export default User;