import React, { useEffect, useState } from "react";
import { Home, Person, ChatBubble, CameraAlt, ShoppingCart,ReceiptLong,Category } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

export default function BottomBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const iduser = localStorage.getItem("id");
  const menuItems = [
    { label: "Home", icon: <Home />, path: "/" },
    { label: "Products", icon: <Category />, path: "/" }, 
    { label: "Profile", icon: <Person />, path: "/getProFile" },
    { label: "Cart", icon: <ShoppingCart />, path: "/cart" },
    { label: "Order History", icon: <ReceiptLong />, path: `/order/${iduser}`},
   
  ];
  

  const [activeIndex, setActiveIndex] = useState(0);

  
  useEffect(() => {
    const index = menuItems.findIndex((item) => item.path === location.pathname);
    if (index !== -1) setActiveIndex(index);
  }, [location.pathname]); 

  return (
    <div className="navigation">
      <ul>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`list ${index === activeIndex ? "active" : ""}`}
            onClick={() => {
              setActiveIndex(index);
              navigate(item.path);
              if (item.label === "Products") {
                window.scrollTo({ top: 1600, behavior: "smooth" });
              } else {
                window.scrollTo({ top: 10, behavior: "smooth" });
              }
            }}
          >
            <a href="#">
              <span className="icon">{item.icon}</span>
              <span className="text">{item.label}</span>
            </a>
          </li>
        ))}
        <div className="indicator" style={{ transform: `translateX(${activeIndex * 70}px)` }}></div>
      </ul>
    </div>
  );
}
