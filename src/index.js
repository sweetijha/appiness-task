import React from "react";
import ReactDOM from "react-dom";
import { Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import { appReducer } from "./reducer";

const store = createStore(appReducer);

const Routing = () => (
  <Router>
    <div>
      <Route exact path="/">
        {<Redirect to="/login" />}
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </Router>
);

const Container = connect()(Routing);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
