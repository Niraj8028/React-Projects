import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alerts from './components/alerts';
import { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (Message, type) => {
    setAlert({
      msg: Message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <div>
      <Navbar title="Navbar" />
      <Alerts alert={alert} />
      <div className="App">
          <Routes>
            <Route path="/about" exact element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} />} />
          </Routes>
      </div>
    </div>


  );
}

export default App;
