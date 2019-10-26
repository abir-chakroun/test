import React, {Component} from 'react';
import Search from './components/Search'
import NavBar from './components/NavBar'
import './App.css';

class App extends Component {
  render(){
  return (
      <div>
      <NavBar />
      <Search />
      </div>
  );
}
}

export default App;
