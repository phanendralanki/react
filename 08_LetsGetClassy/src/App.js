import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

// Chunking
// Code Splitting
// Dynamic Bundling
// lazy loading
// onDemand loading

//we will get different bundle for grocery in parcel dist
const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* if path is / */}
      <Outlet />
      {/* if path is /about */}
      {/* <About /> */}
      {/* if path is /contact */}
      {/* <Contactus /> */}

    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path:"/",
        element:<Body />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contactus />,
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading.......</h1>}><Grocery /></Suspense>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
