import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from './pages/login/LoginForm'
import Navbar from "./components/navbar/Navbar";
import Home from './pages/Home';
import Article from './pages/Article';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import Footerbar from "./components/footerbar/Footerbar";

import './App.css';
function App() {
  {/*
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }
  const [user, setUser] = useState({ username: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged in");
      setUser({
        username: details.username,
        email: details.email
      });
    } else {
      console.log("Details do not match");
      setError("Details do not match!");
    }
  }
  const Logout = details => {
    console.log("jsjsj");
  }
*/}
  return (

    <div>
      {/* 
      {(user.email != "" ) ? (
        <div className="welc">
          <h2>Welcome</h2>
          <button>Logout</button>
        </div>
      ):(
        <LoginForm/>
      )}
      */}
      <Router>

        <div className="App" >
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
          <LoginForm />
        </div>
      </Router>


    </div>
  );
}
export default App;
