 import React from 'react'
 import Snavbar from '../../components/navbar/Snavbar';
import avatar from './img/avatar.png';
import bg from './img/bg.svg';
import wave from './img/wave.png';
 import './LoginStyle.css'
 
class Login extends React.Component{
    state={
        username:'',
        password:''
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.isLogin(true)
    }
    render(){

        return(  
            <div>
            <Snavbar/> 
                <div className="bodyy">
                    <img className="wave" src={wave} />
                    <div className="conttainer">
                        <div className="immg">
                            <img src={bg} />
                        </div>
                        <div className="login-content">
                            <form className="fform" action="index.html" onSubmit = {this.handleSubmit}>
                                <img src={avatar} />
                                <h2 className="title">Welcome</h2>
                                <div className="input-div one">
                                    <div className="i">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className="div">
                                        <input id="username" style={{backgroundColor:'white'}} name="username" placeholder="Username" type="text"  className="input" required onChange={this.handleChange} />
                                    </div>
                                </div>
                               
                                <div className="input-div pass">
                                    <div className="i">
                                        <i className="fas fa-lock"></i>
                                    </div>
                                    <div className="div">
                                        <input id="password" placeholder="Password" name="password" type="password"  className="input" required onChange={this.handleChange}  />
                                    </div>
                                </div>
                                <a className="forgot" href="#">Forgot Password?</a>
                                <input  type="submit" className="bttnn" value="Login" onSubmit={this.handleSubmit} />
                            </form>
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}

export default Login;