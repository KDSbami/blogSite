import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from 'react-router-dom';
class Navbar2 extends Component {
    render() {
        return (
            
           
           
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <Link className="navbar-brand" to="/jv4" >Home</Link>
                            </div>
                            <div className="nav navbar-nav navbar-right">
                                <div>
                                
                                <select>
                                    <option value="Profile" selected>Profile</option>
                                    <option value="Settings" >Settings</option>
                                    <option value="Friends">Friends</option>
                                </select>&emsp;
                                <Link exact to="/addBook">{'AddBook'}</Link>
                                
                                </div>
                                
                            </div>
                        </div>
                    </nav>
                </div>
            </div >
        
          
        
        
        )
    }
}

export default Navbar2;