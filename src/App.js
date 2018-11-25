import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import Search from './components/search/Search';
import Home from './components/layout/Home';
import SearchResults from './components/search/SearchResults';
import Profile from './components/profile/Profile';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Search />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/search_results" component={SearchResults} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
