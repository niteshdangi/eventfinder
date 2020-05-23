import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./components/Home";
import AddNewEvent from "./components/NewEvent";
import EditEvent from "./components/EditEvent";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/events/add" component={AddNewEvent} />
            <Route exact path="/events/:id" component={EditEvent} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
