import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Products from "./components/Products";
import Allproducts from "./pages/Allproducts";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products/:category",
      element: <ProductList />,
    },
    {
      path: "/product/:id",
      element: <Product />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/success",
      element: <Success />,
    },
    {
      path: "/Allproducts",
      element: <Allproducts />,
    },
    {
      path: "/login",
      // element: user ? <Navigate to="/" replace={true} /> : <Login />,
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  
  return (

    <div className='App'> 
       <RouterProvider router={router} />
     </div>
  );
};

export default App;
