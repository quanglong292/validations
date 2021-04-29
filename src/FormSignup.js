import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";

const FormSignup = () => {
    const {handleChange, values, handleSubmit, errors} = useForm(validate);
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Get started with us today! create your account!</h1>
        <div className="form-inputs">
          <label className="form-label" htmlFor="username">
            Username:
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className="form-input"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          ></input>
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label" htmlFor="email">
            E-mail:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          ></input>
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label" htmlFor="password">
            Password:
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-inputs">
          <label className="form-label" htmlFor="password2">
            Confirm password:
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className="form-input"
            placeholder="Confirm password"
            value={values.password2}
            onChange={handleChange}
          ></input>
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  
  );
};

export default FormSignup;
