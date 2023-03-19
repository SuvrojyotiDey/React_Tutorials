import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../App";

const Page1 = () => {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(userContext);
  console.log(isUserLoggedIn, "page1");
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>This is Page 1</div>
        <Link to="/page2">Page 2</Link>
        <Link to="/page3">Page 3</Link>
        {isUserLoggedIn ? (
          <div>Logged In</div>
        ) : (
          <button onClick={() => setIsUserLoggedIn(true)}>Login</button>
        )}
      </div>
    </>
  );
};

export default Page1;
