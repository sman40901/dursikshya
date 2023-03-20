import React from "react";

export const Third = () => {
  return (
    <>
      <h1>This is Third</h1>
    </>
  );
};

export const TestThird = () => {
  return (
    <>
      <h1>this is a TestThird</h1>
    </>
  );
};

export const LoginForm = () => {
  return (
    <form>
      {/* there is no action in form in React */}
      <label htmlFor="email">EmaIL</label>
      <br />
      <input type="email" id="email" placeholder="your email"></input>
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" id="password" placeholder="*********"></input>
      <br />
      <button>Login</button>
    </form>
  );
};
