/* ============================================================
   TÜRKİYE'Yİ KEŞFET — OYUN MOTORU v2.0
   TÜBİTAK 4006 Bilim Fuarı Projesi
   ============================================================ */
'use strict';

// ── BÖLGE VERİLERİ ───────────────────────────────────────────
const REGIONS = [
  {
    id: 'karadeniz', number: 1,
    name: 'Karadeniz Bölgesi',
    icon: '🏛️', color: '#72B841',
    badge: 'Osmanlı Mirası Koruyucusu',
    infoCards: [
      { label: 'UNESCO Mirası',  value: 'Safranbolu (1994)' },
      { label: 'Bizans Eseri',  value: 'Sümela Manastırı' },
      { label: 'Hitit Mirası',  value: 'Hattuşaş yakınları' },
      { label: 'Geleneksel',    value: 'Osmanlı konakları' },
    ],
    story: 'Profesör Tarih sana şifreli mesaj gönderdi: "Kaşif, Karadeniz ormanlarının derinliklerine hoş geldin! Kaya yüzüne inşa edilmiş Sümela Manastırı\'nı buldun mu? Safranbolu\'nun Osmanlı sokakları seni çağırıyor. Bu bölge binlerce yıllık kültürel mirasın bekçisi — sırlarını çöz!"',
    mission: 'Karadeniz Bölgesi\'nin somut kültürel mirasını — Safranbolu\'yu, Sümela Manastırı\'nı ve geleneksel Osmanlı mimarisini — keşfederek Osmanlı Mirası Koruyucusu unvanını kazan!',
    funFact: 'Safranbolu, 17. yüzyıldan kalma 2000\'den fazla tescilli Osmanlı evi ile UNESCO Dünya Mirası Listesi\'ndedir (1994). Ahşap ve taş birlikte kullanılan "cumbalı evler" bu şehrin simgesidir!',
    questions: [
      {
        text: 'Safranbolu\'nun UNESCO Dünya Mirası listesine alınmasının sebebi nedir?',
        options: ['Doğal güzellikleri ve ormanları', 'Osmanlı döneminden kalma geleneksel mimarisi ve kentsel dokusu', 'Büyük sanayi fabrikaları', 'Deniz kıyısındaki plajları'],
        correct: 1,
        explanation: 'Safranbolu (Karabük), 1994\'te UNESCO Dünya Mirası listesine girdi. Geç Osmanlı döneminden kalma 2000\'den fazla tescilli ahşap ve taş kâgir konağıyla özgün kentsel dokusunu koruyan ender şehirlerden biridir.'
      },
      {
        text: 'Sümela Manastırı nerede bulunur ve hangi uygarlığa aittir?',
        options: ['İstanbul — Roma dönemine', 'Trabzon — Bizans İmparatorluğu\'na', 'Bursa — Osmanlı\'ya', 'Ankara — Hitit\'lere'],
        correct: 1,
        explanation: 'Sümela Manastırı, Trabzon\'un Maçka ilçesinde kayalıklara inşa edilmiştir. MS 386 yılında Bizans döneminde kurulan manastır, Trabzon\'un en önemli kültürel miraslarından biridir.'
      },
      {
        text: 'Geleneksel Osmanlı konaklarının "cumba" denen özelliği nedir?',
        options: ['Çatıda bulunan kubbe', 'Bodrum katındaki kiler', 'Üst katlarda öne doğru çıkıntı yapan bölüm', 'Avludaki çeşme'],
        correct: 2,
        explanation: 'Cumba, Osmanlı konaklarında üst katlarda caddeye doğru uzanan çıkıntılı bölümdür. Safranbolu\'daki cumbalı evler bölgenin simgesi olmuştur.'
      },
      {
        text: 'Hattuşaş (Hitit Başkenti) Karadeniz\'e yakın hangi ile bağlıdır?',
        options: ['Trabzon', 'Rize', 'Boğazkale/Çorum', 'Sinop'],
        correct: 2,
        explanation: 'Hattuşaş, MÖ 1600\'lü yıllarda Hitit İmparatorluğu\'nun başkentiydi. Çorum\'un Boğazkale ilçesinde yer alır ve 1986\'da UNESCO Dünya Mirası listesine girmiştir.'
      },
      {
        text: 'Karadeniz Bölgesi\'ndeki geleneksel el sanatlarından hangisi en ünlüdür?',
        options: ['Çini seramik', 'Kastamonu yazmacılığı ve tahta oyma', 'Halıcılık', 'Cam işlemeciliği'],
        correct: 1,
        explanation: 'Kastamonu, tahta oyma ve yazmacılık (kumaş baskı) sanatlarıyla ünlüdür. Karadeniz\'in ormanlık yapısı ahşap el sanatlarının gelişmesine zemin hazırlamıştır.'
      }
    ]
  },
  {
    id: 'akdeniz', number: 2,
    name: 'Akdeniz Bölgesi',
    icon: '🏺', color: '#1BBFB0',
    badge: 'Likya Kaşifi',
    infoCards: [
      { label: 'UNESCO Mirası',  value: 'Xanthos-Letoon (1988)' },
      { label: 'Antik Tiyatro', value: 'Aspendos (MS 2. yy)' },
      { label: 'Mozaik Müzesi', value: 'Hatay — Antakya' },
      { label: 'Lykia Uygarlığı', value: 'Kaya mezarları' },
    ],
    story: 'Profesör Tarih heyecanla haykırır: "Kaşif! Akdeniz kıyılarına geldin — ama bu yalnızca bir tatil beldesi değil! Burada Likya Uygarlığı\'nın kayalara oyulmuş mezarları var, 2000 yıllık Aspendos Tiyatrosu hâlâ konser veriyor, Hatay\'da dünyanın en büyük mozaik müzesi seni bekliyor!"',
    mission: 'Akdeniz\'in antik mirasını — Xanthos-Letoon\'u, Aspendos Tiyatrosu\'nu ve Likya kaya mezarlarını — keşfederek Likya Kaşifi unvanını kazan!',
    funFact: 'Aspendos Antik Tiyatrosu (Antalya), MS 2. yüzyılda inşa edildi ve 15.000 kişilik kapasitesiyle günümüzde de aktif olarak konser ve festival mekanı olarak kullanılıyor!',
    questions: [
      {
        text: 'Xanthos-Letoon UNESCO Dünya Mirası nerede bulunur?',
        options: ['Adana yakınlarında, Çukurova\'da', 'Muğla-Antalya arasındaki Likya\'da', 'Hatay\'da Orontes kıyısında', 'Mersin\'de dağ eteklerinde'],
        correct: 1,
        explanation: 'Xanthos-Letoon, Likya uygarlığının merkezi olup Muğla-Antalya sınırında yer alır. 1988\'de UNESCO listesine alınan bu alan Likya yazısının da çözüldüğü yerdir.'
      },
      {
        text: 'Aspendos Antik Tiyatrosu\'nun özelliği nedir?',
        options: ['Tamamen yeraltında inşa edilmiştir', 'Dünyanın en iyi korunmuş Roma tiyatrolarından biridir', 'Yalnızca Yunan dönemine aittir', 'Dünyada tek kez kullanılmıştır'],
        correct: 1,
        explanation: 'Antalya\'nın Serik ilçesindeki Aspendos Tiyatrosu (MS 155), 15.000 kişilik kapasitesiyle dünyanın en iyi korunmuş Roma tiyatrolarından biridir. Günümüzde operalar ve festivaller için kullanılmaktadır.'
      },
      {
        text: 'Hatay\'daki mozaik müzesi neden dünyaca önemlidir?',
        options: ['Türkiye\'nin en büyük fotoğraf koleksiyonuna sahiptir', 'Dünyanın en büyük in situ (yerinde) Roma mozaik koleksiyonlarından birini barındırır', 'Osmanlı hat sanatını sergiler', 'Bizans dönemine ait tablolar içerir'],
        correct: 1,
        explanation: 'Hatay Arkeoloji Müzesi, Antakya (Antioch) kazılarından çıkarılan Roma dönemine ait devasa mozaiklere ev sahipliği yapar. 1.500\'den fazla mozaik eseriyle dünyanın sayılı mozaik koleksiyonlarından biridir.'
      },
      {
        text: 'Likya uygarlığına ait kaya mezarları en çok hangi bölgede görülür?',
        options: ['Ege kıyıları', 'Akdeniz — Muğla ve Antalya arası', 'Karadeniz sahilleri', 'Marmara kıyıları'],
        correct: 1,
        explanation: 'Likya (günümüz Muğla-Antalya arası), MÖ 1. binyılda yaşayan Lykialılara aittir. Kayalara oyulan ev biçimli mezarlar Kaş, Dalyan ve Fethiye çevresinde yoğun biçimde görülür.'
      },
      {
        text: 'Perge Antik Kenti hangi bölgededir ve hangi döneme aittir?',
        options: ['Ege — Yunan dönemi', 'Akdeniz (Antalya) — Helenistik ve Roma dönemi', 'Marmara — Bizans dönemi', 'İç Anadolu — Hitit dönemi'],
        correct: 1,
        explanation: 'Perge, Antalya\'nın Aksu ilçesindedir. MÖ 1000\'lere dayanan tarihi ile Helenistik ve Roma dönemlerinde parlayan Perge; anıtsal kapıları, sütunlu caddesi ve tiyatrosuyla Akdeniz\'in en önemli antik kentlerinden biridir.'
      }
    ]
  },
  {
    id: 'ic-anadolu', number: 3,
    name: 'İç Anadolu Bölgesi',
    icon: '🗿', color: '#F4D03F',
    badge: 'Anadolu Medeniyetleri Uzmanı',
    infoCards: [
      { label: 'UNESCO (1985)',  value: 'Göreme / Kapadokya' },
      { label: 'UNESCO (1986)',  value: 'Hattuşaş — Hitit Başkenti' },
      { label: 'UNESCO (2012)', value: 'Çatalhöyük Neolitik Kenti' },
      { label: 'UNESCO (1985)', value: 'Divriği Ulu Camii' },
    ],
    story: 'Profesör Tarih coşkuyla anlatır: "Anadolu\'nun kalbi İç Anadolu\'ya hoş geldin! 9000 yıl önce burada ilk şehir kuruldu. Hitit İmparatorluğu bu topraklara hükmetti. Kapadokya\'nın peri bacaları binlerce yıl Hristiyanları sakladı. Dört ayrı UNESCO Mirası bu bölgede — hazır mısın?"',
    mission: 'Çatalhöyük\'ten Hattuşaş\'a, Kapadokya\'dan Divriği\'ye İç Anadolu\'nun dört UNESCO mirasını keşfederek Anadolu Medeniyetleri Uzmanı unvanını kazan!',
    funFact: 'Çatalhöyük (Konya), MÖ 7500\'de kurulan dünyanın bilinen en eski şehirsel yerleşimlerinden biridir. Buradaki insanlar 9500 yıl önce duvara resim yapmış, kilden heykel üretmiş ve komşularla birlikte yaşamıştır!',
    questions: [
      {
        text: 'Çatalhöyük neden dünya tarihi açısından bu kadar önemlidir?',
        options: ['Türkiye\'nin ilk camisi burada inşa edilmiştir', 'MÖ 7500\'e tarihlenen dünyanın en eski kentsel yerleşimlerinden biridir', 'İlk Osmanlı sarayı bu noktada kurulmuştur', 'Roma\'nın Anadolu\'daki ilk kolonisidir'],
        correct: 1,
        explanation: 'Çatalhöyük (Konya), yaklaşık MÖ 7500\'de kurulmuş, dünyanın bilinen en eski kentsel yerleşimlerinden biridir. 2012\'de UNESCO listesine alınmış; duvar resimleri, heykelcikler ve toplu yaşam alanları ile erken insan toplumunu anlamamızı sağlar.'
      },
      {
        text: 'Hattuşaş nedir ve hangi ilde bulunur?',
        options: ['Bir Bizans kilisesi — Nevşehir\'de', 'Hitit İmparatorluğu\'nun başkenti — Çorum/Boğazkale\'de', 'Selçuklu kervansarayı — Konya\'da', 'Osmanlı kalesi — Ankara\'da'],
        correct: 1,
        explanation: 'Hattuşaş, MÖ 17.-12. yüzyıllarda Hitit İmparatorluğu\'nun başkentiydi. Çorum\'un Boğazkale ilçesinde bulunur. Aslan Kapı, Sfenks Kapı ve devasa tapınaklarıyla 1986\'da UNESCO listesine alınmıştır.'
      },
      {
        text: 'Göreme Açık Hava Müzesi\'nin önemi nedir?',
        options: ['Osmanlı sultanlarının yaz saraylarını barındırır', 'Kayaya oyulmuş Bizans dönemi kiliseleri ve fresklerini korur', 'İlk Türk-İslam mimarisinin örneklerini içerir', 'Roma su kemerleri burada en iyi korunmuştur'],
        correct: 1,
        explanation: 'Göreme Açık Hava Müzesi (Nevşehir), Kapadokya\'da volkanik kayalara oyulmuş MS 10.-13. yüzyıl Bizans kiliselerini barındırır. Freskler (duvar resimleri) mükemmel korunmuştur; 1985\'te UNESCO listesine girmiştir.'
      },
      {
        text: 'Divriği Ulu Camii ve Darüşşifası\'nı özgün kılan nedir?',
        options: ['Çini mozaikleriyle dünyada en büyük cami', 'Taş işçiliğinin ustalık harikası olarak UNESCO listesindeki ilk İslam eseri', 'Anadolu\'nun ilk ahşap camisidir', 'Sultan Süleyman tarafından yaptırılmıştır'],
        correct: 1,
        explanation: 'Sivas\'ın Divriği ilçesindeki Ulu Cami ve Darüşşifa (1228-29), taş oymacılığının baş yapıtı olarak Türkiye\'nin ilk UNESCO Dünya Mirası listesine alınan eseridir (1985). Kapılarındaki üç boyutlu taş işçiliği eşsizdir.'
      },
      {
        text: 'Peri bacaları nasıl oluşmuştur?',
        options: ['İnsanlar tarafından kazılarak oluşturulmuştur', 'Volkanik tüf tabakasının milyonlarca yıl boyunca erozyon ile aşınmasıyla', 'Depremler sonucu yer şekillerinin değişmesiyle', 'Buzul döneminde buz yığınlarının bıraktığı izlerle'],
        correct: 1,
        explanation: 'Kapadokya\'daki peri bacaları; milyonlarca yıl önce volkanik faaliyetlerle oluşan tüf (yumuşak taş) tabakasının yağmur ve rüzgar erozyonuyla şekillenmesi sonucu meydana gelmiştir. Erken Hristiyanlar bu kayaları oyarak kilise ve yeraltı şehirleri oluşturmuştur.'
      }
    ]
  },
  {
    id: 'ege', number: 4,
    name: 'Ege Bölgesi',
    icon: '🏟️', color: '#9B59B6',
    badge: 'Antik Dünya Kaşifi',
    infoCards: [
      { label: 'UNESCO (2015)',  value: 'Efes Antik Kenti' },
      { label: 'UNESCO (2014)', value: 'Bergama/Pergamon' },
      { label: 'UNESCO (2017)', value: 'Afrodisias' },
      { label: 'UNESCO (1988)', value: 'Hierapolis-Pamukkale' },
    ],
    story: 'Profesör Tarih heyecanla bağırır: "Dört UNESCO Mirası bir arada — Ege\'ye hoş geldin, Antik Dünya Kaşifi! Dünya\'nın Yedi Harikası\'ndan biri olan Artemis Tapınağı\'nın bulunduğu Efes burada. Bergama Kütüphanesi İskenderiye\'nin rakibiydi. Afrodisias\'ta heykel okulu vardı. Pamukkale\'nin travertenleri binlerce yıl insanlara şifa verdi!"',
    mission: 'Efes, Bergama, Afrodisias ve Pamukkale\'nin antik mirasını keşfederek Antik Dünya Kaşifi unvanını kazan!',
    funFact: 'Efes\'teki Artemis Tapınağı, Dünya\'nın Yedi Harikası\'ndan biriydi. Bugün yalnızca tek bir sütunu ayaktadır — ama Efes Antik Kenti, UNESCO koruması altında Türkiye\'nin en çok ziyaret edilen antik alanıdır!',
    questions: [
      {
        text: 'Efes Antik Kenti hangi ilde bulunur ve neden UNESCO listesindedir?',
        options: ['Muğla — doğal güzellikleri nedeniyle', 'İzmir (Selçuk) — Helenistik ve Roma dönemine ait olağanüstü antik kent kalıntıları nedeniyle', 'Aydın — Osmanlı mimarisi nedeniyle', 'Manisa — Bizans katedralleri nedeniyle'],
        correct: 1,
        explanation: 'Efes, İzmir\'in Selçuk ilçesindedir. MÖ 10. yüzyıldan itibaren iskân gören kent; Artemis Tapınağı, Celsus Kütüphanesi ve büyük tiyatrosuyla 2015\'te UNESCO listesine alınmıştır.'
      },
      {
        text: 'Bergama (Pergamon) Antik Kenti\'nin tarihî önemi nedir?',
        options: ['Osmanlı İmparatorluğu\'nun ilk başkentiydi', 'Helenistik dönemde güçlü bir krallık merkezi ve ünlü kütüphanesiyle İskenderiye\'nin rakibiydi', 'Roma\'nın Anadolu\'daki ilk sömürgesi olarak kuruldu', 'Hitit döneminde büyük bir demir işleme merkeziydi'],
        correct: 1,
        explanation: 'Bergama (İzmir\'e bağlı), MÖ 3.-1. yüzyıllarda Pergamon Krallığı\'nın başkentiydi. 200.000 ciltlik kütüphanesiyle İskenderiye\'nin rakibiydi. "Parşömen" (pergament) kâğıdının adını buradan alır. 2014\'te UNESCO listesine girdi.'
      },
      {
        text: 'Afrodisias Antik Kenti hangi sanat dalıyla ünlüdür?',
        options: ['Seramik ve çömlekçilik', 'Heykel ve mermer işçiliği okulu', 'Cam mozaik sanatı', 'Bronz dökümcülüğü'],
        correct: 1,
        explanation: 'Afrodisias (Aydın), Roma döneminde ünlü bir heykel okulu barındırıyordu. Mermer heykeltraşlığı bu kentte doruk noktasına ulaştı. 2017\'de UNESCO listesine alınan kentte bugün müzede yüzlerce özgün heykel sergilenmektedir.'
      },
      {
        text: 'Hierapolis-Pamukkale\'nin "travertenleri" nedir?',
        options: ['Volkanik lav taşlarından oluşan dağlar', 'Sıcak su kaynaklarının kireç biriktirmesiyle oluşan beyaz teraskayalar', 'Mağara içindeki stalaktit ve stalagmitler', 'Nehir sedimanlarının oluşturduğu delta'],
        correct: 1,
        explanation: 'Pamukkale\'nin (Denizli) beyaz teraskayaları "travertenler"dir. Kalsiyum bikarbonat içeren sıcak sular yüzeye çıktıkça buharlaşır ve kireç tabakası biriktirir. Bu doğal oluşum + Hierapolis Antik Kenti ile 1988\'de UNESCO listesine alınmıştır.'
      },
      {
        text: 'Troya Antik Kenti hangi bölgededir ve neden önemlidir?',
        options: ['Ege — İzmir yakınlarında, Yunan mitolojisindeki Truva savaşının yaşandığı yer', 'Marmara — Çanakkale\'de, Truva savaşının efsanevi kentidir', 'Akdeniz — Antalya\'da, Roma döneminden kalma limandır', 'Karadeniz — Sinop\'ta, ticaret merkezi kentidir'],
        correct: 1,
        explanation: 'Troya (Truva), Çanakkale\'de Marmara Bölgesi\'ndedir; ancak Ege medeniyetleriyle derin bağı vardır. MÖ 3000\'den MS 400\'e kadar kesintisiz iskân edilmiş, Homeros\'un İlyada destanına konu olan efsanevi kenttir. 1998\'de UNESCO listesine girmiştir.'
      }
    ]
  },
  {
    id: 'marmara', number: 5,
    name: 'Marmara Bölgesi',
    icon: '🕌', color: '#F5A42A',
    badge: 'Osmanlı Başkenti Uzmanı',
    infoCards: [
      { label: 'UNESCO (1985)',  value: 'İstanbul Tarihi Alanları' },
      { label: 'UNESCO (2011)', value: 'Selimiye Camii — Edirne' },
      { label: 'UNESCO (2014)', value: 'Bursa ve Cumalıkızık' },
      { label: 'UNESCO (1998)', value: 'Troya Antik Kenti' },
    ],
    story: 'Boğaz vapurunda Profesör Tarih hayranlıkla anlatır: "Osmanlı Başkenti Uzmanı adayı, Marmara\'ya hoş geldin! Dört farklı UNESCO Dünya Mirası bu bölgede! Ayasofya 1500 yıllık, Topkapı Sarayı 500 yıllık, Selimiye Camii\'nin kubbeleri matematiksel mükemmeliyettir. Bursa ise Osmanlı\'nın ilk başkenti..."',
    mission: 'İstanbul\'un tarihi yarımadasını, Edirne\'nin Selimiye Camii\'ni ve Bursa\'nın Osmanlı mirasını keşfederek Osmanlı Başkenti Uzmanı unvanını kazan!',
    funFact: 'Ayasofya (İstanbul), MS 537\'de Bizans İmparatoru Justinianus tarafından inşa edildi. 916 yıl Hristiyan katedrali, 481 yıl Osmanlı camii olarak hizmet veren bu yapı bugün müze ve cami olarak ziyaret edilmektedir. Kubbesi 1000 yıl boyunca dünyanın en büyük kubbesi olma unvanını korudu!',
    questions: [
      {
        text: 'İstanbul\'un hangi tarihi alanı 1985\'te UNESCO listesine alınmıştır?',
        options: ['Boğaziçi köprüleri ve çevresi', 'Tarihi Yarımada — Ayasofya, Topkapı Sarayı, Sultanahmet Camii ve surlar', 'Kadıköy sahil şeridi', 'Beyoğlu ve İstiklal Caddesi'],
        correct: 1,
        explanation: 'İstanbul Tarihi Alanları; Ayasofya, Topkapı Sarayı, Sultanahmet Camii (Mavi Cami), Hippodrom, Kapalıçarşı ve Bizans surlarını kapsayan bölgeyi içerir. 1985\'te dört ayrı alan olarak UNESCO listesine alınmıştır.'
      },
      {
        text: 'Mimar Sinan\'ın baş yapıtı olarak kabul edilen cami hangisidir?',
        options: ['İstanbul Sultanahmet Camii', 'Edirne Selimiye Camii', 'Bursa Yeşil Cami', 'İznik Ayasofyası'],
        correct: 1,
        explanation: 'Selimiye Camii (Edirne, 1575), Mimar Sinan\'ın kendi "ustalık eseri" olarak tanımladığı yapıdır. Merkezi tek kubbenin altında geniş iç mekan, Bizans\'ın Ayasofya\'sından daha büyük bir iç alan sunar. 2011\'de UNESCO listesine girmiştir.'
      },
      {
        text: 'Bursa ve Cumalıkızık UNESCO Mirası\'nın önemi nedir?',
        options: ['Roma döneminden kalma su kemerleri', 'Osmanlı İmparatorluğu\'nun doğuşunu belgeleyen erken Osmanlı anıtları ve geleneksel köy dokusu', 'Osmanlı tersaneleri ve denizcilik geleneği', 'Selçuklu dönemine ait kervansaraylar'],
        correct: 1,
        explanation: 'Bursa, Osmanlı\'nın ilk başkentiydi (1326-1365). Yeşil Cami, Yeşil Türbe ve Bursa Büyük Camii erken Osmanlı mimarisinin şaheserleridir. Cumalıkızık köyü ise 700 yıllık dokusunu korumaktadır. 2014\'te UNESCO listesine alındı.'
      },
      {
        text: 'Topkapı Sarayı kaç yıl boyunca Osmanlı sultanlarına ev sahipliği yapmıştır?',
        options: ['Yaklaşık 100 yıl (15-16. yüzyıl)', 'Yaklaşık 400 yıl (15-19. yüzyıl)', 'Yaklaşık 50 yıl (18. yüzyıl)', 'Yaklaşık 200 yıl (17-18. yüzyıl)'],
        correct: 1,
        explanation: 'Topkapı Sarayı, 1465\'ten 1856\'ya kadar yaklaşık 400 yıl boyunca 36 Osmanlı sultanına ev sahipliği yaptı. 1924\'te müzeye dönüştürülen saray; Hırka-i Saadet, silah koleksiyonu ve Osmanlı porselenleriyle önemli bir kültürel mirastır.'
      },
      {
        text: 'Kapalıçarşı\'nın (Büyük Çarşı) tarihsel önemi nedir?',
        options: ['Türkiye\'nin ilk modern alışveriş merkezidir', '1461\'de inşa edilen, dünyanın en eski ve en büyük kapalı çarşılarından biridir', 'Cumhuriyet döneminde inşa edilmiş turistik alandır', 'Selçuklu döneminden kalma bir liman çarşısıdır'],
        correct: 1,
        explanation: 'İstanbul\'daki Kapalıçarşı (Büyük Çarşı), 1461\'de Fatih Sultan Mehmet döneminde inşa edildi. 61 kapalı cadde, 4000 dükkan ve yüzlerce atölyesiyle dünyanın bilinen en eski ve en büyük kapalı çarşılarından biridir; canlı kültürel mirası yaşatmaktadır.'
      }
    ]
  },
  {
    id: 'dogu-anadolu', number: 6,
    name: 'Doğu Anadolu Bölgesi',
    icon: '⛰️', color: '#5B9BD5',
    badge: 'Kadim Uygarlıklar Dedektifi',
    infoCards: [
      { label: 'UNESCO (1987)',  value: 'Nemrut Dağı — Kommagene' },
      { label: 'UNESCO (2016)', value: 'Ani Harabeleri — Kars' },
      { label: 'UNESCO (2021)', value: 'Arslantepe — Malatya' },
      { label: 'Tarihi Kilise', value: 'Akdamar — Van Gölü' },
    ],
    story: 'Karlı dağların arasında Profesör Tarih fısıldar: "Kadim Uygarlıklar Dedektifi adayı! Tanrı başları bir dağın zirvesinde seni izliyor — Nemrut\'a hoş geldin! Kars\'ta Ani Harabeleri gizli bir medeniyetin sessiz tanığı. Malatya\'da 5500 yıllık saray. Van Gölü\'nde bir adada kilise... Bu bölge tarihin katmanlarla gömülü hazinesi!"',
    mission: 'Nemrut Dağı\'ndaki Kommagene Krallığı\'nı, Ani Harabeleri\'ni ve Arslantepe\'yi keşfederek Kadim Uygarlıklar Dedektifi unvanını kazan!',
    funFact: 'Nemrut Dağı\'nda (Adıyaman) MÖ 1. yüzyılda yaşayan Kommagene Kralı I. Antiokhus, devasa taş başları olan bir mezar tümülüsü yaptırdı. Her biri 8-9 metre yüksekliğindeki bu heykeller gün doğumu ve batımında inanılmaz gölgeler oluşturur!',
    questions: [
      {
        text: 'Nemrut Dağı\'ndaki devasa taş başlar kime aittir?',
        options: ['Hitit Büyük Kral I. Suppiluliuma\'ya', 'Kommagene Krallığı Hükümdarı I. Antiokhus\'a', 'Ermeni Krallığı\'nın ilk hükümdarına', 'Roma İmparatoru Augustus\'a'],
        correct: 1,
        explanation: 'Nemrut Dağı\'ndaki (Adıyaman, 2150 m) devasa tanrı ve kral başları, MÖ 1. yüzyılda Kommagene Krallığı hükümdarı I. Antiokhus tarafından yaptırılmıştır. Kral tanrılarla eşit tutulmuş ve 9 metrelik heykellerle cennet mezarını kurmuştur. 1987\'de UNESCO listesine alınmıştır.'
      },
      {
        text: 'Ani Harabeleri hangi ilde bulunur ve hangi uygarlığa aittir?',
        options: ['Van — Urartu uygarlığına', 'Erzurum — Selçuklu dönemine', 'Kars — Ortaçağ Ermeni Bagratid Krallığı\'na', 'Ağrı — Bizans dönemine'],
        correct: 2,
        explanation: 'Ani, Kars iline bağlıdır. Ortaçağ\'da Ermeni Bagratid Krallığı\'nın başkentiydi; 10.-11. yüzyıllarda 100.000 kişilik nüfusuyla döneminin büyük şehirlerinden biriydi. Camileri, kiliseleri ve saraylarıyla 2016\'da UNESCO listesine alındı.'
      },
      {
        text: 'Arslantepe (Malatya) neden dünya arkeolojisi için bu kadar önemlidir?',
        options: ['Türkiye\'nin en büyük Osmanlı kalesidir', 'MÖ 3300\'e tarihlenen dünyanın bilinen en eski saray ve depo yapılarından birini barındırır', 'Bizans döneminin en büyük su sarnıcıdır', 'Romalılara ait en uzun su kemerinin başlangıç noktasıdır'],
        correct: 1,
        explanation: 'Arslantepe (Malatya), MÖ 3300\'e tarihlenen dünyanın en eski saray yapılarından birine ev sahipliği yapar. Erken devlet organizasyonunun, artı değer depolamanın ve metal silahların bu bölgeden yayıldığı düşünülmektedir. 2021\'de UNESCO listesine alınmıştır.'
      },
      {
        text: 'Akdamar Kilisesi\'nin özgün özelliği nedir?',
        options: ['Osmanlı döneminde yapılan tek taş kilisedir', 'Van Gölü\'ndeki bir adada inşa edilmiş, dış cephesinde kabartma İncil sahneleri olan Ermeni kilisesidir', 'Türkiye\'nin en büyük Bizans mozaiklerini barındırır', 'Roma döneminden kalma çarşı yapısına dönüştürülmüştür'],
        correct: 1,
        explanation: 'Akdamar Kilisesi (MS 921), Van Gölü\'ndeki Akdamar Adası\'nda Ermeni mimarisinin şaheseri olarak yükselir. Dış cephedeki Eski ve Yeni Ahit sahnelerini konu alan kabartmalar, dönemin taş işçiliğinin en mükemmel örneklerindendir.'
      },
      {
        text: 'Urartu Uygarlığı Doğu Anadolu\'da nerede merkez kurmuştur?',
        options: ['Erzurum çevresinde', 'Kars\'ta', 'Van Gölü çevresinde, MÖ 9-6. yüzyıllar arasında', 'Elazığ ve Malatya arasında'],
        correct: 2,
        explanation: 'Urartu (Ararat) Uygarlığı, MÖ 9.-6. yüzyıllarda Van Gölü havzasını merkez alarak bugünkü Doğu Anadolu, Kuzeybatı İran ve Ermenistan\'a yayıldı. Van Kalesi ve Urartu yazıtları günümüze ulaşmıştır.'
      }
    ]
  },
  {
    id: 'guneydogu', number: 7,
    name: 'Güneydoğu Anadolu Bölgesi',
    icon: '🏺', color: '#E07B6A',
    badge: 'İnsanlığın Kökenleri Uzmanı',
    infoCards: [
      { label: 'UNESCO (2018)',  value: 'Göbekli Tepe — Şanlıurfa' },
      { label: 'UNESCO (2015)', value: 'Diyarbakır Surları' },
      { label: 'Mozaik Müzesi', value: 'Zeugma — Gaziantep' },
      { label: 'Tarihi Kent',   value: 'Mardin taş evleri' },
    ],
    story: 'Profesör Tarih neredeyse ağlayarak anlatır: "İnsanlığın Kökenleri Uzmanı adayı — bu topraklar tüm insanlığın anayurdu! Göbekli Tepe tarımdan 6000 yıl önce inşa edildi ve tarihi yeniden yazdı. Diyarbakır\'ın siyah bazalt surları 5500 yıllık. Zeugma\'nın Çingene Kız mozaiği 2000 yıl toprağın altında uyudu. Hazır mısın?"',
    mission: 'Göbekli Tepe\'nin insanlık tarihine katkısını, Diyarbakır surlarını ve Zeugma Mozaik Müzesi\'ni keşfederek İnsanlığın Kökenleri Uzmanı unvanını kazan!',
    funFact: 'Göbekli Tepe (Şanlıurfa), MÖ 10.000\'e tarihlenen dünyanın bilinen en eski tapınak kompleksidir. İnşa edenler henüz çiftçi değil, avcı-toplayıcıydı! Bu keşif "önce tarım, sonra din" tezini alt üst etti — belki "önce tapınak, sonra şehir" oldu. 2018\'de UNESCO listesine alındı.',
    questions: [
      {
        text: 'Göbekli Tepe neden "insanlık tarihini yeniden yazan" bir keşifdir?',
        options: ['Dünyanın en büyük piramidinin burada olduğu anlaşılmıştır', 'MÖ 10.000\'e tarihlenen, henüz çiftçilik bilmeyen toplulukların inşa ettiği en eski tapınak kompleksidir', 'Sümer yazısının Anadolu\'da icat edildiğini kanıtlamıştır', 'İlk metal araçların bu bölgede üretildiği ortaya konulmuştur'],
        correct: 1,
        explanation: 'Göbekli Tepe (Şanlıurfa), MÖ yaklaşık 10.000\'de avcı-toplayıcılar tarafından inşa edildi. Tarımın başlangıcından 6000 yıl önce organize dini toplantı mekânı yaratılmıştı. Bu, insanlığın dini ve sosyal örgütlenmesinin sanılandan çok daha eskiye gittiğini gösterdi. 2018\'de UNESCO listesine alındı.'
      },
      {
        text: 'Diyarbakır\'ın surları hangi taştan yapılmıştır ve neden önemlidir?',
        options: ['Beyaz mermerden — Roma\'nın inşa ettiği en uzun surlar olduğu için', 'Siyah bazaltan — MS 4. yüzyıldan itibaren farklı uygarlıkların kullandığı en uzun surlardan biri olduğu için', 'Tuğla ve kilden — Mezopotamya geleneğini yansıttığı için', 'Granit taştan — depreme dayanıklı ilk surlar olduğu için'],
        correct: 1,
        explanation: 'Diyarbakır surları, bölgeye özgü siyah bazalt taşından inşa edilmiştir. Yaklaşık 5,5 km uzunluğu ve 72 kule ile Anadolu\'nun en iyi korunmuş antik kentsel surlarından biridir. Hevsel Bahçeleri ile birlikte 2015\'te UNESCO listesine alındı.'
      },
      {
        text: 'Zeugma\'daki "Çingene Kız" mozaiği neden bu kadar ünlüdür?',
        options: ['Türkiye\'nin en büyük tek parça mozaiğidir', 'MS 2. yüzyıla ait, olağanüstü derinlik ve duygu ifadesiyle tarihin en etkileyici portre mozaiklerinden biridir', 'Altın cam kullanılan tek Antik çağ mozaiğidir', 'Mısır piramitlerini betimleyen tek Anadolu eseridir'],
        correct: 1,
        explanation: 'Zeugma Mozaik Müzesi (Gaziantep), MS 2. yüzyıldan kalma Roma döneminin en olağanüstü mozaik koleksiyonlarından birini barındırır. "Çingene Kız" mozaiği; gerçekçi ifadesi, derinlik hissi ve muhteşem ustalığıyla dünyada en çok tanınan antik portre mozaiklerinden biridir.'
      },
      {
        text: 'Mardin\'in taş evleri hangi yapı malzemesinden inşa edilmiştir?',
        options: ['Fırat Nehri\'nden getirilen granit taşından', 'Bölgeye özgü sarı-bal renkli kireçtaşından; bu taş hem yumuşak hem de dayanıklıdır', 'Tuğla ve alçıdan — Mezopotamya geleneğiyle', 'Siyah bazalt taşından — Diyarbakır geleneğinin devamı'],
        correct: 1,
        explanation: 'Mardin, doğal olarak elde edilen sarı-bal renkli kireçtaşından inşa edilmiştir. Bu yumuşak taş işlenmesi kolay olduğundan ince oyma motiflerle süslenebilir. Kentin eğimli araziye kurulu tarihi dokusu, geleneksel mimarisinin özgünlüğü nedeniyle UNESCO Geçici Listesi\'ndedir.'
      },
      {
        text: 'Şanlıurfa\'nın "Peygamberler Şehri" olarak anılmasının sebebi nedir?',
        options: ['Osmanlı döneminde 100\'den fazla cami inşa edilmiştir', 'Hz. İbrahim\'in doğduğuna inanılan şehir olması ve Eyüp Peygamber\'in de burada ikamet ettiğine dair inanç', 'İslam\'ın ilk yayıldığı Anadolu şehri olması', 'Mekke\'ye en yakın büyük Türk şehri olması'],
        correct: 1,
        explanation: 'Şanlıurfa, İbrahimî geleneğe göre Hz. İbrahim\'in doğum yeri olarak kabul edilir. Balıklıgöl ve Dergah çevresi, Hz. İbrahim ile ilgili kutsal mekânları barındırır. Bu inanç şehre "Peygamberler Şehri" ya da "Urfa" unvanını kazandırmıştır.'
      }
    ]
  }
];

// ── SES MOTORU ───────────────────────────────────────────────
const SFX = (() => {
  let ctx = null;
  const get = () => { if (!ctx) ctx = new (window.AudioContext||window.webkitAudioContext)(); return ctx; };
  function tone(f,d,t='sine',v=0.25,delay=0){
    try{
      const c=get(),o=c.createOscillator(),g=c.createGain();
      o.connect(g);g.connect(c.destination);
      o.type=t;o.frequency.value=f;
      g.gain.setValueAtTime(v,c.currentTime+delay);
      g.gain.exponentialRampToValueAtTime(0.001,c.currentTime+delay+d);
      o.start(c.currentTime+delay);o.stop(c.currentTime+delay+d+0.05);
    }catch(e){}
  }
  return {
    click()  { tone(660,0.07); },
    correct(){ tone(523,0.12);tone(659,0.12,'sine',0.25,0.13);tone(784,0.22,'sine',0.25,0.26); },
    wrong()  { tone(220,0.1,'sawtooth',0.2);tone(180,0.18,'sawtooth',0.2,0.13); },
    badge()  { [523,659,784,1047].forEach((f,i)=>tone(f,0.2,'sine',0.28,i*0.11)); },
    fanfare(){ const n=[523,523,523,415,523,659,523],d=[0.14,0.14,0.14,0.1,0.2,0.4,0.3];let t=0;n.forEach((f,i)=>{tone(f,d[i],'triangle',0.32,t);t+=d[i];}); }
  };
})();

// ── OYUN DURUMU ──────────────────────────────────────────────
const State = {
  playerName: '',
  completedRegions: {},
  currentRegion: null,
  currentQIdx: 0,
  sessionScore: 0,
  quizScore: 0,
  quizCorrect: 0,
  totalAnswered: 0,
  totalCorrect: 0,
  responseTimes: [],
  timerInterval: null,
  timeLeft: 0,
  questionStartTime: 0,

  save(){
    localStorage.setItem('tkf2', JSON.stringify({
      playerName: this.playerName,
      completedRegions: this.completedRegions,
      sessionScore: this.sessionScore,
      totalAnswered: this.totalAnswered,
      totalCorrect: this.totalCorrect,
      responseTimes: this.responseTimes,
    }));
  },
  reset(){
    this.completedRegions={};this.sessionScore=0;
    this.totalAnswered=0;this.totalCorrect=0;this.responseTimes=[];
    localStorage.removeItem('tkf2');
  }
};

// ── YARDIMCI ─────────────────────────────────────────────────
const $ = id => document.getElementById(id);

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const s=$('screen-'+id);
  if(s)s.classList.add('active');
}

function starsFor(score){ return score>=450?3:score>=300?2:score>=150?1:0; }
function renderStars(n){ return '⭐'.repeat(n)+'☆'.repeat(3-n); }

function confetti(){
  const colors=['#72B841','#1BBFB0','#F4D03F','#F5A42A','#9B59B6','#5B9BD5','#E07B6A'];
  for(let i=0;i<70;i++){
    const c=document.createElement('div');
    c.className='confetti-piece';
    c.style.cssText=`left:${Math.random()*100}vw;background:${colors[Math.floor(Math.random()*colors.length)]};
      width:${Math.random()*10+5}px;height:${Math.random()*14+7}px;
      border-radius:${Math.random()>.5?'50%':'3px'};
      animation-duration:${Math.random()*2+2}s;animation-delay:${Math.random()*1.5}s;`;
    document.body.appendChild(c);
    c.addEventListener('animationend',()=>c.remove());
  }
}

function createParticles(){
  const c=$('particles-intro');if(!c)return;
  for(let i=0;i<28;i++){
    const p=document.createElement('div');p.className='particle';
    const sz=Math.random()*8+3;
    p.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;
      animation-duration:${Math.random()*10+8}s;animation-delay:${Math.random()*8}s;
      opacity:${Math.random()*0.5+0.2};
      background:hsl(${Math.random()*60+190}deg 80% 65%/0.5);`;
    c.appendChild(p);
  }
}

// ── HARİTA ──────────────────────────────────────────────────
function initMap(){
  const hoverCard=$('region-hover-card');
  const rcIcon=$('rc-icon'),rcName=$('rc-name'),rcStatus=$('rc-status');

  document.querySelectorAll('.region-polygon').forEach(el=>{
    const rid=el.dataset.region;
    const region=REGIONS.find(r=>r.id===rid);
    if(!region)return;

    if(State.completedRegions[rid]) el.classList.add('completed');

    el.addEventListener('mouseenter',()=>{
      const done=State.completedRegions[rid];
      rcIcon.textContent=region.icon;
      rcName.textContent=`${region.number}. ${region.name}`;
      rcStatus.textContent=done?` — ${region.badge} ✓ (${done.score} puan)`:' — Keşfedilmedi';
      rcStatus.style.color=done?'var(--accent)':'var(--text-dim)';
      hoverCard.style.display='flex';
    });
    el.addEventListener('mouseleave',()=>{ hoverCard.style.display='none'; });
    el.addEventListener('click',()=>{ SFX.click(); enterRegion(rid); });
  });

  // Etiket tıklaması
  document.querySelectorAll('.region-label').forEach(t=>{
    t.style.cursor='pointer';
    t.addEventListener('click',()=>{ SFX.click(); enterRegion(t.dataset.region); });
  });
}

function updateMapUI(){
  $('header-player-name').textContent=`🗺️ ${State.playerName}`;
  const done=Object.keys(State.completedRegions).length;
  $('progress-text').textContent=`${done}/7 Bölge Tamamlandı`;
  $('total-score').textContent=State.sessionScore.toLocaleString('tr-TR');

  document.querySelectorAll('.region-polygon').forEach(el=>{
    el.classList.toggle('completed',!!State.completedRegions[el.dataset.region]);
  });

  // Rozetler
  const strip=$('badges-strip');strip.innerHTML='';
  REGIONS.forEach(r=>{
    if(State.completedRegions[r.id]){
      const sp=document.createElement('span');
      sp.className='strip-badge';sp.textContent=r.icon;
      sp.dataset.label=`${r.number}. ${r.badge}`;
      strip.appendChild(sp);
    }
  });
  if(!strip.children.length)
    strip.innerHTML='<span style="font-size:.8rem;color:var(--text-dim);letter-spacing:1px">Haritadan bir bölgeye tıkla!</span>';

  if(Object.keys(State.completedRegions).length===REGIONS.length)
    setTimeout(showFinalScreen,800);
}

// ── BÖLGE GİRİŞ ─────────────────────────────────────────────
function enterRegion(rid){
  const region=REGIONS.find(r=>r.id===rid);
  if(!region)return;
  State.currentRegion=region;

  $('ri-bg').style.background=`radial-gradient(ellipse at center,${region.color}55,var(--bg-dark))`;
  $('ri-flag').textContent=region.icon;
  $('ri-flag').style.background=`${region.color}33`;
  $('ri-name').textContent=`${region.number}. ${region.name}`;
  $('ri-story-text').textContent=region.story;
  $('ri-mission').textContent=region.mission;
  $('ri-badge-icon').textContent=region.icon;
  $('ri-badge-name').textContent=region.badge;

  // Bilgi kartları
  const infoGrid=$('ri-info-grid');
  if(infoGrid){
    infoGrid.innerHTML=region.infoCards.map(c=>
      `<div class="info-card"><span class="info-label">${c.label}</span><span class="info-value">${c.value}</span></div>`
    ).join('');
  }

  showScreen('region-intro');
}

// ── QUIZ ─────────────────────────────────────────────────────
const Q_TIME=20;

function startQuiz(){
  const r=State.currentRegion;
  State.currentQIdx=0;State.quizScore=0;State.quizCorrect=0;
  $('q-region-name').textContent=`${r.icon} ${r.name}`;
  $('q-score-live').textContent='0';

  // Noktalar
  const dots=$('q-dots');dots.innerHTML='';
  r.questions.forEach((_,i)=>{
    const d=document.createElement('div');
    d.className='q-dot'+(i===0?' current':'');
    d.id=`q-dot-${i}`;dots.appendChild(d);
  });

  showScreen('quiz');
  renderQuestion();
}

function renderQuestion(){
  const r=State.currentRegion,qi=State.currentQIdx,q=r.questions[qi];
  $('answer-feedback').style.display='none';
  $('q-number').textContent=`Soru ${qi+1} / ${r.questions.length}`;
  $('q-text').textContent=q.text;

  // Dot güncelle
  r.questions.forEach((_,i)=>{
    const d=$(`q-dot-${i}`);if(!d)return;
    if(i===qi) d.className='q-dot current';
  });

  // Seçenekler
  const opts=$('q-options');opts.innerHTML='';
  ['A','B','C','D'].forEach((letter,i)=>{
    const btn=document.createElement('button');
    btn.className='option-btn';
    btn.innerHTML=`<span class="opt-letter">${letter}</span>${q.options[i]}`;
    btn.addEventListener('click',()=>selectAnswer(i));
    opts.appendChild(btn);
  });

  // Timer
  clearInterval(State.timerInterval);
  State.timeLeft=Q_TIME;
  const bar=$('timer-bar');bar.style.width='100%';bar.classList.remove('danger');
  State.questionStartTime=Date.now();
  State.timerInterval=setInterval(()=>{
    State.timeLeft-=0.1;
    const pct=Math.max(0,(State.timeLeft/Q_TIME)*100);
    bar.style.width=pct+'%';
    if(pct<30)bar.classList.add('danger');
    if(State.timeLeft<=0){clearInterval(State.timerInterval);selectAnswer(-1);}
  },100);
}

function selectAnswer(chosen){
  clearInterval(State.timerInterval);
  const r=State.currentRegion,qi=State.currentQIdx,q=r.questions[qi];
  const elapsed=(Date.now()-State.questionStartTime)/1000;
  State.responseTimes.push(Math.min(elapsed,Q_TIME));
  const isOk=chosen===q.correct;
  State.totalAnswered++;

  // Seçenekleri renklendir
  $('q-options').querySelectorAll('.option-btn').forEach((btn,i)=>{
    btn.disabled=true;
    if(i===q.correct)btn.classList.add('correct-anim');
    if(i===chosen&&!isOk)btn.classList.add('wrong-anim');
  });

  // Nokta güncelle
  const dot=$(`q-dot-${qi}`);
  if(dot)dot.className='q-dot '+(isOk?'correct':'wrong');

  // Puan
  if(isOk){
    const bonus=Math.round((State.timeLeft/Q_TIME)*50);
    const earned=100+bonus;
    State.quizScore+=earned;State.sessionScore+=earned;
    State.quizCorrect++;State.totalCorrect++;
    SFX.correct();
  }else{
    SFX.wrong();
    if(chosen!==-1){$('q-options').classList.add('shake');setTimeout(()=>$('q-options').classList.remove('shake'),400);}
  }

  $('q-score-live').textContent=State.quizScore.toLocaleString('tr-TR');

  // Geri bildirim
  const fb=$('answer-feedback');
  $('fb-icon').textContent=isOk?'✅':(chosen===-1?'⏰':'❌');
  const ft=$('fb-text');
  ft.textContent=isOk?'Harika! Doğru cevap!':(chosen===-1?'Süre doldu!':'Yanlış cevap!');
  ft.style.color=isOk?'var(--accent)':'var(--danger)';
  $('fb-explanation').textContent=q.explanation;
  fb.style.display='flex';
}

function nextQuestion(){
  State.currentQIdx++;
  if(State.currentQIdx>=State.currentRegion.questions.length) completeRegion();
  else renderQuestion();
}

function completeRegion(){
  const region=State.currentRegion;
  const stars=starsFor(State.quizScore);
  State.completedRegions[region.id]={score:State.quizScore,stars,correct:State.quizCorrect};
  State.save();

  $('stars-display').textContent=renderStars(stars);
  $('bc-badge-icon').textContent=region.icon;
  $('bc-badge-name').textContent=region.badge;
  $('bc-region-name').textContent=region.name;
  $('bc-score').textContent=State.quizScore;
  $('bc-fact').textContent=region.funFact;

  SFX.badge();confetti();
  showScreen('region-complete');
}

// ── FİNAL ────────────────────────────────────────────────────
function showFinalScreen(){
  SFX.fanfare();confetti();setTimeout(confetti,900);
  $('final-player-name').textContent=State.playerName;
  $('fs-score').textContent=State.sessionScore.toLocaleString('tr-TR');
  const acc=State.totalAnswered>0?Math.round(State.totalCorrect/State.totalAnswered*100):0;
  $('fs-accuracy').textContent=`%${acc}`;
  const avg=State.responseTimes.length>0?(State.responseTimes.reduce((a,b)=>a+b,0)/State.responseTimes.length).toFixed(1):0;
  $('fs-time').textContent=`${avg}s`;

  const grid=$('final-badges-grid');grid.innerHTML='';
  REGIONS.forEach((r,idx)=>{
    const d=State.completedRegions[r.id];
    const item=document.createElement('div');
    item.className='final-badge-item';
    item.style.animationDelay=`${idx*0.1}s`;
    item.innerHTML=`<span>${r.icon}</span><span>${r.badge}<br>${d?renderStars(d.stars):''}</span>`;
    grid.appendChild(item);
  });

  $('cert-name').textContent=State.playerName;
  $('cert-score').textContent=State.sessionScore.toLocaleString('tr-TR');
  $('cert-date').textContent=new Date().toLocaleDateString('tr-TR',{day:'numeric',month:'long',year:'numeric'});
  $('cert-badges-row').innerHTML=REGIONS.map(r=>r.icon).join(' ');

  showScreen('final');
}

// ── ANA BAŞLATICI ────────────────────────────────────────────
window.addEventListener('DOMContentLoaded',()=>{
  createParticles();

  $('btn-start').addEventListener('click',()=>{ SFX.click(); showScreen('name'); setTimeout(()=>$('player-name-input').focus(),400); });
  $('btn-about').addEventListener('click',()=>{ SFX.click(); showScreen('about'); });
  $('btn-back-intro').addEventListener('click',()=>{ SFX.click(); showScreen('intro'); });
  $('btn-back-from-about').addEventListener('click',()=>{ SFX.click(); showScreen('intro'); });
  $('player-name-input').addEventListener('keydown',e=>{ if(e.key==='Enter')$('btn-enter-game').click(); });
  $('btn-enter-game').addEventListener('click',()=>{
    const name=$('player-name-input').value.trim();
    if(!name){
      $('player-name-input').style.borderColor='var(--danger)';
      setTimeout(()=>$('player-name-input').style.borderColor='',1500);
      $('player-name-input').focus();return;
    }
    SFX.click();
    State.reset();State.playerName=name;State.save();
    initMap();updateMapUI();showScreen('map');
  });
  $('btn-start-quiz').addEventListener('click',()=>{ SFX.click(); startQuiz(); });
  $('btn-back-map').addEventListener('click',()=>{ SFX.click(); showScreen('map'); });
  $('btn-next-q').addEventListener('click',()=>{ SFX.click(); nextQuestion(); });
  $('btn-continue-map').addEventListener('click',()=>{ SFX.click(); updateMapUI(); showScreen('map'); });
  $('btn-print-cert').addEventListener('click',()=>{ SFX.click(); window.print(); });
  $('btn-play-again').addEventListener('click',()=>{ SFX.click(); State.reset(); $('player-name-input').value=''; showScreen('intro'); });
  $('btn-install')?.addEventListener('click',()=>PWA.install());
});
