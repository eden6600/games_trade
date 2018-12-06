import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import '../node_modules/animate.css/animate.css';

import { Provider } from './context';
import Navbar from './components/layout/Navbar';
import Search from './components/search/Search';
import Home from './components/home/Home';
import SearchResults from './components/search/SearchResults';
import Profile from './components/profile/Profile';
import EditPersonalInfo from './components/profile/personal_info/EditPersonalInfo';
import AddNewGame from './components/profile/games_list/AddNewGame';
import AddNewWishlistGame from './components/profile/wishlist/AddNewWishlistGame';
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
                <Route exact path="/login" component={Login} />
                <Route exact path="/search_results" component={SearchResults} />
                <Route exact path="/profile" component={Profile} />
                <Route
                  exact
                  path="/profile/edit_personal_info"
                  component={EditPersonalInfo}
                />
                <Route
                  exact
                  path="/profile/add_new_game"
                  component={AddNewGame}
                />
                <Route
                  exact
                  path="/profile/add_new_wishlist_game"
                  component={AddNewWishlistGame}
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
