import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import RightSidebar from './components/RightSidebar'
import Profile from './components/Profile'
import TopicView from './components/TopicView'
import Messages from './components/Messages'
import { useState, useEffect } from 'react'

// Layout bileşeni - tüm sayfalarda ortak kullanılan yapı
const Layout = () => {
  return (
    <>
      <Header />
      <div className="nav-wrapper">
        <Navbar />
      </div>
      <div className="main-container">
        <Sidebar />
        <Outlet /> {/* Route'lar buraya yerleştirilecek */}
        <RightSidebar />
      </div>
    </>
  );
};

// Tarayıcı genişliğini kontrol edip uygun içeriği göstermek için özel bir bileşen
const ResponsiveContent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return isMobile ? <TopicView /> : <Content />;
};

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Ana layout rotaları */}
          <Route path="/" element={<Layout />}>
            <Route index element={<ResponsiveContent />} />
            <Route path="profile" element={<Profile />} />
            <Route path="mesaj" element={<Messages />} />
            <Route path="gundem" element={<ResponsiveContent />} />
            <Route path="debe" element={<ResponsiveContent />} />
            <Route path="takip" element={<ResponsiveContent />} />
            <Route path="son" element={<ResponsiveContent />} />
            <Route path="kenar" element={<ResponsiveContent />} />
            <Route path="caylaklar" element={<ResponsiveContent />} />
            <Route path="spor" element={<ResponsiveContent />} />
            <Route path="iliskiler" element={<ResponsiveContent />} />
            <Route path="yasam" element={<ResponsiveContent />} />
            <Route path="pena" element={<ResponsiveContent />} />
            <Route path="eksi-seyler" element={<ResponsiveContent />} />
            <Route path="topic/:id" element={<Content />} />
            
            {/* Bulunamayan sayfalar için yönlendirme */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
