import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import '../node_modules/animate.css/animate.css';

import { Provider } from './context';
import Navbar from './components/layout/Navbar';
import Search from './components/search/Search';
import Home from './components/layout/Home';
import SearchResults from './components/search/SearchResults';
import Profile from './components/profile/Profile';
import AddNewGame from './components/profile/AddNewGame';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Navbar />
            <Search />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/search_results" component={SearchResults} />
                <Route exact path="/profile" component={Profile} />
                <Route
                  exact
                  path="/profile/add_new_game"
                  component={AddNewGame}
                />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
