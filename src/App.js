  // import logo from './logo.svg';
  import './App.css';
  import Navbar from './components/Navbar';
  import React, { useState } from 'react';
  // import About from './components/About';
  import Textform from './components/Textform';
  
  function App() {
    const [mode, setMode] = useState('light'); //whether dark mode is ecabled or not
    const toggleMode = ()=>{
      if(mode ==='light'){
      setMode('dark');
      document.body.style.background = '#042743';
      }
      else{
      setMode('light');
      document.body.style.background = 'white';
      }
    }
    return (
      <>
  <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
  <div className="container my-3">
  <Textform heading="Enter the text to analyze below" mode={mode}/>        
   {/* <About/> */}
  </div>
  {/* <Navbar/> */}
      </>
    
      );
  }

  export default App;

