import React from 'react';
import { Link } from "react-router-dom";
import "../css/ProductCard.css";


const ProductCard = (props) => {

  const formattedPrice = props.datas && props.datas.price ? props.datas.price.toLocaleString('en-IN') : '';

  return (            
    <div className="card__container">
        <Link to={"/productdetails/"+props.datas._id} key={props.i} className="card">
            <img className="product-image" src={props.datas.image} alt="" />
            <div className='card-footer'>
              <p className="product-title">{props.datas.name}</p>
              <p className="product-price">₹{formattedPrice}</p>
            </div>
        </Link> 
    </div>
  )
}

export default ProductCard;
