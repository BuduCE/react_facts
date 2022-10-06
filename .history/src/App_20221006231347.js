import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  const mode = () => {

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
