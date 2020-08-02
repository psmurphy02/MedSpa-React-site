import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import ServicesList from "./ServicesComponent";
import ProductsList from "./ProductsComponent";
import About from "./AboutComponent";
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
            <Route exact path='/products' render={() => <ProductsList products={this.state.products} />} />
            <Route exact path='/about' render={() => <About staffList={this.state.staffList} />} />
            <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Main;
