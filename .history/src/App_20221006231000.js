import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  const mode = () => {

  }
  return (
    <div className="container">
      <Navbar/>
      <Main darkMode={mode}/>
    </div>
  );
}

export default App;
