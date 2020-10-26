import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Home, About, Furnitures, Shop, Contact } from '../pages';

const Routes = () => {
    return (
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/furnitures">
            <Furnitures />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    )
}

export default Routes;