import './app.css';
import React from 'react';
import Login from './components/login/login';


const App = ({ authService}) => {
  return (
    <Login authService={authService}/>
  )
}




export default App;