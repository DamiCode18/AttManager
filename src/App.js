import React, {Component} from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import Login from './Component/Login/Login'
import Signup from './Component/Signup/Signup'
import User from './Component/User/User'
import Div from './Component/HOC/Div'
import {Switch, Route} from 'react-router-dom'
// import {Provider} from 'react-redux'
// import store from './store'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'


class App extends Component {
  render(){
  return (
  
    <Div>
    <div className="App">
      <Navbar/>
    </div>

    <Switch>
      
<Route exact path="/Home" component={Home} />

    </Switch>
    </Div>

  );
}
}
export default App;


