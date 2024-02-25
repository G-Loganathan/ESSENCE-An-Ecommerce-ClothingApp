import React from 'react';
import { Link } from "react-router-dom";
import "../css/SellerHeader.css";


const SellerHeader = () => {
  return (
    <div className='sellerheader__container'>
        <ul className="sellerheader__ul">
            <Link to="/"><i className="fa-solid fa-chevron-left"></i>Back</Link>
        </ul>
    </div>
  )
}

export default SellerHeader