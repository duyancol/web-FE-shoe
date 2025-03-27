import React,{ useState ,useEffect} from 'react'
import './menumega.css';
export default function MegaMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  return (
    <div className='ts'>
      <div className="mid-header">
        <div className="wrap">
          <div className="mid-grid-left logo">
            {/* Nội dung logo */}
          </div>
          <div className="mid-grid-right">
            <a href="index.html"><span> </span></a>
          </div>
          <div className="clear"> </div>
        </div>
      </div>
      <header className="header header-nav">
        <div className="header-row container" role="navigation" aria-label="Main">
          <div className="header-left">
            <div className="logo">
              <img className='logonImg' src='https://raw.githubusercontent.com/duyancol/web-FE-shoe/refs/heads/main/src/images/logo.png' alt='Logo' />
            </div>
          </div>
          <div className="header-right">
            <ul className="main-menu">
              <li className="menu-item"><a href="#" className="active">Home</a></li>
              <li className="menu-item mega-menu">
                <a href="#">Mega menu +</a>
                <div className="mega-menu-wrapper slideInUp">
                  <div className="mega-menu-col">
                    <h5>Menu block 1</h5>
                    <ul className="mega-sub-menu">
                      <li><a href="#">Menu block item 1</a></li>
                      <li><a href="#">Menu block item 2</a></li>
                      <li><a href="#">Menu block item 3</a></li>
                      <li><a href="#">Menu block item 4</a></li>
                      <li><a href="#">Menu block item 5</a></li>
                    </ul>
                  </div>
                  {/* Các cột khác */}
                </div>
              </li>
              <li className="menu-item dropdown">
                <a href="#">Services +</a>
                <div className="sub-menu-wrapper slideInUp">
                  <ul className="sub-menu">
                    <li className="menu-item"><a href="#">Service 1</a></li>
                    <li className="menu-item"><a href="#">Service 2</a></li>
                    <li className="menu-item"><a href="#">Service 3</a></li>
                    <li className="menu-item"><a href="#">Service 4</a></li>
                  </ul>
                </div>
              </li>
              <li className="menu-item"><a href="#">Blog</a></li>
              <li className="menu-item"><a href="#">Contact</a></li>
            </ul>
            <button
              id="hamburger-icon"
              className="mobile-toggler"
              aria-label="Mobile Menu"
              onClick={toggleMenu}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            id="mobile-menu"
            className={`mobile-menu ${isMenuOpen ? 'active' : 'hidden'}`}
          >
            <ul>
              <li className="menu-item"><a href="#" className="active">Home</a></li>
              <li className="menu-item mega-menu">
                <a href="#">Mega menu +</a>
                <div className="mega-menu-wrapper">
                  <div className="mega-menu-col">
                    <h5>Menu block 1</h5>
                    <ul className="mega-sub-menu">
                      <li><a href="#">Menu Shoe Male 1</a></li>
                      <li><a href="#">Menu Shoe Feshnam 2</a></li>
                      <li><a href="#">Menu block Children 3</a></li>
                      <li><a href="#">Menu block Nike 4</a></li>
                      <li><a href="#">Menu block Adidas 5</a></li>
                    </ul>
                  </div>
                  {/* Các cột khác */}
                </div>
              </li>
              <li className="menu-item dropdown">
                <a href="#">Services +</a>
                <div className="sub-menu-wrapper">
                  <ul className="sub-menu">
                    <li className="menu-item"><a href="#">Service 4</a></li>
                    <li className="menu-item"><a href="#">Service 2</a></li>
                    <li className="menu-item"><a href="#">Service 3</a></li>
                    <li className="menu-item"><a href="#">Service 4</a></li>
                  </ul>
                </div>
              </li>
              <li className="menu-item"><a href="#">Blog</a></li>
              <li className="menu-item"><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  )
}
