import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Chart from "./components/chart/Chart";
import FeaturedInfo from "./components/featuredInfo/FeaturedInfo";
// import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
// import WidgetLg from "./components/widgetLg/WidgetLg";
import WidgetSm from "./components/widgetSm/WidgetSm";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NewProduct from "./pages/newProduct/NewProduct";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import User from "./pages/user/User";
import UserList from "./pages/userList/UserList";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
// import UserList from "./pages/userList/UserList";
// import User from "./pages/user/User";
// import NewUser from "./pages/newUser/NewUser";
// import ProductList from "./pages/productList/ProductList";
// import Product from "./pages/product/Product";
// import NewProduct from "./pages/newProduct/NewProduct";
// import Login from "./pages/login/Login";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  const router = createBrowserRouter([
    {
      path: "/login",
      element:  <Login />,
    },


    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/users",
      element: <UserList />,
    },
    {
      path: "/user/:userId",
      element: <User />,
    },
    {
      path: "/newUser",
      element: <NewUser />,
    },
    {
      path: "/products",
      element: <ProductList />,
    },
    {
      path: "/product/:productId",
      element: <Product />,
    },
    {

      path: "/newproduct",
      element: <NewProduct />,
    },
  ]);
  return (
    <div>

      {/* components folder Checking start */}
      
      {/* chart  working  */}
      {/* <Chart />  */}
      
      {/* featured info is working */}
      {/* <FeaturedInfo />    */}

      {/* side bar Link working */}
      {/* <Sidebar /> */}
      
      {/* top bar is working */}
      {/* <Topbar /> */}
      
      {/* widgetLg is working kr rha h bss timoagojs library ka thora issue h timeago ko abe commit keya howa h  resolved kr leya*/}
      {/* <WidgetLg /> */}

      {/* widgetsm is working kr rha h */}
        {/* <WidgetSm /> */}
      
      {/* components folder Checking end */}
{/* ------------------------------------------------------------------------------------------------------------------------ */}

      {/* pages folder start */}

        {/* home work kr rha h home m ek chart naam ka component isse kr rha h  resolve kr deya*/}
        {/* <Home /> */}

        {/* login working kr rha h */}
        {/* <Login /> */}

          {/* newproduct ke ui render ho rhe h  */}
        {/* <NewProduct /> */}
           
           {/* new user work kr rha h */}
        {/* <NewUser /> */}
     
          {/* product m be issue h library ka Uselocation   */}
          {/* <Product /> */}

            {/* product list render ho rhi h  */}
          {/* <ProductList /> */}
          
          {/* react router dom se Link ka error h jo commit kr ne k bad chal rha h resolved * /}
          {/* <User /> */}
     
          {/* user list working */}
          {/* <UserList /> */}


      

          <RouterProvider router={router} />
          <Topbar />
          <div className="container">
          <Sidebar />
          </div>
    </div>
    // <Router>
    //   <Switch>
    //     <Route path="/login">
    //       <Login />
    //     </Route>
    //     {admin && (
    //       <>
    //         <Topbar />
    //         <div className="container">
    //           <Sidebar />
    //           <Route exact path="/">
    //             <Home />
    //           </Route>
    //           <Route path="/users">
    //             <UserList />
    //           </Route>
    //           <Route path="/user/:userId">
    //             <User />
    //           </Route>
    //           <Route path="/newUser">
    //             <NewUser />
    //           </Route>
    //           <Route path="/products">
    //             <ProductList />
    //           </Route>
    //           <Route path="/product/:productId">
    //             <Product />
    //           </Route>
    //           <Route path="/newproduct">
    //             <NewProduct />
    //           </Route>
    //         </div>
    //       </>
    //     )}
    //   </Switch>
    // </Router>
  );
}

export default App;
