import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showDropdown, setShowDropdown] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/" className="nav-link">gündem</Link></li>
        <li><Link to="/debe" className="nav-link">debe</Link></li>
        <li><Link to="/takip" className="nav-link">takip</Link></li>
        <li><Link to="/son" className="nav-link">sorunsallar</Link></li>
        <li><Link to="/kenar" className="nav-link">kenar</Link></li>
        <li><Link to="/caylaklar" className="nav-link">çaylaklar</Link></li>
        <li><Link to="/mesaj" className="nav-link">mesaj</Link></li>
        
        {isMobile ? (
          <li className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-toggle">
              •••
            </button>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li><Link to="/spor" className="nav-link">spor</Link></li>
                <li><Link to="/iliskiler" className="nav-link">ilişkiler</Link></li>
                <li><Link to="/yasam" className="nav-link">yaşam</Link></li>
                <li><Link to="/pena" className="nav-link">pena</Link></li>
                <li><Link to="/eksi-seyler" className="nav-link">ekşi şeyler</Link></li>
              </ul>
            )}
          </li>
        ) : (
          <>
            <li><Link to="/spor" className="nav-link">spor</Link></li>
            <li><Link to="/iliskiler" className="nav-link">ilişkiler</Link></li>
            <li><Link to="/yasam" className="nav-link">yaşam</Link></li>
            <li><Link to="/pena" className="nav-link">pena</Link></li>
            <li><Link to="/eksi-seyler" className="nav-link">ekşi şeyler</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar; 