import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"

import Navbar from './components/navbar';
import Catalog from './pages/catalog';
import Admin from './pages/admin';
import Home from './pages/home';
import About from './pages/about';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from './pages/NotFound';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={ <Home />}></Route>
        <Route path="/home" element={ <Home />}></Route>
        <Route path="/about" element={ <About />}></Route>
        <Route path="/catalog" element={ <Catalog />}></Route>
        <Route path="/admin" element={ <Admin />}></Route>
        <Route path="*" element={ <NotFound />}></Route>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
