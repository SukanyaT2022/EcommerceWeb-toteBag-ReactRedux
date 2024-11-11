import './App.css';
import {useDispatch } from 'react-redux';
import { Routes, Route} from 'react-router-dom';
import { setData } from '../src/store/productSlice';
import { useEffect } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Favourite from './pages/Favourite';

function App() {
  const dispatch = useDispatch();

  // Fetch data from api and store in redux store from counterSlice.js
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        // step 1line 19 to 21 crate custume qty coz no qty in api--then step 2 increae qty  we use on card.js line 67
        const updatedData = data.products.map(product => ({
          ...product,
          quantity: 1
        }));
        dispatch(setData(updatedData))
      });
      //dispatch help to call function from redux
  }, []);

  return <div>
    {/* // react router dom 2024 skeleton v6 connect the page--install react router dom npm */}
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Products />} />
        <Route path="favourite" element={<Favourite />} />
      </Routes>
  

  </div>;
}

export default App;
