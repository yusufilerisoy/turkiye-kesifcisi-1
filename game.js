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
    icon: '🌿', color: '#72B841',
    badge: 'Bitki Örtüsü Uzmanı',
    infoCards: [
      { label: 'İklim',         value: 'Her mevsim yağışlı' },
      { label: 'Bitki Örtüsü', value: 'Gür ormanlar' },
      { label: 'Ürünler',      value: 'Çay, fındık, mısır' },
      { label: 'Yer Şekilleri',value: 'Dağlık ve engebeli' },
    ],
    story: 'Profesör Coğraf sana telgraf çekti: "Kaşif! Karadeniz kıyılarına ulaştın. Burada yağmur hiç dinmez, ormanlar o kadar yoğun ki bazen güneş zemine ulaşamaz. Çay bahçeleri yamaçlara serpilmiş, fındık ağaçları dağları boydan boya kaplamış. Görevin: bu yeşil bölgenin sırlarını çöz!"',
    mission: 'Karadeniz Bölgesi\'nin iklim özelliklerini, bitki örtüsünü ve tarım ürünlerini öğrenerek Bitki Örtüsü Uzmanı unvanını kazan!',
    funFact: 'Türkiye\'nin çay üretiminin %95\'i Rize\'de yapılır. Dünyanın en çok çay tüketen ülkeleri arasında Türkiye ilk sıralarda yer alır!',
    questions: [
      {
        text: 'Karadeniz Bölgesi\'nin iklim özelliği nedir?',
        options: ['Yaz sıcak ve kurak, kış soğuk', 'Her mevsim düzenli ve bol yağış alır', 'Çok kurak ve sıcaktır', 'Dört mevsim karlı ve soğuktur'],
        correct: 1,
        explanation: 'Karadeniz iklimi Türkiye\'nin en yağışlı iklimidir. Yılın her mevsiminde yağış alır; bu nedenle gür ormanlar oluşmuştur.'
      },
      {
        text: 'Karadeniz Bölgesi\'nde çay üretimi neden bu kadar yaygındır?',
        options: ['Toprak çok düz ve verimlidir', 'Bol yağış ve ılıman hava çay için idealdir', 'Kışlar çok sıcaktır', 'Göller çok fazladır'],
        correct: 1,
        explanation: 'Çay bitkisi nem ve ılıman iklimsever bir bitkidir. Karadeniz\'in bol yağışlı ve ılıman iklimi çay yetiştiriciliği için mükemmel koşullar sağlar.'
      },
      {
        text: 'Karadeniz Bölgesi\'ndeki doğal bitki örtüsü nasıldır?',
        options: ['Çöl ve bozkır bitkileri', 'Bodur çalılar ve dikenler', 'Yoğun geniş yapraklı ormanlar', 'Sadece çam ormanları'],
        correct: 2,
        explanation: 'Bol yağış sayesinde Karadeniz\'de Türkiye\'nin en gür ormanları bulunur. Kayın, kestane, ıhlamur gibi geniş yapraklı ağaçlar yaygındır.'
      },
      {
        text: 'Karadeniz Bölgesi\'nde hangi tarım ürünleri öne çıkar?',
        options: ['Buğday ve şeker pancarı', 'Çay ve fındık', 'Pamuk ve zeytin', 'Narenciye ve muz'],
        correct: 1,
        explanation: 'Karadeniz Bölgesi Türkiye çay üretiminin neredeyse tamamını, fındık üretiminin büyük bölümünü karşılar. Ordu ve Giresun dünya fındık ihracatında önemli merkezlerdir.'
      },
      {
        text: 'Türkiye\'nin en uzun nehri Kızılırmak nereye dökülür?',
        options: ['Ege Denizi\'ne', 'Marmara Denizi\'ne', 'Karadeniz\'e', 'Akdeniz\'e'],
        correct: 2,
        explanation: 'Kızılırmak (1.355 km), Sivas\'tan doğar, İç Anadolu\'yu geçer ve Karadeniz Bölgesi\'nden geçerek Karadeniz\'e dökülür.'
      }
    ]
  },
  {
    id: 'akdeniz', number: 2,
    name: 'Akdeniz Bölgesi',
    icon: '☀️', color: '#1BBFB0',
    badge: 'İklim Dedektifi',
    infoCards: [
      { label: 'İklim',         value: 'Akdeniz iklimi' },
      { label: 'Bitki Örtüsü', value: 'Maki ve kızılçam' },
      { label: 'Şehirler',     value: 'Antalya, Mersin, Adana' },
      { label: 'Ekonomi',      value: 'Turizm ve tarım' },
    ],
    story: 'Sıcak güneş altında Profesör Coğraf bağırır: "İklim Dedektifi olmaya hazır mısın? Akdeniz\'in berrak suları, portakal bahçeleri ve antik şehirleri seni bekliyor. Yazın güneş kavurur, kışın yağmur serinletir. Bu iklimdeki sırları çöz!"',
    mission: 'Akdeniz iklimini, Toros Dağları\'nı ve bölgenin tarım ürünlerini keşfederek İklim Dedektifi unvanını kazan!',
    funFact: 'Antalya\'ya her yıl 10 milyondan fazla turist gelir! Bu, Türkiye\'nin toplam turistinin yaklaşık yarısıdır. Türkiye\'nin "tatil başkenti" olarak da bilinir.',
    questions: [
      {
        text: 'Akdeniz ikliminin en temel özelliği nedir?',
        options: ['Her mevsim eşit yağış', 'Yazlar sıcak-kurak, kışlar ılık-yağışlı', 'Dört mevsim sıcak ve kurak', 'Kışlar çok soğuk ve karlı'],
        correct: 1,
        explanation: 'Akdeniz ikliminin temel özelliği: yazlar sıcak ve kurak, kışlar ılık ve yağışlıdır. Bu iklim özellikle Antalya, Mersin ve Hatay kıyılarında görülür.'
      },
      {
        text: 'Akdeniz Bölgesi\'nde hangi ürünler en çok yetişir?',
        options: ['Çay ve fındık', 'Buğday ve arpa', 'Narenciye, muz ve pamuk', 'Şeker pancarı ve mısır'],
        correct: 2,
        explanation: 'Akdeniz\'in sıcak ve ılıman iklimi narenciye (portakal, limon, mandalina), muz ve pamuk tarımı için idealdir. Bu ürünler bölgenin en önemli geçim kaynaklarındandır.'
      },
      {
        text: 'Akdeniz kıyısı boyunca uzanan büyük dağ silsilesi hangisidir?',
        options: ['Kaçkar Dağları', 'Toros Dağları', 'Ağrı Dağı', 'Uludağ'],
        correct: 1,
        explanation: 'Toros Dağları, Akdeniz kıyısı boyunca doğu-batı yönünde uzanır. Bu dağlar hem iç kesimlere geçişi zorlaştırır hem de bölgenin eşsiz manzarasını oluşturur.'
      },
      {
        text: 'Turistler için tatil şehri olarak hangi şehir Akdeniz Bölgesi\'ndedir?',
        options: ['Bursa', 'Erzurum', 'Antalya', 'Diyarbakır'],
        correct: 2,
        explanation: 'Antalya, Türkiye\'nin en çok turist çeken şehridir. Tarihi kalıntıları, mavi bayraklı plajları ve tatil köyleriyle Akdeniz turizminin merkezidir.'
      },
      {
        text: 'Akdeniz Bölgesi\'nin en kalabalık şehri hangisidir?',
        options: ['Antalya', 'Mersin', 'Adana', 'Hatay'],
        correct: 2,
        explanation: 'Adana, Akdeniz Bölgesi\'nin en büyük şehridir ve Türkiye\'nin 5. büyük şehridir. Pamuk, tekstil ve gıda sanayisinin merkezidir.'
      }
    ]
  },
  {
    id: 'ic-anadolu', number: 3,
    name: 'İç Anadolu Bölgesi',
    icon: '🏔️', color: '#F4D03F',
    badge: 'Yer Şekilleri Ustası',
    infoCards: [
      { label: 'İklim',         value: 'Karasal iklim' },
      { label: 'Bitki Örtüsü', value: 'Bozkır ve step' },
      { label: 'Başkent',      value: 'Ankara' },
      { label: 'Tarım',        value: 'Buğday ve arpa' },
    ],
    story: 'Rüzgarlı bozkırda Profesör Coğraf seslenir: "Türkiye\'nin kalbi İç Anadolu\'ya hoş geldin! Geniş ovalar, dalgalanan buğday tarlaları ve mistik Tuz Gölü seni bekliyor. Ankara burada, Kapadokya\'nın peri bacaları burada. Yer şekillerini çöz!"',
    mission: 'İç Anadolu\'nun yer şekillerini, karasal iklimini, Ankara\'yı ve Tuz Gölü\'nü keşfederek Yer Şekilleri Ustası unvanını kazan!',
    funFact: 'Kapadokya (Nevşehir), İç Anadolu\'da yer alır. Milyonlarca yıl önce oluşan peri bacaları, her yıl sıcak hava balonuyla görülmek için dünyadan ziyaretçi çeker!',
    questions: [
      {
        text: 'İç Anadolu Bölgesi\'nde hangi bitki örtüsü yaygındır?',
        options: ['Gür ormanlar', 'Maki ve çalılıklar', 'Bozkır (step)', 'Tropikal ormanlar'],
        correct: 2,
        explanation: 'İç Anadolu\'nun karasal iklimi ve düşük yağış miktarı bozkır bitki örtüsünün oluşmasına neden olur. Step olarak da bilinen bu bitki örtüsü sert koşullara dayanıklı otlardan oluşur.'
      },
      {
        text: 'Karasal iklimin özellikleri nelerdir?',
        options: ['Her mevsim ılık ve yağışlı', 'Yazlar sıcak-kurak, kışlar soğuk ve karlı', 'Dört mevsim nemli', 'Yazlar serin, kışlar ılık'],
        correct: 1,
        explanation: 'Karasal iklimde yazlar sıcak ve kurak, kışlar soğuk ve karlı geçer. Günlük ve mevsimlik sıcaklık farkları çok büyüktür. İç Anadolu\'da bu iklim tipik şekilde görülür.'
      },
      {
        text: 'Türkiye\'nin başkenti Ankara hangi bölgededir?',
        options: ['Marmara', 'Ege', 'İç Anadolu', 'Karadeniz'],
        correct: 2,
        explanation: 'Ankara, İç Anadolu\'da bulunur ve 1923\'te Türkiye Cumhuriyeti\'nin başkenti ilan edilmiştir. Türkiye\'nin ikinci büyük şehridir.'
      },
      {
        text: 'Tuz Gölü hangi bölgededir ve neden önemlidir?',
        options: ['Ege — derin tatlı su gölü', 'İç Anadolu — Türkiye\'nin en tuzlu gölü', 'Marmara — büyük balıkçılık gölü', 'Doğu Anadolu — soğuk su gölü'],
        correct: 1,
        explanation: 'Tuz Gölü, İç Anadolu\'da Konya-Ankara-Aksaray sınırında bulunur. %32 tuzluluk oranıyla Türkiye\'nin en tuzlu gölüdür ve ülke tuz ihtiyacının büyük bölümünü karşılar.'
      },
      {
        text: 'İç Anadolu\'nun en önemli tarım ürünü nedir?',
        options: ['Çay', 'Zeytin', 'Buğday', 'Narenciye'],
        correct: 2,
        explanation: 'İç Anadolu, geniş düzlükleri ile Türkiye\'nin "tahıl ambarı"dır. Buğday ve arpa üretiminde Türkiye\'de birinci sıradadır. Konya Ovası en verimli tarım alanlarından biridir.'
      }
    ]
  },
  {
    id: 'ege', number: 4,
    name: 'Ege Bölgesi',
    icon: '🌾', color: '#9B59B6',
    badge: 'Tarım Şampiyonu',
    infoCards: [
      { label: 'İklim',         value: 'Akdeniz iklimi' },
      { label: 'Ürünler',      value: 'Zeytin, üzüm, incir' },
      { label: 'Turizm',       value: 'Çok gelişmiştir' },
      { label: 'Kıyı',        value: 'Girintili çıkıntılı' },
    ],
    story: 'Zeytinliklerin arasından geçerken Profesör Coğraf anlatır: "Tarım Şampiyonu adayı, Ege\'ye hoş geldin! Türkiye\'nin zeytinyağı, üzüm ve incirinin büyük bölümü buradan gelir. Antik Efes burada, İzmir burada. Kıyılar girintili çıkıntılı, deniz mavi…"',
    mission: 'Ege\'nin tarım ürünlerini, kıyı şekillerini ve iklimini öğrenerek Tarım Şampiyonu unvanını kazan!',
    funFact: 'İzmir, 3000 yıllık tarihi ile "İncinin Başkenti" olarak da bilinir. Dünya incir ihracatının büyük çoğunluğu Aydın ve İzmir\'den yapılır!',
    questions: [
      {
        text: 'Ege Bölgesi\'nin en önemli tarım ürünleri hangileridir?',
        options: ['Çay ve fındık', 'Buğday ve şeker pancarı', 'Zeytin, üzüm ve incir', 'Narenciye ve muz'],
        correct: 2,
        explanation: 'Ege Bölgesi, Türkiye zeytin ve zeytinyağı üretiminin büyük bölümünü karşılar. Üzüm (kuru üzüm), incir ve pamuk da bölgenin önemli tarım ürünleridir.'
      },
      {
        text: 'Ege kıyılarının şekli nasıldır?',
        options: ['Düz ve sade', 'Girintili çıkıntılı (ria kıyısı)', 'Yüksek falezler', 'Delta ve lagün kıyıları'],
        correct: 1,
        explanation: 'Ege kıyıları "ria" tipi kıyılardır — derince giren körfezler, koylar ve yarımadalar şeklinde girintili çıkıntılıdır. Bu yapı doğal liman oluşmasını kolaylaştırır.'
      },
      {
        text: 'Zeytin üretim alanını aramak için hangi bölgeye gidilir?',
        options: ['Doğu Anadolu', 'Karadeniz', 'Ege', 'İç Anadolu'],
        correct: 2,
        explanation: 'Ege Bölgesi Türkiye zeytin üretiminin merkezi olup Aydın, İzmir ve Balıkesir illeri en çok zeytin yetiştiren illerdir.'
      },
      {
        text: 'Dünyaca ünlü Efes Antik Kenti hangi ilde bulunur?',
        options: ['Muğla', 'İzmir (Selçuk ilçesi)', 'Aydın', 'Manisa'],
        correct: 1,
        explanation: 'Efes Antik Kenti, İzmir iline bağlı Selçuk ilçesindedir. UNESCO Dünya Mirası listesinde olan Efes, Türkiye\'nin en çok ziyaret edilen antik şehridir.'
      },
      {
        text: 'Ege ikliminin yazları nasıldır?',
        options: ['Serin ve yağışlı', 'Soğuk ve karlı', 'Sıcak ve kurak', 'Ilıman ve bulutlu'],
        correct: 2,
        explanation: 'Ege ikliminde yazlar sıcak ve kurak, kışlar ılık ve yağışlıdır. Bu iklim zeytin ve üzüm tarımı için idealdir.'
      }
    ]
  },
  {
    id: 'marmara', number: 5,
    name: 'Marmara Bölgesi',
    icon: '🏙️', color: '#F5A42A',
    badge: 'Şehir Kaşifi',
    infoCards: [
      { label: 'En Büyük Şehir', value: 'İstanbul' },
      { label: 'Ekonomi',         value: 'Sanayi ve ticaret' },
      { label: 'Ulaşım',          value: 'En gelişmiş ağ' },
      { label: 'Özellik',         value: 'İki kıta arasında köprü' },
    ],
    story: 'Boğaz vapurunda Profesör Coğraf coşkuyla anlatır: "Şehir Kaşifi, Marmara\'ya hoş geldin! Türkiye\'nin en kalabalık, en sanayileşmiş bölgesi. İstanbul iki kıtaya yayılmış, Marmara Denizi iki boğazla bağlanmış. Sanayi, ticaret, tarih — hepsi burada!"',
    mission: 'İstanbul\'un konumunu, boğazları, Marmara\'nın ekonomik gücünü keşfederek Şehir Kaşifi unvanını kazan!',
    funFact: 'İstanbul, dünyada iki kıtaya (Avrupa ve Asya) yayılmış sayılı şehirlerden biridir. Boğaziçi Köprüsü\'nün üzerinde bir adımda kıtalar arası geçiş yapabilirsin!',
    questions: [
      {
        text: 'İstanbul\'u haritada doğru konumlayan cevap hangisidir?',
        options: ['İç Anadolu\'da, Ankara\'nın yakınında', 'Marmara Bölgesi\'nde, iki kıta arasında', 'Ege kıyısında, İzmir\'in kuzeyinde', 'Karadeniz kıyısında, Trabzon\'un yanında'],
        correct: 1,
        explanation: 'İstanbul, Marmara Bölgesi\'nde İstanbul Boğazı\'nın iki yakasında yer alır. Avrupa ve Asya kıtalarına yayılmış, Türkiye\'nin en büyük şehridir.'
      },
      {
        text: 'Marmara Denizi hangi boğazlarla bağlanır?',
        options: ['Süveyş ve Hürmüz Boğazı', 'İstanbul ve Çanakkale Boğazı', 'Kerç ve Öresund Boğazı', 'Gibraltar ve Messina Boğazı'],
        correct: 1,
        explanation: 'Marmara Denizi, İstanbul Boğazı ile Karadeniz\'e, Çanakkale Boğazı ile Ege Denizi\'ne bağlanır. Bu boğazlar tarihte büyük stratejik öneme sahip olmuştur.'
      },
      {
        text: 'Türkiye\'nin hangi bölgesi sanayi ve nüfus açısından en gelişmiştir?',
        options: ['Doğu Anadolu', 'Güneydoğu Anadolu', 'Marmara', 'İç Anadolu'],
        correct: 2,
        explanation: 'Marmara Bölgesi, Türkiye nüfusunun %30\'undan fazlasını barındırır ve ülkenin en büyük sanayi bölgesidir. Otomotiv, tekstil, gıda sanayi yoğunlaşmıştır.'
      },
      {
        text: 'Marmara Bölgesi\'nin "iki kıtayı birleştirme" özelliği nasıl sağlanır?',
        options: ['Tüneller ve köprüler boğazı geçirir', 'Deniz kablo hattı vardır', 'İki ayrı ada birleştirir', 'Dağ tüneli kullanılır'],
        correct: 0,
        explanation: 'İstanbul\'da Boğaziçi Köprüsü, Fatih Sultan Mehmet Köprüsü ve Yavuz Sultan Selim Köprüsü Avrupa yakasını Asya yakasına bağlar. Ayrıca Marmaray tüp tüneli de denizin altından geçer.'
      },
      {
        text: 'Osmanlı İmparatorluğu\'nun başkenti olan İstanbul hangi bölgededir?',
        options: ['Ege', 'Akdeniz', 'Marmara', 'Karadeniz'],
        correct: 2,
        explanation: 'İstanbul (eski adıyla Konstantinopolis/Kostantiniyye), 1453\'ten 1923\'e kadar Osmanlı İmparatorluğu\'nun başkentiydi. Bugün Türkiye\'nin en büyük şehri olarak Marmara Bölgesi\'ndedir.'
      }
    ]
  },
  {
    id: 'dogu-anadolu', number: 6,
    name: 'Doğu Anadolu Bölgesi',
    icon: '⛰️', color: '#5B9BD5',
    badge: 'Dağ Kâşifi',
    infoCards: [
      { label: 'En Yüksek Dağ', value: 'Ağrı Dağı (5137 m)' },
      { label: 'İklim',         value: 'Sert karasal iklim' },
      { label: 'Ekonomi',       value: 'Büyükbaş hayvancılık' },
      { label: 'Nehirler',      value: 'Fırat ve Dicle\'nin kaynağı' },
    ],
    story: 'Karlı zirvelere bakarken Profesör Coğraf coşkuyla anlatır: "Dağ Kâşifi adayı! Türkiye\'nin en yüksek zirvesi Ağrı Dağı burada, Van Gölü\'nün mavisi burada. Fırat ve Dicle\'nin kaynağı bu topraklarda. Kışlar sert, yaylalar geniş. Hazır mısın?"',
    mission: 'Ağrı Dağı\'nı, Van Gölü\'nü ve Fırat-Dicle\'nin kaynağını keşfederek Dağ Kâşifi unvanını kazan!',
    funFact: 'Ağrı Dağı (5.137 m), yalnızca Türkiye\'nin değil tüm Orta Doğu\'nun en yüksek zirvesidir. Zirveyi yıl boyunca karlar örter ve Nuh\'un Gemisi efsanesiyle de ünlüdür!',
    questions: [
      {
        text: 'Türkiye\'nin en yüksek dağı hangisidir ve hangi bölgededir?',
        options: ['Kaçkar Dağı (3937 m) — Karadeniz', 'Uludağ (2543 m) — Marmara', 'Ağrı Dağı (5137 m) — Doğu Anadolu', 'Erciyes Dağı (3916 m) — İç Anadolu'],
        correct: 2,
        explanation: 'Ağrı Dağı, 5.137 metre yüksekliğiyle Türkiye\'nin ve Orta Doğu\'nun en yüksek zirvesidir. Doğu Anadolu\'da Ağrı ilinde bulunur.'
      },
      {
        text: 'Büyükbaş hayvancılığın Doğu Anadolu\'da gelişmesinin sebebi nedir?',
        options: ['Fabrikalar çok gelişmiştir', 'Geniş yaylalar ve otlaklar çok fazladır', 'Deniz kıyısı balıkçılığa uygundur', 'Tahıl tarımı imkânsızdır'],
        correct: 1,
        explanation: 'Doğu Anadolu\'nun geniş yaylaları ve otlakları büyükbaş hayvancılık için idealdir. Sert iklim koşulları tahıl tarımını zorlaştırdığından hayvancılık ön plana çıkar.'
      },
      {
        text: 'Fırat ve Dicle nehirlerinin kaynağı hangi bölgededir?',
        options: ['Güneydoğu Anadolu', 'İç Anadolu', 'Karadeniz', 'Doğu Anadolu'],
        correct: 3,
        explanation: 'Tarihî Mezopotamya\'yı besleyen Fırat ve Dicle nehirleri Doğu Anadolu dağlarından doğar. Bu özelliğiyle bölge "suların anası" olarak da bilinir.'
      },
      {
        text: 'Türkiye\'nin en büyük gölü hangisidir ve hangi bölgededir?',
        options: ['Tuz Gölü — İç Anadolu', 'Van Gölü — Doğu Anadolu', 'Beyşehir Gölü — Akdeniz', 'Eğirdir Gölü — Akdeniz'],
        correct: 1,
        explanation: 'Van Gölü, Türkiye\'nin en büyük ve dünyanın en büyük soda gölüdür. Doğu Anadolu\'da Van ilinde bulunur.'
      },
      {
        text: 'Doğu Anadolu\'nun iklim özelliği nedir?',
        options: ['Yazlar sıcak, kışlar ılık', 'Her mevsim yağışlı ve ılık', 'Kışlar çok sert-soğuk, yazlar kısa ve serin', 'Deniz etkisiyle yıl boyu ılıman'],
        correct: 2,
        explanation: 'Türkiye\'nin en soğuk bölgesi Doğu Anadolu\'dur. Erzurum ve Kars -40°C\'ye kadar düşen sıcaklıklar yaşayabilir. Kışlar uzun ve sert, yazlar kısa ve serindir.'
      }
    ]
  },
  {
    id: 'guneydogu', number: 7,
    name: 'Güneydoğu Anadolu Bölgesi',
    icon: '💧', color: '#E07B6A',
    badge: 'Su ve Tarım Uzmanı',
    infoCards: [
      { label: 'Önemli Ürün',  value: 'Pamuk ve fıstık' },
      { label: 'Proje',        value: 'GAP (Sulama+Enerji)' },
      { label: 'İklim',        value: 'Çok sıcak ve kurak' },
      { label: 'Nehirler',     value: 'Fırat ve Dicle' },
    ],
    story: 'Sıcakta Profesör Coğraf gözlerini kısar: "Su ve Tarım Uzmanı adayı! Mezopotamya\'nın kalbindesin. GAP projesinin muazzam barajları Fırat ve Dicle\'yi kontrol ediyor. Pamuk tarlaları uzanıyor, güneş yakıyor. Tarihin bu köklü topraklarını keşfet!"',
    mission: 'GAP projesini, pamuk tarımını ve bölgenin iklim özelliklerini öğrenerek Su ve Tarım Uzmanı unvanını kazan!',
    funFact: 'Şanlıurfa\'daki Göbeklitepe, MÖ 10.000 yılına ait dünyanın en eski tapınak kompleksidir. Bu keşif, "uygarlık tarımla başlar" tezini alt üst etti!',
    questions: [
      {
        text: 'GAP (Güneydoğu Anadolu Projesi) hangi bölgededir ve amacı nedir?',
        options: ['İç Anadolu — buğday tarımı', 'Karadeniz — çay bahçeleri', 'Güneydoğu — sulama ve enerji üretimi', 'Ege — zeytin tarımı'],
        correct: 2,
        explanation: 'GAP, Güneydoğu Anadolu\'da Fırat ve Dicle üzerinde uygulanan büyük projedir. Amaçları: sulama yoluyla tarımı geliştirmek ve hidroelektrik enerji üretmek.'
      },
      {
        text: 'Güneydoğu Anadolu\'da en çok hangi ürün yetiştirilir?',
        options: ['Çay', 'Fındık', 'Buğday ve pamuk', 'Narenciye'],
        correct: 2,
        explanation: 'GAP projesiyle birlikte sulanan Güneydoğu Anadolu\'da pamuk ve buğday üretimi büyük ölçüde artmıştır. Gaziantep fıstığı da bölgenin önemli ürünlerindendir.'
      },
      {
        text: 'Güneydoğu Anadolu\'nun iklim özelliği nedir?',
        options: ['Her mevsim yağışlı', 'Yazlar çok sıcak-kurak, kışlar soğuk', 'Dört mevsim ılıman', 'Yazlar serin, kışlar çok soğuk'],
        correct: 1,
        explanation: 'Güneydoğu Anadolu, Türkiye\'nin en sıcak ve en kurak bölgesidir. Yazlar çok sıcak (40°C+) geçer. Şanlıurfa "Türkiye\'nin en sıcak şehri" unvanını taşır.'
      },
      {
        text: 'Barajların bu bölgede çok olmasının temel sebebi nedir?',
        options: ['Deniz kıyısına yakındır', 'Fırat ve Dicle nehirleri bölgeden geçer', 'Karla beslenme çok fazladır', 'Yer altı suları zengindir'],
        correct: 1,
        explanation: 'Fırat ve Dicle nehirleri Güneydoğu Anadolu\'dan geçer. Bu iki büyük nehir üzerine Atatürk, Birecik, Keban gibi dev barajlar inşa edilmiştir.'
      },
      {
        text: 'Güneydoğu Anadolu hangi kadim medeniyetlerin izlerini taşır?',
        options: ['Roma ve Bizans', 'Osmanlı ve Selçuklu', 'Sümer, Babil ve Asur (Mezopotamya)', 'Yunan ve Pers'],
        correct: 2,
        explanation: 'Güneydoğu Anadolu, Mezopotamya\'nın bir parçasıdır. İnsanlık tarihinin ilk medeniyetleri olan Sümer, Babil ve Asur bu topraklarda doğmuştur.'
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
