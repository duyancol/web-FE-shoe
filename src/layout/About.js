import React, { useState } from 'react';



export default function About() {
  const hexagonRows = [
    [{ x: 0, y: 0 }, { x: -100, y: 0 }, { x: -200, y: 0 }, { x: -300, y: 0 }],
    [{ x: 50, y: -57.74 }, { x: -50, y: -57.74 }, { x: -150, y: -57.74 }, { x: -250, y: -57.74 }],
    [{ x: 0, y: -115.48 }, { x: -100, y: -115.48 }, { x: -200, y: -115.48 }, { x: -300, y: -115.48 }],
    [{ x: 50, y: -173.22 }, { x: -50, y: -173.22 }, { x: -150, y: -173.22 }, { x: -250, y: -173.22 }],
    [{ x: 0, y: -231.96 }, { x: -100, y: -231.96 }, { x: -200, y: -231.96 }, { x: -300, y: -231.96 }],
    [{ x: 50, y: -289.70 }, { x: -50, y: -289.70 }, { x: -150, y: -289.70 }, { x: -250, y: -289.70 }] // Dòng mới thêm vào
];

const images = [
  {
    url: 'https://hoangphucphoto.com/wp-content/uploads/2024/06/anh-giay-thumb.jpeg',
    title: 'Hình ảnh giày thể thao nổi bật.',
    content: 'Athletic Sneakers: These trendy athletic sneakers are designed for both performance and style. They feature a lightweight, breathable upper and cushioned sole, making them perfect for workouts or casual outings. The sleek design ensures you stay comfortable while looking great on the go.'
  },
  {
    url: 'https://naidecor.vn/wp-content/uploads/2020/08/BST-GD-02.jpg',
    title: 'Mẫu giày thời trang mới nhất.',
    content: 'Fashionable Casual Shoes: Step out in style with these fashionable casual shoes. Crafted with high-quality materials, they offer a perfect blend of comfort and elegance. The unique design and vibrant colors make them a versatile choice for any occasion, whether you are heading to work or meeting friends'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5d4ADjx_pseuEaJRhjdOyDrs26GcHWiYSow&s',
    title: 'Giày đi bộ dành cho phái đẹp.',
    content: 'Stylish Running Shoes: Elevate your running experience with these stylish running shoes. Engineered for optimal support and flexibility, they provide the perfect fit for any foot shape. With a modern design and striking colors, these shoes are not only functional but also a fashion statement for active individuals.'
  },
];
const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState('enter');

  const handleNextImage = () => {
    setAnimationDirection('exit');

    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setAnimationDirection('enter');
    }, 300); // Thời gian để chuyển đổi hiệu ứng (300ms)
  };

  return (
    <div className="background">
    <h1 className='about_h1_color'>About</h1>
    <div className="content-container">
      <div className="hex-container">
        {hexagonRows.map((row, rowIndex) => (
          <div key={rowIndex} className="hexagon-row">
            {row.map((pos, index) => (
              <div
                key={index}
                className={`hexagon ${animationDirection}`} // Thêm lớp cho hiệu ứng
                style={{
                  backgroundImage: `url('${images[currentImageIndex].url}')`,
                  backgroundPosition: `${pos.x}px ${pos.y}px`,
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <div className="button-container">
        <button className='animated-button' onClick={handleNextImage}>Next</button>
      </div>
      <div className="image-content">
        <h2>{images[currentImageIndex].title}</h2>
        <h4 className='color_h4'>{images[currentImageIndex].content}</h4> {/* Hiển thị nội dung của ảnh */}
        <button className='animated-button'>View</button>
      </div>
    </div>
  </div>
  );
}


