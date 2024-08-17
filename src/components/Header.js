import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const onlinestatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-slate-300 shadow-lg m-4 ">
      <div className="flex">
        <img
          className="w-20"
          src="data:image/png;base64,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"
          alt="company-logo"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">OnlineStatus:{onlinestatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-lg font-bold">
            <Link to="/cart">cart-({cartItems.length} items)</Link>
          </li>
          <li>
            <button
              className="login-button"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
