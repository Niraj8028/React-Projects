import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
    <div className="App">
    
      
      <Navbar tittle="Navbar"/>
      
      <TextForm/>
    </div>
    <About/>
    </>
  );
}

export default App;
