import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo">
            <span className="logo-text">ekşi<span style={{ color: '#fff' }}>sözlük</span></span>
          </Link>
        </div>
        
        <div className="user-actions">
          <Link to="/profile" className="user-action-button">ben</Link>
          <button className="user-action-button">mesaj</button>
          <button className="user-action-button">olay</button>
          {!isMobile && <button className="user-action-button">⋯</button>}
        </div>
        
        <div className="search-container">
          <input
            type="text"
            placeholder={isMobile ? "ara" : "başlık, #entry, @yazar"}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button className="search-button">
            <span style={{ color: '#1cb0f6' }}>⚲</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 