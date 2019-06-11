import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
import Div from './Component/HOC/Div'
import {Link, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'


function App() {
  return (
    <Provider store={store}>
    <Div>
    <div className="App">
      <Navbar/>
    </div>

    <Switch>
      
<Route exact path="/Home" component={Home} />

    </Switch>
    </Div>
  </Provider>
  );
}

export default App;


