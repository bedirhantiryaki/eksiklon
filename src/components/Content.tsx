import { useState } from 'react';

const Content = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(15);

  const entries = [
    {
      id: 1,
      text: "resmen soygun\ngörsel",
      author: "",
      date: "",
      likes: 0,
      dislikes: 0
    },
    {
      id: 2,
      text: "troller madem geldiniz az çok demeyelim engellemeden geçmeyelim.başkanımda çok şekil çıkmış bu arada.",
      author: "",
      date: "",
      likes: 307,
      dislikes: 0
    },
    {
      id: 3,
      text: "#174377309 su esnrty de yazdıklarimi dogrular nitelikte baskin olmus demek ki",
      author: "aceleyegelennik",
      date: "09.04.2025 13:07 - 13:23",
      likes: 0,
      dislikes: 0
    },
    {
      id: 4,
      text: "bu kadar parayi harca harca bitiremezsin ekoyu çok savundum ama demek ki yanilmisim.bundaj sonra reisçiyiz dolar 2 tl olacak aya 4 seritli yol yapacak lozan aslinda 2053 de bitiyor",
      author: "",
      date: "",
      likes: 55,
      dislikes: 0
    },
    {
      id: 5,
      text: "690 milyon dolar nakit... buyuk para kanka. buyuk para yani.",
      author: "bugununisiniyaninabirakamadam",
      date: "09.04.2025 13:10",
      likes: 0,
      dislikes: 0
    },
    {
      id: 6,
      text: "buyuk bir vurgun.",
      author: "",
      date: "",
      likes: 21,
      dislikes: 0
    }
  ];

  return (
    <div className="content">
      <div className="content-header">
        <h1 className="content-title">9 nisan 2025 hasan imamoglu'nun büyük vurgunu</h1>
        <div className="content-actions">
          <a href="#" className="action-link">şükela <span>↓</span></a>
          <a href="#" className="action-link">başlıkta ara <span>↓</span></a>
          <a href="#" className="action-link">takip et</a>
        </div>
      </div>

      <div className="pagination">
        <span className="page-prev">«</span>
        <span className="page-current">{currentPage}</span>
        <span className="page-separator">/</span>
        <span className="page-total">{totalPages}</span>
        <span className="page-next">»</span>
      </div>

      <div className="entries">
        {entries.map(entry => (
          <div key={entry.id} className="entry">
            <div className="entry-content">
              {entry.text.split('\n').map((line, i) => (
                <p key={i} style={{ marginBottom: '8px' }}>{line}</p>
              ))}
            </div>
            {entry.author && (
              <div className="entry-footer">
                <div className="entry-actions">
                  <button className="action-button" style={{ fontSize: '16px' }}>♡</button>
                  <button className="action-button" style={{ fontSize: '16px' }}>○</button>
                  <button className="action-button" style={{ fontSize: '18px', position: 'relative', top: '1px' }}>⚫</button>
                </div>
                <div className="entry-share">
                  <button className="share-button" style={{ fontSize: '16px' }}>↑</button>
                  <button className="more-button" style={{ fontSize: '16px' }}>⋯</button>
                </div>
                <div className="entry-meta">
                  <a href={`/author/${entry.author}`} className="author-link">{entry.author}</a>
                  <span className="entry-date">{entry.date}</span>
                </div>
              </div>
            )}
            {entry.likes > 0 && (
              <div className="entry-likes" style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '5px' }}>
                <span style={{ marginRight: '5px', fontSize: '14px' }}>⚫</span> 
                <span style={{ fontSize: '14px' }}>{entry.likes}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content; 