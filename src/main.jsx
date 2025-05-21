import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Addproduct from './page/Addproduct.jsx';
import ProductList from './page/ProductList.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/Add-product' element={<Addproduct />} />
        <Route path='/Product-List' element={<ProductList />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
