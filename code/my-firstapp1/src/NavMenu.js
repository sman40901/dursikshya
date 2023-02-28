import React from "react";
import MyRoutes from "./MyRoutes";

const NavMenu = () => {
  return (
    <>
      <h1>NavMenu</h1>
      <nav>
        <ul>
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
          </li>
        </ul>
      </nav>
      <MyRoutes />
    </>
  );
};

export default NavMenu;
