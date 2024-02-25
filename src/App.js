import React from "react";
import "./User/css/App.css"
import { Routes, Route } from "react-router-dom";
import Navbar from "./User/components/Navbar.jsx";
import Home from "./User/pages/Home.jsx";
import Login from "./User/pages/Login.jsx";
import Signup from "./User/pages/Signup.jsx";
import Cart from "./User/pages/Cart.jsx";
import Wishlist from "./User/pages/Wishlist.jsx";
import ProductDetails from "./User/components/ProductDetails.jsx";
import UserList from "./Admin/pages/UserList.jsx";
import MyProducts from "./Seller/pages/MyProducts.jsx";
import AddProduct from "./Seller/components/AddProduct.jsx";
import UserInformation from "./User/components/UserInformation.jsx";
import UpdateProduct from "./Seller/components/UpdateProduct.jsx";
import Mens from "./User/pages/Mens.jsx";
import Womens from "./User/pages/Womens.jsx";
import Accessories from "./User/pages/Accessories.jsx";
import Footer from "./User/components/Footer.jsx";
import Loading from "./User/components/Loading.jsx";


function App() {

    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {

      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 4000)

    }, [])

  return (
    <div className="App">

    {
      loading ?  ( <Loading />  )

      : 

      (
      <div>
          {sessionStorage.getItem("role") && <Navbar />}
          <Navbar />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="home" element={<Home></Home>}></Route>
            <Route path="mens" element={<Mens></Mens>}></Route>
            <Route path="womens" element={<Womens></Womens>}></Route>
            <Route path="accessories" element={<Accessories></Accessories>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="signup" element={<Signup></Signup>}></Route>
            <Route path="cart" element={<Cart></Cart>}></Route>
            <Route path="wishlist" element={<Wishlist></Wishlist>}></Route>
            <Route path="productdetails/:productId" element={<ProductDetails></ProductDetails>}></Route>
            <Route path="myproducts" element={<MyProducts></MyProducts>}></Route>
            <Route path="userlist" element={<UserList></UserList>}></Route>
            <Route path="addproduct" element={<AddProduct></AddProduct>}></Route>
            <Route path="updateproduct" element={<UpdateProduct></UpdateProduct>}></Route>
            <Route path="userinformation" element={<UserInformation></UserInformation>}></Route>
          </Routes>
          <Footer />
      </div>
      )
    }

    </div>
  );
}

export default App;