import React, {useState} from 'react'
import './Signup.css'
import Div from '../HOC/Div'
import {Link, withRouter} from 'react-router-dom'
// import * as moment from 'moment'
// import firebase from 'firebase'
import firebase from '../firebase'


function Register(props) {
        const[email, setEmail] = useState('')
        const [firstname, setFirstname] = useState('')
        const [lastname, setLastname] = useState('')
        const [password, setPassword] = useState('')

        return(
            <Div>

            
            <div className="card mb-3 signupcard">
                <div className="card-header"><i className="fas fa-lock mr-2"/>Signup</div>
                <div className="card-body">
<form onSubmit={e=>e.preventDefault() && false}>
<div className="form-group">
<label htmlFor="email">Email*</label>
<input value={email} onChange={e=>setEmail(e.target.value)}
type="email"
autoFocus
required 
className="form-control form-control-lg" 
name="email" 
placeholder="Enter Your Email"/>
</div>
<div className="form-group">
<label htmlFor="name">Firstname*</label>
<input value={firstname} onChange={e=>setFirstname(e.target.value)} 
type="text" 
required
className="form-control form-control-lg" 
name="name" 
placeholder="Enter Your Firstname"/>
</div>
<div className="form-group">
<label htmlFor="name">Lastname*</label>
<input value={lastname} onChange={e=>setLastname(e.target.value)} 
type="text" 
required
className="form-control form-control-lg" 
name="name" 
placeholder="Enter Your Lastname"/>
</div>
<div className="form-group">
<label htmlFor="password">Password*</label>
<input value={password} onChange={e=>setPassword(e.target.value)}
type="password" 
required
className="form-control form-control-lg" 
name="password" 
placeholder="Enter Your Password"/>
</div>
<button type="submit" className="btn btn-primary" 
onClick={onRegister}>SignUp</button>
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
             await firebase.register(email, firstname, lastname, password)
         props.history.replace('/Login')
         } catch(error){
             alert(error.message)
             props.history.replace('/Signup')
         }   
         
   } 
        }
export default withRouter(Register);