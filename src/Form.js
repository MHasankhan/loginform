import React, { Component } from "react"

import Welcome from "./WelcomePage";



//Form Component 
class Form extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            password: "",
            isLogedIn: false
        }
    }
//For handling inputs fields which updates the username and password in state
    handleOnchange = (evt) => {
        evt.preventDefault()
        this.setState({ [evt.target.name]: evt.target.value })
    }
//Login function validates users
    handleLogin = (evt) => {
        evt.preventDefault();
        let { userName, password } = this.state;
        if (!userName || !password) {
            alert("Enter user name or password")
            return;
        }
//if user verified change state 
        if (userName === "Admin" && password === "Admin") {
            this.setState({ isLogedIn: true })
        }
        else {
            alert("Invalid username or password!!!")
        }
    }
//Logout function change state to comback on loginpage
    handleLogout = () => {
        this.setState({ isLogedIn: false })
    }

    render() {
        //destructring 
        const { isLogedIn } = this.state
        return (
            //turnary operator to check state and decision
            //this.handlelogout provide logout function to welcome component
            isLogedIn ? <Welcome handleLogout={this.handleLogout}/> :
                <form onSubmit={this.handleLogin} style={{border:'solid' ,alignContent:'middle',borderRadius:'10px',paddingLeft:'50%',}} >
                    <label>
                         UserName:<br/>
                        <input onChange={this.handleOnchange} placeholder="UserName" name="userName" />
                    </label>
                    <br/>
                    <label>
                         Password:<br/>
                    <input onChange={this.handleOnchange} type="password" placeholder="Enter password" name="password" />
                    </label>
                    <br/>
                    <button type="submit">Login</button>
                </form>
        )
    }
}

export default Form;
