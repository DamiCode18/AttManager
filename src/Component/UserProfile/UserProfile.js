import React from 'react'
import './UserProfile.css'
import Div from '../HOC/Div'


const UserProfile=()=>{
	return(
		<Div>
	<section>
           	<div className="card usercard mb-3">
        	<div className="card-body">
            <div className="card-header">
            <h2>Welcome To Techsavvy!</h2>
            </div>
            		
            <input type="checkbox" className="mb-3 mt-2 btn btn-primary">SignIn</input>
            <div><input type="checkbox" className="m-auto btn btn-primary">SigOut</input></div>
           </div>
            
       </div>
    </section>
            </Div>
		);
}

export default UserProfile;