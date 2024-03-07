import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SelectClothes from './components/SelectClothes';
import SelectedSchool from './components/SelectSchool';
import Products from './components/Product';
import Checkout from './components/Checkout';
import SelectCategory from './components/SelectCategory';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SelectedSchool />} />
        <Route path='/SelectCategory' element={<SelectCategory />} />        <Route path='/SelectClothes' element={<SelectClothes />} />
        <Route path='/Product' element={<Products />} />
        <Route path='/Checkout' element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
