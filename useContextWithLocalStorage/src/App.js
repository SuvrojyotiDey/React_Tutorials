import React, { createContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page404 from "./Pages/Page404";
import RequireAuth from "./Pages/RequireAuth";
import {
  getLocalStorage,
  setLocalStorage,
} from "./LocalStorageUtils/LocalStorage";

export const userContext = createContext(null);

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(() =>
    getLocalStorage("user", false)
  );

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Page1 />,
      errorElement: <Page404 />,
    },
    {
      path: "/page2",
      element: (
        <RequireAuth>
          <Page2 />
        </RequireAuth>
        // protected route via login
      ),
    },
    {
      path: "/page3",
      element: (
        <RequireAuth>
          <Page3 />
        </RequireAuth>
        // protected route via login
      ),
    },
  ]);

  useEffect(() => {
    setLocalStorage("user", isUserLoggedIn);
    console.log(
      `local storage updated for user with isUserLoggedIN as ${isUserLoggedIn}`
    );
  }, [isUserLoggedIn]);

  const value = { isUserLoggedIn, setIsUserLoggedIn };

  return (
    <>
      <userContext.Provider value={value}>
        <RouterProvider router={routes} />
      </userContext.Provider>
    </>
  );
};

export default App;
