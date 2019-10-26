import React, {Component} from 'react';
import Search from './components/Search'
import NavBar from './components/NavBar'
import MoviePage from './components/MoviePage'

import './App.css';

class App extends Component {
  render(){
  return (
      <div>
      <NavBar />
      <Search />
      {/* <MoviePage /> */}

      </div>
  );
}
}

export default App;
