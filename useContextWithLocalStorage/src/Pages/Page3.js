import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../App";

const Page3 = () => {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(userContext);
  console.log(isUserLoggedIn, "page3");
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>This is Page 3</div>
        <Link to="/page2">page 2</Link>
        <Link to="/">Page 1</Link>
        <button onClick={() => setIsUserLoggedIn(false)}>Logout</button>
      </div>
    </>
  );
};

export default Page3;
