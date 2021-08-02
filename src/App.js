 import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
 import Login from './pages/login/Login'
 import Accueil from './pages/accueil/Accueil';
 import Navbar from "./components/navbar/Navbar";
import Home from './pages/home/Home';
 import Article from './pages/article/Article';
 import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Footerbar from "./components/footerbar/Footerbar";

// import './App.css'
import React, { Component } from 'react'

class App extends Component {
  state={
    isLog:false
  }
  handleLogin = (isLog) => this.setState({isLog})
  render(){
    const {isLog} = this.state;
 
    return (
          
        <div>
          <Router>
            <div className="container">
              {/* <Navbar /> */}
              <Switch>
                {!isLog ? 
                  <Route exact path='/'  render={() => <Login isLogin={this.handleLogin}/>}/>
              :
             
              <Route path='/' render={() =><Accueil /> }/>
              }
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Article" component={Article} />
                <Route exact path="/Blog" component={Blog} />
                <Route exact path="/Contact" component={Contact} />
                
              </Switch>
            </div>
            {/* <Footerbar /> */}
          </Router>
     </div>
    )
  }
}

export default App;
