import React,{flag} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect
} from "react-router-dom";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePreviewUrl: "",
      redirectToHome: false,
      flag: true
    };
    
  

  this.handleClick = this.handleClick.bind(this);
  }
  handleClick=()=>{
    this.setState(state=>({flag:!state.flag}));
}
myChangeHandler = (event) => {
  this.setState({username: event.target.value});
}
myChangeHandler2 = (event) => {
  this.setState({password: event.target.value});
}

  render() {
    if (this.state.redirectToHome) {
      //return <Redirect to="/home" />;
    }

   
    return (
        <div>
          <div value={this.state.flag}/>
          {this.state.flag &&  <div className="login-page">
        <div className="form">
          <form className="register-form">
            <input type="text" placeholder="name"/>
            <input type="password" placeholder="password"/>
            <input type="text" placeholder="email address"/>
            <button >create</button>
            <p className="message" onClick={this.handleClick}>Already registered? </p>
          </form>
          </div>
          </div>}
            {
              !this.state.flag && 
              <div className="login-page">
              <div className="form">
        <form className="login-form" onSubmit={this._addUser}>
            <input type="text" placeholder="username" value={this.state.username} onChange={this.myChangeHandler}/>
            <input type="password" placeholder="password" value={this.state.password} onChange={this.myChangeHandler2}/>
            <button >login</button>
            <p className="message" onClick={this.handleClick}>Not registered? Create an account</p>
          </form>
        </div>
      </div>  
            }
        </div>
    );
  }

  _addUser = (event) => {
    event.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password
    };
    alert(user.username)
    console.log(this.state.username)
    fetch("http://ec2-54-159-137-67.compute-1.amazonaws.com:5000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => {
        
        if (res.ok) 
        {
          return res.json();
        }
      })
      .then(res => {
        localStorage.setItem('token',res.token)
        this.setState({ redirectToHome: true });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
export default Login;
