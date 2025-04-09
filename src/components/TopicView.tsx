import { useState } from 'react';
import { Link } from 'react-router-dom';

const TopicView = () => {
  const topics = [
    {
      id: 1,
      title: 'stephen hawking',
      content: 'o kadar zeki olsa tıp kazanırdı ama puanı anca fiziğe yetmiş.',
      author: 'morkanatlisivrisinek',
      date: '08.03.2015 00:12',
      likes: 595
    },
    {
      id: 2,
      title: 'iron maiden vs metallica',
      content: 'rock tarihinin başaltı gruplarının en niteliklilerinden ikisinin karşılaştırılması.\n\niki grup da 80\'lerin ortasından 90\'ların başlarına kadar plak şirketleri neyin para edeceğini düşündüyse o müziği yapmışlardır.\n\nçünkü kariyerlerine benzer dönemlerde başlamaları ve dönem dönem yaptıkları müziklere bakarak, 90 sonrası patlama yapıp neyi piyasaya sürseler satacak müzikten',
      author: 'protospher',
      date: '',
      likes: 8,
      isBlue: true,
      truncated: true
    }
  ];

  return (
    <div className="content">
      <div className="mobile-topic-list">
        {topics.map(topic => (
          <div key={topic.id} className="topic-entry">
            <h2 className="topic-title">
              <Link to={`/topic/${topic.id}`}>{topic.title}</Link>
            </h2>
            
            <div className="entry-content">
              {topic.content.split('\n').map((line, i) => (
                <p key={i} style={{ marginBottom: '8px' }}>{line}</p>
              ))}
              {topic.truncated && (
                <p style={{ color: '#888' }} className="read-more">... devamını okuyayım</p>
              )}
            </div>
            
            <div className="entry-footer">
              <div className="entry-actions">
                <button className="action-button like-button">
                  <span className="icon-heart">♡</span>
                </button>
                <button className="action-button dislike-button">
                  <span className="icon-dislike">○</span>
                </button>
                {topic.likes > 0 && (
                  <button className="action-button like-count">
                    <span className="icon-like-filled">⚫</span>
                    <span className="like-number">{topic.likes}</span>
                  </button>
                )}
                {topic.isBlue && (
                  <span className="blue-indicator" style={{ color: '#1cb0f6' }}>●</span>
                )}
              </div>
              
              <div className="entry-share">
                <button className="share-button">
                  <span className="icon-share">↑</span>
                </button>
                <button className="more-button">
                  <span className="icon-more">⋯</span>
                </button>
              </div>
              
              {topic.author && (
                <div className="entry-meta">
                  <Link to={`/author/${topic.author}`} className="author-link">{topic.author}</Link>
                  {topic.date && <span className="entry-date">{topic.date}</span>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicView; 