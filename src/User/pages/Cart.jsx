import React, { useEffect } from "react";
import "../css/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantityR, removeProductR } from "../../store/cart.slice";

const Cart = () => {
  const dispatch = useDispatch();
  const [total, setTotal] = React.useState(0);
  const products = useSelector((state) => state.cart.products);

  const changeQuantity = (index, isAdd) => {
    dispatch(changeQuantityR({ index, isAdd }));
    // let productList = [...products];
    // isAdd ? productList[index].quantity++ : productList[index].quantity--
    // console.log(productList);
    // setProducts(productList)
  };

  const removeProduct = (index) => {
    dispatch(removeProductR({ index }));
  };
  

  useEffect(() => {
    console.log(products);
    const Subtotal = products
      .map((e) => e.price * e.quantity)
      .reduce((a, b) => a + b, 0);
    console.log(Subtotal);
    setTotal(Subtotal);
  }, [products]);

  return (
    <div className="cart__container">
      <div className="cart__heading">
        <p>My Cart</p>
      </div>

      {/* <div className="borderline">
        <div className="cart__mainheadings">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p className="removeHeading">Remove</p>
        </div>
        <hr />

        {"no products added in cart" && products.map((product, i) => (
          <div className="cart__items" key={i}>
            <img className="productImg" src={product.image} alt="" />
            <p className="productTitle">{product.name}</p>
            <p className="productPrice">{product.price}</p>
            <div className="flex">
              <button onClick={() => changeQuantity(i, false)} disabled={product.quantity < 2}>-</button>
              <p className="productQuantity">{product.quantity}</p>
              <button onClick={() => changeQuantity(i, true)}>+</button>
            </div>
            <p className="productTotal">{product.price * product.quantity}</p>
            <button className="productRemove">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        ))}
      </div> */}

      {products.length > 0 ? (
        <div className="borderline">
          <div className="cart__mainheadings">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p className="removeHeading">Remove</p>
          </div>
          <hr />

          {products.map((product, i) => (
            <div className="cart__items" key={i}>
              <img className="productImg" src={product.image} alt="" />
              <p className="productTitle">{product.name}</p>
              <p className="productPrice">{product.price.toLocaleString('en-IN')}</p>
              <div className="flex">
                <button onClick={() => changeQuantity(i, false)} disabled={product.quantity < 2}>-</button>
                <p className="productQuantity">{product.quantity}</p>
                <button onClick={() => changeQuantity(i, true)}>+</button>
              </div>
              <p className="productTotal">{(product.price * product.quantity).toLocaleString('en-IN')}</p>
              <button className="productRemove" onClick={() => removeProduct(i)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="borderline">
          <p className="no-cart">No products added in cart.</p>
        </div>  
      )}

      <div className="cart__totals">
        <p className="heading">Cart Totals</p>
        <hr />
        <div className="cart-totals-grp">
          <p className="title">Subtotal</p>
          <p className="count">{total.toLocaleString('en-IN')}</p>
        </div>
        <div className="cart-totals-grp">
          <p className="title">Shipping fee</p>
          <p className="count">₹25</p>
        </div>
        <div className="cart-totals-grp">
          <p className="title">Total</p>
          <p className="count">{(total + 25).toLocaleString('en-IN')}</p>
        </div>
        <div className="checkout-btn">
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
