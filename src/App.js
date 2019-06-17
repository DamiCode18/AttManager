import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar'
import {CircularProgress} from '@material-ui/core'
import firebase from './Component/firebase'
// import Home from './Component/Home/Home'
// import Login from './Component/Login/Login'
// import Signup from './Component/Signup/Signup'
import User from './Component/User/User'
import Div from './Component/HOC/Div'
import {Switch, Route} from 'react-router-dom'
// import {Provider} from 'react-redux'
// import store from './store'
// import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'


export default function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false)
useEffect(()=>{
  firebase.isInitialized().then(val=>{
    setFirebaseInitialized(val)
  })
}
)

  return firebaseInitialized !== false ?(
  
    <Div>
    <div className="App">
      <Navbar/>
    </div>

    <Switch>
      
       <Route exact path="/User" component={User} />

    </Switch>
    </Div>

  ) : 
  <div id="loader"><CircularProgress/></div>
}



