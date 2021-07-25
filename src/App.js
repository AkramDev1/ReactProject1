import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from "./components/navbar/Navbar";
import Home from './pages/Home';
import Article from './pages/Article';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Footerbar from "./components/footerbar/Footerbar";

import './App.css';
function App() {
  return (
      <Router>       
          <div className = "App" >      
          <Navbar />         
            <div className="container">  
              <Switch>      
                  <Route exact path="/Article" component={Article} />
                  <Route exact path="/Blog" component={Blog} />
                  <Route exact path="/Contact" component={Contact} />
                  <Route exact path="/" component={Home} />
            </Switch>   
            </div>
          <Footerbar />
          </div>
     </Router>
  );
}
export default App;
