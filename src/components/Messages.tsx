import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { tr } from 'date-fns/locale';
import '../styles/Messages.css';

type Message = {
  id: number;
  sender: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
};

const Messages: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'inbox' | 'sent'>('inbox');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  // Örnek mesaj verileri
  const inboxMessages: Message[] = [
    {
      id: 1,
      sender: 'ssg',
      content: 'merhaba, yeni entry\'leriniz çok beğeniliyor. yazarlık daveti göndermek istiyorum.',
      timestamp: new Date('2023-06-15 14:30'),
      isRead: false,
    },
    {
      id: 2,
      sender: 'deli zımba',
      content: 'dünkü başlıkta bahsettiğin konuyu biraz daha açabilir misin?',
      timestamp: new Date('2023-06-14 09:45'),
      isRead: true,
    },
    {
      id: 3,
      sender: 'çılgın tarihçi',
      content: 'selam, geçen gün açtığın tarih başlığına katkıda bulunmak istiyorum. birkaç kaynak önerebilirim.',
      timestamp: new Date('2023-06-13 18:20'),
      isRead: true,
    },
  ];

  const sentMessages: Message[] = [
    {
      id: 4,
      sender: 'ssg',
      content: 'teşekkürler, davetinizi kabul ediyorum!',
      timestamp: new Date('2023-06-15 15:10'),
      isRead: true,
    },
    {
      id: 5,
      sender: 'deli zımba',
      content: 'tabii, akşam detaylı açıklayacağım.',
      timestamp: new Date('2023-06-14 10:20'),
      isRead: true,
    },
  ];

  const filteredMessages = (activeTab === 'inbox' ? inboxMessages : sentMessages).filter(
    (message) => 
      message.sender.toLowerCase().includes(searchTerm.toLowerCase()) || 
      message.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Zaman formatını göster
  const formatMessageTime = (date: Date) => {
    return formatDistanceToNow(date, { addSuffix: true, locale: tr });
  };

  return (
    <div className="messages-container">
      <div className="messages-header">
        <h2>Mesajlar</h2>
        <div className="message-search">
          <input
            type="text"
            placeholder="Mesajlarda ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="messages-tabs">
        <button
          className={`tab-button ${activeTab === 'inbox' ? 'active' : ''}`}
          onClick={() => setActiveTab('inbox')}
        >
          Gelen Kutusu {inboxMessages.filter(msg => !msg.isRead).length > 0 && 
            <span className="unread-count">{inboxMessages.filter(msg => !msg.isRead).length}</span>
          }
        </button>
        <button
          className={`tab-button ${activeTab === 'sent' ? 'active' : ''}`}
          onClick={() => setActiveTab('sent')}
        >
          Gönderilen
        </button>
      </div>

      <div className="messages-content">
        <div className="message-list">
          {filteredMessages.length > 0 ? (
            filteredMessages.map((message) => (
              <div
                key={message.id}
                className={`message-item ${!message.isRead && activeTab === 'inbox' ? 'unread' : ''} ${selectedMessage?.id === message.id ? 'selected' : ''}`}
                onClick={() => setSelectedMessage(message)}
              >
                <div className="message-sender">{message.sender}</div>
                <div className="message-preview">{message.content.substring(0, 50)}...</div>
                <div className="message-time">{formatMessageTime(message.timestamp)}</div>
              </div>
            ))
          ) : (
            <div className="no-messages">
              {searchTerm ? 'Aramanıza uygun mesaj bulunamadı.' : 'Mesaj bulunamadı.'}
            </div>
          )}
        </div>

        <div className="message-detail">
          {selectedMessage ? (
            <>
              <div className="message-detail-header">
                <span className="message-detail-sender">{selectedMessage.sender}</span>
                <span className="message-detail-time">{formatMessageTime(selectedMessage.timestamp)}</span>
              </div>
              <div className="message-detail-content">{selectedMessage.content}</div>
              <div className="message-actions">
                <button className="reply-button">Yanıtla</button>
                <button className="delete-button">Sil</button>
              </div>
            </>
          ) : (
            <div className="no-message-selected">
              Mesaj içeriğini görüntülemek için bir mesaj seçin.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages; 