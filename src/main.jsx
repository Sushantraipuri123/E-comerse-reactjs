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
import Men from './components/categories/Men';
import Women from './components/categories/Women';
import Electronics from './components/categories/Electronics';
import { store } from './app/store'
import { Provider } from 'react-redux'
import Address from './components/checkout/Address';

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="mycarts" element={<Mycart />} />
          <Route path="singlepage/:id" element={<Singlepage />} />
          <Route path="men" element={<Men/>} />
          <Route path="women" element={<Women/>} />
          <Route path="electronics" element={<Electronics/>} />
          <Route path="address" element={<Address/>} />
        </Route>
      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
