// import logo from './logo.svg';
import './App.css';
//import the navigation component and bootstrap css file
import { Navigation } from './components/Navbar';
import { About } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
