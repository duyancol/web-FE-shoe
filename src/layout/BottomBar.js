import React, { useEffect, useState } from "react";
import { Home, Person, ChatBubble, CameraAlt, ShoppingCart } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

export default function BottomBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Home", icon: <Home />, path: "/" },
    { label: "Profile", icon: <Person />, path: "/getProFile" },
    { label: "Message", icon: <ChatBubble />, path: "/messages" },
    { label: "Photos", icon: <CameraAlt />, path: "/photos" },
    { label: "Cart", icon: <ShoppingCart />, path: "/cart" },
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
