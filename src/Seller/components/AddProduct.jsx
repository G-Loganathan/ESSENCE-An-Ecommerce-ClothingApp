import React from 'react'
import "../css/AddProduct.css";
import axios from "axios"
import { Link } from 'react-router-dom'

const AddProduct = () => {

    const [productName, setProductName] = React.useState("")
    const [price, setPrice] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [size, setSize] = React.useState("")
    const [quantity, setQuantity] = React.useState("")
    // const [gender, setGender] = React.useState("")

    const onSubmit = () => {
        
        var data = {
            "name":productName,
            "price":price,
            "description":description,
            "size":size,
            "quantity":quantity
        }

        axios.post("http://localhost:3001/products",data, {
            headers:{
                token: sessionStorage.getItem('jwt')
            }
        })
        .then(data => console.log(data.data))
    }

  return (
    <div className="addproduct__container">
        <div className="productinfo__heading">
            <p>Product Information</p>  
        </div>
        
        <form className="addproduct__form" action="" >

            <div className="form__left">
                <div className="addimage__div">
                 <input type="image" src="" alt='' width="48" height="48" />
                </div>
            </div>

            <div className="form__right">
                <div className="input-grp product-name">
                    <label htmlFor="">Product Name</label>
                    <input type="text" onChange={(e) => setProductName(e.target.value)} />
                </div>
                <div className="input-grp">
                    <label htmlFor="">Price</label>
                    <input type="text" onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="input-grp description">
                    <label htmlFor="">Description</label>
                    <textarea name="" id="" cols="100%" rows="5" onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="input-grp">
                    <label htmlFor="">Size</label>
                    <input type="text" onChange={(e) => setSize(e.target.value)} />
                </div>
                <div className="input-grp">
                    <label htmlFor="">Quantity</label>
                    <input type="text" onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <div className="input-grp">
                    <label htmlFor="">Gender</label>
                    <select>
                        <option hidden value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="buttons-div">
                    <Link className='cancel' to="/myproducts">Cancel</Link>
                    <button className="save" type='button' onClick={() => onSubmit()}>Save</button>
                </div>
            </div>

           

            
        </form>

    </div>
  )
}

export default AddProduct