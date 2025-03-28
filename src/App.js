import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import { FacebookProvider, Comments } from 'react-facebook';
import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import AddProduct from './product/AddProduct';
import EditProduct  from './product/EditProduct';
import ViewProduct from './product/ViewProduct';

import Header from './layout/Header';
import Slideer from './layout/Slideer';
import Footer from './layout/Footer';
import Product from './layout/Product';
import MegaMenu from './layout/MegaMenu';
import Search from './layout/Search';

import Home from './page/Home';
import Login from './page/Login';
import { Link } from 'react-router-dom';
import DetailProduct from './layout/DetailProduct';
import ListProduct from './addToCart/ListProduct';
import Cart from './addToCart/Cart';
import ProductDetail from './addToCart/ProductDetail';
import ProductList from './addToCart/ProductList ';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import OrderHistory from './page/OrderHistory';
import Register from './page/Register';
import Dankboad from './admin/Dankboad';
import ForgotPassWord from './page/ForgotPassWord';
import ResetpassWord from './page/ResetpassWord';
import PageNotError from './page/PageNotError';
import FeedBack from './layout/FeedBack';
import Profile from './layout/Profile';
import ScrollToTop from './layout/ScrollToTop';
import ScrollNumber from 'antd/es/badge/ScrollNumber';
import { AnimatePresence, motion } from 'framer-motion';
import BottomBar from './layout/BottomBar';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const [cartItemCount, setCartItemCount] = useState(0);
  const[user,setUser]=useState({
    isLogin: localStorage.getItem("token")!=null,
    
  });
  const onLogout = ()=>{
    setUser({isLogin : false})
}
const [open, setOpen] = React.useState(false);









const handleClick = () => {
  setOpen(true);
};

const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};
const [products, setProducts] = useState([]);
const [cart, setCart] = useState([]);
const [cartItems, setCartItems] = useState([]);
const [oder, setOrder] = useState(
  {
    "cart": {
      "userID": "testID",
      "address": "Long An",
      "status": "0",
      "price": "100"
    },
    "listProduct":
    cartItems
  }

);
const [oderNew, setOderNew] = useState(null);

const handleOderNew = (newOder) => {
  setOderNew(newOder);
};
  useEffect(() => {
    const cartItemsFromStorage = localStorage.getItem('cartItems');
    if (cartItemsFromStorage) {
      setCartItems(JSON.parse(cartItemsFromStorage));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = product => {
   
    const existingCartItem = cartItems.find(item => item.id === product.id);
    if (existingCartItem) {
      setCartItems(prevCartItems => {
        const newCartItems = prevCartItems.map(item => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
          
        });
        return newCartItems;

        alert("Da them vao gio hang !");
        
      });
    } else {
      setCartItems(prevCartItems => [
        ...prevCartItems,
        { ...product, quantity: 1, },
       
       
      ]);
      
      setCartItemCount(prevCount => prevCount + 1);
      handleClick()
      
    }
  
  };
   const handleRemoveCartItem = product => {
  setCartItems(prevCartItems =>
    prevCartItems.filter(item => item.id !== product.id)
    
  );
  setCartItemCount(prevCount => prevCount - 1);
};
const getTotalPrice = () => {
  let totalPrice = 0;
  cartItems.forEach(item => {
    totalPrice += item.price * item.quantity;
  });
  localStorage.setItem("total",totalPrice)
  return totalPrice;
}
;
const initialOptions = {
  "client-id": "AWCcjCYC4hYJEDfetxTmTmA0G6bedlD582VsPaUC13pPFPWWKPoWR_xedN3unAHOPfGb2cjNOysE48eb",
  currency: "USD",
  intent: "capture",
};


  const pageVariants = {
    initial: { opacity: 0, x: "-100vw" },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: "100vw" },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };
  return (
   
    <div className="App" key={user.isLogin}>  
    
      <Router>
      
      <AnimatePresence mode="wait">
      <ScrollToTop></ScrollToTop>
        <Routes>
          <Route exact path='/' element={< Home cartItemCount={cartItemCount}/ > }> </Route>
          <Route className="node"  path='/feedback' element={<FeedBack />}></Route>
          <Route className="node"  path='/getProduct/:id' element={<ViewProduct />}></Route>
          <Route className="node"  path='/error' element={<PageNotError />}></Route>
          <Route exact path='/login' element={<Login cartItemCount={cartItemCount}/>}> </Route>
          <Route exact path='/register' element={<Register cartItemCount={cartItemCount}/>}> </Route>
          <Route exact path='/addProduct' element={<AddProduct/>}></Route>
          <Route exact path="/doakboard" element={<Dankboad></Dankboad>} />
        <Route className="node" exact path='/fogotPassWord' element={<ForgotPassWord/>}></Route>
        <Route className="node" exact path='/reset_password/:token' element={<ResetpassWord />}></Route>
          <Route className="node" exact path='/getProduct/:id' element={<ViewProduct />}></Route>
          <Route className="node" exact path='/getProFile' element={<Profile />}></Route>
         
          <Route exact path='/order/:iduser' element={<OrderHistory cartItemCount={cartItemCount}/>}></Route>
          <Route
          path="/products/:id"
          element={
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                transition={{ duration: 1 }}
              >
            <ProductDetail
              onAddToCart={handleAddToCart}
              cartItemCount={cartItemCount}
              open={open}
              handleClose={handleClose}
              Alert={Alert}
              handleClick={handleClick}
            />
            </motion.div>
          }
        />
          <Route exact path='/detailProduct/:id' element={<DetailProduct/> }></Route>
          <Route exact path='/editProduct/:id' element={<EditProduct/>}></Route>
          <Route path="/cart" element={
                  <Cart cartItems={cartItems} setCartItems={setCartItems}
                  onRemoveCartItem={handleRemoveCartItem}
                  onsetCart={setCartItems}
                  oder={oder}
                  cartItemCount={cartItemCount}
                  getTotalPrice={getTotalPrice()}
                  setCartItemCount={setCartItemCount}
                   />
                 
                } />
                
         
        </Routes> 
   
     
        </AnimatePresence>
        
      </Router>
      
      
    </div>
  
  );
};

export default App;



