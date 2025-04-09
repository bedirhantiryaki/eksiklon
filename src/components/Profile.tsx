import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { tr } from 'date-fns/locale';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('entry');
  
  return (
    <div className="content">
      <div className="profile-header">
        <div className="profile-info">
          <div className="profile-avatar">
            <img src="https://i.imgur.com/XY9FHY0.png" alt="axiosn" className="avatar-image" />
          </div>
          <div className="profile-details">
            <h1 className="content-title">axiosn</h1>
            <div className="profile-badge">
              <span className="badge-çaylak">çaylak</span>
            </div>
          </div>
        </div>
        
        <div className="profile-stats">
          <div className="stats-item">
            <span>0 entry</span>
            <span>·</span>
            <span>0 takipçi</span>
            <span>·</span>
            <span>1 takip</span>
          </div>
          <div className="stats-detail">
            bugün çaylak onay listesinde 13087. sıradasınız. bu sıra 10 entry'yi ne zaman doldurduğunuza göre her gün hesabına giriş yapanlar arasından baştan belirlenmektedir.
          </div>
        </div>
        
        <div className="profile-actions">
          <button className="action-button">
            <span className="button-icon">↑</span>
          </button>
          <button className="action-button">
            <span className="button-icon">⋯</span>
          </button>
        </div>
      </div>
      
      <div className="profile-tabs">
        <button 
          className={`tab-button ${activeTab === 'entry' ? 'active' : ''}`}
          onClick={() => setActiveTab('entry')}
        >
          entry'ler
        </button>
        <button 
          className={`tab-button ${activeTab === 'favorite' ? 'active' : ''}`}
          onClick={() => setActiveTab('favorite')}
        >
          favoriler
        </button>
        <button 
          className={`tab-button ${activeTab === 'image' ? 'active' : ''}`}
          onClick={() => setActiveTab('image')}
        >
          görseller
        </button>
        <button 
          className={`tab-button ${activeTab === 'stat' ? 'active' : ''}`}
          onClick={() => setActiveTab('stat')}
        >
          istatistikler
        </button>
        <button className="dropdown-button">
          <span>▼</span>
        </button>
      </div>
      
      <div className="profile-content">
        {activeTab === 'entry' && (
          <div className="entry-container">
            <h2 className="section-title">ultima online</h2>
            <div className="entry-content" style={{ color: '#aaa', fontStyle: 'italic' }}>
              <p>ultima online, 1997'de piyasaya sürülen efsanevi mmorpg oyunlarından biri olarak akıllarda yer etmiş; aslında o dönemde sınırları zorlayan, oyunculara gerçek anlamda özgür rol yapma imkanı sunan bir deneyimdi. oyunun sandığın oksiyonu, mekanikleri, ekonomi sistemi ve açık dünya yaklaşımı, dijital oyun dünyasına adeta yön vermişti.</p>
              <br />
              <p>birçok kişi için ultima online sadece bir oyun değil, aynı zamanda bir yaşam tarzı, arkadaşlıkların, klanların, tartışmaların ve unutulmaz anıların buluştuğu sanal bir ortam oldu. oyunun kuralları ve serbest yapısı, oyunculara kendi hikayelerini yaratma fırsatı tanırken, bazılarının "her şeyin kurallara bağlanması" eleştirisine de neden olmuştu; ama işte o karmaşa da bir anlamda oyunun cazibesini artırıyordu.</p>
              <br />
              <p style={{ color: '#81C14B' }}>devamını okuyayım</p>
            </div>
          </div>
        )}
        
        {activeTab === 'favorite' && (
          <div className="favorites-container">
            <p>Henüz bir favori eklenmemiş.</p>
          </div>
        )}
        
        {activeTab === 'image' && (
          <div className="images-container">
            <p>Henüz bir görsel eklenmemiş.</p>
          </div>
        )}
        
        {activeTab === 'stat' && (
          <div className="stats-container">
            <p>İstatistikler hazırlanıyor.</p>
          </div>
        )}
      </div>
      
      <div className="profile-notes">
        <div className="notes-header">
          <h2 className="section-title">notlar</h2>
        </div>
        <div className="notes-content">
          <textarea 
            className="notes-textarea"
            placeholder="axiosn hakkındaki notlarım..."
            rows={5}
          ></textarea>
          <div className="notes-actions">
            <button className="save-button">kaydet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 