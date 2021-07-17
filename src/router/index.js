import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ComPropsScreen from '../screens/ComPropsScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductDetail from '../components/presentational/ComponentsAndProps/parts/ProductDetail';
import StatePropsScreen from '../screens/StatePropsScreen';
import LifeCycleScreen from '../screens/LifeCycleScreen';
const RootRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route exact path="/components-props">
          <ComPropsScreen />
        </Route>
        <Route path="/components-props/:id">
          <ProductDetail/>
        </Route>
        <Route exact path="/state">
          <StatePropsScreen />
        </Route>
        <Route exact path="/life-cycle">
          <LifeCycleScreen />
        </Route>
      </Switch>
    </Router>
  )
}
export default RootRouter;