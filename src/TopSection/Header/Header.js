import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../MiddleSection/Layout/UserInfo/UserAuth/UserAuth";
const Header = () => {
  const { logOut, user } = useContext(AuthContext);

  const Signout = () => {
    logOut()
      .then((result) => console.log(result.user))
      .catch((error) => console.error(error.code));
  };

  return (
    <div className="flex items-center relative logo lg:ps-10 lg:p-2 p-4">
      <div>
        <Link to="/">
          <img
            className="w-20 md:w-32 lg:w-32 filter"
            src={logo}
            alt=""
            srcset=""
          />
        </Link>
      </div>
      <div className="ps-3 flex-1 w-22">
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
      </div>
      <div className="hidden ms-32 lg:block flex-1 w-32 text-white">
        <Link className="ps-4" to="/">
          Home
        </Link>
        <Link className="ps-4" to="/">
          About
        </Link>
        <Link className="ps-4" to="/">
          Contrac
        </Link>
        <Link className="ps-4" to="/">
          About us
        </Link>
      </div>
      {user?.uid ? (
        <>
          {user.email}
          <button
            className="ms-3 bg-lime-300 rounded px-5 py-1 "
            type="submit"
            onClick={Signout}
            type="submit"
          >
            LogOut
          </button>
        </>
      ) : (
        <div>
          <Link to="/login">
            <button
              className="ms-3 bg-lime-300 rounded px-5 py-1 "
              type="submit"
            >
              Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
