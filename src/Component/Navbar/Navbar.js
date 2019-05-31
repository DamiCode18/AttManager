import React from 'react'
import Div from '../HOC/Div'
import {Switch, Link, Route} from 'react-router-dom'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Home from '../Home/Home'


const Navbar =()=>{
return(
<Div>
<section className="container-fluid">
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
<a className="navbar-brand" href="/">SAVVY</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="Toggle-navigation">
	<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navBar">
<ul className="navbar-nav ml-auto">
<li className="nav-item active">
<Link className="nav-link" to="/Login">Login<span className="sr-only"></span></Link>
</li>
<li className="nav-item">
<Link to="/Signup" className="nav-link">Signup</Link>
</li>
</ul>
</div>
</nav>

</section>

<Switch>
	<Route exact path ="/" component = {Home} />
	<Route path="/Login" component = {Login}/>
	<Route path="/Signup" component = {Signup}/>
</Switch>

</Div>

);

}

export default Navbar;