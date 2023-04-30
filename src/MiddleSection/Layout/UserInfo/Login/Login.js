import React, { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
// import { Input } from "@material-tailwind/react";
import "./Login.css";
import { AuthContext } from "../UserAuth/UserAuth";
import facebook from "../../../../images/icons/fb.png";
import google from "../../../../images/icons/google.png";

const Login = () => {
  const { Login } = useContext(AuthContext);
  const Navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pahtname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    Login(email, password)
      .then((result) => {
        alert("login successfully");
        console.log(result.user);
      })
      .catch((error) => console.error(error));
    Navigate(from, { replce: true });
  };
  return (
    <div className="p-4 bg-white h-full grid justify-items-center">
      <div className="lg:w-2/5 shadow-2xl w-11/12  border border-red  items-center rounded-lg bg-slate-50 p-5">
        <form onSubmit={handleLogin} action="">
          <h3 className="text-4xl font-bold grid justify-items-center text-orange-600">
            LogIn
          </h3>
          <h2 className="text-left mb-1 font-semibold text-green-600">
            Enter your email
          </h2>
          <input
            className=" text-green-600 border-white border w-full rounded px-4 py-2 bg-green-100"
            type="text"
            name="email"
            placeholder="email or phone number"
          />
          <h2 className="mt-2 text-left  mb-1 font-semibold  text-green-600">
            Enter your Password
          </h2>
          <input
            className="hover:bg-violet-60 text-green-600 border-white border w-full rounded px-4 py-2 bg-green-100"
            type="password"
            name="password"
            placeholder="Type your password"
          />

          <div className="flex justify-between my-4">
            <p className=" text-green-600">
              <input
                className=" text-green-600 me-2 mt-2"
                type="checkbox"
                id=""
                name="vehicle1"
                value="Bike"
              />
              Remember me
            </p>
            <p className="text-green-600">
              <Link className="justify-end" to="/forgot">
                Forgot your password
              </Link>
            </p>
          </div>

          <div className=" md:grid justify-items-center">
            <button
              className="border-1 bg-orange-500 text-white py-2 text-xl font-semibold w-full rounded-lg mt-1"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <p className="flex justify-center">
          Dont Have An Account ?
          <Link className="ms-2 mb-4 text-green-500" to="/register">
            Create An account
          </Link>
        </p>

        <div className="flex justify-between">
          <p className="">-------------------------</p>
          <p>OR</p>
          <p className="">--------------------------</p>
        </div>

        <button className="border flex justify-between file:text-black py-1 w-full rounded-3xl mt-1  bg-green-50">
          <img src={facebook} className="me-12 ms-0 w-5" alt="" srcset="" />
          <p className="me-8">Login with Facebook</p>
          <p> </p>
        </button>
        <button className="border flex justify-between file:text-black py-1 w-full rounded-3xl mt-1  bg-green-50 bg-white-">
          <img src={google} className="me-12 ms-0 w-5" alt="" srcset="" />
          <p className="me-8">Login with Google</p>
          <p> </p>
        </button>
      </div>
    </div>
  );
};

export default Login;
