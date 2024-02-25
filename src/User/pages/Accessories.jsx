import React from 'react'
import "../css/Accessories.css"

const Accessories = () => {
  return (
    <div className='accessories__container'>

        <div className='accessories-sortby-div'>
         <p className='accessories__heading'>Accessories</p>
            <select className='select-tag' name="" id="">
                <option value="" hidden>Sort By</option>
                <option value="">Price (Low to High)</option>
                <option value="">Price (High to Low)</option>
            </select>
        </div>

        <div className='accessories__collection'>
          <p>No Accessories Found</p>
        </div>
    </div>
  )
}

export default Accessories