const RightSidebar = () => {
  const newsItems = [
    {
      id: 1,
      category: "TARİH",
      views: "7.7b",
      title: "Antik Mısır'da İnsanların Günlük Yaşamına Dair İzlenimler",
      imageUrl: "https://via.placeholder.com/100"
    },
    {
      id: 2,
      category: "SAĞLIK",
      views: "6.5b",
      title: "Viagra'nın Kalp İlacından Yatak Odalarına Uzanan İlginç Hikayesi",
      imageUrl: "https://via.placeholder.com/100"
    },
    {
      id: 3,
      category: "İLİŞKİLER",
      views: "15.8b",
      title: "Dost Görünümlü Düşmanlarınızın Kullanmayı Pek Sevdiği Bir Taktik: Zehirli...",
      imageUrl: "https://via.placeholder.com/100"
    }
  ];

  return (
    <aside className="right-sidebar">
      <div className="news-container">
        {newsItems.map(item => (
          <div key={item.id} className="news-item">
            <div className="news-content">
              <div className="news-meta">
                <div className="news-category">
                  <span style={{ color: item.id === 1 ? '#ccc' : item.id === 2 ? '#1cb0f6' : '#1cb0f6', marginRight: '2px', fontSize: '12px' }}>●</span>
                  <span className="category-text">{item.category}</span>
                </div>
                <div className="news-views">
                  <span style={{ color: '#444', marginRight: '2px' }}>○○</span>
                  <span className="views-count">{item.views}</span>
                </div>
              </div>
              <h3 className="news-title">{item.title}</h3>
            </div>
            <div className="news-image">
              <img src={item.imageUrl} alt={item.title} />
            </div>
          </div>
        ))}
      </div>

      <div className="channels-container">
        <h3 className="channels-title">başlığın kanalları</h3>
        <div className="channels">
          <a href="/siyaset" className="channel-link">#siyaset</a>
          <a href="/haber" className="channel-link" style={{ marginLeft: '10px' }}>#haber</a>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar; 