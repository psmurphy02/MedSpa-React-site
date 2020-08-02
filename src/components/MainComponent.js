import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import ServicesList from "./ServicesComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { SERVICES } from "../data/services";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          services: SERVICES,
        };
      }

  render() {

      const HomePage = () => {
          return (
              <Home />
          );
      }

    return (
      <div className="App">
        <Header />
        <Switch>
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/services' render={() => <ServicesList services={this.state.services} />} />
            <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;
