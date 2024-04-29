import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Mycart from './components/Mycart';
import Singlepage from './components/Singlepage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="mycarts" element={<Mycart />} />
          <Route path="singlepage/:id" element={<Singlepage />} />
        </Route>
      </Routes>
    </Router>
    

  </React.StrictMode>,
  document.getElementById('root')
);
