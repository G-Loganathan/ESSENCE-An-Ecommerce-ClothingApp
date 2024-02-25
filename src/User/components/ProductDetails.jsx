import React from "react";
import "../css/ProductDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../API/api.service.js";
import { useDispatch } from "react-redux";
import { addToCartR } from "../../store/cart.slice.js";


const ProductDetails = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [productDetail, setProductDetail] = React.useState(null);
  const [selectedSize, setselectedSize] = React.useState(null);

  const { productId } = useParams();

  React.useEffect(() => {
    // axios
    //   .get("http://localhost:3001/products/" + productId)
    API.getById('products', productId)
      .then((res) => {
        setProductDetail(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  },[productId]);

  const addToCart = (product) => {
    console.log(product);
    dispatch(addToCartR(productDetail))
    navigate('/cart')
  }

  return (
    <>
      {productDetail ? (
        <div className="productDetails__container">
          <div className="productsDetails__content">
            <div className="productDetails__leftcontent">
              <div className="main__imgdiv">
              {productDetail && (
                  <img className="main-img" src={productDetail.image} alt={productDetail.name} />
              )}
                {/* <img className="main-img" src={productDetail.image} alt="" /> */}
              </div>
            </div>

            <div className="productDetails__rightcontent">
              <p className="product-title">{productDetail.name}</p>
              <p className="product-price">Rs. {productDetail.price}</p>
              <p className="product-taxinfo">(incl. of all taxes)</p>
              <hr className="line" />
              <p className="product-description-title">DESCRIPTION: </p>
              <p className="product-description">{productDetail.description}</p>

              {/* <div className="product__sizediv">
                {productDetail.size.map((size) => (
                  <div>
                      <p className="product-size-title">SIZE:</p>
                      <input type="radio" name="size" />
                      <label className="sizelabel">
                        {size}
                      </label>
                  </div>
                  ))}
              </div> */}

              <p className="product-size-title">SIZE:</p>

              <div className="product__sizediv">
                {productDetail.size.map((size, index) => (
                  <div key={index}>
                    <label
                      className={
                        selectedSize === size
                          ? "sizelabel checked"
                          : "sizelabel"
                      }
                    >
                      <input
                        type="radio"
                        name="size"
                        value={size}
                        checked={selectedSize === size}
                        onChange={(e) => {
                          console.log(e.target.value);
                          setselectedSize(e.target.value);
                        }}
                      />
                      {size.toUpperCase()}
                    </label>
                  </div>
                ))}
              </div>

              <div className="product__quantitydiv">
                <p className="product-quantity-title">QUANTITY:</p>
                <div className="quantity-counter">
                  <button>-</button>
                  <p>1</p>
                  <button>+</button>
                </div>
              </div>

              <div className="product__addwishdiv">

                <button className="addcart-btn" onClick={() => addToCart(productDetail)}>Add to Cart</button>

                <button className="addwishlist-btn">
                  <i className="fa-solid fa-heart"></i>Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProductDetails;