import React from "react";
import "../css/Home.css";
import ProductCard from "../components/ProductCard.jsx";
// import axios from "axios";
import API from "../../API/api.service.js";

const Home = () => {
  const [products, setProduct] = React.useState([]);
  const [noOfProductShow, setNoOfElements] = React.useState(10);
  const [toggleState, setToggleState] = React.useState(1);

  // Function to filter products based on toggle state
  const filteredProducts = products.filter((product) => {
    if (toggleState === 1) return true; // All products
    if (toggleState === 3) return product.gender === 'Male';
    if (toggleState === 4) return product.gender === 'feMale';
    if (toggleState === 5) return product.category === 'Accessories'; // Assuming 'category' field exists
    return true;
  });

  const slicedProduct = filteredProducts.slice(0, noOfProductShow);

  const loadmore = () => {
    setNoOfElements(noOfProductShow + 10);
  };

  const toggleTab = (index) => {
    setToggleState(index);
    setNoOfElements(10); // Reset pagination when toggling categories
  };

  // const toggleTab = (index) => {
  //   setToggleState(index);
  // };


  React.useEffect(() => {
    //axios
    //  .get("http://localhost:3001/products", {
    //    headers:{
    //      token: sessionStorage.getItem('jwt')
    //    }
    //  })
    API.get("products")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <div className="home__container">
      <div className="padding">
        <div className="home__content">
          <div className="home__elements">
            <p className="p1">SUMMER COLLECTION</p>
            <p className="h1">Fall - Winter Collections 2024</p>
            <p className="p2">
              Elevate your style quotient with our curated collection of
              timeless fashion essentials. Unleash the extraordinary in every
              outfit, where trends meet sophistication.
            </p>
            <button className="shopnow-btn" >
              SHOP NOW <i className="arrow fa-solid fa-arrow-right-long"></i>{" "}
            </button>
          </div>
        </div>
      </div>

      {/* Product Overview */}

      <div className="product__overview">
        <p className="heading">Product Overview</p>
        <div className="overview__tabs">
          <li
            className={toggleState === 1 ? "tab active-tab" : "tab"}
            onClick={() => toggleTab(1)}
          >
            All
          </li>
          <li
            className={toggleState === 3 ? "tab active-tab" : "tab"}
            onClick={() => toggleTab(3)}
          >
            Men's
          </li>
          <li
            className={toggleState === 4 ? "tab active-tab" : "tab"}
            onClick={() => toggleTab(4)}
          >
            Women's
          </li>

          {/* <li
            className={toggleState === 5 ? "tab active-tab" : "tab"}
            onClick={() => toggleTab(5)}
          >
            Accessories
          </li> */}
        </div>

        <div className="products__collection">
          {slicedProduct.map((e,index) => (
            <ProductCard datas={e} key={e._id} i={index}></ProductCard>
          ))}
        </div>

        <div className="viewall__div">
          <button onClick={() => loadmore()}>VIEW MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Home;