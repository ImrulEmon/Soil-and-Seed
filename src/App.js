import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "@material-tailwind/react/tailwind.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Error404 from './components/Error404/Error404';
import NavbarComp from './components/NavbarComp/NavbarComp';
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';
function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComp></NavbarComp>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/details/:_id' element={<Details />} />
            <Route path='*' element={<Error404 />}></Route>
          </Routes>
          <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
