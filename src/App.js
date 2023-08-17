
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Navbar from './components/navbar';
import MyRouter from './components/myRouter';

function App() {
  return (
    <div>
      <Navbar sticky="top" className="navbar"></Navbar>
      <MyRouter></MyRouter>
    </div>
  );
}

export default App;
