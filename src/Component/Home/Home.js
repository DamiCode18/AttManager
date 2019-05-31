import React from 'react'
import Div from '../HOC/Div'
import './Home.css'
import {Link, Switch, Route} from 'react-router-dom'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'

const Home =()=>{
    return(
        <Div>
            <section>
            <div className="card homecard mb-3">
            	<div className="card-body">
                <div className="card-header">
                <h2>Welcome To Techsavvy!</h2>
                </div>
            		
                <Link to="/Login" type="button" className="mb-3 mt-2 btn btn-primary">Login</Link>
                <div><Link to="/Signup" type="button" className="m-auto btn btn-primary">Signup</Link></div>
            	</div>
            
            </div>
             

            </section>
<Switch>
<Route exact path="/Login" component={Login}/>
<Route exact path="/Signup" component={Signup}/>
</Switch>
        </Div>

    );
}

export default Home;