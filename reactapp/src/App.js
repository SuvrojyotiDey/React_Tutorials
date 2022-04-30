import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage.component.tsx";
import NewPage from "./Pages/NewPage/NewPage.component";
import SignUp from "./Pages/SignUP/SignUp.component";
const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/loginPage"} element={<LoginPage />}></Route>
          <Route path={"/signUp"} element={<SignUp />}></Route>
          <Route path={"/newPage"} element={<NewPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;