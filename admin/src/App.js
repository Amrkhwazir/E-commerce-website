import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const admin = true; 
  // const admin = useSelector((state) => state.user.currentUser.isAdmin);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {admin && (
          <>
         <Route path="/"element={<> <Topbar /><div className="container"><Sidebar /> <Home />
        </div></>}/>
         <Route path="/users"element={<> <Topbar /><div className="container"><Sidebar /> <UserList />
        </div></>}/>
         <Route path="/user/:userId"element={<> <Topbar /><div className="container"><Sidebar /> <User />
        </div></>}/>
         <Route path="/newUser"element={<> <Topbar /><div className="container"><Sidebar /> <NewUser />
        </div></>}/>
            
         <Route path="/products"element={<> <Topbar /><div className="container"><Sidebar /> <ProductList />
        </div></>}/>
         <Route path="/product"element={<> <Topbar /><div className="container"><Sidebar /> <Product />
        </div></>}/>
            
         <Route path="/newproduct"element={<> <Topbar /><div className="container"><Sidebar /> <NewProduct />
        </div></>}/>
            
            
            {/* <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct />} />    */}
          </>
        )}
      </Routes>
    </Router>
  );
}
export default App;

    