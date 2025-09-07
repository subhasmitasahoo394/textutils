import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

import Alert from './components/Alert'; 
// import {
//   BrowserRouter as Router,
//  Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // light or dark mode
  const [alert, setAlert] = useState(null);  // alert message

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 2000); // hide after 2 sec
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils- Dark Mode';
      
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils-Light Mode';
    }
  };

  return (
    <>
    {/* <Router> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
         {/* <Routes> */}
           {/* <Route exact path="/about" element={<About />} />  
          <Route exact path="/" element={ */}
            <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
          showAlert={showAlert}
       />  
          {/* }/> */}
        {/* </Routes> */}
      </div>
        {/* </Router> */}
    </>
  );
}

export default App;
