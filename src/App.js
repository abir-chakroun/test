import React, {Component, Fragment} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Search from './components/Search'
import NavBar from './components/NavBar'
import MoviePage from './components/MoviePage'

import './App.css';

class App extends Component {
  render(){
  return (
    <Fragment>
    <NavBar/>
    <Router>
    <Switch>
    <Route exact path="/">
      <Search />
    </Route>
   <Route path="/MoviePage">
      <MoviePage />
  </Route>
   
  </Switch>
  </Router>
     </Fragment>
  );
}
}

export default App;