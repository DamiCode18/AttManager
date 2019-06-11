import React, {useState} from 'react'
import './Signup.css'
import Div from '../HOC/Div'
import {Switch, Link, Route, withRouter} from 'react-router-dom'
import * as moment from 'moment'
import firebase from 'firebase'


function Signup(props) {
        const[email, setEmail] = useState('')
        const [fullname, setFullname] = useState('')
        const [password, setPassword] = useState('')

        return(
            <Div>

            
            <div className="card mb-3 signupcard">
                <div className="card-header"><i className="fas fas-login"></i>Signup</div>
                <div className="card-body">
<form onSubmit={e=>e.preventDefault() && false}>
<div className="form-group">
<label htmlFor="email">Email*</label>
<input value={email} onChange={e=>setEmail(e.target.value)}
type="email"
required 
className="form-control form-control-lg" 
name="email" 
placeholder="Enter Your Email"/>
</div>
<div className="form-group">
<label htmlFor="name">Fullname*</label>
<input value={fullname} onChange={e=>setFullname(e.target.value)} 
type="text" 
required
className="form-control form-control-lg" 
name="name" 
placeholder="Enter Your Username"/>
</div>
<div className="form-group">
<label htmlFor="password">Password*</label>
<input value={password} onChange={e=>setPassword(e.target.value)}
type="password" 
required
className="form-control form-control-lg" 
name="pssword" 
placeholder="Enter Your Password"/>
</div>
<button type="submit" className="btn btn-primary" onClick={onRegister}>SignUp</button>
<div className="m-auto"><p>Already Have an Account!</p>
    <Link to="/Login" className="btn btn-success signup"> Go Back To Login </Link>
        </div>
</form>

                </div>

            </div>


            </Div>
        );

        async function onRegister(){
         try{
             await firebase.register(email, fullname, password)
         props.history.replace('/Login')
         } catch(error){
             alert(error.message)
             props.history.replace('/Signup')
         }   
         
   } 
        }
export default Signup;