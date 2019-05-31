import React, {useState} from 'react'
import './Signup.css'
import Div from '../HOC/Div'
import {Switch, Link, Route, withRouter} from 'react-router-dom'
import firebase from '../Firebase/firebase'
function Signup(props) {
        const[email, setEmail] = useState('')
        const [fullname, setFullname] = useState('')
        const [password, setPassword] = useState('')

        return(
            <Div>

            
            <div className="card mb-3 signupcard">
                <div className="card-header">Signup</div>
                <div className="card-body">
<form onSubmit={e=>e.preventDefault() && false}>
<div className="form-group">
<label htmlFor="email">Email*</label>
<input value={email} onChange={e=>setEmail(e.target.value)}
type="email" 
className="form-control form-control-lg" 
name="email" 
placeholder="Enter Your Email"/>

</div>
<div className="form-group">
<label htmlFor="name">Fullname*</label>
<input value={fullname} onChange={e=>setFullname(e.target.value)} 
type="text" 
className="form-control form-control-lg" 
name="name" 
placeholder="Enter Your Username"/>

</div>
<div className="form-group">
<label htmlFor="password">Password*</label>
<input value={password} onChange={e=>setPassword(e.target.value)}
type="password" 
className="form-control form-control-lg" 
name="pssword" 
placeholder="Enter Your Password"/>
</div>
<Link to="" type="submit" className="btn btn-primary" onClick={onRegister}>Submit</Link>
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
         }   
         
   } 
        }
export default Signup;