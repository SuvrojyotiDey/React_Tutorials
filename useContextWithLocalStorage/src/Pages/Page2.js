import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../App";

const Page2 = () => {
  const { isUserLoggedIn } = useContext(userContext);
  console.log(isUserLoggedIn, "page2");
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>This is Page 2</div>
        <Link to="/page3">page 3</Link>
        <Link to="/">page 1</Link>
      </div>
    </>
  );
};

export default Page2;
