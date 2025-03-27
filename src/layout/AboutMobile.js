import React, { useState } from "react";
import { motion } from "framer-motion";

const images = [
  {
    url: "https://hoangphucphoto.com/wp-content/uploads/2024/06/anh-giay-thumb.jpeg",
    title: "Featured sports shoe images",
    content:
      "Athletic Sneakers: These trendy athletic sneakers are designed for both performance and style...",
  },
  {
    url: "https://naidecor.vn/wp-content/uploads/2020/08/BST-GD-02.jpg",
    title: "Latest fashion shoes.",
    content:
      "Fashionable Casual Shoes: Step out in style with these fashionable casual shoes...",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5d4ADjx_pseuEaJRhjdOyDrs26GcHWiYSow&s",
    title: "Women’s walking shoes",
    content:
      "Stylish Running Shoes: Elevate your running experience with these stylish running shoes...",
  },
];

export default function AboutMobile() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="about-mobile">
      <h1 className="about-title">About</h1>

      <motion.div
        className="image-container"
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={images[currentIndex].url} alt="Shoe" className="image" />
        <div className="image-overlay">
          <h2>{images[currentIndex].title}</h2>
          <p>{images[currentIndex].content}</p>
          <button className="animated-button" onClick={handleNextImage}>
            Next
          </button>
        </div>
      </motion.div>
    </div>
  );
}
