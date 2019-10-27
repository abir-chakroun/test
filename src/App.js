import React, {Component, Fragment} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Search from './components/Search'
import NavBar from './components/NavBar'
import MoviePage from './components/MoviePage'
import Footer from './components/Footer'

import './App.css';

class App extends Component {
  render(){
    console.log('this.props')
    console.log(this.props)
  return (
    <Fragment>
    <NavBar/>
    <Router>
    <Switch>
    <Route exact path="/" component={Search} />
      
    
   <Route path="/MoviePage" component={MoviePage}/>
    
   
  </Switch>
  </Router>
  <div style ={{backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",}}>
    <Footer  />
  </div>
  
     </Fragment>
  );
}
}

export default App;