import React from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {

  const [darkMode, setDarkMode] = React.useState(false)

  const mode = () => {
    set
  }

  const switchDarkMode = () => {

  }
  return (
    <div className="container">
      <Navbar toggleDarkMode={switchDarkMode} darkMode={mode}/>
      <Main darkMode={mode}/>
    </div>
  );
}

export default App;
