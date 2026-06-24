export const routeMap = {
  home: { tr: '/tr', en: '/en' },
  congress: { tr: '/tr/kongre', en: '/en/congress' },
  exhibition: { tr: '/tr/sergi', en: '/en/exhibition' },
  books: { tr: '/tr/kitaplar', en: '/en/books' },
  submission: { tr: '/tr/bildiri-gonderimi', en: '/en/submission' },
  committees: { tr: '/tr/kurullar', en: '/en/committees' },
  registration: { tr: '/tr/kayit-ve-konaklama', en: '/en/registration-accommodation' },
  contact: { tr: '/tr/iletisim', en: '/en/contact' }
}

export const navItems = {
  tr: [
    { key: 'home', label: 'Ana Sayfa', path: '/tr' },
    { key: 'committees', label: 'Kurullar', path: '/tr/kurullar' },
    { key: 'congress', label: 'Kongre', path: '/tr/kongre' },
    { key: 'exhibition', label: 'Sergi', path: '/tr/sergi' },
    { key: 'books', label: 'Kitaplar', path: '/tr/kitaplar' },
    { key: 'submission', label: 'Bildiri Gönderimi', path: '/tr/bildiri-gonderimi' },
    { key: 'registration', label: 'Kayıt ve Konaklama', path: '/tr/kayit-ve-konaklama' },
    { key: 'contact', label: 'İletişim', path: '/tr/iletisim' }
  ],
  en: [
    { key: 'home', label: 'Home', path: '/en' },
    { key: 'committees', label: 'Committees', path: '/en/committees' },
    { key: 'congress', label: 'Congress', path: '/en/congress' },
    { key: 'exhibition', label: 'Exhibition', path: '/en/exhibition' },
    { key: 'books', label: 'Books', path: '/en/books' },
    { key: 'submission', label: 'Submission', path: '/en/submission' },
    { key: 'registration', label: 'Registration & Accommodation', path: '/en/registration-accommodation' },
    { key: 'contact', label: 'Contact', path: '/en/contact' }
  ]
}

export const content = {
  tr: {
    common: {
      brand: 'ISTAC 2026',
      tagline: 'Bilim • Teknoloji • Sanat',
      details: 'Detayları Keşfet',
      discover: 'İncele',
      ctaSubmission: 'Bildiri Gönderin',
      ctaCongress: 'Kongre Hakkında',
      language: 'Dil',
      turkish: 'Türkçe',
      english: 'English'
    },
    seo: {
      home: { title: 'ISTAC 2026 | Uluslararası Bilim Teknoloji ve Sanat Kongresi', description: 'Bilim, teknoloji ve sanat disiplinlerini uluslararası ölçekte buluşturan prestijli akademik kongre.' },
      congress: { title: 'Kongre | ISTAC 2026', description: 'ISTAC 2026 kongre amacı, kapsamı, konuları, önemli tarihleri ve kurulları.' },
      exhibition: { title: 'Sergi | ISTAC 2026', description: 'Uluslararası jürili online karma sergi katılım koşulları, başvuru süreci ve takvimi.' },
      books: { title: 'Kitaplar | ISTAC 2026', description: 'ISTAC 2026 kongre kapsamında yayımlanacak akademik kitap ve kitap bölümü bilgileri.' },
      submission: { title: 'Bildiri Gönderimi | ISTAC 2026', description: 'Özet bildiri, tam metin, akademik kitap bölümü ve değerlendirme süreci bilgileri.' },
      committees: { title: 'Kurullar | ISTAC 2026', description: 'ISTAC 2026 kongre kurulları, bilim kurulu, düzenleme kurulu ve onur kurulu üyeleri.' },
      registration: { title: 'Kayıt ve Konaklama | ISTAC 2026', description: 'ISTAC 2026 kongre kayıt ücretleri, banka hesap bilgileri, Bosphorus Sorgun Hotel konaklama fiyatları ve ulaşım detayları.' },
      contact: { title: 'İletişim | ISTAC 2026', description: 'ISTAC 2026 iletişim bilgileri ve kongre katılım süreçleri.' }
    },
    home: {
      eyebrow: 'Uluslararası Akademik Buluşma',
      title: 'Uluslararası Bilim Teknoloji ve Sanat Kongresi',
      year: '2026',
      description: 'Bilimin gücü, teknolojinin dönüşümü ve sanatın ilhamı ile disiplinlerarası uluslararası bir buluşma.',
      infoCards: [
        { label: 'Tarih', value: '9 – 11 Ekim 2026' },
        { label: 'Yer', value: '<a href="https://bosphorussorgun.com/tr/" target="_blank" style="color: inherit; text-decoration: underline; transition: color 0.2s;" onmouseover="this.style.color=\'var(--color-teal)\'" onmouseout="this.style.color=\'inherit\'">Bosphorus Sorgun, Antalya</a>' },
        { label: 'Akademik Yayın', value: 'Doçentlik ve akademik teşvik kriterlerine uygun, BKCI indeksli uluslararası kitap bölümü yayını imkânı.' }
      ],
      disciplines: [
        { key: 'science', title: 'Bilim', text: 'Fen, sağlık ve yaşam bilimlerinde özgün araştırmalar ve yenilikçi çalışmalar.', icon: 'flask' },
        { key: 'technology', title: 'Teknoloji', text: 'Dijital dönüşüm, mühendislik ve yapay zekâ ile geleceği şekillendiren teknolojiler.', icon: 'chip' },
        { key: 'art', title: 'Sanat', text: 'Görsel, işitsel ve sahne sanatlarında yaratıcı üretim ve estetik yaklaşımlar.', icon: 'brush' }
      ],
      featured: [
        { title: 'Uluslararası Jürili Online Karma Sergi', text: 'Tüm disiplinlerden sanatçıların eserlerinin yer alacağı uluslararası jürili online sergimize davetlisiniz.', link: 'Sergi Hakkında', type: 'exhibition' },
        { title: 'Akademik Kitap Bölümü', text: 'Kongre kapsamında seçilen bildiriler, hakemli bir akademik kitap bölümünde yayımlanacaktır.', link: 'Detayları İncele', type: 'book' }
      ],
      stats: [
        { value: '500+', label: 'Katılımcı' },
        { value: '30+', label: 'Ülke' },
        { value: '150+', label: 'Üniversite / Kurum' },
        { value: '200+', label: 'Bildiri' },
        { value: '100+', label: 'Sergilenecek Eser' }
      ],
      introTitle: 'Bilim, teknoloji ve sanat arasında nitelikli bir akademik zemin',
      introText: 'ISTAC 2026; farklı disiplinlerden araştırmacıları, sanatçıları, akademisyenleri ve sektör temsilcilerini aynı entelektüel zeminde buluşturur. Kongre; araştırma çıktılarının paylaşılmasını, disiplinlerarası iş birliklerinin gelişmesini ve sanat temelli üretimlerin uluslararası görünürlük kazanmasını hedefler.',
      posterTitle: 'Kongre Afişi',
      posterSubtitle: 'III. Uluslararası Bilim, Teknoloji ve Sanat Kongresi resmi afişi yayımlanmıştır.',
      posterText: 'Kongremizin bilim, teknoloji ve sanatın kesişim noktasındaki özgün temasını yansıtan resmi afişini inceleyebilir, yüksek çözünürlüklü sürümünü indirebilirsiniz.',
      posterDownload: 'Afişi İndir'
    },
    congress: {
      title: 'Kongre',
      subtitle: 'Bilim, teknoloji ve sanat odağında disiplinlerarası akademik paylaşım platformu.',
      aboutTitle: 'Kongre Hakkında',
      aboutText: 'Uluslararası Bilim Teknoloji ve Sanat Kongresi 2026, akademik araştırmaları, teknolojik dönüşümü ve sanatsal üretimi aynı çatı altında ele alan prestijli bir bilimsel etkinliktir. Kongre hem yüz yüze hem de çevrimiçi (hibrit) yürütülecek ve uluslararası katılıma açık olacaktır.',
      purposeTitle: 'Amaç ve Kapsam',
      purpose: [
        'Farklı disiplinlerde yürütülen özgün araştırmaları uluslararası düzeyde görünür kılmak.',
        'Bilim, teknoloji ve sanat alanlarında ortak üretim ve akademik iş birliği zemini oluşturmak.',
        'Bildiri, sergi ve yayın süreçlerini akademik kalite ilkeleriyle desteklemek.'
      ],
      topicsTitle: 'Konular',
      topics: ['Temel ve uygulamalı bilimler', 'Sağlık ve yaşam bilimleri', 'Mühendislik ve yapay zekâ', 'Dijital dönüşüm ve eğitim teknolojileri', 'Görsel sanatlar ve tasarım', 'Kültür, sanat yönetimi ve yaratıcı endüstriler'],
      datesTitle: 'Önemli Tarihler',
      dates: [
        { label: 'Bildiri özet gönderimi son tarihi', date: '25 Eylül 2026' },
        { label: 'Kabul bildirimleri', date: '30 Eylül 2026' },
        { label: 'Kongre tarihleri', date: '9 – 11 Ekim 2026' }
      ],
      faqTitle: 'Sıkça Sorulan Sorular',
      faqs: [
        { q: 'Kongre online mı yapılacak?', a: 'Kongre hem yüz yüze (fiziki) hem de online (çevrimiçi) olarak hibrit formatta gerçekleştirilecektir. Katılımcılar sunumlarını diledikleri formatta gerçekleştirebilirler.' },
        { q: 'Sunum dili nedir?', a: 'Sunumlar Türkçe veya İngilizce olarak yapılabilir.' },
        { q: 'Bildiri metinleri yayımlanacak mı?', a: 'Hakem değerlendirmesi sonrası uygun bulunan çalışmalar; ISBN\'li bildiri kitabında, BKCI indeksli uluslararası kitap bölümü olarak ya da <a href="https://ijascience.com/" target="_blank" style="color: var(--color-teal); text-decoration: underline;">ijascience.com</a> ve <a href="https://artandeducationjournal.com/" target="_blank" style="color: var(--color-teal); text-decoration: underline;">artandeducationjournal.com</a> dergilerinden birinde yayınlanabilir.' }
      ]
    },
    exhibition: {
      title: 'Uluslararası Jürili Online Karma Sergi',
      subtitle: 'Sanatsal üretimlerin uluslararası akademik bağlamda görünürlük kazanacağı seçkin bir online sergi alanı.',
      aboutTitle: 'Sergi Hakkında',
      aboutText: 'ISTAC 2026 kapsamında düzenlenecek uluslararası jürili online karma sergi; görsel sanatlar, tasarım, geleneksel sanatlar ve disiplinlerarası üretimlere açık şekilde planlanmıştır.',
      conditionsTitle: 'Katılım Koşulları',
      conditions: ['Sergiye özgün eserlerle başvuru yapılmalıdır.', 'Eser görselleri yüksek çözünürlüklü ve sergilemeye uygun olmalıdır.', 'Başvurular jüri değerlendirmesinden sonra kabul edilir.'],
      processTitle: 'Başvuru Süreci',
      process: ['Başvuru formunun doldurulması', 'Eser görsellerinin ve kısa açıklamaların yüklenmesi', 'Jüri değerlendirmesi', 'Online sergi sayfasında yayımlanma'],
      sendTitle: 'Eser Gönderim Bilgileri',
      sendText: 'Eser dosyaları JPEG veya PNG formatında, net ve sergilemeye uygun çözünürlükte hazırlanarak <a href="mailto:sergielsander@gmail.com" style="color: var(--color-teal); text-decoration: underline; font-weight: bold;">sergielsander@gmail.com</a> adresine gönderilmelidir. Dosya adlarında katılımcı adı, eser adı ve yıl bilgisi bulunmalıdır.',
      feesTitle: 'Sergi Ücreti & İletişim',
      feesText: 'Sergi katılımı için (jüri onayından sonra) belirlenen katılım bedelleri ve iletişim kanalları:',
      fees: [
        { label: 'Ulusal Sergi Katılım Ücreti', price: '500 TL' },
        { label: 'Uluslararası Sergi Katılım Ücreti', price: '5000 TL' }
      ],
      emailText: 'Sergi ile ilgili tüm başvurularınızı ve sorularınızı doğrudan <a href="mailto:sergielsander@gmail.com" style="color: var(--color-teal); text-decoration: underline; font-weight: bold;">sergielsander@gmail.com</a> e-posta adresi üzerinden sergi sekreteryasına iletebilirsiniz.',
      calendarTitle: 'Sergi Takvimi',
      calendar: [
        { label: 'Sergi başvurusu son tarihi', date: '15 Ağustos 2026' },
        { label: 'Jüri değerlendirme sonucu', date: '5 Eylül 2026' },
        { label: 'Online sergi açılışı', date: '9 Ekim 2026' }
      ]
    },
    books: {
      title: 'Kitaplar',
      subtitle: 'Kongre kapsamında yayımlanacak akademik kitaplar ve kitap bölümleri.',
      aboutTitle: 'Akademik Yayınlar Hakkında',
      aboutText: 'ISTAC 2026 kongresinde sunulan ve hakem değerlendirmesinden geçen seçkin bildiriler, akademik kitap bölümü olarak yayımlanacaktır. Yayın süreci uluslararası akademik standartlara uygun olarak yürütülmektedir.',
      guidelinesTitle: 'Yazım Kuralları',
      guidelines: ['Tam metin çalışmaları 4000–8000 kelime arasında olmalıdır.', 'APA 7 formatına uygun kaynak gösterimi yapılmalıdır.', 'Çalışmalar özgün olmalı ve daha önce yayımlanmamış olmalıdır.', 'İntihal oranı %20 üzerinde olmamalıdır.'],
      processTitle: 'Yayın Süreci',
      process: ['Bildiri sunumu ve tam metin gönderimi', 'Hakem değerlendirmesi (çift kör)', 'Düzeltme ve son onay', 'Kitap bölümü olarak yayımlama'],
      typesTitle: 'Yayın Türleri',
      types: [{ title: 'Akademik Kitap Bölümü', text: 'Hakem değerlendirmesinden geçen bildiriler, uluslararası yayınevleri aracılığıyla kitap bölümü olarak basılacaktır.' }, { title: 'Kongre Bildiri Kitabı', text: 'Kabul edilen tüm özet bildiriler, ISBN numaralı kongre bildiri kitabında yer alacaktır.' }],
      ctaTitle: 'Çalışmanızı yayımlamak için başvurun',
      ctaText: 'Akademik kitap bölümü başvuruları için e-posta ile iletişime geçin.',
      ctaEmail: 'istac2026@gmail.com'
    },
    submission: {
      title: 'Bildiri Gönderimi',
      subtitle: 'Akademik kalite, açık değerlendirme süreci ve yayın odaklı bildiri kabul sistemi.',
      feesTitle: 'Katılım Ücretleri',
      fees: [
        { label: 'Konferans Katılım Ücreti', price: '2000 TL' },
        { label: 'El Sanatları Derneği Üyeleri', price: '1700 TL' },
        { label: 'Ulusal Sergi Katılım Ücreti', price: '500 TL' },
        { label: 'Uluslararası Sergi Katılım Ücreti', price: '5000 TL' }
      ],
      detailedRules: [
        {
          title: 'Genel Kurallar',
          items: [
            'Bildiri özetleri ve tam metinler Word formatında <a href="mailto:istac2026@gmail.com" style="color: var(--color-teal); text-decoration: underline; font-weight: bold;">istac2026@gmail.com</a> adresine gönderilmelidir.',
            'Sergi başvuruları için e-posta adresi <a href="mailto:sergielsander@gmail.com" style="color: var(--color-teal); text-decoration: underline; font-weight: bold;">sergielsander@gmail.com</a>\'dur.',
            'Referanslar APA formatına göre yazılmalıdır.',
            'Kenar Boşlukları Üst: 2,5 cm, Alt: 2,5 cm, Sol: 2,5 cm, Sağ: 2,5 cm, Cilt Payı: 0 cm olarak ayarlanmalıdır.'
          ]
        },
        {
          title: 'Özet (Abstract) Yazım Kuralları',
          items: [
            'Başlık sayfaya ortalanmış, ilk harfler büyük olarak, kalın (bold), Times New Roman, 14 punto olmalıdır.',
            'Konu başlığı ve yazar isminin altında 10 punto, iki yana yaslı Times New Roman yazı karakteri ile 250 kelimeyi geçmeyecek şekilde Türkçe ve İngilizce özet yer almalıdır.',
            'İngilizce özette başlık da belirtilmelidir.',
            'Konu başlığı sayfa ortasına 14 punto kalın, altına sağa dayalı olarak yazarın ya da yazarların adı 12 punto kalın yazılmalıdır.',
            'Sayfanın sonunda açıklama dipnotu biçiminde yazarın akademik unvanı, kurum ve e-posta adresi yer almalıdır.',
            'Anahtar Kelimeler: Times New Roman, 10 punto, virgül ile ayrılarak yazılmalıdır.'
          ]
        },
        {
          title: 'Bildiri Tam Metni',
          items: [
            'Metin; Giriş, Çalışma Alanı, Materyal ve Yöntem, Bulgular ve Tartışma, Sonuçlar, Katkı ve Kaynakça bölümlerinden oluşmalıdır.',
            'Alt başlıklar Times New Roman 12 punto, Kalın (Bold) olmalıdır.',
            'Ana Metin: Times New Roman 12 punto, normal olarak yazılmalıdır.',
            'Şekiller (grafik, harita, fotoğraf vb.) JPEG veya TIFF formatında en az 300 DPI çözünürlükte olmalı, A4 sayfa boyutuna uygun olarak düzenlenmelidir.',
            'Şekil ve tablo açıklamaları TNR 11 punto olmalıdır. Şekiller metin dosyasında yer almamalı, alt yazıları (açıklama) olmalıdır.'
          ]
        },
        {
          title: 'Kitap Bölümü Tam Metin Yazım Kuralları',
          items: [
            'Tam metinler kurullar tarafından düzeltme yapılmayacaktır. Bu nedenle yazım ve anlam hatalarından yazarlar sorumludur.',
            'Kitap Bölümü için gönderilen metinler daha önce başka bir yerde sunulmamış ve yayımlanmamış olmalıdır.',
            'Tam metinler 12 punto büyüklüğünde, Times New Roman yazı karakterinde, iki yana yaslı, tek satır aralığında, Word dosyası olarak hazırlanmalıdır.',
            'Paragraflarda satır başları 1 cm girintili olmalıdır.',
            'Tablo, dipnot ve kullanılan kaynakların punto büyüklüğü 10 olmalıdır. Tablo ve şekiller, metin içinde ardışık olarak numaralandırılmalıdır.',
            'Birinci derece bölüm başlıkları büyük harfle ve koyu olarak, ikinci derece ve diğer alt bölüm başlıklarında her sözcüğün ilk harfi büyük harfle ve koyu olarak yazılmalıdır.',
            'Kitap Bölümleri; yazı metni, tablo, görsel, şekil, harita, grafik, kaynaklar ve ekler ile birlikte en az 10 en çok 20 sayfa olmalıdır.',
            '<span style="color:var(--color-coral); font-weight:bold;">NOT: Kitap tam metinlerinde özet olmayacaktır.</span>'
          ]
        }
      ],
      reviewTitle: 'Değerlendirme Süreci',
      review: ['Ön biçim kontrolü', 'Alan editörü değerlendirmesi', 'Hakem değerlendirmesi', 'Kabul / düzeltme / ret bildirimi'],
      ctaTitle: 'Çalışmanızı ISTAC 2026’ya gönderin',
      ctaText: 'Bilim, teknoloji ve sanat eksenindeki özgün çalışmalarınızı <a href="mailto:istac2026@gmail.com" style="color: var(--color-teal); text-decoration: underline; font-weight: bold;">istac2026@gmail.com</a> adresine gönderin.',
      ctaButton: 'E-posta ile Başvur'
    },
    committees: {
      title: 'Kurullar',
      subtitle: 'ISTAC 2026 kongresinin akademik ve organizasyonel yapısını oluşturan kurul üyeleri.'
    },
    contact: {
      title: 'İletişim',
      subtitle: 'Online kongre süreci, bildiri, sergi işlemleri için bizimle iletişime geçebilirsiniz.',
      infoTitle: 'İletişim Bilgileri',
      email: 'istac2026@gmail.com',
      social: '@istac2026',
      onlineTitle: 'Kongre Katılımı',
      onlineText: 'ISTAC 2026 hibrit (çevrimiçi ve yüz yüze) yürütülecek bir kongre olduğundan iletişim ve yönlendirme süreçleri hem dijital kanallar hem de fiziki katılım alanları üzerinden koordine edilecektir.',
      formTitle: 'İletişim Formu',
      placeholders: { name: 'Ad Soyad', email: 'E-posta', subject: 'Konu', message: 'Mesajınız' },
      button: 'Mesaj Gönder',
      sections: [
        {
          title: 'Sekreterya',
          members: [
            { role: 'Sanat', name: 'Dr. Öğr. Üyesi Yasemin KOPARAN', phone: '05306016904' },
            { role: 'Bilim ve Teknoloji', name: 'Öğr. Gör. Buse SERGEK', phone: '05380479622' }
          ]
        },
        {
          title: 'Koordinatörler',
          members: [
            { role: 'Kongre Koordinatörü', name: 'Prof. Dr. A. Engin ÖZÇELİK', phone: '05058587191', email: 'istac2026@gmail.com' },
            { role: 'Kongre Koordinatörü', name: 'Dr. Mitat KANDEMİR', phone: '05324863967', email: 'istac2026@gmail.com' }
          ]
        }
      ]
    },
    registration: {
      title: 'Kayıt ve Konaklama',
      subtitle: 'Kongre katılım, sergi kayıt, konaklama ücretleri ve banka hesap bilgileri.',
      exhibitionCardTitle: 'Sergi Kayıt',
      exhibitionCardText: 'Sergi kayıt formuna ulaşmak ve başvurunuzu gerçekleştirmek için aşağıdaki bağlantıyı kullanabilirsiniz.',
      exhibitionCtaText: 'Sergi Başvuru Formu İçin Tıklayınız (PDF)',
      exhibitionCtaUrl: 'https://istacongress.com/wp-content/uploads/2025/09/Sergi-Basvuru-Formu-1.pdf',
      feesCardTitle: 'Kayıt ve Ücret Bilgisi',
      feesCardText: 'Kongre ve sergi katılım bedelleri aşağıda listelenmiştir. Kaydınızın onaylanması için ödemenizi gerçekleştirdikten sonra dekontunuzu lütfen <a href="mailto:istac2026@gmail.com" style="color: var(--color-teal); text-decoration: underline; font-weight: bold;">istac2026@gmail.com</a> (sergi kayıtları için <a href="mailto:sergielsander@gmail.com" style="color: var(--color-teal); text-decoration: underline; font-weight: bold;">sergielsander@gmail.com</a>) adresine gönderiniz.',
      includedTitle: 'Kayıt Ücretine Dahil Hizmetler',
      includedDescription: 'Kongre ve sergi katılımı sağlayan araştırmacılarımız için sunulan hizmetler:',
      includedItems: [
        'Açılış Kokteyli ve oturum arası ikramlar',
        'Kongreye bildiri ile katılacaklar için; Katılım Belgesi, Kongre Çantası, Kongre Özet Metin E-kitap, Program Kitapçığı ve Yaka Kartı',
        'Sergiye katılacaklar için; Yaka Kartı, E-Katılım Belgesi ve Sergi E-Kataloğu',
        'Talep edildiği takdirde sunulan tam metinler uluslararası yayınevinde E-kitap bölümü olarak yayımlanacaktır.'
      ],
      dailyIncludedTitle: 'Günübirlik Katılımcılar için Dahil Hizmetler',
      dailyIncludedItems: [
        'Açılış Kokteyli ve oturum arası ikramlar',
        'Kongreye bildiri ile katılacaklar için; Katılım Belgesi, Kongre Çantası, Kongre Özet Metin E-kitap, Program Kitapçığı ve Yaka Kartı',
        'Sergiye katılacaklar için; Yaka Kartı, E-Katılım Belgesi ve Sergi E-Kataloğu'
      ],
      bankCardTitle: 'Banka Hesap Bilgileri',
      bankDetails: [
        { label: 'Banka Adı', value: 'Garanti Bankası' },
        { label: 'Hesap Adı', value: 'NEWS TOUR TURİZM TAŞIMACILIK ORG. YATÇILIK TİC. VE SAN. LTD. ŞTİ.' },
        { label: 'IBAN', value: 'TR33 0006 2000 7430 0006 2990 84' }
      ],
      accommodationTitle: 'Ulaşım ve Konaklama',
      hotelName: 'Bosphorus Sorgun Hotel',
      hotelWebsiteUrl: 'https://bosphorussorgun.com/tr/',
      hotelWebsiteLabel: 'Bosphorus Sorgun Web Sitesi',
      hotelAddressLabel: 'Konaklama Adresi',
      hotelAddressValue: 'Titreyengöl Mevkii, Manavgat, Antalya, Türkiye',
      hotelContactLabel: 'Konaklama İletişim',
      hotelContactPhone: '+90 242 777 10 20',
      hotelContactEmail: 'info@bosphorussorgun.com',
      priceTitle: 'Konaklama Ücretleri',
      priceSubtitle: 'Fiyat / Ultra Her Şey Dahil (Tek Gecelik)',
      priceNote: '3 yaş ve üzeri tüm çocuklar ücrete tabidir. Konaklama ücreti tek gecelik fiyattır.',
      prices: [
        { label: 'Tek Kişilik Oda', price: '145 Euro' },
        { label: 'Çift Kişilik Odada Kişi Başı', price: '85 Euro' },
        { label: 'Üç Kişilik Odada Kişi Başı', price: '75 Euro' },
        { label: 'Günübirlik Katılım Ücreti', price: '50 Euro' }
      ],
      contactTitle: 'Kongre İletişim Bilgileri',
      contacts: [
        { role: 'Konaklama İçin', name: 'Gülay ÜNAL', phone: '05333251341', email: 'g_unall@hotmail.com' },
        { role: 'Genel Koordinatör', name: 'Prof. Dr. A. Engin ÖZÇELİK', phone: '05058587191' },
        { role: 'Sekreterya', name: 'Dr. Mitat Kandemir', phone: '05324863967' }
      ],
      submissionNotes: [
        'Kongre bildiri ve poster başvuruları <a href="mailto:istac2026@gmail.com" style="color: var(--color-teal); text-decoration: underline; font-weight: bold;">istac2026@gmail.com</a> adresine yapılacaktır.',
        'Sergi başvuruları <a href="mailto:sergielsander@gmail.com" style="color: var(--color-teal); text-decoration: underline; font-weight: bold;">sergielsander@gmail.com</a> adresine yapılacaktır.'
      ]
    }
  },
  en: {
    common: {
      brand: 'ISTAC 2026',
      tagline: 'Science • Technology • Art',
      details: 'Discover Details',
      discover: 'Explore',
      ctaSubmission: 'Submit Paper',
      ctaCongress: 'About Congress',
      language: 'Language',
      turkish: 'Türkçe',
      english: 'English'
    },
    seo: {
      home: { title: 'ISTAC 2026 | International Science Technology and Art Congress', description: 'A prestigious interdisciplinary congress bringing together science, technology and art.' },
      congress: { title: 'Congress | ISTAC 2026', description: 'About, scope, topics, important dates and committees.' },
      exhibition: { title: 'Exhibition | ISTAC 2026', description: 'International juried online group exhibition.' },
      books: { title: 'Books | ISTAC 2026', description: 'Academic book and book chapter publications within ISTAC 2026 congress.' },
      submission: { title: 'Submission | ISTAC 2026', description: 'Abstract submission, full text and review process.' },
      committees: { title: 'Committees | ISTAC 2026', description: 'ISTAC 2026 congress committees, scientific board, organizing committee and honorary board members.' },
      registration: { title: 'Registration & Accommodation | ISTAC 2026', description: 'ISTAC 2026 congress registration fees, bank details, Bosphorus Sorgun Hotel accommodation rates and transportation details.' },
      contact: { title: 'Contact | ISTAC 2026', description: 'Contact information and congress participation details.' }
    },
    home: {
      eyebrow: 'International Academic Meeting',
      title: 'International Science Technology and Art Congress',
      year: '2026',
      description: 'An interdisciplinary international meeting inspired by the power of science, the transformation of technology and the vision of art.',
      infoCards: [
        { label: 'Date', value: '9 – 11 October 2026' },
        { label: 'Venue', value: '<a href="https://bosphorussorgun.com/en/" target="_blank" style="color: inherit; text-decoration: underline; transition: color 0.2s;" onmouseover="this.style.color=\'var(--color-teal)\'" onmouseout="this.style.color=\'inherit\'">Bosphorus Sorgun, Antalya</a>' },
        { label: 'Academic Publication', value: 'International book chapter publication indexed in BKCI, suitable for academic promotion.' }
      ],
      disciplines: [
        { key: 'science', title: 'Science', text: 'Original research and innovative studies in science, health and life sciences.', icon: 'flask' },
        { key: 'technology', title: 'Technology', text: 'Digital transformation, engineering, AI and technologies shaping the future.', icon: 'chip' },
        { key: 'art', title: 'Art', text: 'Creative production and aesthetic approaches in visual, auditory and performing arts.', icon: 'brush' }
      ],
      featured: [
        { title: 'International Juried Online Group Exhibition', text: 'Artists from all disciplines are invited to join the international juried online exhibition.', link: 'About Exhibition', type: 'exhibition' },
        { title: 'Academic Book Chapter', text: 'Selected papers may be published in a peer-reviewed academic book chapter.', link: 'View Details', type: 'book' }
      ],
      stats: [
        { value: '500+', label: 'Participants' },
        { value: '30+', label: 'Countries' },
        { value: '150+', label: 'Universities / Institutions' },
        { value: '200+', label: 'Papers' },
        { value: '100+', label: 'Artworks' }
      ],
      introTitle: 'A refined academic ground between science, technology and art',
      introText: 'ISTAC 2026 brings together researchers, artists, academics and industry professionals from different disciplines. The congress aims to support scholarly exchange, interdisciplinary collaboration and international visibility for art-based production.',
      posterTitle: 'Congress Poster',
      posterSubtitle: 'The official poster of the III. International Science, Technology and Art Congress has been published.',
      posterText: 'You can review the official poster reflecting the unique theme of our congress at the intersection of science, technology and art, and download the high-resolution version.',
      posterDownload: 'Download Poster'
    },
    congress: {
      title: 'Congress',
      subtitle: 'An interdisciplinary academic platform focused on science, technology and art.',
      aboutTitle: 'About the Congress',
      aboutText: 'The International Science Technology and Art Congress 2026 is a prestigious scientific event that brings academic research, technological transformation and artistic production together. The congress will be held in a hybrid format (both in-person and online) and will be open to international participation.',
      purposeTitle: 'Purpose and Scope',
      purpose: ['Increase the international visibility of original research.', 'Create an academic collaboration ground across science, technology and art.', 'Support submission, exhibition and publication processes with academic quality principles.'],
      topicsTitle: 'Topics',
      topics: ['Basic and applied sciences', 'Health and life sciences', 'Engineering and artificial intelligence', 'Digital transformation and educational technologies', 'Visual arts and design', 'Culture, art management and creative industries'],
      datesTitle: 'Important Dates',
      dates: [
        { label: 'Abstract submission deadline', date: '25 September 2026' },
        { label: 'Acceptance notifications', date: '30 September 2026' },
        { label: 'Congress dates', date: '9 – 11 October 2026' }
      ],
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        { q: 'Will the congress be online?', a: 'The congress will be held in a hybrid format, both face-to-face (in-person) and online. Participants can choose to present their papers either in person or online.' },
        { q: 'What is the presentation language?', a: 'Presentations can be delivered in Turkish or English.' },
        { q: 'Will papers be published?', a: 'Eligible papers, after peer review, can be published in the proceedings book, as a BKCI-indexed international book chapter, or in one of the following journals: <a href="https://ijascience.com/" target="_blank" style="color: var(--color-teal); text-decoration: underline;">ijascience.com</a> or <a href="https://artandeducationjournal.com/" target="_blank" style="color: var(--color-teal); text-decoration: underline;">artandeducationjournal.com</a>.' }
      ]
    },
    exhibition: {
      title: 'International Juried Online Group Exhibition',
      subtitle: 'A refined online exhibition space for international visibility of artistic productions.',
      aboutTitle: 'About the Exhibition',
      aboutText: 'The international juried online group exhibition within ISTAC 2026 is planned for visual arts, design, traditional arts and interdisciplinary works.',
      conditionsTitle: 'Participation Conditions',
      conditions: ['Applications must include original artworks.', 'Artwork images must be high-resolution and suitable for exhibition.', 'Applications are accepted after jury review.'],
      processTitle: 'Application Process',
      process: ['Complete the application form', 'Upload artwork images and short descriptions', 'Jury review', 'Publication on the online exhibition page'],
      sendTitle: 'Artwork Submission Information',
      sendText: 'Artwork files should be prepared in JPEG or PNG format with clear, exhibition-ready resolution and sent to <a href="mailto:sergielsander@gmail.com" style="color: var(--color-teal); text-decoration: underline; font-weight: bold;">sergielsander@gmail.com</a>. File names should include participant name, artwork title and year.',
      feesTitle: 'Exhibition Fee & Contact',
      feesText: 'Exhibition participation fees (applicable after jury approval) and communication channels:',
      fees: [
        { label: 'National Exhibition Fee', price: '500 TL' },
        { label: 'International Exhibition Fee', price: '5000 TL' }
      ],
      emailText: 'You can directly send all your exhibition applications and inquiries to the exhibition secretariat via <a href="mailto:sergielsander@gmail.com" style="color: var(--color-teal); text-decoration: underline; font-weight: bold;">sergielsander@gmail.com</a>.',
      calendarTitle: 'Exhibition Calendar',
      calendar: [
        { label: 'Exhibition application deadline', date: '15 August 2026' },
        { label: 'Jury review results', date: '5 September 2026' },
        { label: 'Online exhibition opening', date: '9 October 2026' }
      ]
    },
    books: {
      title: 'Books',
      subtitle: 'Academic books and book chapters to be published within the congress.',
      aboutTitle: 'About Academic Publications',
      aboutText: 'Distinguished papers presented at ISTAC 2026 congress and passed through peer review will be published as academic book chapters. The publication process is conducted in accordance with international academic standards.',
      guidelinesTitle: 'Writing Guidelines',
      guidelines: ['Full-text papers should be between 4000–8000 words.', 'References should follow APA 7 format.', 'Works must be original and not previously published.', 'Plagiarism rate should not exceed 20%.'],
      processTitle: 'Publication Process',
      process: ['Paper presentation and full-text submission', 'Peer review (double-blind)', 'Revision and final approval', 'Publication as book chapter'],
      typesTitle: 'Publication Types',
      types: [{ title: 'Academic Book Chapter', text: 'Papers that pass peer review will be published as book chapters through international publishers.' }, { title: 'Congress Proceedings', text: 'All accepted abstracts will be included in the congress proceedings book with ISBN number.' }],
      ctaTitle: 'Apply to publish your work',
      ctaText: 'Contact us via e-mail for academic book chapter submissions.',
      ctaEmail: 'istac2026@gmail.com'
    },
    submission: {
      title: 'Submission',
      subtitle: 'Academic quality, clear review process and publication-focused submission system.',
      feesTitle: 'Participation Fees',
      fees: [
        { label: 'Conference Participation Fee', price: '2000 TL' },
        { label: 'Handicraft Association Members', price: '1700 TL' },
        { label: 'National Exhibition Participation Fee', price: '500 TL' },
        { label: 'International Exhibition Participation Fee', price: '5000 TL' }
      ],
      detailedRules: [
        {
          title: 'General Rules',
          items: [
            'Abstracts and full texts should be sent in Word format to <a href="mailto:istac2026@gmail.com" style="color: var(--color-teal); text-decoration: underline; font-weight: bold;">istac2026@gmail.com</a>.',
            'The e-mail address for exhibition submissions is <a href="mailto:sergielsander@gmail.com" style="color: var(--color-teal); text-decoration: underline; font-weight: bold;">sergielsander@gmail.com</a>.',
            'References must follow APA format.',
            'Margins: Top: 2.5 cm, Bottom: 2.5 cm, Left: 2.5 cm, Right: 2.5 cm, Gutter: 0 cm.'
          ]
        },
        {
          title: 'Abstract Formatting',
          items: [
            'Title should be centered, with first letters capitalized, bold, Times New Roman, 14 pt.',
            'A Turkish and English abstract, not exceeding 250 words, should be placed under the title and author name in 10 pt justified Times New Roman font.',
            'The title must also be stated in the English abstract.',
            'The author\'s name(s) should be written right-aligned in 12 pt bold below the title.',
            'At the bottom of the page, the author\'s academic title, institution, and e-mail address should be included as a footnote.',
            'Keywords: Times New Roman, 10 pt, separated by commas.'
          ]
        },
        {
          title: 'Full Text (Proceedings)',
          items: [
            'The text should consist of Introduction, Field of Study, Materials and Methods, Findings and Discussion, Conclusion, Contribution, and References.',
            'Subheadings should be Times New Roman 12 pt, Bold.',
            'Main Text: Times New Roman 12 pt, normal weight.',
            'Figures (graphs, maps, photos, etc.) must be in JPEG or TIFF format, at least 300 DPI, arranged to fit A4 size.',
            'Figure and table captions must be TNR 11 pt. Figures should not be embedded inside the main text file; they should be separate but captioned.'
          ]
        },
        {
          title: 'Book Chapter Full Text Formatting',
          items: [
            'Full texts will not be copy-edited by the committees. Authors are fully responsible for spelling and semantic errors.',
            'Texts submitted for the Book Chapter must be original and not published elsewhere.',
            'Full texts must be 12 pt, Times New Roman, justified, single-spaced, as a Word document.',
            'Paragraphs should have a 1 cm first-line indent.',
            'Tables, footnotes, and references must be 10 pt. Tables and figures must be numbered sequentially.',
            'First-level headings must be all caps and bold; second and other sub-level headings must have the first letter of each word capitalized and bold.',
            'Book chapters should be between 10 to 20 pages, including text, tables, figures, references, and appendices.',
            '<span style="color:var(--color-coral); font-weight:bold;">NOTE: There will be no abstract in book full texts.</span>'
          ]
        }
      ],
      reviewTitle: 'Review Process',
      review: ['Initial format check', 'Area editor review', 'Peer review', 'Acceptance / revision / rejection notification'],
      ctaTitle: 'Submit your work to ISTAC 2026',
      ctaText: 'Send your original studies in science, technology and art to <a href="mailto:istac2026@gmail.com" style="color: var(--color-teal); text-decoration: underline; font-weight: bold;">istac2026@gmail.com</a>.',
      ctaButton: 'Apply via E-mail'
    },
    committees: {
      title: 'Committees',
      subtitle: 'Committee members forming the academic and organizational structure of ISTAC 2026 congress.'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Contact us for online congress, submission and exhibition processes.',
      infoTitle: 'Contact Information',
      email: 'istac2026@gmail.com',
      social: '@istac2026',
      onlineTitle: 'Congress Participation',
      onlineText: 'Since ISTAC 2026 will be held in a hybrid format (online and in-person), communication and guidance processes will be coordinated through both digital channels and physical venues.',
      formTitle: 'Contact Form',
      placeholders: { name: 'Full Name', email: 'E-mail', subject: 'Subject', message: 'Your message' },
      button: 'Send Message',
      sections: [
        {
          title: 'Secretariat',
          members: [
            { role: 'Art', name: 'Dr. Yasemin KOPARAN (Asst. Prof.)', phone: '05306016904' },
            { role: 'Science & Technology', name: 'Buse SERGEK (Lec.)', phone: '05380479622' }
          ]
        },
        {
          title: 'Coordinators',
          members: [
            { role: 'Congress Coordinator', name: 'Prof. Dr. A. Engin ÖZÇELİK', phone: '05058587191', email: 'istac2026@gmail.com' },
            { role: 'Congress Coordinator', name: 'Dr. Mitat KANDEMİR', phone: '05324863967', email: 'istac2026@gmail.com' }
          ]
        }
      ]
    },
    registration: {
      title: 'Registration & Accommodation',
      subtitle: 'Congress participation, exhibition registration, accommodation rates and bank account details.',
      exhibitionCardTitle: 'Exhibition Registration',
      exhibitionCardText: 'You can use the link below to access the exhibition registration form and application details.',
      exhibitionCtaText: 'Click Here for Exhibition Application Form (PDF)',
      exhibitionCtaUrl: 'https://istacongress.com/wp-content/uploads/2025/09/Sergi-Basvuru-Formu-1.pdf',
      feesCardTitle: 'Registration & Fee Information',
      feesCardText: 'Congress and exhibition participation fees are listed below. In order to approve your registration, after making your payment, please send your receipt to <a href="mailto:istac2026@gmail.com" style="color: var(--color-teal); text-decoration: underline; font-weight: bold;">istac2026@gmail.com</a> (for exhibition registrations, send to <a href="mailto:sergielsander@gmail.com" style="color: var(--color-teal); text-decoration: underline; font-weight: bold;">sergielsander@gmail.com</a>).',
      includedTitle: 'Services Included in the Registration Fee',
      includedDescription: 'Services provided for our researchers participating in the congress and exhibition:',
      includedItems: [
        'Opening Cocktail and session coffee break refreshments',
        'For paper presenters: Certificate of Participation, Congress Bag, Congress Abstract E-book, Program Booklet, and Name Badge',
        'For exhibition participants: Name Badge, E-Certificate of Participation, and Exhibition E-Catalog',
        'Upon request, full text papers will be published as an E-book chapter by an international academic publisher.'
      ],
      dailyIncludedTitle: 'Services Included for Daily Participants',
      dailyIncludedItems: [
        'Opening Cocktail and session coffee break refreshments',
        'For paper presenters: Certificate of Participation, Congress Bag, Congress Abstract E-book, Program Booklet, and Name Badge',
        'For exhibition participants: Name Badge, E-Certificate of Participation, and Exhibition E-Catalog'
      ],
      bankCardTitle: 'Bank Account Information',
      bankDetails: [
        { label: 'Bank Name', value: 'Garanti Bankası' },
        { label: 'Account Name', value: 'NEWS TOUR TURİZM TAŞIMACILIK ORG. YATÇILIK TİC. VE SAN. LTD. ŞTİ.' },
        { label: 'IBAN', value: 'TR33 0006 2000 7430 0006 2990 84' }
      ],
      accommodationTitle: 'Transportation & Accommodation',
      hotelName: 'Bosphorus Sorgun Hotel',
      hotelWebsiteUrl: 'https://bosphorussorgun.com/en/',
      hotelWebsiteLabel: 'Bosphorus Sorgun Website',
      hotelAddressLabel: 'Accommodation Address',
      hotelAddressValue: 'Titreyengöl Mevkii, Manavgat, Antalya, Turkey',
      hotelContactLabel: 'Accommodation Contact',
      hotelContactPhone: '+90 242 777 10 20',
      hotelContactEmail: 'info@bosphorussorgun.com',
      priceTitle: 'Accommodation Rates',
      priceSubtitle: 'Rates / Ultra All Inclusive (Per Night)',
      priceNote: 'All children aged 3 and over are subject to a fee. The accommodation rate is per night.',
      prices: [
        { label: 'Single Room', price: '145 Euro' },
        { label: 'Double Room Per Person', price: '85 Euro' },
        { label: 'Triple Room Per Person', price: '75 Euro' },
        { label: 'Daily Participation Fee', price: '50 Euro' }
      ],
      contactTitle: 'Congress Contact Information',
      contacts: [
        { role: 'For Accommodation', name: 'Gülay ÜNAL', phone: '05333251341', email: 'g_unall@hotmail.com' },
        { role: 'General Coordinator', name: 'Prof. Dr. A. Engin ÖZÇELİK', phone: '05058587191' },
        { role: 'Secretariat', name: 'Dr. Mitat Kandemir', phone: '05324863967' }
      ],
      submissionNotes: [
        'Congress paper and poster applications should be sent to <a href="mailto:istac2026@gmail.com" style="color: var(--color-teal); text-decoration: underline; font-weight: bold;">istac2026@gmail.com</a>.',
        'Exhibition applications should be sent to <a href="mailto:sergielsander@gmail.com" style="color: var(--color-teal); text-decoration: underline; font-weight: bold;">sergielsander@gmail.com</a>.'
      ]
    }
  }
}
