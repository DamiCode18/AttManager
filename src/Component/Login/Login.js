import React, {Component, useState} from 'react'
import Div from '../HOC/Div'
import {Link, Switch, Route, withRouter} from 'react-router-dom'
import './Login.css'
import UserProfile from '../UserProfile/UserProfile'
import firebase from 'firebase'


const Login =(props)=> {
     const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
        return(
            <Div>
            
                    <div className="card logincard mb-3">
                        <div className="card-header">Login</div>
                        <div className="card-body">
<form onSubmit={e=>e.preventDefault() && false}>
    <div className="form-group">
    <label htmlFor="email">Email*</label>
    <input value={email} onChange={e=>setEmail(e.target.value)}
    type="email"
    required 
    id="email"
    className="form-control form-control-lg" 
    name="email" 
    placeholder="Enter Your Email"/>
    </div>
    <div className="form-group">
    <label htmlFor="password">Password*</label>
    <input value={password} onChange={e=>setPassword(e.target.value)} 
    type="password"
    required
    id="password" 
    className="form-control form-control-lg" 
    name="password" 
    placeholder="Enter Your Password"/>
    </div>

    <button type="submit" className="btn btn-primary" 
    onClick={login}>Sign In</button>
    <div className="m-auto"><p>You Don't Have An Account yet?</p>
    <Link to="/Signup" className="btn btn-danger"> Create Account </Link>
    </div>
</form>
      </div>
          </div>
             </Div> 
        );

        async function login(){
            try{
                await firebase.login(email, password)
                props.history.replace('/UseProfile')

            } catch(error){
                alert(error.message)
                props.history.replace('/Login')
            }

        }
    }

export default withRouter(Login);