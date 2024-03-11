import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Product from './components/Product';
import Navigationbar from './components/Navigationbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Bill from './components/Bill';
import Payment from './components/Payment';
import ProductCard from './components/ProductCard';


function App() {
  return (
  <BrowserRouter>
    <Navigationbar/>
    <Routes>
    <Route path='/' element={<Product/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/bill' element={<Bill/>}/>
    <Route path='/payment' element={<Payment/>}/>
    <Route path='/products/:id' element={<ProductCard/>}/>
    </Routes>
    {/* <Product/> */}
  </BrowserRouter>
    
  );
}

export default App;
