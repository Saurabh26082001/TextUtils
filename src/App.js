import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#234f';
      showAlert("Dark mode is enabled:", "Success");
      document.title = 'TextUtils - Light Mode';
      // setInterval(()=>{
      //     document.title = 'Download this app now'
      // }, 2000)
      // setInterval(()=>{
      //     document.title = 'Your phone containe virus'
      // }, 1000)
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled:", "Success");
      document.title = 'TextUtils - Dark Mode';
    }
  }
  return (
    <>
      <Navbar title="textUtil" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm alert={showAlert} heading="Enter your text to analyse" mode={mode} />
      </div>
    </>
  );
}

export default App;
