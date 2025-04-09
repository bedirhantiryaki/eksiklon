# Ekşi Sözlük Klon Projesi

Bu proje, popüler Türk forum sitesi olan Ekşi Sözlük'ün arayüzünün bir kopyasıdır. React, TypeScript ve Vite kullanılarak geliştirilmiştir.

## Özellikler

- Modern UI/UX tasarımı ile Ekşi Sözlük benzeri kullanıcı arayüzü
- Duyarlı (responsive) tasarım ile her cihazda uyumlu görünüm
- Ana sayfa, profil sayfası, mesajlar, gündem ve diğer bölümler
- Entry okuma, yazma ve etkileşim özellikleri
- React ve TypeScript ile geliştirilmiş modern kod yapısı

## Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

```bash
# Projeyi klonlayın
git clone https://github.com/kullanici-adi/eksisozluk-klon.git

# Proje klasörüne gidin
cd eksisozluk-klon

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

## Kullanılan Teknolojiler

- React 18
- TypeScript
- Vite
- React Router
- date-fns (tarih formatlaması için)
- CSS (özel stil dosyaları)

## Proje Yapısı

```
eksisozluk-klon/
├── public/         # Statik dosyalar
├── src/            # Kaynak kodları
│   ├── components/ # React bileşenleri
│   ├── styles/     # CSS dosyaları
│   ├── App.tsx     # Ana uygulama bileşeni
│   └── main.tsx    # Giriş noktası
├── index.html      # HTML şablonu
└── package.json    # Proje bağımlılıkları ve betikleri
```

## Katkıda Bulunma

1. Bu projeyi fork edin
2. Yeni bir özellik dalı oluşturun (`git checkout -b ozellik/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik: Açıklama'`)
4. Dalınızı ana projeye gönderin (`git push origin ozellik/yeni-ozellik`)
5. Bir Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakınız.

---

_Not: Bu proje sadece eğitim amaçlıdır ve gerçek Ekşi Sözlük ile hiçbir ilişkisi yoktur._
