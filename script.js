/* ================================================
   GAMEVERSE — script.js
   Бүх тоглоомын мэдээлэл болон функцууд энд байна
   ================================================ */


/* ========================
   1. ТОГЛООМЫН МЭДЭЭЛЭЛ
   ↓↓ ЭНИЙГ ЗАСААРАЙ ↓↓
   ======================== */
const games = [

  /* --- 1-р тоглоом --- */
  {
    /* ЗУРАГ: emoji эсвэл img хоёрын аль нэгийг ашиглана */
                        /* ← Emoji ашиглах бол */
    /* img: 'images/elden-ring.jpg', */  /* ← Зураг ашиглах бол energy мөрийг нее */
    img:'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg?t=1767883716',
    /* АРЫ ӨНГӨ: зурагны ард харагдах gradient өнгө */
    bg: 'linear-gradient(135deg, #1a0533, #0d1f3c)',

    genre:  'RPG',              /* ← Жанр (RPG / Action / FPS / Strategy / Adventure / Simulation) */
    title:  'Elden Ring',       /* ← Тоглоомын нэр */
    year:   2022,               /* ← Гаргасан он */
    dev:    'FromSoftware',     /* ← Хөгжүүлэгч компани */
    rating: 9.8,                /* ← Үнэлгээ (0.0 — 10.0) */

    /* ШОШГО: хамгийн ихдээ 3 ширхэг */
    tags: ['Open World', 'Souls-like', 'Dark Fantasy'],

    /* ТАЙЛБАР: дэлгэрэнгүй цонхонд харагдана */
    desc: 'Тархины хамгийн сорилттой action RPG. Нээлттэй ертөнцөд аялж, хүчирхэг дайснуудтай тулалдана. FromSoftware болон George R.R. Martin хамтарч бүтээсэн.',

    /* СИСТЕМИЙН ШААРДЛАГА */
    req: {
      os:      'Windows 10/11',
      cpu:     'Intel i5-8600 / AMD Ryzen 5 3600',
      gpu:     'GTX 1060 6GB',
      ram:     '12 GB',
      storage: '60 GB SSD',
    },

    badge: '',  /* ← Онцлох шошго (байхгүй бол энэ мөрийг устга) */
  },

  /* --- 2-р тоглоом --- */
  {
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/e9047d8ec47ae3d94bb8b464fb0fc9e9972b4ac7/header.jpg?t=1769690377',
    /* img: 'images/cyberpunk.jpg', */
    bg:     'linear-gradient(135deg, #0a1628, #1a3a5c)',
    genre:  'Action',
    title:  'Cyberpunk 2077',
    year:   2020,
    dev:    'CD Projekt Red',
    rating: 8.9,
    tags:   ['Open World', 'Cyberpunk', 'RPG Elements'],
    desc:   'Ирээдүйн Night City хотод мэрэгч хакерийн дүрд ороод аялах action-adventure RPG.',
    req: {
      os:      'Windows 10',
      cpu:     'Intel i7-6700 / AMD Ryzen 5 1600',
      gpu:     'GTX 1060 6GB / RX 5500 XT 8GB',
      ram:     '12 GB',
      storage: '70 GB SSD',
    },
  },

  /* --- 3-р тоглоом --- */
  {
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg?t=1763059412',
    /* img: 'images/god-of-war.jpg', */
    bg:     'linear-gradient(135deg, #1a0a00, #3d1500)',
    genre:  'Action',
    title:  'God of War',
    year:   2022,
    dev:    'Santa Monica Studio',
    rating: 9.5,
    tags:   ['Action-Adventure', 'Norse Mythology', 'Single Player'],
    desc:   'Крейтос болон түүний хүү Атреусын Norse домогт аялал. Гайхалтай визуал болон сэтгэл хөдлүүлэх түүхтэй.',
    req: {
      os:      'Windows 10 64-bit',
      cpu:     'Intel i5-6600 / AMD Ryzen 5 2600',
      gpu:     'GTX 1060 6GB',
      ram:     '8 GB',
      storage: '70 GB SSD',
    },
  },

  /* --- 4-р тоглоом --- */
  {
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/949230/header.jpg?t=1778587768',
    /* img: 'images/cities.jpg', */
    bg:     'linear-gradient(135deg, #001a0a, #003320)',
    genre:  'Strategy',
    title:  'Cities: Skylines',
    year:   2015,
    dev:    'Colossal Order',
    rating: 8.7,
    tags:   ['City Builder', 'Simulation', 'Management'],
    desc:   'Өөрийн хот барьж, удирда. Замын сүлжээ, хүн амын хэрэгцээ, эдийн засгийг зохицуул.',
    req: {
      os:      'Windows 7/8/10',
      cpu:     'Intel i5-3470 / AMD FX-6300',
      gpu:     'GTX 660 2GB',
      ram:     '6 GB',
      storage: '4 GB',
    },
  },

  /* --- 5-р тоглоом --- */
  {
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861',
    /* img: 'images/cs2.jpg', */
    bg:     'linear-gradient(135deg, #1a0a0a, #3d0000)',
    genre:  'FPS',
    title:  'Counter-Strike 2',
    year:   2023,
    dev:    'Valve',
    rating: 8.5,
    tags:   ['Competitive', 'Tactical', 'Multiplayer'],
    desc:   'Дэлхийн хамгийн алдартай тактикал FPS тоглоом CS:GO-ийн шинэчлэгдсэн хувилбар.',
    req: {
      os:      'Windows 10',
      cpu:     'Intel i5 / AMD Ryzen 5',
      gpu:     'GTX 970 / RX 480',
      ram:     '8 GB',
      storage: '85 GB SSD',
    },
  },

  /* --- 6-р тоглоом --- */
  {
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1868140/81bdb3bce15d27ca1b4554a642d91096e89be229/header.jpg?t=1776394908',
    /* img: 'images/dave.jpg', */
    bg:     'linear-gradient(135deg, #001528, #002a4a)',
    genre:  'Adventure',
    title:  'Dave the Diver',
    year:   2023,
    dev:    'MINTROCKET',
    rating: 9.1,
    tags:   ['Indie', 'Fishing', 'Restaurant'],
    desc:   'Өдрөөрөө далайд шумбаж загас агнах, шөнөөрөө суши ресторан ажиллуулах өвөрмөц тоглоом.',
    req: {
      os:      'Windows 7/8/10',
      cpu:     'Intel i5-3470',
      gpu:     'GTX 1050 Ti',
      ram:     '8 GB',
      storage: '5 GB',
    },
  },

  /* --- 7-р тоглоом --- */
  {
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1716740/header.jpg?t=1778168061',
    bg:     'linear-gradient(135deg, #0a001a, #1a0033)',
    genre:  'RPG',
    title:  'Starfield',
    year:   2023,
    dev:    'Bethesda',
    rating: 7.8,
    tags:   ['Space', 'Open World', 'Exploration'],
    desc:   'Bethesda-ийн шинэ орчлонд тулгуурласан RPG. Сансрыг нээж, гарагуудыг судла.',
    req: {
      os:      'Windows 10/11',
      cpu:     'Intel i7-6800K / AMD Ryzen 5 3600X',
      gpu:     'RTX 2080 / RX 5700 XT',
      ram:     '16 GB',
      storage: '125 GB SSD',
    },
  },

  /* --- 8-р тоглоом --- */
  {
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg?t=1754692865',
    bg:     'linear-gradient(135deg, #001a00, #003300)',
    genre:  'Simulation',
    title:  'Stardew Valley',
    year:   2016,
    dev:    'ConcernedApe',
    rating: 9.3,
    tags:   ['Farming', 'Indie', 'Relaxing'],
    desc:   'Хотоос тосгон руу нүүж, ферм байгуул, нутгийнхантай нөхөрлөж, нууцуудыг олж нээ.',
    req: {
      os:      'Windows Vista/7/8/10',
      cpu:     'Intel Core 2 Duo 2.4 GHz',
      gpu:     '256 MB Video RAM',
      ram:     '2 GB',
      storage: '500 MB',
    },
  },

  /* ========================
     ↓↓ ШИНЭ ТОГЛООМ НЭМЭХ ↓↓
     Доорх загварыг copy хийж, шаардлагатай мэдээллийг солино:

  {
    emoji: '🎮',
    img: 'images/shine-togloom.jpg',   ← зураг ашиглах бол
    bg:     'linear-gradient(135deg, #000000, #111111)',
    genre:  'Action',
    title:  'Тоглоомын нэр',
    year:   2024,
    dev:    'Хөгжүүлэгч нэр',
    rating: 8.0,
    tags:   ['Tag 1', 'Tag 2', 'Tag 3'],
    desc:   'Тоглоомын тайлбар энд бичнэ.',
    req: {
      os:      'Windows 10',
      cpu:     'Intel i5',
      gpu:     'GTX 1060',
      ram:     '8 GB',
      storage: '30 GB',
    },
  },
     ======================== */
   {
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/261550/header.jpg?t=1764252300',
    bg: 'linear-gradient(135deg, #1a0533, #0d1f3c)',
    genre: 'RPG',
    title: 'Mount & Blade II: Bannerlord',
    year: 2022,
    dev: 'TaleWorlds Entertainment',
    rating: 8.3,
    tags: ['Medieval', 'Open World', 'Sandbox'],
    desc: 'Дундад зууны ертөнцөд цэрэг бүрдүүлж, байлдан дагуулалт хийж, өөрийн эзэнт гүрнийг байгуул.',
    req: {
      os:      'Windows 7/8/10 (64-bit)',
      cpu:     'Intel Core i3-8100 / AMD Ryzen 5 2400G',
      gpu:     'GTX 1060 3GB / RX 580',
      ram:     '8 GB',
      storage: '60 GB SSD',
    },           
  },             

  {
    img: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3240220/header.jpg?t=1765479644',
    bg: 'linear-gradient(135deg, #0a001a, #1a0033)',
    genre: 'open world',
    title: 'Grand theft auto V',
    year: 2013,
    dev: 'Rockstar North',
    rating: 9.5,
    tags: ['Action', 'Adventure', 'Multiplayer'],
    desc: 'Los Santos хотод гуравхан хүний түүхээр дамжуулан гэмт хэргийн ертөнцийг судлах боломжтой.',
    req: {
      os:      'Windows 10/11 (64-bit)',
      cpu:     'Intel Core i5-3470 / AMD FX-8350',
      gpu:     'GTX 660 2GB / AMD HD 7870 2GB',
      ram:     '8 GB',
      storage: '110 GB SSD',
    },
  },         

];           

/* ========================
   2. ТОГЛООМЫГ ДЭЛГЭЦЭНД ХАРУУЛАХ
   Энэ функц game card бүрийг HTML болгож grid-т нэмнэ
   ======================== */
function renderGames(list) {
  const grid = document.getElementById('gameGrid'); /* Grid элементийг олох */
  grid.innerHTML = '';  /* Өмнөх картуудыг цэвэрлэх */

  /* Жагсаалтын тоглоом бүрийг дүүргэх */
  list.forEach((g, i) => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.style.animationDelay = (i * 0.06) + 's'; /* Дараалан гарах animation */

    /* Зураг эсвэл emoji харуулах */
    const mediaHTML = g.img
      ? `<img src="${g.img}" alt="${g.title}">` /* Зураг байвал img ашиглах */
      : `<span style="position:relative;z-index:1;filter:drop-shadow(0 0 20px rgba(255,255,255,0.2))">${g.emoji}</span>`; /* Эсвэл emoji */

    /* Онцлох шошго байвал харуулах */
    const badgeHTML = g.badge
      ? `<span style="position:absolute;top:.6rem;left:.6rem;z-index:2;background:#ff4757;color:#fff;font-size:.6rem;font-weight:700;letter-spacing:1.5px;padding:.2rem .6rem;border-radius:3px;text-transform:uppercase">${g.badge} Онцлох</span>`
      : '';

    /* Картын HTML бүтэц */
    card.innerHTML = `
      <!-- Зургийн хэсэг -->
      <div class="card-thumb" style="background:${g.bg}">
        ${mediaHTML}
        <div class="overlay"></div>
        ${badgeHTML}
      </div>

      <!-- Мэдээллийн хэсэг -->
      <div class="card-body">
        <div class="card-genre">${g.genre}</div>
        <div class="card-title">${g.title}</div>
        <div>${g.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="card-footer">
          <span class="card-rating">★ ${g.rating}</span>
          <span class="card-year">${g.year} · ${g.dev}</span>
        </div>
      </div>
    `;

    /* Карт дарахад modal нээх */
    card.onclick = () => openModal(i);

    grid.appendChild(card); /* Grid-т нэмэх */
  });
}


/* ========================
   3. ЖАНРЫН ШҮҮЛТҮҮР
   Товч дарахад идэвхтэй жанрыг солиод шүүнэ
   ======================== */
let activeGenre = 'all'; /* Одоогийн идэвхтэй жанр */

function filterByGenre(genre, btn) {
  activeGenre = genre; /* Идэвхтэй жанрыг хадгалах */

  /* Бүх товчнуудаас "active" class авах */
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));

  /* Дарагдсан товчид "active" class нэмэх */
  btn.classList.add('active');

  /* Шүүлт хийх */
  applyFilters();
}


/* ========================
   4. ХАЙЛТ
   Хайх талбарт бичих үед дуудагдана
   ======================== */
function filterGames() {
  applyFilters();
}


/* ========================
   5. ШҮҮЛТ ХИЙХ (жанр + хайлт хослуулсан)
   ======================== */
function applyFilters() {
  /* Хайх талбарын текстийг жижиг үсгэнд хөрвүүлэх */
  const q = document.getElementById('searchInput').value.toLowerCase();

  /* Жанр болон хайлтын нөхцөлд тохирох тоглоомуудыг шүүх */
  const filtered = games.filter(g => {
    /* Жанр тохирч байна уу? */
    const matchGenre = activeGenre === 'all' || g.genre === activeGenre;

    /* Нэр эсвэл жанр эсвэл шошгонд хайлтын текст байна уу? */
    const matchSearch = !q
      || g.title.toLowerCase().includes(q)
      || g.genre.toLowerCase().includes(q)
      || g.tags.some(t => t.toLowerCase().includes(q));

    return matchGenre && matchSearch; /* Хоёр нөхцөл хоёулаа тохирох ёстой */
  });

  renderGames(filtered); /* Шүүгдсэн тоглоомуудыг харуулах */
}


/* ========================
   6. MODAL НЭЭХ
   Тоглоомын дэлгэрэнгүй мэдээллийг харуулах
   ======================== */
function openModal(idx) {
  const g = games[idx]; /* idx дугаарын тоглоомыг авах */

  /* --- Modal зургийн хэсэг --- */
  const headerMedia = g.img
    ? `<img src="${g.img}" alt="${g.title}">` /* Зураг байвал */
    : `<span style="font-size:6rem;position:relative;z-index:1;filter:drop-shadow(0 0 30px rgba(255,255,255,0.3))">${g.emoji}</span>`; /* Emoji байвал */

  /* Modal header-ийг арын өнгө болон зургаар дүүргэх */
  document.getElementById('modalHeader').style.background = g.bg;
  document.getElementById('modalHeader').innerHTML = `
    ${headerMedia}
    <button class="modal-close" onclick="closeModalDirect()">✕</button>
  `;

  /* --- Modal мэдээллийн хэсэг --- */
  document.getElementById('modalBody').innerHTML = `
    <!-- Жанр + шошгууд -->
    <div class="game-genre">${g.genre} · ${g.tags.join(' · ')}</div>

    <!-- Тоглоомын нэр -->
    <div class="modal-title">${g.title}</div>

    <!-- Үнэлгээ -->
    <div class="rating" style="margin-bottom:.5rem">★ ${g.rating} / 10</div>

    <!-- Мета мэдээлэл: он, хөгжүүлэгч, жанр -->
    <div class="modal-meta">
      <div class="modal-meta-item">
        <div class="label">Гаргасан</div>
        <div class="value">${g.year}</div>
      </div>
      <div class="modal-meta-item">
        <div class="label">Хөгжүүлэгч</div>
        <div class="value">${g.dev}</div>
      </div>
      <div class="modal-meta-item">
        <div class="label">Төрөл</div>
        <div class="value">${g.genre}</div>
      </div>
    </div>

    <!-- Тайлбар -->
    <div class="modal-desc">${g.desc}</div>

    <!-- Системийн шаардлага -->
    <div class="sys-req">
      <h4>⚙ Системийн шаардлага</h4>
      <div class="req-grid">
        <div class="req-item">
          <div class="req-label">Үйлдлийн систем</div>
          <div class="req-val">${g.req.os}</div>
        </div>
        <div class="req-item">
          <div class="req-label">Процессор</div>
          <div class="req-val">${g.req.cpu}</div>
        </div>
        <div class="req-item">
          <div class="req-label">Видео карт</div>
          <div class="req-val">${g.req.gpu}</div>
        </div>
        <div class="req-item">
          <div class="req-label">RAM санах ой</div>
          <div class="req-val">${g.req.ram}</div>
        </div>
        <div class="req-item">
          <div class="req-label">Зай</div>
          <div class="req-val">${g.req.storage}</div>
        </div>
      </div>
    </div>

    <!-- Хаах товч -->
    <div class="btn-group">
      <button class="btn-primary" onclick="closeModalDirect()">✕ Хаах</button>
    </div>
  `;

  /* Modal харуулах */
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden'; /* Арын scroll хориглох */
}


/* ========================
   7. MODAL ХААХ
   ======================== */

/* Арын харанхуй давхарга дарахад хаах */
function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) {
    closeModalDirect();
  }
}

/* Шууд хаах */
function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = ''; /* Scroll буцаах */
}

/* Escape товч дарахад хаах */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModalDirect();
});


/* ========================
   8. ЭХЛҮҮЛЭХ
   Хуудас ачаалах үед тоглоомуудыг харуулна
   ======================== */
renderGames(games);