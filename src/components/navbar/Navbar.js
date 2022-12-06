import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
//   const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <h1 className="toptitle">DevPedia </h1>
      </div>


      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>

          <li className="topListItem">
            <Link className="link" to="#">
              Articles
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="#">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="#">
              Contact us
            </Link>
          </li>
          <li className="topListItem"></li>
        </ul>
      </div>


      <div className="topRight">
        <ul className="topList">
          <li id="topListItem">
            <Link className="link" to="/login">
              Sign in
            </Link>
          </li>

          <li className="topListItem">
            <button className="topButton">Get Unlimited Access</button>
          </li>
        </ul>

      </div>
    </div>
  );
}