// import React from 'react'
// import { useState } from 'react'
import avatar from './img/avatar.png';
import bg from './img/bg.svg';
import wave from './img/wave.png';
 import './LoginStyle.css'
 //loginForm1
// function LoginForm(Login, error) {
//     const [details, setDetails] = useState({ username: "", email: "", password: "" });

//     const submitHandler = e => {
//         e.preventDefault();
//         Login(details);
//     }
//     return (
//         <div>
//              <div id="login-box">
//                 <div className="left-box">
//                     <h4> Sign Up</h4>
//                     {(error !== "") ? ( <div className="error">{error}</div> ) : ""}
//                     <form onSubmit={submitHandler}>
//                         <input className="text" type="text" id="username" name="username" placeholder="Username" onChange={e => setDetails({...details, username:e.target.value})} value={details.username } />
//                         <input className="text" type="text" id="email" name="email" placeholder="Email" onChange={e => setDetails({...details, email:e.target.value})} value={details.email } />
//                         <input className="password" id="password" type="password" name="password" placeholder="Password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password } />
//                         <input className="signup" id="signup" type="submit" name="signup-button" value="Sign Up" />
//                     </form>
//                 </div>
//                 <div className="right-box">
//                     <span className="signinwith">Sign in with<br />Social Network     </span>
//                     <button className="sociall facebook">Log in with Facebook</button>
//                     <button className="sociall twitter">Log in with Twitter</button>
//                     <button className="sociall google">Log in with Google+</button>
//                 </div>
//                 <div className="or">OR</div>
//             </div>
//         </div>
//     )
// }

// export default LoginForm





import React from 'react'

function LoginForm() {
    
    return (
        <div className="bodyy">
            <img className="wave" src={wave} />
    <div className="conttainer">
        <div className="immg">
            <img src={bg} />
        </div>
        <div className="login-content">
            <form className="fform" action="index.html">
                <img src={avatar} />
                <h2 className="title">Welcome</h2>
                <div className="input-div one">
                    <div className="i">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="div">
                        <input placeholder="Username" type="text" className="input" />
                    </div>
                </div>
                <div className="input-div pass">
                    <div className="i">
                        <i className="fas fa-lock"></i>
                    </div>
                    <div className="div">
                        <input placeholder="Password" type="password" className="input" />
                    </div>
                </div>
                <a className="forgot" href="#">Forgot Password?</a>
                <input type="submit" className="bttnn" value="Login" />
            </form>
        </div>
    </div>
        </div>
    )
}

export default LoginForm
