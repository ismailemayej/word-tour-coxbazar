import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../UserAuth/UserAuth";

// import { Input } from "@material-tailwind/react";
import facebook from "../../../../images/icons/fb.png";
import google from "../../../../images/icons/google.png";

const Register = () => {
  const { registerwihtemail } = useContext(AuthContext);
  const [error, setError] = useState();
  const [agreement, setAgreement] = useState(false);

  const handleRagister = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    // const number = form.number.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmpassword.value;
    registerwihtemail(email, password)
      .then((result) => {
        console.log(result.user);
        alert("Register Successfully");
      })
      .catch((error) => console.error(error.code));

    if (!(password === confirmPassword)) {
      setError("password is dont matched");
    }
  };
  const handle = (event) => {
    setAgreement(event.target.checked);
  };

  return (
    <div className="p-4 bg-white h-full grid justify-items-center">
      <div className="lg:w-2/5 shadow-2xl w-11/12  border border-red  items-center rounded-lg bg-slate-50 p-5">
        <form onSubmit={handleRagister} action="">
          <h3 className="text-4xl font-bold grid justify-items-center text-orange-600 mb-4">
            Registration
          </h3>

          <h2 className="text-left mb-1 font-semibold text-green-600">
            Enter your full name
          </h2>
          <input
            className=" text-green-600 border-white border w-full rounded px-4 py-2 bg-green-100"
            type="text"
            name="name"
            placeholder="your full name"
          />
          <h2 className="text-left mb-1 font-semibold text-green-600">
            Enter your mobile
          </h2>
          <input
            className=" text-green-600 border-white border w-full rounded px-4 py-2 bg-green-100"
            type="number"
            name="number"
            placeholder="your mobile number"
          />
          <h2 className="text-left mb-1 font-semibold text-green-600">
            Enter your email
          </h2>
          <input
            className=" text-green-600 border-white border w-full rounded px-4 py-2 bg-green-100"
            type="email"
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
          {error}
          <h2 className="mt-2 text-left  mb-1 font-semibold  text-green-600">
            Enter your confirm Password
          </h2>
          <input
            className="hover:bg-violet-60 text-green-600 border-white border w-full rounded px-4 py-2 bg-green-100"
            type="password"
            name="confirmpassword"
            placeholder="Type your confirm password"
          />

          <p className=" text-green-600">
            <input
              className=" text-green-600 me-2 mt-3 mb-3"
              type="checkbox"
              name="agreement"
              onChange={handle}
            />
            Accept terms and condition
          </p>

          <div className=" md:grid justify-items-center">
            <button
              className="border-1 bg-orange-500 text-white py-2 text-xl font-semibold w-full rounded-lg mt-1"
              disabled={!agreement}
            >
              Register
            </button>
          </div>
        </form>
        <p className="flex justify-center">
          Have An Account ?
          <Link className="ms-2 mb-4 text-green-500" to="/login">
            LogIn
          </Link>
        </p>

        <div className="flex justify-between">
          <p className="">-------------------------</p>
          <p>OR</p>
          <p className="">--------------------------</p>
        </div>

        <button className="border flex justify-between file:text-black py-1 w-full rounded-3xl mt-1  bg-green-50">
          <img src={facebook} className="me-12 ms-0 w-5" alt="" srcset="" />
          <p className="me-8">SignUp with Facebook</p>
          <p> </p>
        </button>
        <button className="border flex justify-between file:text-black py-1 w-full rounded-3xl mt-1  bg-green-50 bg-white-">
          <img src={google} className="me-12 ms-0 w-5" alt="" srcset="" />
          <p className="me-8">SignUp with Google</p>
          <p> </p>
        </button>
      </div>
    </div>
  );
};

export default Register;
