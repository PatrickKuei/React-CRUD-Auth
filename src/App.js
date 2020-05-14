import React, { useState } from "react";
import Home from "./component/Home";
import PrivateRoute from "./component/PrivateRoute";
import { AuthContext } from "./context/auth";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Admin from "./component/Admin";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  localStorage.clear();
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/admin">Admin Page</Link>
            </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/admin" component={Admin} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
};
export default App;
