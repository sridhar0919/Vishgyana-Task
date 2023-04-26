import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';

import App from './App';
import Homepage from './components/Homepage';
import Menucontent from './components/Menucontent';
import CheckoutButton from './components/CheckoutButton';
import Purchase from './components/Purchase';
import store from './store';
import axios from 'axios';

const routing = (
  <Router>
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/menucontent/:idMeal" element={<Menucontent />} />
      <Route exact path="/checkout-form" element={<CheckoutButton />} />
      <Route exact path="/purchase" element={<Purchase />} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Provider store={store}>{routing}</Provider>);
