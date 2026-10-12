// ========== 多语言文本数据 ==========
const translations = {
  zh: {
    logo: "🇦🇷 阿根廷景点指南",
    nav_home: "首页",
    nav_attractions: "景点",
    nav_faq: "常见问题",
    nav_about: "关于我们",
    hero_title: "阿根廷 25 个最佳景点",
    hero_subtitle: "探索南美洲最迷人的国度——从繁华的布宜诺斯艾利斯到壮丽的伊瓜苏瀑布，再到巴塔哥尼亚的冰川奇观",
    hero_button: "开始探索 →",
    toc_title: "📑 景点目录",
    attractions_title: "🌟 必游景点",
    faq_title: "❓ 常见问题",
    faq_q1: "什么时候去阿根廷最合适？",
    faq_a1: "<strong>春季（9-11月）</strong>：适合布宜诺斯艾利斯和巴塔哥尼亚<br><strong>夏季（12-2月）</strong>：适合海滩目的地<br><strong>秋季（3-5月）</strong>：门多萨葡萄酒之旅最佳时节<br><strong>冬季（6-8月）</strong>：安第斯山脉滑雪胜地",
    faq_q2: "下雨天有什么推荐？",
    faq_a2: "参观博物馆、科隆剧院、参加酒庄品酒、体验传统马黛茶，或在咖啡馆感受南美慢生活 ☕",
    faq_q3: "和家人一起有哪些好去处？",
    faq_a3: "伊瓜苏瀑布、瓦尔德斯半岛观赏野生动物、门多萨酒庄、巴塔哥尼亚户外徒步，还有经典的阿根廷烧烤 Asado 体验！",
    about_title: "关于我们",
    about_p1: "我们是一支专注于旅行行业的团队，致力于为每一位旅行者打造更美好的阿根廷之旅。",
    about_p2: "从伊瓜苏瀑布的壮美、巴塔哥尼亚冰川的震撼，到布宜诺斯艾利斯的探戈之夜、门多萨的葡萄庄园，我们精心整理每一个目的地的实用信息，希望帮你更轻松地规划行程、更深入地体验当地文化。",
    about_p3: "旅行不只是看风景，更是认识世界的方式。愿这份指南成为你旅途中的好伙伴，祝你一路顺风，收获满满！🧳",
    footer_follow: "请关注我们",
    addr: "📍 地址：",
    phone: "📞 电话：",
    hours: "🕐 营业时间："
  },
  en: {
    logo: "🇦🇷 Argentina Travel Guide",
    nav_home: "Home",
    nav_attractions: "Attractions",
    nav_faq: "FAQ",
    nav_about: "About Us",
    hero_title: "Top 25 Places to Visit in Argentina",
    hero_subtitle: "Discover the most beautiful country in South America — from bustling Buenos Aires to majestic Iguazu Falls and the glaciers of Patagonia",
    hero_button: "Explore Now →",
    toc_title: "📑 Table of Contents",
    attractions_title: "🌟 Must-Visit Attractions",
    faq_title: "❓ FAQ",
    faq_q1: "When is the best time to visit Argentina?",
    faq_a1: "<strong>Spring (Sep–Nov)</strong>: Great for Buenos Aires and Patagonia<br><strong>Summer (Dec–Feb)</strong>: Best for beaches<br><strong>Autumn (Mar–May)</strong>: Perfect for Mendoza wine tours<br><strong>Winter (Jun–Aug)</strong>: Ski season in the Andes",
    faq_q2: "What to do on a rainy day?",
    faq_a2: "Visit museums, the Colón Theatre, go wine tasting, try mate, or relax in a cozy café ☕",
    faq_q3: "Best places to visit with family?",
    faq_a3: "Iguazu Falls, Peninsula Valdes wildlife, Mendoza vineyards, Patagonia hiking, and traditional Argentine asado BBQ!",
    about_title: "About Us",
    about_p1: "We are a team dedicated to the travel industry, committed to creating better journeys across Argentina for every traveler.",
    about_p2: "From the majesty of Iguazú Falls and the wonders of Patagonian glaciers, to tango nights in Buenos Aires and the vineyards of Mendoza — we carefully curate practical information for every destination to help you plan with ease and experience local culture in depth.",
    about_p3: "Travel is not just about scenery, but a way to discover the world. May this guide be a trusty companion on your journey — bon voyage! 🧳",
    footer_follow: "Follow Us",
    addr: "📍 Address: ",
    phone: "📞 Phone: ",
    hours: "🕐 Hours: "
  },
  es: {
    logo: "🇦🇷 Guía de Argentina",
    nav_home: "Inicio",
    nav_attractions: "Atracciones",
    nav_faq: "Preguntas",
    nav_about: "Nosotros",
    hero_title: "Los 25 Mejores Lugares de Argentina",
    hero_subtitle: "Descubre lo mejor de Argentina — desde Buenos Aires hasta las Cataratas del Iguazú y los glaciares de la Patagonia",
    hero_button: "Explorar →",
    toc_title: "📑 Índice",
    attractions_title: "🌟 Lugares Imperdibles",
    faq_title: "❓ Preguntas Frecuentes",
    faq_q1: "¿Cuál es la mejor época para visitar Argentina?",
    faq_a1: "<strong>Primavera (sep–nov)</strong>: Buenos Aires y Patagonia<br><strong>Verano (dic–feb)</strong>: Playas y mar<br><strong>Otoño (mar–may)</strong>: Vinos en Mendoza<br><strong>Invierno (jun–ago)</strong>: Esquí en los Andes",
    faq_q2: "¿Qué hacer si llueve?",
    faq_a2: "Visitar museos, el Teatro Colón, degustar vinos, tomar mate o descansar en un café ☕",
    faq_q3: "¿Qué visitar en familia?",
    faq_a3: "Cataratas del Iguazú, Peninsula Valdes, Mendoza, Patagonia, ¡y un buen asado argentino!",
    about_title: "Sobre nosotros",
    about_p1: "Somos un equipo dedicado a la industria de los viajes, comprometido con crear mejores viajes por Argentina para cada viajero.",
    about_p2: "Desde la majestuosidad de las Cataratas del Iguazú y los glaciares de la Patagonia, hasta las noches de tango en Buenos Aires y los viñedos de Mendoza: reunimos información práctica de cada destino para ayudarte a planificar con facilidad y vivir la cultura local a fondo.",
    about_p3: "Viajar no es solo ver paisajes, sino una forma de descubrir el mundo. Que esta guía te acompañe en tu viaje. ¡Buen viaje! 🧳",
    footer_follow: "Síguenos",
    addr: "📍 Dirección: ",
    phone: "📞 Teléfono: ",
    hours: "🕐 Horario: "
  }
};

// ========== 景点完整数据（全部含图片）==========
const attractions = [
  {
    id: 1,
    name: { zh: "布宜诺斯艾利斯市", en: "Buenos Aires City", es: "Ciudad de Buenos Aires" },
    desc: { zh: "阿根廷首都是南美洲最欧洲化的城市，始建于1536年，位于拉普拉塔河西岸，以历史街区、咖啡馆和欧洲风情闻名。", en: "The capital of Argentina, the most European-style city in South America, founded in 1536 on the Río de la Plata, known for its historic neighborhoods and European charm.", es: "La capital de Argentina, la ciudad más europea de Sudamérica, fundada en 1536 a orillas del Río de la Plata, famosa por sus barrios históricos y su encanto europeo." },
    address: { zh: "布宜诺斯艾利斯，阿根廷", en: "Buenos Aires, Argentina", es: "Buenos Aires, Argentina" },
    phone: "+54 011 5280-2000",
    hours: { zh: "24小时开放", en: "Open 24/7", es: "Abierto 24 h" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Puerto_Madero%2C_Buenos_Aires_%2840689219792%29_%28cropped%29.jpg/1280px-Puerto_Madero%2C_Buenos_Aires_%2840689219792%29_%28cropped%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    id: 2,
    name: { zh: "伊瓜苏瀑布", en: "Iguazu Falls", es: "Cataratas del Iguazú" },
    desc: { zh: "由275个瀑布组成，位于阿根廷与巴西边界，被评为世界七大自然奇观之一，最大瀑布为\"魔鬼的喉咙\"，高82米。", en: "A system of 275 waterfalls on the Argentina–Brazil border, named one of the New 7 Wonders of Nature. The tallest is 'Devil's Throat' at 82m.", es: "Un conjunto de 275 saltos en la frontera entre Argentina y Brasil, declarado una de las 7 Maravillas Naturales del Mundo. El más alto es la 'Garganta del Diablo' con 82 m." },
    address: { zh: "伊瓜苏，阿根廷", en: "Iguazu, Argentina", es: "Iguazú, Argentina" },
    phone: "+54 3757 49-1472",
    hours: { zh: "08:00 - 18:00", en: "08:00 - 18:00", es: "08:00 - 18:00" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Aerial_Foz_de_Igua%C3%A7u_26_Nov_2005.jpg/1280px-Aerial_Foz_de_Igua%C3%A7u_26_Nov_2005.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    id: 3,
    name: { zh: "瓦尔德斯半岛", en: "Peninsula Valdes", es: "Península Valdés" },
    desc: { zh: "大西洋沿岸的\"露天动物园\"，栖息着南露脊鲸、海狮、麦哲伦企鹅等珍稀野生动物。", en: "An 'open-air zoo' on the Atlantic coast, home to southern right whales, sea lions, Magellanic penguins and other wildlife.", es: "Un 'zoológico al aire libre' en el Atlántico, hogar de ballenas francas australes, lobos marinos y pingüinos de Magallanes." },
    address: { zh: "瓦尔德斯半岛，阿根廷", en: "Valdes Peninsula, Argentina", es: "Península Valdés, Argentina" },
    phone: "—",
    hours: { zh: "24小时开放", en: "Open 24/7", es: "Abierto 24 h" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/Southern_Right_Whale_-_Pen%C3%ADnsula_Vald%C3%A9s.jpg/1280px-Southern_Right_Whale_-_Pen%C3%ADnsula_Vald%C3%A9s.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    id: 4,
    name: { zh: "五月金字塔", en: "May Pyramid", es: "Pirámide de Mayo" },
    desc: { zh: "位于五月广场中心，阿根廷第一座爱国纪念碑，1811年为纪念五月革命一周年而建，高18米。", en: "Located at the center of Plaza de Mayo, Argentina's first national monument, built in 1811 to commemorate the May Revolution.", es: "En el centro de la Plaza de Mayo, el primer monumento nacional de Argentina, construido en 1811 en honor a la Revolución de Mayo." },
    address: { zh: "五月广场，布宜诺斯艾利斯", en: "Plaza de Mayo, Buenos Aires", es: "Plaza de Mayo, Buenos Aires" },
    phone: "—",
    hours: { zh: "24小时开放", en: "Open 24/7", es: "Abierto 24 h" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Plaza_de_Mayo_y_Pir%C3%A1mide_de_Mayo.jpg/1280px-Plaza_de_Mayo_y_Pir%C3%A1mide_de_Mayo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    id: 5,
    name: { zh: "佩里托莫雷诺冰川", en: "Perito Moreno Glacier", es: "Glaciar Perito Moreno" },
    desc: { zh: "巴塔哥尼亚三座不退缩冰川之一，面积250平方公里，冰坝定期崩塌，壮观至极，世界第三大淡水保护区。", en: "One of three advancing glaciers in Patagonia. 250 km² in size. Its ice dam collapses are a spectacular natural show.", es: "Uno de los pocos glaciares que avanza. 250 km². El rompimiento de su presa de hielo es un espectáculo natural único." },
    address: { zh: "冰川国家公园", en: "Los Glaciares National Park", es: "Parque Nacional Los Glaciares" },
    phone: "+54 2902 49-6000",
    hours: { zh: "08:00 - 18:00", en: "08:00 - 18:00", es: "08:00 - 18:00" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Perito_Moreno_Glacier_2023.jpg/1280px-Perito_Moreno_Glacier_2023.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    id: 6,
    name: { zh: "拉斯马诺斯洞穴", en: "Cueva de las Manos", es: "Cueva de las Manos" },
    desc: { zh: "洞穴内壁画着古老的手印，大多为左手掌，最古老的可追溯至公元前9000年，由史前猎人留下。", en: "Famous for ancient handprints on the cave walls, mostly left hands, dating back to 9000 BCE, left by prehistoric hunters.", es: "Famosa por sus antiguas huellas de manos en las paredes, principalmente izquierdas, que datan del 9000 a.C., dejadas por cazadores prehistóricos." },
    address: { zh: "圣克鲁斯省，阿根廷", en: "Santa Cruz Province, Argentina", es: "Provincia de Santa Cruz, Argentina" },
    phone: "+54 2976 41-2314",
    hours: { zh: "09:00 - 17:00", en: "09:00 - 17:00", es: "09:00 - 17:00" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f4/SantaCruz-CuevaManos-P2210651b.jpg/1280px-SantaCruz-CuevaManos-P2210651b.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    id: 7,
    name: { zh: "科隆剧院", en: "Colón Theatre", es: "Teatro Colón" },
    desc: { zh: "世界顶级歌剧院之一，1908年落成，可容纳2500名观众，内部装饰华丽，声学效果卓越。", en: "One of the world's greatest opera houses, opened in 1908, seating 2,500, famous for its architecture and acoustics.", es: "Uno de los teatros de ópera más importantes del mundo, inaugurado en 1908, con capacidad para 2.500 personas y una acústica legendaria." },
    address: { zh: "Cerrito 628, 布宜诺斯艾利斯", en: "Cerrito 628, Buenos Aires", es: "Cerrito 628, Buenos Aires" },
    phone: "+54 11 4378-7109",
    hours: { zh: "10:00 - 17:00", en: "10:00 - 17:00", es: "10:00 - 17:00" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Fachada_del_Teatro_Col%C3%B3n_en_Buenos_Aires%2C_Argentina.jpg/1280px-Fachada_del_Teatro_Col%C3%B3n_en_Buenos_Aires%2C_Argentina.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    id: 8,
    name: { zh: "塔拉姆帕亚自然公园", en: "Talampaya Natural Park", es: "Parque Natural Talampaya" },
    desc: { zh: "红色岩石峡谷，岩壁上有古老图画和象形文字，独特的回声峡谷是游客最爱体验。", en: "Red rock canyon with ancient rock art. The echo canyon is a visitor favorite.", es: "Cañón de rocas rojas con arte rupestre. El cañón del eco es la atracción favorita de los visitantes." },
    address: { zh: "拉里奥哈省，阿根廷", en: "La Rioja Province, Argentina", es: "Provincia de La Rioja, Argentina" },
    phone: "+54 3865 43-1107",
    hours: { zh: "08:00 - 17:00", en: "08:00 - 17:00", es: "08:00 - 17:00" },
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Talampaya_NP.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
  },
  {
    id: 9,
    name: { zh: "伊斯奇瓜拉斯托（月亮谷）", en: "Ischigualasto (Valley of the Moon)", es: "Ischigualasto (Valle de la Luna)" },
    desc: { zh: "地貌酷似月球表面，发现54种恐龙化石遗迹，被誉为\"古生物学的天堂\"。", en: "Lunar-like landscape with fossils of 54 dinosaur species — a true paleontological treasure.", es: "Paisaje que parece la Luna con fósiles de 54 especies de dinosaurios — un tesoro paleontológico." },
    address: { zh: "圣胡安省，阿根廷", en: "San Juan Province, Argentina", es: "Provincia de San Juan, Argentina" },
    phone: "+54 3868 42-1392",
    hours: { zh: "08:00 - 18:00", en: "08:00 - 18:00", es: "08:00 - 18:00" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/El_Hongo.JPG/1280px-El_Hongo.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    id: 10,
    name: { zh: "冰川国家公园", en: "Los Glaciares National Park", es: "Parque Nacional Los Glaciares" },
    desc: { zh: "世界遗产，面积4459平方公里，包含47条冰川和阿根廷最大的阿根廷湖，鸟类和野生动物众多。", en: "UNESCO World Heritage site covering 4,459 km² with 47 glaciers and Argentina's largest lake — Lago Argentino.", es: "Patrimonio de la Humanidad de la UNESCO, 4.459 km² con 47 glaciares y el lago más grande de Argentina — el Lago Argentino." },
    address: { zh: "圣克鲁斯省，阿根廷", en: "Santa Cruz Province, Argentina", es: "Provincia de Santa Cruz, Argentina" },
    phone: "+54 2902 49-6000",
    hours: { zh: "08:00 - 18:00", en: "08:00 - 18:00", es: "08:00 - 18:00" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Los_Glaciares_National_Park_panorama_1.JPG/1280px-Los_Glaciares_National_Park_panorama_1.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    id: 11,
    name: { zh: "纳韦尔瓦皮国家公园", en: "Nahuel Huapi National Park", es: "Parque Nacional Nahuel Huapi" },
    desc: { zh: "阿根廷最古老的国家公园，以碧蓝的纳韦尔瓦皮湖闻名，可远眺特罗纳多火山。", en: "Argentina's oldest national park, famous for the deep blue Nahuel Huapi Lake with views of Tronador Volcano.", es: "El parque nacional más antiguo de Argentina, famoso por el azul profundo del lago Nahuel Huapi y la vista del volcán Tronador." },
    address: { zh: "里奥内格罗省，阿根廷", en: "Río Negro Province, Argentina", es: "Provincia de Río Negro, Argentina" },
    phone: "+54 294 442-2433",
    hours: { zh: "08:00 - 18:00", en: "08:00 - 18:00", es: "08:00 - 18:00" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d9/Llao_Llao_Peninsula.jpg/1280px-Llao_Llao_Peninsula.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    id: 12,
    name: { zh: "巴塔哥尼亚", en: "Patagonia", es: "Patagonia" },
    desc: { zh: "南美洲的秘境，涵盖壮丽的峡湾、雪峰、荒原和冰川，徒步和探险爱好者的圣地。", en: "A land of wonders — fjords, mountains, steppes and glaciers. A paradise for hikers and adventurers.", es: "Una tierra mágica — fiordos, montañas, estepas y glaciares. Un paraíso para senderistas y aventureros." },
    address: { zh: "阿根廷南部", en: "Southern Argentina", es: "Sur de Argentina" },
    phone: "—",
    hours: { zh: "24小时开放", en: "Open 24/7", es: "Abierto 24 h" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Los_Glaciares_National_Park_%2816730720521%29.jpg/1280px-Los_Glaciares_National_Park_%2816730720521%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    id: 13,
    name: { zh: "拉博卡地区", en: "La Boca Neighborhood", es: "Barrio de La Boca" },
    desc: { zh: "布宜诺斯艾利斯的发源地，彩色铁皮屋、博卡青年足球场、探戈文化的摇篮。", en: "Birthplace of Buenos Aires. Colorful houses, La Bombonera stadium, and the cradle of tango culture.", es: "Lugar donde nació Buenos Aires. Casas coloridas, el estadio de Boca Juniors y cuna del tango." },
    address: { zh: "拉博卡，布宜诺斯艾利斯", en: "La Boca, Buenos Aires", es: "La Boca, Buenos Aires" },
    phone: "—",
    hours: { zh: "24小时开放", en: "Open 24/7", es: "Abierto 24 h" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Caminito_in_2026.jpg/1280px-Caminito_in_2026.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    id: 14,
    name: { zh: "安第斯山脉", en: "The Andes Mountains", es: "La Cordillera de los Andes" },
    desc: { zh: "世界最长山脉之一，纵贯南美西部，雪峰、高原、森林和丰富的野生动物构成壮丽画卷。", en: "One of the world's longest mountain ranges, running along western South America — snow peaks, plateaus and rich wildlife.", es: "Una de las cadenas montañosas más largas del mundo, a lo largo del oeste de Sudamérica — cimas nevadas, altiplanos y gran biodiversidad." },
    address: { zh: "阿根廷西部", en: "Western Argentina", es: "Oeste de Argentina" },
    phone: "—",
    hours: { zh: "24小时开放", en: "Open 24/7", es: "Abierto 24 h" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Aconcagua_Provincial_Park_06.jpg/1280px-Aconcagua_Provincial_Park_06.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    id: 15,
    name: { zh: "印加桥", en: "Puente del Inca", es: "Puente del Inca" },
    desc: { zh: "天然形成的石桥横跨门多萨河，宽28米，旁有温泉和古老度假村，曾是印加要道。", en: "Natural stone bridge over the Mendoza River, 28m wide. Hot springs nearby. Once an important Inca route.", es: "Puente natural sobre el río Mendoza de 28 m de ancho. Aguas termales cercanas. Antiguo camino inca." },
    address: { zh: "门多萨省，阿根廷", en: "Mendoza Province, Argentina", es: "Provincia de Mendoza, Argentina" },
    phone: "—",
    hours: { zh: "24小时开放", en: "Open 24/7", es: "Abierto 24 h" },
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Puente_del_Inca_and_spa.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
  },
  {
    id: 16,
    name: { zh: "玫瑰之家（总统府）", en: "Casa Rosada (Government House)", es: "Casa Rosada" },
    desc: { zh: "阿根廷总统官邸，位于五月广场东侧，粉红色建筑，可参观博物馆和历史展厅。", en: "The executive mansion, located on the eastern side of Plaza de Mayo. Pink building with a museum.", es: "Sede del gobierno, al este de la Plaza de Mayo. Edificio rosado con museo histórico." },
    address: { zh: "Calle Balcarce 50, 布宜诺斯艾利斯", en: "Balcarce 50, Buenos Aires", es: "Balcarce 50, Buenos Aires" },
    phone: "+54 11 4344-3000",
    hours: { zh: "09:00 - 17:00", en: "09:00 - 17:00", es: "09:00 - 17:00" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Casa_Rosada_exterior_from_Plaza_de_Mayo.JPG/1280px-Casa_Rosada_exterior_from_Plaza_de_Mayo.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    id: 17,
    name: { zh: "圣卡洛斯-德巴里洛切", en: "San Carlos de Bariloche", es: "San Carlos de Bariloche" },
    desc: { zh: "安第斯山麓的瑞士风小镇，雪山湖泊环绕，滑雪、徒步和巧克力文化闻名。", en: "Swiss-style town in the Andes surrounded by lakes. Famous for skiing, hiking and chocolate.", es: "Ciudad de estilo suizo en los Andes rodeada de lagos. Famosa por esquí, senderismo y chocolate." },
    address: { zh: "里奥内格罗省，阿根廷", en: "Río Negro Province, Argentina", es: "Provincia de Río Negro, Argentina" },
    phone: "—",
    hours: { zh: "24小时开放", en: "Open 24/7", es: "Abierto 24 h" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/San_Carlos_de_Bariloche_%2832923978031%29.jpg/1280px-San_Carlos_de_Bariloche_%2832923978031%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    id: 18,
    name: { zh: "雷科莱塔公墓", en: "Recoleta Cemetery", es: "Cementerio de la Recoleta" },
    desc: { zh: "建于1732年，阿根廷名人的最终归宿，精美的欧式墓穴和纪念碑本身就是建筑艺术展。", en: "Established in 1732, resting place of Argentine icons. Its mausoleums are a masterpiece of funerary architecture.", es: "Fundado en 1732, lugar de descanso de ilustres argentinos. Sus mausoleos son una obra maestra de arquitectura funeraria." },
    address: { zh: "Junín 1760, 布宜诺斯艾利斯", en: "Junín 1760, Buenos Aires", es: "Junín 1760, Buenos Aires" },
    phone: "+54 11 4801-1450",
    hours: { zh: "07:00 - 17:00", en: "07:00 - 17:00", es: "07:00 - 17:00" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/La_Recoleta_Cemetery_-_Buenos_Aires_Argentina_%285269260345%29.jpg/1280px-La_Recoleta_Cemetery_-_Buenos_Aires_Argentina_%285269260345%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    id: 19,
    name: { zh: "大萨利纳斯盐滩", en: "Salinas Grandes Salt Flats", es: "Salinas Grandes" },
    desc: { zh: "世界第三大盐沼，雪白无垠的盐地在阳光下闪耀，日出日落时分尤为壮丽。", en: "The world's third largest salt flat. Endless white plains shimmering in the sun — spectacular at sunrise and sunset.", es: "El tercer salar más grande del mundo. Llanuras blancas infinitas que brillan bajo el sol — espectacular al amanecer y atardecer." },
    address: { zh: "胡胡伊/萨尔塔省，阿根廷", en: "Jujuy/Salta border, Argentina", es: "Límite entre Jujuy y Salta, Argentina" },
    phone: "—",
    hours: { zh: "24小时开放", en: "Open 24/7", es: "Abierto 24 h" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Salinas_Grandes_%28Jujuy_and_Salta%29_06.jpg/1280px-Salinas_Grandes_%28Jujuy_and_Salta%29_06.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    id: 20,
    name: { zh: "火地岛国家公园", en: "Tierra del Fuego National Park", es: "Parque Nacional Tierra del Fuego" },
    desc: { zh: "世界最南端的国家公园，泛美公路尽头，森林、湖泊、海岸与山脉在此交汇。", en: "The southernmost national park in the world. End of the Pan-American Highway. Forests, lakes and mountains meet the sea.", es: "El parque nacional más austral del mundo. Fin de la Carretera Panamericana. Bosques, lagos y montañas junto al mar." },
    address: { zh: "乌斯怀亚，阿根廷", en: "Ushuaia, Argentina", es: "Ushuaia, Argentina" },
    phone: "+54 2901 42-0714",
    hours: { zh: "08:00 - 17:00", en: "08:00 - 17:00", es: "08:00 - 17:00" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Tierra_del_Fuego_National_Park_%285536006253%29.jpg/1280px-Tierra_del_Fuego_National_Park_%285536006253%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    id: 21,
    name: { zh: "布宜诺斯艾利斯方尖碑", en: "Buenos Aires Obelisk", es: "Obelisco de Buenos Aires" },
    desc: { zh: "城市地标，高67米，1936年为纪念国旗首次升起而建，位于著名的七月九日大道。", en: "City icon, 67m tall, built in 1936 where the Argentine flag was first raised. Located on 9 de Julio Avenue.", es: "Símbolo de la ciudad, 67 m de altura, construido en 1936 donde se izó por primera vez la bandera argentina. En la Avenida 9 de Julio." },
    address: { zh: "七月九日大道，布宜诺斯艾利斯", en: "9 de Julio Avenue, Buenos Aires", es: "Avenida 9 de Julio, Buenos Aires" },
    phone: "+54 11 5275-1135",
    hours: { zh: "24小时开放", en: "Open 24/7", es: "Abierto 24 h" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Obelisk_of_Buenos_Aires_%28Obelisco_de_Buenos_Aires_-_Buenos_Aires_Argentina_%285269210103%29.jpg/1280px-Obelisk_of_Buenos_Aires_%28Obelisco_de_Buenos_Aires_-_Buenos_Aires_Argentina_%285269210103%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    id: 22,
    name: { zh: "菲茨罗伊峰", en: "Mount Fitz Roy", es: "Cerro Fitz Roy" },
    desc: { zh: "巴塔哥尼亚标志性花岗岩山峰，海拔3375米，被登山界视为世界最美也最难的山峰之一。", en: "Iconic granite peak in Patagonia, 3,375m. Considered one of the most beautiful and challenging mountains on Earth.", es: "Pico granítico icónico de la Patagonia, 3.375 m. Considerado una de las cimas más bellas y difíciles del mundo." },
    address: { zh: "埃尔查尔滕，圣克鲁斯省", en: "El Chaltén, Santa Cruz", es: "El Chaltén, Santa Cruz" },
    phone: "—",
    hours: { zh: "24小时开放", en: "Open 24/7", es: "Abierto 24 h" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Fitz_Roy_and_frozen_Lago_de_los_Tres.jpg/1280px-Fitz_Roy_and_frozen_Lago_de_los_Tres.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    id: 23,
    name: { zh: "女人桥", en: "Women's Bridge", es: "Puente de la Mujer" },
    desc: { zh: "由西班牙建筑师卡拉特拉瓦设计，造型如一对探戈舞者，马德罗港区的地标。", en: "Designed by Santiago Calatrava. Shaped like a tango couple. Icon of the Puerto Madero district.", es: "Diseñado por Santiago Calatrava. Con forma de pareja bailando tango. Ícono de Puerto Madero." },
    address: { zh: "马德罗港区，布宜诺斯艾利斯", en: "Puerto Madero, Buenos Aires", es: "Puerto Madero, Buenos Aires" },
    phone: "—",
    hours: { zh: "24小时开放", en: "Open 24/7", es: "Abierto 24 h" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Puente_de_la_Mujer%2C_Puerto_Madero%2C_Buenos_Aires%2C_Argentina%2C_29th._Dec._2010_-_Flickr_-_PhillipC_%281%29.jpg/1280px-Puente_de_la_Mujer%2C_Puerto_Madero%2C_Buenos_Aires%2C_Argentina%2C_29th._Dec._2010_-_Flickr_-_PhillipC_%281%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    id: 24,
    name: { zh: "门多萨", en: "Mendoza", es: "Mendoza" },
    desc: { zh: "阿根廷葡萄酒之都，安第斯雪山下的14万公顷葡萄园，每年举办盛大的丰收节。", en: "Argentina's wine capital. 140,000 hectares of vineyards at the foot of the Andes. Famous for Malbec.", es: "Capital del vino en Argentina. 140.000 hectáreas de viñedos al pie de los Andes. Famosa por su Malbec." },
    address: { zh: "门多萨省，阿根廷", en: "Mendoza Province, Argentina", es: "Provincia de Mendoza, Argentina" },
    phone: "—",
    hours: { zh: "24小时开放", en: "Open 24/7", es: "Abierto 24 h" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Bodega_Dante_Robino%2C_Mendoza.jpg/1280px-Bodega_Dante_Robino%2C_Mendoza.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    id: 25,
    name: { zh: "阿根廷探戈", en: "Argentine Tango", es: "Tango Argentino" },
    desc: { zh: "诞生于布宜诺斯艾利斯底层街区的双人舞蹈，热情与优雅并存，是阿根廷的文化名片。", en: "A partner dance born in the neighborhoods of Buenos Aires. Passionate and elegant — Argentina's cultural icon.", es: "Baile en pareja nacido en los barrios de Buenos Aires. Apasionado y elegante — el emblema cultural de Argentina." },
    address: { zh: "布宜诺斯艾利斯，阿根廷", en: "Buenos Aires, Argentina", es: "Buenos Aires, Argentina" },
    phone: "—",
    hours: { zh: "24小时开放", en: "Open 24/7", es: "Abierto 24 h" },
    image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Tango_dancers_in_Buenos_Aires%2C_Argentina._%2833570798082%29.jpg/1280px-Tango_dancers_in_Buenos_Aires%2C_Argentina._%2833570798082%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  }
];

// ========== 页面渲染逻辑 ==========
let currentLang = localStorage.getItem('preferred_lang') || 'zh';

function updateStaticText() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) el.innerHTML = translations[currentLang][key];
  });
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang === 'en' ? 'en' : 'es';
}

function renderAttractions() {
  const t = translations[currentLang];
  
  // 目录
  const tocContainer = document.getElementById('tocContainer');
  tocContainer.innerHTML = '';
  attractions.forEach(attr => {
    const item = document.createElement('div');
    item.className = 'toc-item';
    item.innerHTML = `<a href="#attr-${attr.id}">${attr.id}. ${attr.name[currentLang]}</a>`;
    tocContainer.appendChild(item);
  });

  // 景点卡片（含图片）
  const container = document.getElementById('attractionsContainer');
  container.innerHTML = '';
  attractions.forEach(attr => {
    const card = document.createElement('div');
    card.className = 'attraction-card';
    card.id = `attr-${attr.id}`;
    card.innerHTML = `
      <div class="attraction-img-wrapper">
        <img src="${attr.image}" alt="${attr.name[currentLang]}" class="attraction-image" loading="lazy">
      </div>
      <h3>${attr.id}. ${attr.name[currentLang]}</h3>
      <div class="attraction-body">
        <p>${attr.desc[currentLang]}</p>
        <div class="attraction-meta">
          <span>${t.addr}${attr.address[currentLang]}</span>
          <span>${t.phone}${attr.phone}</span>
          <span>${t.hours}${attr.hours[currentLang]}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('preferred_lang', lang);
  updateStaticText();
  renderAttractions();
  updateLangButtons();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
});

// 初始化
updateStaticText();
renderAttractions();
updateLangButtons();

// FAQ 折叠
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => btn.parentElement.classList.toggle('active'));
});

// 移动端菜单
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
      navLinks.classList.remove('active');
    }
  });
});
