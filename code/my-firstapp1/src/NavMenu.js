import React from "react";
import MyRoutes from "./MyRoutes";
import { Link } from "react-router-dom"; // to load only new changes


const NavMenu = () => {
  return (
    <>
      <h1>NavMenu</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/First">First</Link>
          </li>
          <li>
            <Link to="/Second">Second</Link>
          </li>
          <li>
            <Link to="/Third">Third</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/error">This link will give error</Link>
          </li>
        </ul>
      </nav>
      {/* <MyRoutes /> */}
    </>
  );
};

export default NavMenu;

{/* <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/First">First</a>
          </li>
          <li>
            <a href="/Second">Second</a>
          </li>
          <li>
            <a href="/Third">Third</a>
          </li>
          <li>
            <a href="/error">This link will give error</a>
          </li> */}