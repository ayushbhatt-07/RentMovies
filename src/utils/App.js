import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import auth from "../services/authService";
import Movies from "../Components/movies";
import Customers from "../Components/customers";
import Rentals from "../Components/rentals";
import NotFound from "../Components/notFound";
import LoginForm from "../Components/loginForm";
import Logout from "./../Components/logout";
import NavBar from "../Components/navBar";
import ProtectedRoute from "./../Components/common/protectedRoute";
import movieForm from "../Components/movieForm";
import RegisterForm from "../Components/registerForm";
import NewMovie from "../Components/newMovie";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};
  async componentDidMount() {
    const user = await auth.getCurrentUser();
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route path="/movie/new" component={NewMovie} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={RegisterForm} />
            <ProtectedRoute path="/movies/:id" component={movieForm} />
            <Route
              path="/movies"
              render={(props) => <Movies {...props} user={this.state.user} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
