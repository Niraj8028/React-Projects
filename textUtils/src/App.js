import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alerts from './components/alerts';
import { useState } from 'react';

function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(Message,type)=>{
    setAlert({
      msg:Message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <div className="App">
    
      
      <Navbar tittle="Navbar"/>
      <Alerts alert={alert}/>
      <TextForm showAlert={showAlert}/>
    </div>
    <About/>
    </>
  );
}

export default App;
