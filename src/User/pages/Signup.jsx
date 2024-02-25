import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Signup.css";
import axios from "axios";


const Signup = () => {

    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [role, setRole] = React.useState("");

    const onSubmit = () => {
        
        var data = {
            "firstname":firstname,
            "lastname":lastname,
            "email":email,
            "password":password,
            "role":role
        }
        axios.post("http://localhost:3001/users",data)
        .then(data => console.log(data.data))
    }

  return (
    
    <div className="signup__container">

        <form action="" className="signup__form">
            <div className='signup__heading'>
                <p>Signup</p>
            </div>
            <div className="input-grp">
                <label htmlFor="firstname">First Name<span className='input-star'>*</span></label>
                <input type="text" id="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>        
            </div>
            <div className="input-grp">
                <label htmlFor="lastname">Last Name<span className='input-star'>*</span></label>
                <input type="text" id="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)}/>        
            </div>
            <div className="input-grp">
                <label htmlFor="email">Email<span className='input-star'>*</span></label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="input-grp">
                <label htmlFor="password">Password<span className='input-star'>*</span></label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>        
            </div>
            <div className="role-dropdown-grp">
                <label htmlFor="role">Choose your role:</label>

                <select id="role" onChange={(e) => setRole(e.target.value)}>
                    <option hidden>Select</option>
                    <option value="user">User</option>
                    <option value="seller">Seller</option>
                </select>

            </div>
            <div className='input-bottom'>
                <div>
                    <input className="checkbox-input" type="checkbox" />
                    <label className="checkbox-label">I agree to the <Link to="">Terms and Conditions.</Link></label>
                </div>
            </div>
            <div className='signup__btn'>
                {/* <button className="signup">Create</button> */}
                <button onClick={() => onSubmit()} className="signup" type='button'>Create</button>
                
            </div>
        </form>

    </div>
  )
}

export default Signup