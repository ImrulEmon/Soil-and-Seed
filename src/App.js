import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Error404 from './components/Error404/Error404';
import NavbarComp from './components/NavbarComp/NavbarComp';
function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComp></NavbarComp>
        <Header></Header>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='*' element={<Error404 />}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
