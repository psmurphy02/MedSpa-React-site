import React, { Component } from "react";
import Home from "./HomeComponent";
import PageTemplate from "./PageComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { SERVICES } from "../data/services";
import { PRODUCTS } from "../data/products";
import { STAFF } from "../data/staff";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          services: SERVICES,
          products: PRODUCTS,
          staffList: STAFF
        };
      }

  render() {

    return (
      <div className="App">
        <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/services' render={() => <PageTemplate data={this.state.services} />} />
            <Route exact path='/products' render={() => <PageTemplate data={this.state.products} />} />
            <Route exact path='/about' render={() => <PageTemplate data={this.state.staffList} />} />
            <Redirect to='/home' />
        </Switch>
      </div>
    );
  }
}
export default Main;
