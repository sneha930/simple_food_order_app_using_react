import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";


// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy loading
// On demand loading

//Grocery is a seprate bundle
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

   const[userName, setUserName] = useState();

   //authentication
   useEffect(() => {
      // Make an api call and send username and password
      // and we got info data
      const data = {
         name: "Sneha"
      };
      setUserName(data.name);
   }, [])

   return (
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
         <div className="app">
         <UserContext.Provider value={{loggedInUser: "Gouri"}}>
            <Header />
         </UserContext.Provider>
            <Outlet />
         </div>
      </UserContext.Provider>
   )
}

const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout />,
      children: [
         {
            path: "/",
            element: <Body />,
         },
         {
            path: "/about",
            element: <About />,
         },
         {
            path: "/contact",
            element: <Contact />,
         },
         {
            path: "/grocery",
            element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
         },
         {
            path: "/restaurants/:resId",
            element: <RestaurantMenu />
         }
      ],
      errorElement: <Error />,
   },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


