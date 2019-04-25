import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            email: '',
            redirect: false
        }
    }

    handleUsername = (e) => {
        this.setState({ username: e.target.value })
    }

    handlePassword = (e) => {
        this.setState({ password: e.target.value })
    }

    handleEmail = (e) => {
        this.setState({ email: e.target.value })
    }

    handleClick = () => {
        axios.post('/api/register', {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }).then(response => {
            this.setState({ redirect: true })
        })
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <input
                    onChange={this.handleUsername}
                    placeholder="Username"
                />
                <br />
                <input
                    type='password'
                    onChange={this.handlePassword}
                    placeholder="Password"
                />
                <br />
                <input
                    type='email'
                    onChange={this.handleEmail}
                    placeholder="Email"
                />
                <br />
                <button
                    onClick={this.handleClick}>
                    Register
                </button>


            </div>
        )
    }
}


export default Register