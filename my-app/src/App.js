// import logo from './logo.svg';
import './App.css';
//import the navigation component and bootstrap css file
import { Navigation } from './components/Navbar';
import { About } from './components/AboutMe';
import { Portfolio } from './components/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
