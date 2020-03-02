import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";

export const routing = (
  <Router>
    <div>
      <Route path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </Router>
);
