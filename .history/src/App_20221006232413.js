import React from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {

  const [darkMode, setDarkMode] = React.useState(false)

  const switchDarkMode = () => {
    setDarkMode(prev => !prev)
  }
  return (
    <div className="container">
      <Navbar toggleDarkMode={switchDarkMode} darkMode={darkMode}/>
      <Main darkMode={darMmode}/>
    </div>
  );
}

export default App;
