import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Cart from '../Cart';
import BikesStore from '../BikesStore';
import Loading from '../Loading';
import Error from '../Error';

import './styles.css';

class App extends Component {
    componentDidMount() {
    this.loadBikes();
  }

  loadBikes = () => {
     this.props.loadBikes();
  };

  render() {
    const {isFetching, error} = this.props;
    return (
      <div className="app">
        <Header className="app-header" />
        <main className="app-main">
          <Switch>
            <Route
              exact
              path="/cart"
              render={props => (
                <Cart
                  {...props}
                 
                />
              )}
            />
            <Route
              path="/"
              render={props => (
                <BikesStore
                  {...props}
                  className="app-store"
                  filtersClassName="app-store-filters"
                  listClassName="app-store-list"
                  
                />
              )}
            ></Route>
          </Switch>
        </main>
        {isFetching && <Loading className="app-loading" />}
        {error && <Error className="app-error" error={error} />}
      </div>
    );
  }
}

export default App;
