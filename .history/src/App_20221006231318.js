import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  const mode = () => {

  }

  const switchDarkmode = () => {

  }
  return (
    <div className="container">
      <Navbar/>
      <Main darkMode={mode}/>
    </div>
  );
}

export default App;
