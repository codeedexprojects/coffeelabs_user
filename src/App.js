import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Home from './Components/Home';
import Blogs from './Pages/Blogs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Nav from './Components/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation appears on all pages */}
        <Nav />

        {/* Page-specific content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
