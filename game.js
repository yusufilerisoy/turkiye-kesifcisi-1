/* ============================================================
   TÜRKİYE'Yİ KEŞFET - OYUN MOTORU
   Hikayeleştirilmiş Oyun Tabanlı Öğrenme
   TÜBİTAK 4006 Bilim Fuarı Projesi
   ============================================================ */

'use strict';

// ── BÖLGE VE SORU VERİLERİ ──────────────────────────────────
const REGIONS = [
  {
    id: 'karadeniz',
    name: 'Karadeniz Bölgesi',
    capital: 'Trabzon',
    icon: '🌿',
    color: '#72B841',
    badge: 'Bitki Örtüsü Uzmanı',
    story: 'Profesör Coğraf sana bir mesaj gönderdi: "Genç kaşif, Karadeniz Bölgesi\'ne hoş geldin! Bu bölge Türkiye\'nin en yağışlı ve en yeşil köşesi. Dağları ormanlarla kaplı, kıyıları çayırlarla süslü bu büyülü bölgede görevin; bitki örtüsünü ve iklimini keşfetmek!"',
    mission: 'Karadeniz Bölgesi\'nin iklim özelliklerini, bitki örtüsünü ve tarım ürünlerini öğrenerek "Bitki Örtüsü Uzmanı" unvanını kazan!',
    funFact: 'Türkiye\'nin yıllık 100.000 ton çay üretiminin neredeyse tamamı Rize ilinde gerçekleştirilir. Dünyada çay üreten az sayıda ülkeden biri olma özelliği taşıyan Türkiye\'de Karadeniz\'in serinliği ve bol yağışı mükemmel bir çay iklimine zemin hazırlar.',
    questions: [
      {
        text: 'Karadeniz Bölgesi ikliminin en belirgin özelliği nedir?',
        options: [
          'Yaz ayları sıcak ve kuraktır',
          'Her mevsim düzenli yağış alır',
          'Kışlar çok soğuk, yazlar serin ve kuraktır',
          'Yazlar yağmurlu, kışlar kurak geçer'
        ],
        correct: 1,
        explanation: 'Karadeniz iklimi Türkiye\'nin en yağışlı iklimidir. Yılın her mevsiminde yağış alır; bu özelliği onu diğer bölgelerden ayırır.'
      },
      {
        text: 'Aşağıdakilerden hangisi Karadeniz Bölgesi\'nin önemli tarım ürünlerindendir?',
        options: [
          'Pamuk ve zeytin',
          'Narenciye ve muz',
          'Çay ve fındık',
          'Buğday ve şeker pancarı'
        ],
        correct: 2,
        explanation: 'Türkiye\'nin çay üretiminin tamamına yakını Rize\'de, fındık üretiminin büyük çoğunluğu ise Ordu ve Giresun\'da gerçekleştirilir.'
      },
      {
        text: 'Karadeniz Bölgesi\'ndeki doğal bitki örtüsü nasıldır?',
        options: [
          'Bozkır ve step bitkileri',
          'Seyrek dikenli çalılıklar',
          'Yoğun geniş yapraklı ormanlar ve sık bitki örtüsü',
          'Çöl ve yarı çöl bitkileri'
        ],
        correct: 2,
        explanation: 'Bol yağış sayesinde Karadeniz kıyıları ve dağları yoğun ormanlarla kaplıdır. Türkiye\'nin en gür ormanlarının büyük bölümü bu bölgededir.'
      },
      {
        text: 'Türkiye\'nin en uzun nehri Kızılırmak hangi bölgeden geçerek denize dökülür?',
        options: [
          'Akdeniz ve Ege Bölgesi\'nden',
          'İç Anadolu ve Karadeniz Bölgesi\'nden',
          'Marmara ve Karadeniz Bölgesi\'nden',
          'Doğu Anadolu ve Karadeniz Bölgesi\'nden'
        ],
        correct: 1,
        explanation: 'Kızılırmak, Sivas\'tan doğarak İç Anadolu\'yu geçip Karadeniz\'e dökülür. 1.355 km uzunluğuyla Türkiye\'nin en uzun ırmağıdır.'
      }
    ]
  },
  {
    id: 'marmara',
    name: 'Marmara Bölgesi',
    capital: 'İstanbul',
    icon: '🏙️',
    color: '#F5A42A',
    badge: 'Sanayi ve Tarih Kaşifi',
    story: 'Profesör Coğraf elindeki haritaya işaret ediyor: "Marmara Bölgesi\'ne geldin! Burada Türkiye\'nin kalbi atıyor. İstanbul\'un görkemli minareleri, Bursa\'nın ipek atölyeleri ve Çanakkale\'nin tarihi boğazıyla bu bölge hem sanayinin hem de kültürün merkezi."',
    mission: 'Marmara Bölgesi\'nin coğrafi konumunu, ekonomik önemini ve tarihi yapısını keşfederek "Sanayi ve Tarih Kaşifi" unvanını kazan!',
    funFact: 'İstanbul, dünyanın iki kıtaya birden yayılmış sayılı şehirlerinden biridir. Boğaziçi Köprüsü\'nden bir adımda Avrupa\'dan Asya\'ya geçebilirsin!',
    questions: [
      {
        text: 'Türkiye\'nin nüfus ve sanayi açısından en gelişmiş bölgesi hangisidir?',
        options: [
          'Ege Bölgesi',
          'İç Anadolu Bölgesi',
          'Akdeniz Bölgesi',
          'Marmara Bölgesi'
        ],
        correct: 3,
        explanation: 'Marmara Bölgesi, Türkiye nüfusunun yaklaşık %30\'unu barındırır ve ülkenin en önemli sanayi merkezi olma özelliğini korumaktadır.'
      },
      {
        text: 'Marmara Denizi, hangi iki boğazla diğer denizlere bağlanır?',
        options: [
          'Hürmüz ve Bab-ül Mendep Boğazı',
          'İstanbul ve Çanakkale Boğazı',
          'Kerç ve Öresund Boğazı',
          'Messina ve Gibraltar Boğazı'
        ],
        correct: 1,
        explanation: 'Marmara Denizi; İstanbul (Boğaziçi) Boğazı ile Karadeniz\'e, Çanakkale Boğazı ile Ege Denizi\'ne bağlanır.'
      },
      {
        text: 'Aşağıdakilerden hangisi Marmara Bölgesi\'nde yer ALMAZ?',
        options: [
          'İstanbul',
          'Bursa',
          'Kocaeli',
          'Kastamonu'
        ],
        correct: 3,
        explanation: 'Kastamonu, Karadeniz Bölgesi\'nde yer alır. İstanbul, Bursa ve Kocaeli ise Marmara Bölgesi\'nin önemli sanayi şehirleridir.'
      },
      {
        text: 'Osmanlı İmparatorluğu\'nun başkenti olan İstanbul hangi bölgededir?',
        options: [
          'Ege Bölgesi',
          'İç Anadolu Bölgesi',
          'Marmara Bölgesi',
          'Karadeniz Bölgesi'
        ],
        correct: 2,
        explanation: 'İstanbul, 1453\'ten 1923\'e kadar Osmanlı İmparatorluğu\'nun başkentiydi. Bugün Türkiye\'nin en büyük şehri olup Marmara Bölgesi\'ndedir.'
      }
    ]
  },
  {
    id: 'ege',
    name: 'Ege Bölgesi',
    capital: 'İzmir',
    icon: '🫒',
    color: '#9B59B6',
    badge: 'Tarım Araştırmacısı',
    story: 'Rüzgar zeytinliklerin arasından geçerken Profesör Coğraf fısıldar: "Ege\'ye hoş geldin! Burası zeytin ağaçlarının dans ettiği, incirin altın sarısına büründüğü bereketli bir bölge. İzmir\'den yükselen gökkuşağı, Efes\'in antik sütunları seni bekliyor."',
    mission: 'Ege Bölgesi\'nin tarım ürünlerini, iklimini ve önemli yerlerini keşfederek "Tarım Araştırmacısı" unvanını kazan!',
    funFact: 'İzmir, Türkiye\'nin üçüncü büyük şehridir ve "güzel İzmir" olarak bilinir. Antik çağda Smyrna adıyla anılan bu şehrin tarihi 3000 yılı aşmaktadır!',
    questions: [
      {
        text: 'Ege Bölgesi\'nde en yaygın yetiştirilen tarım ürünleri hangileridir?',
        options: [
          'Buğday ve arpa',
          'Zeytin, pamuk ve incir',
          'Çay ve fındık',
          'Şeker pancarı ve mısır'
        ],
        correct: 1,
        explanation: 'Ege Bölgesi, Türkiye zeytin ve zeytinyağı üretiminin büyük bölümünü karşılar. Pamuk, incir ve tütün de bölgenin önemli ürünlerindendir.'
      },
      {
        text: 'Ege ikliminin yazları nasıl geçer?',
        options: [
          'Serin ve yağışlı',
          'Soğuk ve karlı',
          'Sıcak ve kurak',
          'Ilıman ve yağışlı'
        ],
        correct: 2,
        explanation: 'Akdeniz iklimine benzer Ege ikliminde yazlar sıcak ve kurak, kışlar ise ılık ve yağışlı geçer. Bu iklim zeytin tarımına çok elverişlidir.'
      },
      {
        text: 'Dünyaca ünlü Efes Antik Kenti hangi ilde bulunur?',
        options: [
          'İzmir (Selçuk ilçesi)',
          'Muğla',
          'Manisa',
          'Aydın'
        ],
        correct: 0,
        explanation: 'Efes Antik Kenti, İzmir iline bağlı Selçuk ilçesindedir. Dünyanın en iyi korunmuş antik şehirlerinden biri olup UNESCO Dünya Mirası listesindedir.'
      },
      {
        text: 'Pamuk tarımı Türkiye\'de en yoğun hangi bölgede yapılır?',
        options: [
          'Karadeniz Bölgesi',
          'İç Anadolu Bölgesi',
          'Ege Bölgesi',
          'Doğu Anadolu Bölgesi'
        ],
        correct: 2,
        explanation: 'Ege Bölgesi, Türkiye\'nin en önemli pamuk üretim merkezidir. Özellikle Aydın, Manisa ve Denizli ovalarında yoğun pamuk tarımı yapılır.'
      }
    ]
  },
  {
    id: 'akdeniz',
    name: 'Akdeniz Bölgesi',
    capital: 'Adana',
    icon: '🌤️',
    color: '#1BBFB0',
    badge: 'İklim Dedektifi',
    story: 'Sıcak güneş tenine değerken Profesör Coğraf sırıtır: "İklim Dedektifliğine hazır mısın? Akdeniz kıyıları narenciyenin mis gibi kokmakta, Toros Dağları gökyüzüne uzanmakta. Bu bölgenin sırlarını keşfetmen gerekiyor!"',
    mission: 'Akdeniz ikliminin özelliklerini, Toros Dağları\'nı ve bölgenin önemli tarım ürünlerini öğrenerek "İklim Dedektifi" unvanını kazan!',
    funFact: 'Türkiye\'nin "Turizmde başkenti" unvanını taşıyan Antalya\'ya her yıl 10 milyondan fazla turist gelir. Bu Türkiye\'nin toplam turist sayısının yaklaşık yarısını oluşturur!',
    questions: [
      {
        text: 'Akdeniz ikliminin temel özelliği nedir?',
        options: [
          'Her mevsim eşit miktarda yağış alır',
          'Kışlar çok soğuk, yazlar sıcak ve yağışlıdır',
          'Yazlar sıcak ve kurak, kışlar ılık ve yağışlıdır',
          'Dört mevsim de kurak ve sıcaktır'
        ],
        correct: 2,
        explanation: 'Akdeniz ikliminin en önemli özelliği: yazlar sıcak ve kurak, kışlar ılık ve yağışlı geçer. Bu iklim özellikle güney kıyılarında hâkimdir.'
      },
      {
        text: 'Akdeniz Bölgesi boyunca uzanan büyük dağ sırası hangisidir?',
        options: [
          'Kaçkar Dağları',
          'Ağrı Dağı',
          'Toros Dağları',
          'Uludağ'
        ],
        correct: 2,
        explanation: 'Toros (Toroslar) Dağları, Akdeniz kıyısı boyunca batı-doğu yönünde uzanır ve bölgenin iç kesimlere geçişini engelleyen doğal bir bariyer oluşturur.'
      },
      {
        text: 'Türkiye\'de narenciye (portakal, limon, mandalina) üretimi hangi bölgede yoğundur?',
        options: [
          'Marmara Bölgesi',
          'Karadeniz Bölgesi',
          'Akdeniz Bölgesi',
          'Ege Bölgesi'
        ],
        correct: 2,
        explanation: 'Akdeniz\'in ılık iklimi narenciye tarımına son derece elverişlidir. Adana, Mersin ve Antalya illeri Türkiye narenciye üretiminin merkezidir.'
      },
      {
        text: 'Akdeniz Bölgesi\'nin nüfus bakımından en büyük şehri hangisidir?',
        options: [
          'Antalya',
          'Mersin',
          'Hatay',
          'Adana'
        ],
        correct: 3,
        explanation: 'Adana, Akdeniz Bölgesi\'nin en büyük şehri olup Türkiye\'nin 5. büyük şehridir. Sanayi, tarım ve ticaret açısından bölgenin merkezidir.'
      }
    ]
  },
  {
    id: 'ic-anadolu',
    name: 'İç Anadolu Bölgesi',
    capital: 'Ankara',
    icon: '⛰️',
    color: '#F4D03F',
    badge: 'Yer Şekilleri Ustası',
    story: 'Rüzgarlı bozkırda Profesör Coğraf sana döner: "Türkiye\'nin kalbi İç Anadolu\'dasın! Başkent Ankara burada, dalgalanan buğday tarlaları burada, mistik Tuz Gölü burada. Geniş yüksek ovalar ve peri bacalarıyla dolu bu platoya hazır mısın?"',
    mission: 'İç Anadolu\'nun yer şekillerini, karasal iklimini, Ankara\'nın önemini ve Tuz Gölü\'nü keşfederek "Yer Şekilleri Ustası" unvanını kazan!',
    funFact: 'Kapadokya (Nevşehir), İç Anadolu\'da yer alır ve milyonlarca yıl önce yaşanan volkanik patlamalarla oluşan peri bacaları ile dünyaca ünlüdür. Her yıl binlerce turist sıcak hava balonu turlarıyla bu muhteşem manzaranın tadını çıkarır!',
    questions: [
      {
        text: 'İç Anadolu Bölgesi\'nde hangi iklim tipi hâkimdir?',
        options: [
          'Akdeniz iklimi',
          'Karasal (bozkır) iklim',
          'Karadeniz iklimi',
          'Çöl iklimi'
        ],
        correct: 1,
        explanation: 'İç Anadolu\'da karasal iklim hâkimdir. Yazlar sıcak ve kurak, kışlar soğuk ve karlı geçer. Yıllık yağış miktarı düşüktür ve step (bozkır) bitki örtüsü görülür.'
      },
      {
        text: 'Türkiye Cumhuriyeti\'nin başkenti Ankara hangi bölgededir?',
        options: [
          'Marmara Bölgesi',
          'Karadeniz Bölgesi',
          'İç Anadolu Bölgesi',
          'Ege Bölgesi'
        ],
        correct: 2,
        explanation: 'Ankara, İç Anadolu Bölgesi\'nde bulunur ve 13 Ekim 1923\'te Türkiye Cumhuriyeti\'nin başkenti ilan edilmiştir.'
      },
      {
        text: 'Tuz Gölü hangi bölgededir ve en önemli özelliği nedir?',
        options: [
          'Marmara - derin tatlı su gölü',
          'İç Anadolu - yüksek tuzluluklu, sığ göl',
          'Akdeniz - büyük tatlı su gölü',
          'Ege - derin tuzlu göl'
        ],
        correct: 1,
        explanation: 'Tuz Gölü, İç Anadolu\'da Konya-Ankara-Aksaray il sınırlarında yer alır. %32 tuzluluk oranıyla Türkiye\'nin en tuzlu gölüdür ve Türkiye tuz ihtiyacının büyük bölümünü karşılar.'
      },
      {
        text: 'İç Anadolu Bölgesi\'nin en önemli tarım ürünü hangisidir?',
        options: [
          'Çay',
          'Narenciye',
          'Buğday',
          'Zeytin'
        ],
        correct: 2,
        explanation: 'İç Anadolu geniş düzlükleri ve karasal iklimiyle Türkiye\'nin tahıl ambarı olarak bilinir. Buğday ve arpa üretiminde Türkiye\'de birinci sıradadır.'
      }
    ]
  },
  {
    id: 'dogu-anadolu',
    name: 'Doğu Anadolu Bölgesi',
    capital: 'Erzurum',
    icon: '🏔️',
    color: '#5B9BD5',
    badge: 'Dağ Kaşifi',
    story: 'Karla kaplı zirvelere bakarken Profesör Coğraf coşkuyla anlatır: "Dağ Kaşifi adayı! Ağrı Dağı\'nın görkemi, Van Gölü\'nün maviliği ve Fırat\'ın doğduğu topraklar seni çağırıyor. Türkiye\'nin en yüksek bölgesi sırlarını sana açıyor!"',
    mission: 'Ağrı Dağı\'nı, Van Gölü\'nü, Fırat ve Dicle nehirlerinin kaynağını keşfederek "Dağ Kaşifi" unvanını kazan!',
    funFact: 'Ağrı Dağı (5.137 m), yalnızca Türkiye\'nin değil tüm Orta Doğu\'nun en yüksek zirvesidir. Zirveyi yıl boyunca karlar örter ve efsaneye göre Nuh\'un Gemisi buraya oturmuştur!',
    questions: [
      {
        text: 'Türkiye\'nin en yüksek dağı hangisidir ve kaç metredir?',
        options: [
          'Kaçkar Dağı - 3.937 m',
          'Erciyes Dağı - 3.916 m',
          'Uludağ - 2.543 m',
          'Ağrı Dağı - 5.137 m'
        ],
        correct: 3,
        explanation: 'Ağrı Dağı, 5.137 metre yüksekliğiyle Türkiye\'nin ve Orta Doğu\'nun en yüksek zirvesidir. Doğu Anadolu\'da Ağrı ilinde bulunur.'
      },
      {
        text: 'Tarihi Mezopotamya\'yı besleyen Fırat ve Dicle nehirlerinin kaynağı hangi bölgededir?',
        options: [
          'İç Anadolu Bölgesi',
          'Karadeniz Bölgesi',
          'Doğu Anadolu Bölgesi',
          'Güneydoğu Anadolu Bölgesi'
        ],
        correct: 2,
        explanation: 'Fırat ve Dicle nehirleri Doğu Anadolu\'daki dağlardan doğar. Bu bölge pek çok büyük nehrin kaynağı olduğundan "Suların Anası" olarak da bilinir.'
      },
      {
        text: 'Türkiye\'nin en büyük gölü hangisidir ve hangi bölgededir?',
        options: [
          'Tuz Gölü - İç Anadolu',
          'Beyşehir Gölü - Akdeniz',
          'Van Gölü - Doğu Anadolu',
          'Eğirdir Gölü - Akdeniz'
        ],
        correct: 2,
        explanation: 'Van Gölü, Türkiye\'nin en büyük gölüdür. Yüksek soda içeriği sayesinde "soda gölü" olarak da bilinir. Doğu Anadolu\'da Van ilinde bulunur.'
      },
      {
        text: 'Doğu Anadolu Bölgesi\'nin iklim özelliği nedir?',
        options: [
          'Yazlar çok sıcak, kışlar ılık geçer',
          'Dört mevsim eşit yağış alır',
          'Kışlar çok sert ve soğuk geçer, yazlar serindir',
          'Deniz etkisiyle yıl boyu ılımandır'
        ],
        correct: 2,
        explanation: 'Türkiye\'nin en soğuk bölgesi olan Doğu Anadolu\'da kışlar çok sert geçer. Erzurum ve Kars -40°C\'ye kadar düşen sıcaklıklar yaşayabilir.'
      }
    ]
  },
  {
    id: 'guneydogu',
    name: 'Güneydoğu Anadolu Bölgesi',
    capital: 'Gaziantep',
    icon: '🏺',
    color: '#E07B6A',
    badge: 'Kültür Elçisi',
    story: 'Tarihin derinliklerinden sesler gelirken Profesör Coğraf fısıldar: "Son bölgeye hoş geldin, Kültür Elçisi adayı! Burası Mezopotamya\'nın kalbi; Sümer\'in, Babil\'in izleri toprakta saklı. GAP projesi bu kadim toprakları yeşile boyuyor. Tarih kokan bu bölgeyi keşfetmeye hazır mısın?"',
    mission: 'GAP projesini, Mezopotamya medeniyetlerini ve bölgenin coğrafi özelliklerini keşfederek "Kültür Elçisi" unvanını kazan!',
    funFact: 'Şanlıurfa\'da bulunan Göbeklitepe, dünyada bilinen en eski tapınak kompleksidir (yaklaşık MÖ 10.000). Bu keşif, insanlık tarihini yeniden yazdı!',
    questions: [
      {
        text: 'GAP (Güneydoğu Anadolu Projesi) hangi bölgede uygulanmaktadır?',
        options: [
          'İç Anadolu Bölgesi',
          'Doğu Anadolu Bölgesi',
          'Güneydoğu Anadolu Bölgesi',
          'Akdeniz Bölgesi'
        ],
        correct: 2,
        explanation: 'GAP, Güneydoğu Anadolu Bölgesi\'nde Fırat ve Dicle nehirleri üzerinde uygulanan büyük bir tarımsal sulama ve hidroelektrik enerji projesidir.'
      },
      {
        text: 'Güneydoğu Anadolu Bölgesi\'nin iklim özelliği nedir?',
        options: [
          'Her mevsim yağışlı ve serin',
          'Çok sıcak ve kurak yazlar, yağışlı kışlar',
          'Karasal soğuk iklim',
          'Bol kar yağışlı ılıman iklim'
        ],
        correct: 1,
        explanation: 'Güneydoğu Anadolu, Türkiye\'nin en sıcak ve en kurak bölgesidir. Yazları çok sıcak geçer; Şanlıurfa ise Türkiye\'nin en sıcak şehri olarak bilinir.'
      },
      {
        text: 'Aşağıdaki şehirlerin hangisi Güneydoğu Anadolu Bölgesi\'nde yer alır?',
        options: [
          'Erzurum',
          'Kars',
          'Muş',
          'Gaziantep'
        ],
        correct: 3,
        explanation: 'Gaziantep, Güneydoğu Anadolu Bölgesi\'nin en büyük şehri olup Türkiye\'nin 6. büyük şehridir. Baklavası ve tarihî çarşılarıyla da ünlüdür.'
      },
      {
        text: 'Güneydoğu Anadolu, hangi kadim medeniyetlerin izlerini taşımaktadır?',
        options: [
          'Roma ve Bizans medeniyetleri',
          'Osmanlı ve Selçuklu devletleri',
          'Mezopotamya medeniyetleri (Sümer, Babil, Asur)',
          'Pers ve Yunan medeniyetleri'
        ],
        correct: 2,
        explanation: 'Güneydoğu Anadolu, tarihsel Mezopotamya\'nın bir parçasıdır. Sümer, Babil ve Asur gibi insanlık tarihinin en eski medeniyetleri bu topraklarda doğmuştur.'
      }
    ]
  }
];

// ── SES MOTORU ───────────────────────────────────────────────
const SFX = (() => {
  let ctx = null;
  const getCtx = () => {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    return ctx;
  };

  function playTone(freq, duration, type = 'sine', vol = 0.3, delay = 0) {
    try {
      const c = getCtx();
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.connect(gain);
      gain.connect(c.destination);
      osc.type = type;
      osc.frequency.setValueAtTime(freq, c.currentTime + delay);
      gain.gain.setValueAtTime(vol, c.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + delay + duration);
      osc.start(c.currentTime + delay);
      osc.stop(c.currentTime + delay + duration + 0.05);
    } catch (e) { /* ignore audio errors */ }
  }

  return {
    click()   { playTone(880, 0.08, 'sine', 0.15); },
    correct() {
      playTone(523, 0.15, 'sine', 0.25);
      playTone(659, 0.15, 'sine', 0.25, 0.15);
      playTone(784, 0.25, 'sine', 0.25, 0.30);
    },
    wrong()   {
      playTone(220, 0.1, 'sawtooth', 0.2);
      playTone(180, 0.2, 'sawtooth', 0.2, 0.12);
    },
    badge() {
      [523,659,784,1047].forEach((f,i) => playTone(f, 0.2, 'sine', 0.3, i * 0.1));
    },
    fanfare() {
      const notes = [523,523,523,415,523,659,523];
      const durs  = [0.15,0.15,0.15,0.1,0.2,0.4,0.3];
      let t = 0;
      notes.forEach((f,i) => { playTone(f, durs[i], 'triangle', 0.35, t); t += durs[i]; });
    }
  };
})();

// ── OYUN DURUMU ──────────────────────────────────────────────
const State = {
  playerName: '',
  completedRegions: {},   // { regionId: { score, stars, correct } }
  currentRegion: null,
  currentQuestionIndex: 0,
  sessionScore: 0,
  quizScore: 0,
  quizCorrect: 0,
  timerInterval: null,
  timeLeft: 0,
  totalAnswered: 0,
  totalCorrect: 0,
  responseTimes: [],

  save() {
    localStorage.setItem('tkf_state', JSON.stringify({
      playerName: this.playerName,
      completedRegions: this.completedRegions,
      sessionScore: this.sessionScore,
      totalAnswered: this.totalAnswered,
      totalCorrect: this.totalCorrect,
      responseTimes: this.responseTimes
    }));
  },
  load() {
    const raw = localStorage.getItem('tkf_state');
    if (!raw) return false;
    try {
      const d = JSON.parse(raw);
      Object.assign(this, d);
      return true;
    } catch { return false; }
  },
  reset() {
    this.completedRegions = {};
    this.sessionScore = 0;
    this.totalAnswered = 0;
    this.totalCorrect = 0;
    this.responseTimes = [];
    localStorage.removeItem('tkf_state');
  }
};

// ── YARDIMCI FONKSIYONLAR ────────────────────────────────────
function $(id) { return document.getElementById(id); }

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const s = $(`screen-${id}`);
  if (s) s.classList.add('active');
}

function createParticles() {
  const container = $('particles-intro');
  if (!container) return;
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 8 + 3;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      animation-duration:${Math.random()*10+8}s;
      animation-delay:${Math.random()*8}s;
      opacity:${Math.random()*0.5+0.2};
      background: hsl(${Math.random()*60+190}deg 80% 65% / 0.5);
    `;
    container.appendChild(p);
  }
}

function confetti() {
  const colors = ['#4facfe','#43e97b','#f9c74f','#f7797d','#a855f7','#06b6d4'];
  for (let i = 0; i < 60; i++) {
    const c = document.createElement('div');
    c.className = 'confetti-piece';
    c.style.cssText = `
      left: ${Math.random()*100}vw;
      background: ${colors[Math.floor(Math.random()*colors.length)]};
      width: ${Math.random()*10+6}px;
      height: ${Math.random()*14+8}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '3px'};
      animation-duration: ${Math.random()*2+2}s;
      animation-delay: ${Math.random()*1.5}s;
    `;
    document.body.appendChild(c);
    c.addEventListener('animationend', () => c.remove());
  }
}

function starsForScore(score) {
  if (score >= 400) return 3;
  if (score >= 250) return 2;
  if (score >= 100) return 1;
  return 0;
}

function renderStars(n) {
  return '⭐'.repeat(n) + '☆'.repeat(3 - n);
}

// ── HARİTA ──────────────────────────────────────────────────
function initMap() {
  const polygons = document.querySelectorAll('.region-polygon');
  const hoverCard = $('region-hover-card');
  const rcIcon = $('rc-icon');
  const rcName = $('rc-name');
  const rcStatus = $('rc-status');

  polygons.forEach(poly => {
    const rid = poly.dataset.region;
    const region = REGIONS.find(r => r.id === rid);
    if (!region) return;

    // Mark completed
    if (State.completedRegions[rid]) {
      poly.classList.add('completed');
    }

    poly.addEventListener('mouseenter', () => {
      const done = State.completedRegions[rid];
      rcIcon.textContent = region.icon;
      rcName.textContent = region.name;
      rcStatus.textContent = done
        ? ` — ${region.badge} ✓ (${State.completedRegions[rid].score} puan)`
        : ' — Keşfedilmedi';
      rcStatus.style.color = done ? 'var(--accent)' : 'var(--text-dim)';
      hoverCard.style.display = 'flex';
    });

    poly.addEventListener('mouseleave', () => {
      hoverCard.style.display = 'none';
    });

    poly.addEventListener('click', () => {
      SFX.click();
      enterRegion(rid);
    });
  });

  // SVG text labels also clickable
  document.querySelectorAll('.region-label').forEach(label => {
    label.addEventListener('click', () => {
      SFX.click();
      enterRegion(label.dataset.region);
    });
  });
}

function updateMapUI() {
  // Header
  $('header-player-name').textContent = `🗺️ ${State.playerName}`;
  const done = Object.keys(State.completedRegions).length;
  $('progress-text').textContent = `${done}/7 Bölge Tamamlandı`;
  $('total-score').textContent = State.sessionScore.toLocaleString('tr-TR');

  // Update polygon completed states
  document.querySelectorAll('.region-polygon').forEach(poly => {
    const rid = poly.dataset.region;
    poly.classList.toggle('completed', !!State.completedRegions[rid]);
  });

  // Badges strip
  const strip = $('badges-strip');
  strip.innerHTML = '';
  REGIONS.forEach(r => {
    if (State.completedRegions[r.id]) {
      const span = document.createElement('span');
      span.className = 'strip-badge';
      span.textContent = r.icon;
      span.dataset.label = r.badge;
      strip.appendChild(span);
    }
  });
  if (strip.children.length === 0) {
    strip.innerHTML = '<span style="font-size:0.8rem;color:var(--text-dim);letter-spacing:1px">Henüz rozet kazanılmadı — bölgelere tıkla!</span>';
  }

  // Check all done
  if (Object.keys(State.completedRegions).length === REGIONS.length) {
    setTimeout(() => showFinalScreen(), 800);
  }
}

// ── BÖLGE GİRİŞ ─────────────────────────────────────────────
function enterRegion(rid) {
  const region = REGIONS.find(r => r.id === rid);
  if (!region) return;
  State.currentRegion = region;

  $('ri-bg').style.background = `radial-gradient(ellipse at center, ${region.color}55, var(--bg-dark))`;
  $('ri-flag').textContent = region.icon;
  $('ri-flag').style.background = `${region.color}33`;
  $('ri-name').textContent = region.name;
  $('ri-story-text').textContent = region.story;
  $('ri-mission').textContent = region.mission;
  $('ri-badge-icon').textContent = region.icon;
  $('ri-badge-name').textContent = region.badge;

  showScreen('region-intro');
}

// ── QUIZ ─────────────────────────────────────────────────────
const QUESTION_TIME = 20; // seconds

function startQuiz() {
  const region = State.currentRegion;
  State.currentQuestionIndex = 0;
  State.quizScore = 0;
  State.quizCorrect = 0;

  $('q-region-name').textContent = `${region.icon} ${region.name}`;
  $('q-score-live').textContent = '0';

  // Dots
  const dots = $('q-dots');
  dots.innerHTML = '';
  region.questions.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'q-dot' + (i === 0 ? ' current' : '');
    d.id = `q-dot-${i}`;
    dots.appendChild(d);
  });

  showScreen('quiz');
  renderQuestion();
}

function renderQuestion() {
  const region = State.currentRegion;
  const qi = State.currentQuestionIndex;
  const q = region.questions[qi];

  $('answer-feedback').style.display = 'none';
  $('q-number').textContent = `Soru ${qi + 1} / ${region.questions.length}`;
  $('q-text').textContent = q.text;

  // Dots
  region.questions.forEach((_, i) => {
    const dot = $(`q-dot-${i}`);
    if (dot) dot.className = 'q-dot' + (i === qi ? ' current' : (State.completedRegions[region.id + '_q' + i] || ''));
  });

  // Options
  const opts = $('q-options');
  opts.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span>${opt}`;
    btn.addEventListener('click', () => selectAnswer(i));
    opts.appendChild(btn);
  });

  // Timer
  startTimer(q);
  State.questionStartTime = Date.now();
}

function startTimer(q) {
  clearInterval(State.timerInterval);
  State.timeLeft = QUESTION_TIME;
  const bar = $('timer-bar');
  bar.style.width = '100%';
  bar.classList.remove('danger');

  State.timerInterval = setInterval(() => {
    State.timeLeft -= 0.1;
    const pct = Math.max(0, (State.timeLeft / QUESTION_TIME) * 100);
    bar.style.width = pct + '%';
    if (pct < 30) bar.classList.add('danger');
    if (State.timeLeft <= 0) {
      clearInterval(State.timerInterval);
      selectAnswer(-1); // time up
    }
  }, 100);
}

function selectAnswer(chosenIndex) {
  clearInterval(State.timerInterval);
  const region = State.currentRegion;
  const qi = State.currentQuestionIndex;
  const q = region.questions[qi];
  const elapsed = (Date.now() - State.questionStartTime) / 1000;
  State.responseTimes.push(Math.min(elapsed, QUESTION_TIME));

  const isCorrect = chosenIndex === q.correct;
  State.totalAnswered++;

  // Disable all options
  const optBtns = $('q-options').querySelectorAll('.option-btn');
  optBtns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('correct-anim');
    if (i === chosenIndex && !isCorrect) btn.classList.add('wrong-anim');
  });

  // Update dot
  const dot = $(`q-dot-${qi}`);
  if (dot) {
    dot.className = 'q-dot ' + (isCorrect ? 'correct' : 'wrong');
  }

  // Score
  if (isCorrect) {
    const timeBonus = Math.round((State.timeLeft / QUESTION_TIME) * 50);
    const earned = 100 + timeBonus;
    State.quizScore += earned;
    State.sessionScore += earned;
    State.quizCorrect++;
    State.totalCorrect++;
    SFX.correct();
  } else {
    SFX.wrong();
    if (chosenIndex !== -1) {
      $('q-options').classList.add('shake');
      setTimeout(() => $('q-options').classList.remove('shake'), 400);
    }
  }

  $('q-score-live').textContent = State.quizScore.toLocaleString('tr-TR');
  $('total-score').textContent = State.sessionScore.toLocaleString('tr-TR');

  // Feedback
  const fb = $('answer-feedback');
  $('fb-icon').textContent = isCorrect ? '✅' : (chosenIndex === -1 ? '⏰' : '❌');
  const ftxt = $('fb-text');
  ftxt.textContent = isCorrect ? 'Harika! Doğru cevap!' : (chosenIndex === -1 ? 'Süre doldu!' : 'Yanlış cevap!');
  ftxt.style.color = isCorrect ? 'var(--accent)' : 'var(--danger)';
  $('fb-explanation').textContent = q.explanation;
  fb.style.display = 'flex';
}

function nextQuestion() {
  State.currentQuestionIndex++;
  if (State.currentQuestionIndex >= State.currentRegion.questions.length) {
    completeRegion();
  } else {
    renderQuestion();
  }
}

function completeRegion() {
  const region = State.currentRegion;
  const stars = starsForScore(State.quizScore);

  // Save
  State.completedRegions[region.id] = {
    score: State.quizScore,
    stars,
    correct: State.quizCorrect,
    total: region.questions.length
  };
  State.save();

  // Render complete screen
  $('stars-display').textContent = renderStars(stars);
  $('bc-badge-icon').textContent = region.icon;
  $('bc-badge-name').textContent = region.badge;
  $('bc-region-name').textContent = region.name;
  $('bc-score').textContent = State.quizScore;
  $('bc-fact').textContent = region.funFact;

  SFX.badge();
  confetti();
  showScreen('region-complete');
}

// ── FİNAL EKRANI ─────────────────────────────────────────────
function showFinalScreen() {
  SFX.fanfare();
  confetti();
  setTimeout(confetti, 800);

  $('final-player-name').textContent = State.playerName;
  $('fs-score').textContent = State.sessionScore.toLocaleString('tr-TR');

  const acc = State.totalAnswered > 0
    ? Math.round((State.totalCorrect / State.totalAnswered) * 100) : 0;
  $('fs-accuracy').textContent = `%${acc}`;

  const avgTime = State.responseTimes.length > 0
    ? (State.responseTimes.reduce((a, b) => a + b, 0) / State.responseTimes.length).toFixed(1)
    : '0';
  $('fs-time').textContent = `${avgTime}s`;

  // Badges grid
  const grid = $('final-badges-grid');
  grid.innerHTML = '';
  REGIONS.forEach((r, idx) => {
    const item = document.createElement('div');
    item.className = 'final-badge-item';
    item.style.animationDelay = `${idx * 0.1}s`;
    const d = State.completedRegions[r.id];
    item.innerHTML = `<span>${r.icon}</span><span>${r.badge}<br>${d ? renderStars(d.stars) : ''}</span>`;
    grid.appendChild(item);
  });

  // Certificate
  $('cert-name').textContent = State.playerName;
  $('cert-score').textContent = State.sessionScore.toLocaleString('tr-TR');
  $('cert-date').textContent = new Date().toLocaleDateString('tr-TR', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
  const certBadges = $('cert-badges-row');
  certBadges.innerHTML = REGIONS.map(r => r.icon).join(' ');

  showScreen('final');
}

// ── ANA OYUN SINIFI ──────────────────────────────────────────
const Game = {
  init() {
    createParticles();

    // Kayıtlı oyun varsa devam seçeneği
    // (Bu versiyonda her açılışta taze başlar; yeni oyuncu için uygundur)

    // Buton bağlantıları
    $('btn-start').addEventListener('click', () => {
      SFX.click();
      showScreen('name');
      setTimeout(() => $('player-name-input').focus(), 400);
    });

    $('btn-about').addEventListener('click', () => {
      SFX.click();
      showScreen('about');
    });

    $('btn-back-intro').addEventListener('click', () => {
      SFX.click();
      showScreen('intro');
    });

    $('btn-back-from-about').addEventListener('click', () => {
      SFX.click();
      showScreen('intro');
    });

    $('btn-enter-game').addEventListener('click', () => {
      const name = $('player-name-input').value.trim();
      if (!name) {
        $('player-name-input').focus();
        $('player-name-input').style.borderColor = 'var(--danger)';
        setTimeout(() => ($('player-name-input').style.borderColor = ''), 1500);
        return;
      }
      SFX.click();
      State.reset();
      State.playerName = name;
      State.save();
      initMap();
      updateMapUI();
      showScreen('map');
    });

    $('player-name-input').addEventListener('keydown', e => {
      if (e.key === 'Enter') $('btn-enter-game').click();
    });

    $('btn-start-quiz').addEventListener('click', () => {
      SFX.click();
      startQuiz();
    });

    $('btn-back-map').addEventListener('click', () => {
      SFX.click();
      showScreen('map');
    });

    $('btn-next-q').addEventListener('click', () => {
      SFX.click();
      nextQuestion();
    });

    $('btn-continue-map').addEventListener('click', () => {
      SFX.click();
      updateMapUI();
      showScreen('map');
    });

    $('btn-print-cert').addEventListener('click', () => {
      SFX.click();
      window.print();
    });

    $('btn-play-again').addEventListener('click', () => {
      SFX.click();
      State.reset();
      $('player-name-input').value = '';
      showScreen('intro');
    });
  }
};

// ── BAŞLAT ───────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => Game.init());
