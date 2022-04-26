import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage.component.tsx";
const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LoginPage/>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;