
import React,{useState,useEffect} from 'react'
import Login from '../page/Login';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserIcon } from '@heroicons/react/solid';
export default function Header({cartItemCount}) {
  const iduser = localStorage.getItem("id");
  const roles = JSON.parse(localStorage.getItem('roles'));
  let navigate=useNavigate();
  
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const items = [
    "Applies to orders of $50 or more.",
    "Returns are always free.",
    "Limited time offer: 20% off!",
    "Check out our new collection!"
  ];
  
    const[user,setUser]=useState({
        email:"",
        img : "",
        isLogin: localStorage.getItem("token")!=null,
       
      });

      const  logout =()=>{
      localStorage.removeItem("token");
      localStorage.removeItem("nameuser");
      onLogout();
    }
    const onDB = ()=>{
      navigate("/doakboard")
  }
   
    const onLogout = ()=>{
        setUser({isLogin : false})
    }
        const clickCart=()=>{
       
        
          if(document.getElementById('cart').style.display.endsWith("none")){
            document.getElementById('cart').style.display="block";
          }else{
            document.getElementById('cart').style.display="none";
          }
          
       
           
       
       
    }

    const th=localStorage.getItem("token");
    const  themail=localStorage.getItem("nameuser");
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentItemIndex(prevIndex => (prevIndex + 1) % items.length);
      }, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval);
    }, [items.length]);
    const toggleDropdown = () => {
      const dropdown = document.getElementById('userDropdown');
      dropdown.classList.toggle("show-dropdown");
    };
    
  return (
                 <div className='tsh'>
   
    
    <div className="header">
    
    <div className="top-header">
   
        <div className="wrap">
            <div className="top-header-left" >
                <ul>
                    
                    
                    <li><a className="cart"   onClick={clickCart}><span id="clickme" >  </span></a></li><span className='countcart'>{cartItemCount+""}</span>
                   
                    <div id="cart">Your Cart is Empty <span>( {cartItemCount+""}) 
                    <Link className="btn btn-outline-success" type="submit" to="cart">Seen</Link>
                    </span></div>
                    
                    <li><a className="info" href="#"><span> </span></a></li>
                </ul>
            </div>
            <div className="top-header-center">
                <div className="top-header-center-alert-left">
                    <h3>FREE DELIVERY : </h3>
                </div>
                <div className="top-header-center-alert-right">
                    <div className="vticker">
                      <ul>
                      <li className='vticker_li'>{items[currentItemIndex]}<label>{currentItemIndex === 0 && " Returns are always free."}</label></li>                      </ul>
                    </div>
                </div>
                <div className="clear"> </div>
            </div>
            <div className="top-header-right">
           
                <ul>
                
                {th!=null ?  ( roles && roles.length > 0 && roles[0].authority === 'ADMIN' ? (<li><a className='name_user_login' href="login.html">{themail}</a> 
                  <div className="user-menu">
  <button className="button" onClick={toggleDropdown}>
  <img className='img_view_user' src='../images/user.png'></img>
  </button>
  <div id="userDropdown" className="dropdown-content">
    <button onClick={logout}>Logout</button>
    {roles && roles[0].authority === 'ADMIN' && (
      <button onClick={onDB}>Admin</button>
    )}
    <Link  to={`/order/${iduser}`}><button>Order History</button></Link><br></br>
    <Link  to={`/getProFile`}><button>User detail</button></Link><br></br>
  </div>
</div>
                  <span> </span></li>):<li><a href="login.html">{themail}</a>
                  <div className="user-menu">
  <button className="button" onClick={toggleDropdown}>
  <img className='img_view_user' src='../images/user.png'></img>
  </button>
  <div id="userDropdown" className="dropdown-content">
    <button onClick={logout}>Logout</button>
    <Link  to={`/order/${iduser}`}><button>Order History</button></Link><br></br>
    <Link  to={`/getProFile`}><button>User detail</button></Link><br></br>
  </div>
</div>
                 <span> </span></li>) :
                <li> <Link className="btn btn-outline-secondary " type="submit" to="login">Login</Link> <span> </span>  <li><a href="register">Join</a></li></li>
              }
                   
                </ul>
            </div>
            <div className="clear"> </div>
        </div>
    </div>
    </div>
   
    </div>
  )
}
