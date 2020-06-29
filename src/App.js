import React from 'react';
import Nav from './components/nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Services from './components/services';
import Contact from './components/contact'


function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </Router>

    </div>
  
  );
}

function Home(){
  return(
    <div className="jumbotron mt-4">
      <h2>Home component</h2>
    </div>
    
  )
}

function About(){
  return(
    <div className="jumbotron mt-4">
      <h2>About component</h2>
    </div>
  )
}

export default App;
