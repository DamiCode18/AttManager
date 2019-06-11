import React, {Component} from 'react'
import './UserProfile.css'
import Div from '../HOC/Div'


class UserProfile extends Component {
    render(){
        return(
            <Div>
        <section className="container">
                   <div className="card usercard mb-3">
                <div className="card-body">
                <div className="card-header">
                <h2>Welcome To Techsavvy!</h2>
                </div>
                        
                <p>SignIn</p><input type="checkbox" className="mb-3 mt-2 btn btn-primary"></input>
                <div><input type="checkbox" className="m-auto btn btn-primary">SigOut</input></div>
               </div>
                
           </div>
        </section>
                </Div>
            );
    }
}

export default UserProfile;