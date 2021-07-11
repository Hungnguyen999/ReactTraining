import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ComponentAndProps from '../components/presentational/ComponentsAndProps';
import ComPropsScreen from '../screens/ComPropsScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductDetail from '../components/presentational/ComponentsAndProps/parts/ProductDetail';
const RootRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route exact path="/components-props">
          <ComponentAndProps />
        </Route>
        <Route path="/components-props/:id">
          <ProductDetail/>
        </Route>
      </Switch>
    </Router>
  )
}
export default RootRouter;