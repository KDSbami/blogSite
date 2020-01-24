import React, { Component } from 'react';
import Signup from './../SignUp';
import Signin from './../SignIn';
import AddPost from './../AddPost';
import Home from './../Home';
// import App from './../../App.js';
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from 'react-router-dom';
class Navbar extends Component {
    constructor(props) {
        super(props);
        let isAuth = localStorage.getItem('isAuthenticated') //wont leave for anywhere but will be true or false
            this.state = { isAuthenticated: isAuth==='true'};// 
            console.log(this.state.isAuthenticated) //value logging
      }


    render() {
        let content = !!this.state.isAuthenticated ?// right here conditional statement content will get one of the 2 navbar codes.
        (
            <div className="row" style={{width:'102%',zIndex:'1',borderBottomStyle:'solid',backgroundColor:'#101820FF',position:'fixed'}}>
                <div className="col">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <Link className="navbar-brand" to="/home" >Home</Link>
                            </div>
                            <div className="">
                                <Link className="navbar-brand" to="/home">BLOG with ME</Link> 
                            </div>
                            <div className="nav navbar-nav navbar-right">
                                <div>
                                <Link exact to="/users/jv4">{"Profile"}</Link>&nbsp;|&nbsp;
                                <Link exact to="/AddPost">{"Add"}</Link>&nbsp;|&nbsp;
                                <Link exact to="/home">{"Log Out"}</Link>
                                </div>
                                
                            </div>
                        </div>
                    </nav>
                </div>
            </div >
        ):(
            <div className="row" style={{width:'102%',zIndex:'1',borderBottomStyle:'solid',backgroundColor:'#101820FF',position:'fixed'}}>
            <div className="col">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/home" >Home</Link>
                        </div>
                        <div className="">
                            <Link className="navbar-brand" to="/home">BLOG with ME</Link> 
                        </div>
                        <div className="nav navbar-nav navbar-right">
                            <div>
                          
                            {/* with signup if false */}
                            <Link exact to="/Signin">{"Sign In"}</Link>&nbsp;|&nbsp;
                            <Link exact to="/Signup">{'Signup'}</Link>
                            
                            </div>
                            
                        </div>
                    </div>
                </nav>
            </div>
        </div >
        )
        return (
                        <div className="App">
                            {content}
                        </div>
                    );
        
    }
}

export default Navbar;