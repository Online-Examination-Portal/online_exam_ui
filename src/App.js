import React, { useState, useEffect, createContext, useMemo } from "react";
import routes from "./Routes";
import { useRoutes } from "react-router-dom";
export const AuthStateContext = createContext();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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

  console.log(isAuthenticated);
  return (
    <AuthStateContext.Provider value={AuthStateContextValue}>
      {routing}
    </AuthStateContext.Provider>
  );
};

export default App;
