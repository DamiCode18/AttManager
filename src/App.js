import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar'
import { CircularProgress } from '@material-ui/core'
import firebase from './Component/firebase'
import User from './Component/User/User'
import Div from './Component/HOC/Div'
import { Switch, Route } from 'react-router-dom'

export default function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false)
  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val)
    })
  }
  )

  return firebaseInitialized !== false ? (

    <Div>
      <Navbar/>
      <div className="App">
      </div>

      <Switch>

        <Route exact path="/User" component={User} />

      </Switch>
    </Div>

  ) :
    <div id="loader"><CircularProgress /></div>
}



