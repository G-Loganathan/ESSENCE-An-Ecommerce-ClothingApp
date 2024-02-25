import React from "react";
import "../css/MyProducts.css";
import { Link } from "react-router-dom";
import axios from "axios";
import API from "../../API/api.service";

const MyProducts = () => {
  const [productList, setProductList] = React.useState([0]);

  React.useEffect(() => {
    // axios
    //   .get("http://localhost:3001/products", {
    //     headers: {
    //       token: sessionStorage.getItem("jwt"),
    //     },
    //   })
    API.get('products')
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  const onDelete = (id, index) => {
    axios.delete("http://localhost:3001/products/" + id).then((data) => {
      console.log(data.data);
      if (data.data.msg === "deleted successfully!") {
        const newPList = [...productList];
        newPList.splice(index, 1);
        setProductList(newPList);
      }
    });
  };

  return (
    <div className="myproducts__container">
      <div className="myproducts__heading">
        <p>Seller Dashboard - My Products</p>
        <Link to="/addproduct">
          <i className="fa-solid fa-plus"></i>Add Product
        </Link>
      </div>

      <div className="myproducts__mainheadings">
        <p>S.No</p>
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Actions</p>
      </div>
      <hr />

      {productList.map((e, i) => (
        <div className="myproducts__items" key={i}>
          <p className="productId">{i + 1}</p>
          <p className="productTitle">{e.name}</p>
          <p className="productPrice">₹{e.price}</p>
          <p className="productQuantity">{e.quantity}</p>
          <div className="buttons-div">
            <Link to="/updateproduct">
              <button className="update">
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
            </Link>
            <button className="delete" onClick={() => onDelete(e._id, i)}>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProducts;

// GONFLEUR BLACK PUFFER JACKET
