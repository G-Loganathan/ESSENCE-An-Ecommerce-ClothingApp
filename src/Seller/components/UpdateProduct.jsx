import React from 'react'
// import { useForm } from 'react-hook-form'
// import axios from 'axios'
import { Link } from "react-router-dom";


const UpdateProduct = () => {

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    //     setValue,
    //   } = useForm();

    // const onSubmit = (data) => {
    // console.log(data);
    // axios
    //     .put("http://localhost:3001/users", data)
    //     .then((data) => console.log(data.data));
    // };

    // React.useEffect(() => {
    //     axios
    //       .get("http://localhost:3001/users/" + id)
    //       .then((res) => {
    //         console.log(res.data);
    //         let user = res.data;
    //         setValue("_id", user._id);
    //         setValue("firstname", user.firstname);
    //         setValue("lastname", user.lastname);
    //         setValue("email", user.email);
    //         setValue("password", user.password);
    //         setValue("role", user.role ? user.role : "user");
    //       })
    //       .catch((err) => {
    //         console.error("Error fetching data:", err);
    //       });
    //   }, []);

  return (
    <div className="addproduct__container">
        <div className="productinfo__heading">
            <p>Update Product</p>  
        </div>
        
        <form className="addproduct__form" action="">

            <div className="form__left">
                <div className="addimage__div">
                 <input type="image" src="" alt='' width="48" height="48" />
                </div>
            </div>

            <div className="form__right">
                <div className="input-grp product-name">
                    <label htmlFor="">Product Name</label>
                    <input type="text" />
                </div>
                <div className="input-grp">
                    <label htmlFor="">Price</label>
                    <input type="text"/>
                </div>
                <div className="input-grp description">
                    <label htmlFor="">Description</label>
                    <textarea name="" id="" cols="100%" rows="5"></textarea>
                </div>
                <div className="input-grp">
                    <label htmlFor="">Size</label>
                    <input type="text"/>
                </div>
                <div className="input-grp">
                    <label htmlFor="">Quantity</label>
                    <input type="text"/>
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
                    {/* <button className="cancel">Cancel</button> */}
                    <button className="save">Save</button>
                </div>
            </div>
            
        </form>

    </div>
  )
}

export default UpdateProduct