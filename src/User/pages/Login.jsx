import React from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/users/login", data)
    .then(data => {
      console.log(data.data)
      const response = data.data;
      if(response.id){
        sessionStorage.setItem('role',response.role);
        sessionStorage.setItem('user',JSON.stringify(response));
        sessionStorage.setItem('jwt', response.token)
        window.location.href = '/'
      } else {
        alert(response.message)
      }
    });
  }

  return (
    <div className="login__container">
      <form action="" className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="login__heading">
          <p>Login</p>
        </div>
        <div className="input-grp">
          <label htmlFor="email">
            Email<span className="input-star">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
          />
          <p className="inputErrors">{errors.email?.message}</p>
        </div>
        <div className="input-grp">
          <label htmlFor="password">
            Password<span className="input-star">*</span>
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
              minLength: {
                value: 8,
                message: "Password should have minimum 8 characteres",
              },
              maxLength: {
                value: 16,
                message: "Password should be maximum 10 characters",
              },
            })}
          />
          <p className="inputErrors">{errors.password?.message}</p>
        </div>
        <div className="input-bottom">
          <div>
            <input className="checkbox-input" type="checkbox" />
            <label className="checkbox-label">Remember Me</label>
          </div>
          <div>
            <p className="forget-pwd">
              <Link to="">Forgot Password?</Link>
            </p>
          </div>
        </div>
        <div className="login__btn">
          <button type="submit" className="login">
            Login
          </button>
          <Link to="/signup">
            <button className="signup">Create Account</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
