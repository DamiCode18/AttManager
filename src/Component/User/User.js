import React from 'react'
import Div from '../HOC/Div'
import './User.css'
import {Link} from 'react-router-dom'


const User =()=>{
    return(
        <Div>
            <section>
            <div className="card homecard mb-3">
            	<div className="card-body">
                <div className="card-header">
                <h2>Welcome To Techsavvy!</h2>
                </div>
            		
                <div type="button" className="mb-3 mt-2 btn btn-primary">Login</div>
                <div type="button" className="m-auto btn btn-primary">Signup</div>
            
            </div>
             </div>

            </section>
        </Div>

    );
}

export default User;