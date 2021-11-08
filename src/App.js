import './App.css';
import Footer from './components/Footer/Footer';
import Navbar2 from './components/Navbar/Navbar2';
import Home from './containers/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar2 />
        <div className='content'>
          <Routes>
            <Route exact path="/reveldrone" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
