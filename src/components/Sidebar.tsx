const Sidebar = () => {
  const sidebarTopics = [
    { id: 1, title: 'özgür özel\'in hakan fidan\'a sekreter demesi', count: 252 },
    { id: 2, title: '9 nisan 2025 satın alım boykotu', count: 571 },
    { id: 3, title: 'protestolara balta ile katılanlar gözaltına alındı', count: 74 },
    { id: 4, title: 'filistinde yaşananların kimseyi çıldırtmıyor oluşu', count: 132 },
    { id: 5, title: 'marmaray\'da dans eden çifte yapılan yorumlar', count: 225 },
    { id: 6, title: 'ilkin aydın', count: 81 },
    { id: 7, title: '9 nisan 2025 hasan imamoglu\'nun büyük vurgunu', count: 146 },
    { id: 8, title: 'çin\'in abd\'ye %84 ek vergi uygulaması', count: 90 },
    { id: 9, title: 'ilkin aydın\'ın polis pankartını tutmama rezaleti', count: 30 },
    { id: 10, title: '9 nisan 2025 ank.ar genel seçim anketi', count: 128 },
    { id: 11, title: 'netanyahu görmüş hakan fidan gibi sırtmak', count: 236 },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">gündem <span className="ozellestirilmis">o</span></h2>
      </div>
      <ul className="sidebar-topics">
        {sidebarTopics.map((topic) => (
          <li key={topic.id} className="sidebar-topic">
            <a href={`/topic/${topic.id}`} className="topic-link">
              <span className="topic-title">{topic.title}</span>
              <span className="topic-count">{topic.count}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar; 