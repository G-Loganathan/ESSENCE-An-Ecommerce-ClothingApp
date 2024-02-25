import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "../css/UserInformation.css";
import UserProfile from "../assets/userprofile.svg";

const UserInformation = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
    setValue,
  } = useForm();

  const id = sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))._id
    : "";

  const onSubmit = (data) => {
    console.log(data);
    axios
      .put("http://localhost:3001/users", data)
      .then((data) => console.log(data.data));
  };

  React.useEffect(() => {

    if (!id) return; // Optionally
    
    axios
      .get("http://localhost:3001/users/" + id)
      .then((res) => {
        console.log(res.data);
        let user = res.data;
        setValue("_id", user._id);
        setValue("firstname", user.firstname);
        setValue("lastname", user.lastname);
        setValue("email", user.email);
        setValue("password", user.password);
        setValue("role", user.role ? user.role : "user");
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [id, setValue]);

  return (
    <div className="userinfo__container">
      <form
        action=""
        className="userinfo__form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="userinfo__left">
          <img src={UserProfile} alt="" />
          <p className="greeting">Hello, User</p>
          <button className="logoutbutton">
            Logout<i className="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>

        <div className="userinfo__right">
          <p className="userinfo__heading">User Information</p>

          <div>
            <input type="hidden" {...register("_id")} />
          </div>

          <div className="gridinputgrps">
            <div className="labelinput-grps">
              <label htmlFor="firstname" className="label-grps">
                Firstname
              </label>
              <input
                type="text"
                className="input-grps"
                id="firstname"
                {...register("firstname")}
              />
            </div>
            <div className="labelinput-grps">
              <label htmlFor="lastname" className="label-grps">
                Lastname
              </label>
              <input
                type="text"
                className="input-grps"
                id="lastname"
                {...register("lastname")}
              />
            </div>
            <div className="labelinput-grps">
              <label htmlFor="email" className="label-grps">
                Email
              </label>
              <input
                type="text"
                className="emailinput input-grps"
                id="email"
                {...register("email")}
                disabled
              />
            </div>
            <div className="labelinput-grps">
              <label htmlFor="password" className="label-grps">
                Password
              </label>
              <input
                type="text"
                className="input-grps"
                id="password"
                {...register("password")}
              />
            </div>
          </div>

          <div className="savechangesbtn-div">
            <button className="savechangesbtn">Save Changes</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserInformation;
