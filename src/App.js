import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header/Header';
import Home from './components/Home/Home';
import ProductItem from './components/ProductItem/ProductItem';
import Product from './components/Product/Product';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import Footer from './components/common/Footer/Footer';

function App() {
  return (
    <BrowserRouter >
     <Header></Header>
     <Routes>
       <Route path="/home" element={<Home />} />
       <Route exact path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
     </Routes>
     
     <Product></Product>
     <Footer></Footer>
     
    </BrowserRouter>
  );
}

export default App;
