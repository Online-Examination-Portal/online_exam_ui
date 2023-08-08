import React, { useState, useEffect, createContext, useMemo } from "react";
import routes from "./Routes";
import { useRoutes } from "react-router-dom";
export const AuthStateContext = createContext();
export const UserDetailsContext = createContext();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const routing = useRoutes(routes(isAuthenticated));

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const AuthStateContextValue = useMemo(
    () => ({ isAuthenticated, setIsAuthenticated }),
    [isAuthenticated, setIsAuthenticated]
  );

  const UserDetailsContextValue = useMemo(
    () => ({ userDetails, setUserDetails }),
    [userDetails, setUserDetails]
  );

  return (
    <AuthStateContext.Provider value={AuthStateContextValue}>
      <UserDetailsContext.Provider value={UserDetailsContextValue}>
        {routing}
      </UserDetailsContext.Provider>
    </AuthStateContext.Provider>
  );
};

export default App;
