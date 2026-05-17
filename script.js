const siteRootUrl = new URL(".", document.currentScript?.src || window.location.href);

const copy = {
  zh: {
    status: "周二至周日开放 10:00 - 19:00",
    location: "上海",
    openingTimes: "开放时间",
    navWhatsOn: "当前展览",
    navAbout: "关于",
    navPlanVisit: "参观计划",
    navTicketInfo: "票务信息",
    navShop: "商店",
    navArtists: "商店",
    navVisit: "参观计划",
    navContact: "联系",
    heroKicker: "当前展览",
    heroPrimary: "了解更多",
    heroSecondary: "计划参观",
    aboutReadMore: "阅读更多",
    homeWhatsOnTitle: "WHAT'S ON?",
    homeAboutTitle: "关于旺无名",
    admissionLabel: "参观：",
    newsletterTitle: "订阅邮件更新",
    newsletterText: "第一时间了解旺无名画廊的最新展览、活动、作品与新闻。",
    emailPlaceholder: "邮箱",
    subscribe: "订阅",
    galleryAddress:
      "旺无名画廊地址：徐汇馆，上海市徐汇区宜山路660号12幢3楼302室；金山馆，上海市金山区亭卫公路8255号。",
    footerLine: "nobody is somebody",
  },
  en: {
    status: "Open Tuesday - Sunday, 10:00 - 19:00",
    location: "Shanghai",
    openingTimes: "Opening times",
    navWhatsOn: "What's on",
    navAbout: "About",
    navPlanVisit: "Plan your visit",
    navTicketInfo: "Ticket info",
    navShop: "Shop",
    navArtists: "Shop",
    navVisit: "Plan your visit",
    navContact: "Contact",
    heroKicker: "Current exhibition",
    heroPrimary: "More info",
    heroSecondary: "Plan your visit",
    aboutReadMore: "Read more",
    homeWhatsOnTitle: "WHAT'S ON?",
    homeAboutTitle: "About Nobody Gallery",
    admissionLabel: "Admission:",
    newsletterTitle: "Register for email updates",
    newsletterText:
      "Be the first to hear about the latest Nobody Gallery exhibitions, events, offers and news.",
    emailPlaceholder: "Email",
    subscribe: "Subscribe",
    galleryAddress:
      "Nobody Gallery addresses: Xuhui Space, Room 302, 3F, Building 12, 660 Yishan Road, Xuhui District, Shanghai; Jinshan Space, 8255 Tingwei Road, Jinshan District, Shanghai.",
    footerLine: "nobody is somebody",
  },
  de: {
    status: "Geöffnet Dienstag - Sonntag, 10:00 - 19:00",
    location: "Shanghai",
    openingTimes: "Öffnungszeiten",
    navWhatsOn: "Programm",
    navAbout: "Über uns",
    navPlanVisit: "Besuch planen",
    navTicketInfo: "Tickets",
    navShop: "Shop",
    navArtists: "Shop",
    navVisit: "Besuch planen",
    navContact: "Kontakt",
    heroKicker: "Aktuelle Ausstellung",
    heroPrimary: "Mehr erfahren",
    heroSecondary: "Besuch planen",
    aboutReadMore: "Mehr erfahren",
    homeWhatsOnTitle: "WHAT'S ON?",
    homeAboutTitle: "Über Nobody Gallery",
    admissionLabel: "Eintritt:",
    newsletterTitle: "Für E-Mail-Updates anmelden",
    newsletterText:
      "Erfahren Sie als Erste von neuen Ausstellungen, Veranstaltungen, Angeboten und Neuigkeiten der Nobody Gallery.",
    emailPlaceholder: "E-Mail",
    subscribe: "Abonnieren",
    galleryAddress:
      "Adressen der Nobody Gallery: Xuhui Space, Raum 302, 3. OG, Gebäude 12, 660 Yishan Road, Xuhui District, Shanghai; Jinshan Space, 8255 Tingwei Road, Jinshan District, Shanghai.",
    footerLine: "nobody is somebody",
  },
};

const localizedContent = {
  en: {
    home: {
      hero: {
        title: "A Game of Heart and Hand",
        dates: "23 May - 8 July 2026",
        summary:
          "A solo exhibition by Sun Guangyi, curated by Fanyi. Nobody Gallery connects artists, artworks and viewers through exhibitions, site-specific encounters and cross-cultural dialogue.",
      },
    },
    about: {
      quote:
        '"It is more arduous to honour the memory of the nameless than that of the renowned. Historical construction is devoted to the memory of the nameless."',
      homeHtml:
        "<p>In <em>Theses on the Philosophy of History</em>, Walter Benjamin reminds us that history is shaped not only by celebrated names, but also by people whose presence is less visible and no less essential.</p><p>At Nobody Gallery, we hold to the belief that nobody is somebody. Art should not be defined by fame; it should be carried by the force of the work itself. We support artists whose practices deserve to be seen and make room for a more open, generous art world.</p><p>The gallery welcomes artists on an ongoing basis. If your work can move people, we are ready to support it.</p>",
      storyHtml:
        "<p>Walter Benjamin (1892-1940), the German-born Ashkenazi Jewish philosopher, cultural critic and essayist, wrote in his final work, <em>Theses on the Philosophy of History</em>: \"It is more arduous to honour the memory of the nameless than that of the renowned. Historical construction is devoted to the memory of the nameless.\"</p><p>This sentence asks us to look at the lives and acts that rarely enter official narratives. The nameless are not absent from history; they are often the ground on which history is built.</p><p>Nobody Gallery takes that attention seriously. To remember the nameless is to resist easy labels and to recognise value before it has been validated by fame.</p>",
      missionHtml:
        "<p>At Nobody Gallery, we believe that nobody is somebody. The meaning of art should come from the work itself, not from reputation alone. We are committed to discovering and supporting artists who have not yet been widely seen.</p><p>Here, life and art are inseparable. We believe every nobody may become somebody, because art belongs to everyone.</p><p>This is also a commitment to a more diverse and inclusive ecology for art, where artists and collectors can meet through genuine attention rather than fixed hierarchies.</p>",
      artistCallHtml:
        "<p>We hope to introduce artists with uncommon potential to wider audiences and collectors through the gallery platform. This is not only about discovering the value of the nobody; it is about opening the field of art to more possibilities.</p><p>Whether you are emerging or established, the work itself is what matters here. At Nobody Gallery, art is for everyone, and we believe life is art and art is life.</p><p>The gallery welcomes artist submissions and conversations throughout the year.</p>",
    },
    programmes: {
      now: [
        {
          type: "Now",
          title: "A Game of Heart and Hand",
          meta: "23 May - 8 July 2026, Xuhui Space",
          description:
            "Sun Guangyi's solo exhibition unfolds a game of looking between body, memory and image.",
          admission: "Free admission. Group visits should be booked in advance.",
          image: "assets/exhibitions/sun-guangyi-game-poster.jpg",
          imageAlt: "Poster for A Game of Heart and Hand",
          url: "exhibitions/sun-guangyi-game.html",
          buttonLabel: "More info",
        },
        {
          type: "Project",
          title: "After the Landscape Is Processed",
          meta: "26 April - 31 May 2026, Jinshan Space",
          description:
            "The second Nobody Project residency exhibition explores landscape, processing and site experience.",
          admission: "Free admission. Please check opening hours before visiting.",
          image: "assets/exhibitions/landscape-after-processing.jpg",
          imageAlt: "Poster for After the Landscape Is Processed",
          url: "archive/landscape-after-processing.html",
          buttonLabel: "More info",
        },
      ],
      upcoming: [
        {
          type: "Upcoming",
          title: "Upcoming Exhibition",
          meta: "Dates to be announced",
          description:
            "A placeholder for future exhibitions, to be replaced with confirmed programme details.",
          admission: "Ticketing and booking information will be updated here.",
          placeholder: "Upcoming",
          url: "exhibitions/upcoming.html",
          buttonLabel: "More info",
        },
        {
          type: "Event",
          title: "Screening and Artist Talk",
          meta: "To be announced",
          description:
            "A future entry point for film screenings, public programmes, artist talks and ticketed events.",
          admission: "Ticket information will be published on the ticket info page.",
          placeholder: "Screening",
          url: "ticket-info/",
          buttonLabel: "Ticket info",
        },
      ],
      past: [
        {
          type: "Past exhibition",
          title: "The One Thousand and Second Night",
          meta: "29 March - 18 May 2026",
          description:
            "A solo exhibition by Zhou Yunyi, curated by Fanyi. Past exhibitions are kept in the Archive.",
          image: "assets/exhibitions/one-thousand-two-nights.jpg",
          imageAlt: "Poster for The One Thousand and Second Night",
          url: "archive/one-thousand-two-nights.html",
          buttonLabel: "More info",
        },
        {
          type: "Archive",
          title: "Exhibition Archive",
          meta: "Index of past exhibitions and projects",
          description:
            "Past exhibitions, residencies and cross-cultural projects are collected in the Archive.",
          image: "assets/exhibitions/sun-guangyi-game-poster.jpg",
          imageAlt: "Archive poster",
          url: "archive/",
          buttonLabel: "View archive",
        },
      ],
    },
  },
  de: {
    home: {
      hero: {
        title: "Ein Spiel von Herz und Hand",
        dates: "23. Mai - 8. Juli 2026",
        summary:
          "Eine Einzelausstellung von Sun Guangyi, kuratiert von Fanyi. Nobody Gallery verbindet Künstler, Werke und Besucher durch Ausstellungen, ortsbezogene Begegnungen und interkulturellen Dialog.",
      },
    },
    about: {
      quote:
        '"Schwerer ist es, das Gedächtnis der Namenlosen zu ehren als das der Berühmten. Die historische Konstruktion ist dem Gedächtnis der Namenlosen gewidmet."',
      homeHtml:
        "<p>In seinen <em>Thesen über den Begriff der Geschichte</em> erinnert Walter Benjamin daran, dass Geschichte nicht nur von bekannten Namen geprägt wird, sondern auch von Menschen, deren Beitrag weniger sichtbar und ebenso wesentlich ist.</p><p>Bei Nobody Gallery glauben wir: nobody is somebody. Kunst sollte nicht durch Ruhm definiert werden, sondern durch die Kraft des Werks selbst. Wir unterstützen Künstlerinnen und Künstler, deren Praxis gesehen werden sollte, und schaffen Raum für eine offenere Kunstwelt.</p><p>Die Galerie nimmt fortlaufend Kontakt zu Künstlerinnen und Künstlern auf. Wenn Ihre Arbeit Menschen berühren kann, möchten wir sie unterstützen.</p>",
      storyHtml:
        "<p>Walter Benjamin (1892-1940), der in Deutschland geborene aschkenasisch-jüdische Philosoph, Kulturkritiker und Essayist, schrieb in seinem letzten Werk, den <em>Thesen über den Begriff der Geschichte</em>: \"Schwerer ist es, das Gedächtnis der Namenlosen zu ehren als das der Berühmten. Die historische Konstruktion ist dem Gedächtnis der Namenlosen gewidmet.\"</p><p>Dieser Satz fordert uns auf, auf jene Leben und Handlungen zu achten, die selten in offizielle Erzählungen eingehen. Die Namenlosen fehlen nicht in der Geschichte; oft bilden sie ihren Grund.</p><p>Nobody Gallery nimmt diese Aufmerksamkeit ernst. Die Namenlosen zu erinnern heißt, einfache Etiketten zu überwinden und Wert zu erkennen, bevor Ruhm ihn bestätigt.</p>",
      missionHtml:
        "<p>Bei Nobody Gallery glauben wir: nobody is somebody. Die Bedeutung von Kunst sollte aus dem Werk selbst entstehen, nicht allein aus Reputation. Wir möchten Künstlerinnen und Künstler entdecken und unterstützen, die noch nicht breit sichtbar sind.</p><p>Hier sind Leben und Kunst untrennbar. Jede nobody kann somebody werden, denn Kunst gehört allen.</p><p>Diese Haltung ist auch ein Bekenntnis zu einer vielfältigeren und inklusiveren Kunstökologie, in der Künstler, Sammler und Publikum einander mit echter Aufmerksamkeit begegnen.</p>",
      artistCallHtml:
        "<p>Über die Galerie möchten wir Künstlerinnen und Künstler mit besonderem Potenzial einem größeren Publikum und Sammlerinnen und Sammlern vorstellen. Es geht darum, den Wert der nobody sichtbar zu machen und die Möglichkeiten der Kunst zu erweitern.</p><p>Ob Sie am Anfang stehen oder bereits etabliert sind: Entscheidend ist die Arbeit selbst. Bei Nobody Gallery ist Kunst für alle da; Leben ist Kunst und Kunst ist Leben.</p><p>Die Galerie freut sich das ganze Jahr über über Einsendungen und Gespräche.</p>",
    },
    programmes: {
      now: [
        {
          type: "Aktuell",
          title: "Ein Spiel von Herz und Hand",
          meta: "23. Mai - 8. Juli 2026, Xuhui Space",
          description:
            "Sun Guangyis Einzelausstellung entfaltet ein Spiel des Sehens zwischen Körper, Erinnerung und Bild.",
          admission: "Freier Eintritt. Gruppenbesuche bitte im Voraus anmelden.",
          image: "assets/exhibitions/sun-guangyi-game-poster.jpg",
          imageAlt: "Plakat zu Ein Spiel von Herz und Hand",
          url: "exhibitions/sun-guangyi-game.html",
          buttonLabel: "Mehr erfahren",
        },
        {
          type: "Projekt",
          title: "Nach der Bearbeitung der Landschaft",
          meta: "26. April - 31. Mai 2026, Jinshan Space",
          description:
            "Die zweite Residency-Ausstellung von Nobody Project untersucht Landschaft, Bearbeitung und Ortserfahrung.",
          admission: "Freier Eintritt. Bitte prüfen Sie vor dem Besuch die Öffnungszeiten.",
          image: "assets/exhibitions/landscape-after-processing.jpg",
          imageAlt: "Plakat zu Nach der Bearbeitung der Landschaft",
          url: "archive/landscape-after-processing.html",
          buttonLabel: "Mehr erfahren",
        },
      ],
      upcoming: [
        {
          type: "Demnächst",
          title: "Kommende Ausstellung",
          meta: "Termine werden bekannt gegeben",
          description:
            "Ein Platzhalter für kommende Ausstellungen, der später durch bestätigte Programmdetails ersetzt wird.",
          admission: "Ticket- und Buchungsinformationen werden hier aktualisiert.",
          placeholder: "Demnächst",
          url: "exhibitions/upcoming.html",
          buttonLabel: "Mehr erfahren",
        },
        {
          type: "Veranstaltung",
          title: "Filmvorführung und Künstlergespräch",
          meta: "Wird bekannt gegeben",
          description:
            "Ein künftiger Einstieg für Filmvorführungen, öffentliche Programme, Künstlergespräche und Veranstaltungen mit Ticket.",
          admission: "Ticketinformationen werden auf der Ticketseite veröffentlicht.",
          placeholder: "Screening",
          url: "ticket-info/",
          buttonLabel: "Tickets",
        },
      ],
      past: [
        {
          type: "Vergangene Ausstellung",
          title: "Die eintausendzweite Nacht",
          meta: "29. März - 18. Mai 2026",
          description:
            "Eine Einzelausstellung von Zhou Yunyi, kuratiert von Fanyi. Vergangene Ausstellungen bleiben im Archiv zugänglich.",
          image: "assets/exhibitions/one-thousand-two-nights.jpg",
          imageAlt: "Plakat zu Die eintausendzweite Nacht",
          url: "archive/one-thousand-two-nights.html",
          buttonLabel: "Mehr erfahren",
        },
        {
          type: "Archiv",
          title: "Ausstellungsarchiv",
          meta: "Index vergangener Ausstellungen und Projekte",
          description:
            "Vergangene Ausstellungen, Residencies und interkulturelle Projekte werden im Archiv gesammelt.",
          image: "assets/exhibitions/sun-guangyi-game-poster.jpg",
          imageAlt: "Archivplakat",
          url: "archive/",
          buttonLabel: "Archiv ansehen",
        },
      ],
    },
  },
};

const staticText = {
  en: {
    "了解更多": "More info",
    "计划参观": "Plan your visit",
    "WHAT'S ON?": "WHAT'S ON?",
    "正在展出": "Now",
    "即将呈现": "Upcoming",
    "过往展览": "Past",
    "故事": "Story",
    "理念": "Mission",
    "艺术家招募": "Artist submissions",
    "关于旺无名": "About Nobody Gallery",
    "旺无名画廊以展览、驻留、公共项目与跨文化对话连接艺术家、作品与观看者。":
      "Nobody Gallery connects artists, works and viewers through exhibitions, residencies, public programmes and cross-cultural dialogue.",
    "联系画廊": "Contact the gallery",
    "票务": "Tickets",
    "票务信息": "Ticket info",
    "这里为未来电影放映、公共活动、艺术家谈话和特别项目预留票务层级。展览免费信息也会在这里统一说明。":
      "Ticketing for future screenings, public programmes, artist talks and special projects will live here. Free exhibition access is also explained in one place.",
    "展览": "Exhibitions",
    "放映": "Screenings",
    "活动": "Events",
    "当前展览": "Current exhibition",
    "免费开放。团体参观与导览请提前预约。":
      "Free admission. Group visits and guided tours should be booked in advance.",
    "预约": "Booking",
    "团体参观、媒体访问和特别安排请发送邮件至 nobodygallery@163.com。":
      "For group visits, media visits and special arrangements, email nobodygallery@163.com.",
    "电影放映票务将在项目确认后发布。这里会预留票务链接、价格、人数限制和观众须知。":
      "Screening tickets will be published once programmes are confirmed. Links, prices, capacity and visitor notes will appear here.",
    "艺术家谈话、表演、工作坊和公共项目也会使用同一票务层级，后续内容可通过 Decap CMS 更新，并由 Cloudflare Pages 发布。":
      "Artist talks, performances, workshops and public programmes will use the same ticketing layer and can be updated through Decap CMS.",
    "商店": "Shop",
    "浏览旺无名画廊的在售作品、限量版本和艺术家页面。":
      "Browse available works, limited editions and artist pages from Nobody Gallery.",
    "查看艺术家": "View artists",
    "艺术家": "Artists",
    "合作艺术家": "Collaborating artists",
    "查看": "View",
    "待补充": "Coming soon",
    "即将加入": "Coming soon",
    "艺术家商店入口": "Artist shop entry",
    "在售作品": "Available works",
    "参观": "Visit",
    "参观计划": "Plan your visit",
    "参观信息集中在这里：开放时间、两个空间地址、预约说明和后续票务入口。":
      "Visitor information is collected here: opening hours, two gallery addresses, booking notes and future ticket links.",
    "开放时间": "Opening times",
    "空间地址": "Addresses",
    "常规开放": "Regular hours",
    "周二至周日，10:00 - 19:00": "Tuesday - Sunday, 10:00 - 19:00",
    "闭馆": "Closed",
    "周一": "Monday",
    "徐汇馆": "Xuhui Space",
    "上海市徐汇区宜山路660号12幢3楼302室":
      "Room 302, 3F, Building 12, 660 Yishan Road, Xuhui District, Shanghai",
    "金山馆": "Jinshan Space",
    "上海市金山区亭卫公路8255号": "8255 Tingwei Road, Jinshan District, Shanghai",
    "当前展览可免费参观。团体导览、媒体访问、放映活动与特别项目请提前通过邮箱联系。":
      "Current exhibitions are free to visit. Please contact us by email in advance for group tours, media visits, screenings and special projects.",
    "发送邮件": "Send email",
    "正在展出的展览与项目会集中在这里，每个条目进入独立详情页。":
      "Current exhibitions and projects are collected here, with each entry linking to its own detail page.",
    "未来展览、放映、讲座与公共项目会在这里发布。":
      "Future exhibitions, screenings, talks and public programmes will be announced here.",
    "历史展览和项目按档案方式保留，可继续进入每个展览详情。":
      "Past exhibitions and projects are preserved as an archive, with each exhibition detail page still available.",
  },
  de: {
    "了解更多": "Mehr erfahren",
    "计划参观": "Besuch planen",
    "WHAT'S ON?": "WHAT'S ON?",
    "正在展出": "Aktuell",
    "即将呈现": "Demnächst",
    "过往展览": "Vergangen",
    "故事": "Geschichte",
    "理念": "Mission",
    "艺术家招募": "Künstlerbewerbungen",
    "关于旺无名": "Über Nobody Gallery",
    "旺无名画廊以展览、驻留、公共项目与跨文化对话连接艺术家、作品与观看者。":
      "Nobody Gallery verbindet Künstler, Werke und Besucher durch Ausstellungen, Residencies, öffentliche Programme und interkulturellen Dialog.",
    "联系画廊": "Galerie kontaktieren",
    "票务": "Tickets",
    "票务信息": "Tickets",
    "这里为未来电影放映、公共活动、艺术家谈话和特别项目预留票务层级。展览免费信息也会在这里统一说明。":
      "Hier werden künftige Filmvorführungen, öffentliche Programme, Künstlergespräche und Sonderprojekte gebündelt. Informationen zum freien Ausstellungseintritt stehen ebenfalls hier.",
    "展览": "Ausstellungen",
    "放映": "Vorführungen",
    "活动": "Veranstaltungen",
    "当前展览": "Aktuelle Ausstellung",
    "免费开放。团体参观与导览请提前预约。":
      "Freier Eintritt. Gruppenbesuche und Führungen bitte im Voraus anmelden.",
    "预约": "Buchung",
    "团体参观、媒体访问和特别安排请发送邮件至 nobodygallery@163.com。":
      "Für Gruppenbesuche, Medienbesuche und besondere Arrangements schreiben Sie an nobodygallery@163.com.",
    "电影放映票务将在项目确认后发布。这里会预留票务链接、价格、人数限制和观众须知。":
      "Tickets für Filmvorführungen werden nach Programmbestätigung veröffentlicht. Links, Preise, Kapazitäten und Hinweise erscheinen hier.",
    "艺术家谈话、表演、工作坊和公共项目也会使用同一票务层级，后续内容可通过 Decap CMS 更新，并由 Cloudflare Pages 发布。":
      "Künstlergespräche, Performances, Workshops und öffentliche Programme nutzen dieselbe Ticketstruktur und können später über Decap CMS aktualisiert werden.",
    "商店": "Shop",
    "浏览旺无名画廊的在售作品、限量版本和艺术家页面。":
      "Entdecken Sie verfügbare Werke, limitierte Editionen und Künstlerseiten der Nobody Gallery.",
    "查看艺术家": "Künstler ansehen",
    "艺术家": "Künstler",
    "合作艺术家": "Kooperierende Künstler",
    "查看": "Ansehen",
    "待补充": "Demnächst",
    "即将加入": "Demnächst",
    "艺术家商店入口": "Künstler-Shop",
    "在售作品": "Verfügbare Werke",
    "参观": "Besuch",
    "参观计划": "Besuch planen",
    "参观信息集中在这里：开放时间、两个空间地址、预约说明和后续票务入口。":
      "Besuchsinformationen: Öffnungszeiten, die zwei Galeriestandorte, Buchungshinweise und künftige Ticketlinks.",
    "开放时间": "Öffnungszeiten",
    "空间地址": "Adressen",
    "常规开放": "Reguläre Zeiten",
    "周二至周日，10:00 - 19:00": "Dienstag - Sonntag, 10:00 - 19:00",
    "闭馆": "Geschlossen",
    "周一": "Montag",
    "徐汇馆": "Xuhui Space",
    "上海市徐汇区宜山路660号12幢3楼302室":
      "Raum 302, 3. OG, Gebäude 12, 660 Yishan Road, Xuhui District, Shanghai",
    "金山馆": "Jinshan Space",
    "上海市金山区亭卫公路8255号": "8255 Tingwei Road, Jinshan District, Shanghai",
    "当前展览可免费参观。团体导览、媒体访问、放映活动与特别项目请提前通过邮箱联系。":
      "Aktuelle Ausstellungen sind kostenlos zugänglich. Für Gruppenführungen, Medienbesuche, Screenings und Sonderprojekte kontaktieren Sie uns bitte vorab per E-Mail.",
    "发送邮件": "E-Mail senden",
    "正在展出的展览与项目会集中在这里，每个条目进入独立详情页。":
      "Aktuelle Ausstellungen und Projekte werden hier gesammelt; jeder Eintrag führt zu einer eigenen Detailseite.",
    "未来展览、放映、讲座与公共项目会在这里发布。":
      "Künftige Ausstellungen, Filmvorführungen, Gespräche und öffentliche Programme werden hier angekündigt.",
    "历史展览和项目按档案方式保留，可继续进入每个展览详情。":
      "Vergangene Ausstellungen und Projekte bleiben als Archiv erhalten; die Detailseiten sind weiterhin zugänglich.",
  },
};

const titleTranslations = {
  en: {
    "关于 | Nobody Gallery": "About | Nobody Gallery",
    "票务信息 | Nobody Gallery": "Ticket info | Nobody Gallery",
    "商店 | Nobody Gallery": "Shop | Nobody Gallery",
    "参观计划 | Nobody Gallery": "Plan your visit | Nobody Gallery",
    "正在展出 | Nobody Gallery": "Now | Nobody Gallery",
    "当前展览 | Nobody Gallery": "What's on | Nobody Gallery",
  },
  de: {
    "关于 | Nobody Gallery": "Über uns | Nobody Gallery",
    "票务信息 | Nobody Gallery": "Tickets | Nobody Gallery",
    "商店 | Nobody Gallery": "Shop | Nobody Gallery",
    "参观计划 | Nobody Gallery": "Besuch planen | Nobody Gallery",
    "正在展出 | Nobody Gallery": "Aktuell | Nobody Gallery",
    "当前展览 | Nobody Gallery": "Programm | Nobody Gallery",
  },
};

const html = document.documentElement;
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const langButtons = document.querySelectorAll("[data-lang]");
const originalTitle = document.title;
const originalText = new WeakMap();
let currentLang = "zh";
let siteData = null;
const localizedDataFiles = {};

function getInitialLanguage() {
  const saved = localStorage.getItem("nobody-gallery-lang");
  return copy[saved] ? saved : "zh";
}

function getDictionary(lang) {
  return copy[lang] || copy.zh;
}

function deepMerge(base, override) {
  if (Array.isArray(override)) return override;
  if (!override || typeof override !== "object") return base;

  const merged = Array.isArray(base) ? [...base] : { ...(base || {}) };
  Object.keys(override).forEach((key) => {
    const baseValue = base ? base[key] : undefined;
    const overrideValue = override[key];
    if (
      baseValue &&
      overrideValue &&
      !Array.isArray(overrideValue) &&
      typeof baseValue === "object" &&
      typeof overrideValue === "object"
    ) {
      merged[key] = deepMerge(baseValue, overrideValue);
    } else {
      merged[key] = overrideValue;
    }
  });
  return merged;
}

function getLocalizedData(data, lang) {
  if (lang === "zh") return data;
  return deepMerge(deepMerge(data, localizedContent[lang]), localizedDataFiles[lang]);
}

function getPath(source, path) {
  return path.split(".").reduce((value, key) => {
    if (value && Object.prototype.hasOwnProperty.call(value, key)) {
      return value[key];
    }
    return undefined;
  }, source);
}

function publicUrl(url) {
  if (
    !url ||
    url.startsWith("#") ||
    url.startsWith("http") ||
    url.startsWith("mailto:") ||
    url.startsWith("tel:")
  ) {
    return url;
  }
  if (url.startsWith("/")) return url;
  return new URL(url.replace(/^\.\//, ""), siteRootUrl).pathname;
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function applyContent(data) {
  document.querySelectorAll("[data-content]").forEach((node) => {
    const value = getPath(data, node.dataset.content);
    if (typeof value === "string") {
      node.textContent = value;
    }
  });

  document.querySelectorAll("[data-content-html]").forEach((node) => {
    const value = getPath(data, node.dataset.contentHtml);
    if (typeof value === "string") {
      node.innerHTML = value;
    }
  });

  document.querySelectorAll("[data-content-attr]").forEach((node) => {
    node.dataset.contentAttr.split(",").forEach((mapping) => {
      const [path, attr] = mapping.trim().split(":");
      const value = getPath(data, path);
      if (typeof value === "string" && attr) {
        node.setAttribute(attr, attr === "src" || attr === "href" ? publicUrl(value) : value);
      }
    });
  });
}

function renderProgrammeCard(item, lang) {
  const dictionary = getDictionary(lang);
  const imageMarkup = item.image
    ? `<img src="${publicUrl(item.image)}" alt="${item.imageAlt || item.title}" />`
    : `<span>${item.placeholder || "Programme"}</span>`;
  const imageClass = item.image ? "visual-card-media image-slot" : "visual-card-media";
  const admission = item.admission
    ? `<p class="admission"><strong>${dictionary.admissionLabel}</strong> ${item.admission}</p>`
    : "";

  return `
    <article class="programme-card">
      <a class="${imageClass}" href="${publicUrl(item.url)}">
        ${imageMarkup}
      </a>
      <div>
        <p class="programme-type">${item.type || ""}</p>
        <h3>${item.title || ""}</h3>
        <p>${item.meta || ""}</p>
        <p class="description">${item.description || ""}</p>
        ${admission}
        <div class="card-actions">
          <a class="button" href="${publicUrl(item.url)}">${item.buttonLabel || dictionary.heroPrimary}</a>
        </div>
      </div>
    </article>
  `;
}

function renderProgrammeLists(data, lang) {
  const programmes = data.programmes || {};
  document.querySelectorAll("[data-programme-list]").forEach((node) => {
    const listName = node.dataset.programmeList;
    const items = listName === "home-now" ? (programmes.now || []).slice(0, 2) : programmes[listName] || [];
    if (items.length) {
      node.innerHTML = items.map((item) => renderProgrammeCard(item, lang)).join("");
    }
  });
}

function renderInfoCards(items = []) {
  return items
    .map(
      (item) => `
        <div>
          <p class="label">${escapeHtml(item.label)}</p>
          <p>${escapeHtml(item.text)}</p>
        </div>
      `
    )
    .join("");
}

function renderDetailMeta(items = []) {
  return items
    .map(
      (item) => `
        <div>
          <p class="label">${escapeHtml(item.label)}</p>
          <p>${item.valueHtml || ""}</p>
        </div>
      `
    )
    .join("");
}

function renderActionLinks(items = []) {
  return items
    .filter((item) => item.label && item.url)
    .map((item) => `<a class="button" href="${publicUrl(item.url)}">${escapeHtml(item.label)}</a>`)
    .join("");
}

function renderWorkCards(items = []) {
  return items
    .map((item) => {
      const image = item.image
        ? `<div class="work-image image-slot"><img src="${publicUrl(item.image)}" alt="${escapeHtml(
            item.imageAlt || item.title
          )}" /></div>`
        : `<div class="work-image"><span>${escapeHtml(item.placeholder || "Work")}</span></div>`;
      const meta = item.meta ? `<p>${escapeHtml(item.meta)}</p>` : "";
      const price = item.price ? `<p>${escapeHtml(item.price)}</p>` : "";
      return `
        <article class="work-card">
          ${image}
          <h3>${escapeHtml(item.title || "")}</h3>
          ${meta}
          ${price}
        </article>
      `;
    })
    .join("");
}

function renderShopArtists(items = []) {
  return items
    .map((item) => {
      const tag = item.url && !item.empty ? "a" : "span";
      const href = tag === "a" ? ` href="${publicUrl(item.url)}"` : "";
      const image = item.image
        ? `<img src="${publicUrl(item.image)}" alt="${escapeHtml(item.imageAlt || item.name)}" />`
        : `<span>${escapeHtml(item.placeholder || "Artist")}</span>`;
      const avatar = item.avatar
        ? `<img src="${publicUrl(item.avatar)}" alt="${escapeHtml(item.avatarAlt || item.name)}" />`
        : "";
      return `
        <${tag} class="shop-artist-card${item.empty ? " is-empty" : ""}"${href}>
          <div class="visual-card-media image-slot">${image}</div>
          <div class="shop-artist-meta">
            <div class="shop-artist-avatar">${avatar}</div>
            <div>
              <p class="kicker">${escapeHtml(item.kicker || "")}</p>
              <h2>${escapeHtml(item.name || "")}</h2>
              <p>${escapeHtml(item.subtitle || "")}</p>
            </div>
          </div>
          <span class="button">${escapeHtml(item.buttonLabel || "")}</span>
        </${tag}>
      `;
    })
    .join("");
}

function renderArtistDirectory(items = []) {
  return items
    .map((item) => {
      const isLinked = item.url && !item.empty;
      const tag = isLinked ? "a" : "span";
      const href = isLinked ? ` href="${publicUrl(item.url)}"` : "";
      const image = item.avatar || item.image;
      const imageAlt = item.avatarAlt || item.imageAlt || item.name;
      const media = image
        ? `<img src="${publicUrl(image)}" alt="${escapeHtml(imageAlt)}" />`
        : `<span>${escapeHtml(item.placeholder || item.kicker || "Artist")}</span>`;
      return `
        <${tag} class="visual-card${item.empty ? " is-empty" : ""}"${href}>
          <div class="visual-card-media square${image ? " image-slot" : ""}">
            ${media}
          </div>
          <p class="kicker">${escapeHtml(item.kicker || "")}</p>
          <h2>${escapeHtml(item.name || "")}</h2>
          <p>${escapeHtml(item.subtitle || "")}</p>
        </${tag}>
      `;
    })
    .join("");
}

function renderArchiveItems(items = []) {
  return items
    .map(
      (item) => `
        <a class="visual-card" href="${publicUrl(item.url)}">
          <div class="visual-card-media poster image-slot">
            <img src="${publicUrl(item.image)}" alt="${escapeHtml(item.imageAlt || item.title)}" />
          </div>
          <p class="kicker">${escapeHtml(item.date || "")}</p>
          <h2>${escapeHtml(item.title || "")}</h2>
          <p>${escapeHtml(item.subtitle || "")}</p>
        </a>
      `
    )
    .join("");
}

function renderEditableSections(data) {
  document.querySelectorAll("[data-info-list]").forEach((node) => {
    const items = getPath(data, node.dataset.infoList);
    if (Array.isArray(items)) node.innerHTML = renderInfoCards(items);
  });

  document.querySelectorAll("[data-detail-meta]").forEach((node) => {
    const items = getPath(data, node.dataset.detailMeta);
    if (Array.isArray(items)) node.innerHTML = renderDetailMeta(items);
  });

  document.querySelectorAll("[data-action-list]").forEach((node) => {
    const items = getPath(data, node.dataset.actionList);
    if (Array.isArray(items)) node.innerHTML = renderActionLinks(items);
  });

  document.querySelectorAll("[data-work-list]").forEach((node) => {
    const items = getPath(data, node.dataset.workList);
    if (Array.isArray(items)) node.innerHTML = renderWorkCards(items);
  });

  document.querySelectorAll("[data-shop-artist-list]").forEach((node) => {
    const items = getPath(data, node.dataset.shopArtistList);
    if (Array.isArray(items)) node.innerHTML = renderShopArtists(items);
  });

  document.querySelectorAll("[data-artist-list]").forEach((node) => {
    const items = getPath(data, node.dataset.artistList);
    if (Array.isArray(items)) node.innerHTML = renderArtistDirectory(items);
  });

  document.querySelectorAll("[data-archive-list]").forEach((node) => {
    const items = getPath(data, node.dataset.archiveList);
    if (Array.isArray(items)) node.innerHTML = renderArchiveItems(items);
  });

  document.querySelectorAll("[data-external-link]").forEach((node) => {
    const dataPath = node.dataset.externalLink;
    const item = getPath(data, dataPath);
    if (!item) return;
    if (item.externalUrl) {
      node.hidden = false;
      node.href = publicUrl(item.externalUrl);
      node.textContent = item.externalLabel || item.externalUrl;
    } else {
      node.hidden = true;
    }
  });
}

function updateGlobalLinks(data) {
  const global = data?.global || {};
  if (global.email) {
    document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
      link.href = `mailto:${global.email}`;
    });
  }

  if (global.instagramUrl) {
    document.querySelectorAll('a[href*="instagram.com"]').forEach((link) => {
      link.href = global.instagramUrl;
    });
  }

  if (global.xiaohongshuUrl) {
    document.querySelectorAll(".xhs-link").forEach((link) => {
      link.href = global.xiaohongshuUrl;
    });
  }
}

function normalizeText(value) {
  return value.replace(/\s+/g, " ").trim();
}

function shouldSkipTextNode(node) {
  const parent = node.parentElement;
  if (!parent) return true;
  return Boolean(
    parent.closest(
      "script, style, noscript, [data-i18n], [data-content], [data-content-html], [data-programme-list], [data-info-list], [data-detail-meta], [data-action-list], [data-work-list], [data-shop-artist-list], [data-artist-list], [data-archive-list]"
    )
  );
}

function translateStaticText(lang) {
  const translations = staticText[lang] || {};
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (shouldSkipTextNode(node) || !normalizeText(node.textContent)) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    if (!originalText.has(node)) {
      originalText.set(node, node.textContent);
    }
    const source = originalText.get(node);
    const key = normalizeText(source);
    const translated = lang === "zh" ? key : translations[key];
    if (!translated) {
      node.textContent = source;
      return;
    }
    const leading = source.match(/^\s*/)?.[0] || "";
    const trailing = source.match(/\s*$/)?.[0] || "";
    node.textContent = `${leading}${translated}${trailing}`;
  });
}

function applyLanguage(lang, options = {}) {
  currentLang = copy[lang] ? lang : "zh";
  const data = siteData ? getLocalizedData(siteData, currentLang) : null;
  const dictionary = { ...getDictionary(currentLang), ...(data?.global || {}) };
  html.lang = currentLang === "zh" ? "zh-CN" : currentLang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = dictionary[key] || copy.zh[key] || "";
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    node.setAttribute("placeholder", dictionary[key] || copy.zh[key] || "");
  });

  if (siteData) {
    applyContent(data);
    renderProgrammeLists(data, currentLang);
    renderEditableSections(data);
    updateGlobalLinks(data);
  }

  translateStaticText(currentLang);

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLang);
  });

  document.title = titleTranslations[currentLang]?.[originalTitle] || originalTitle;

  if (options.persist) {
    localStorage.setItem("nobody-gallery-lang", currentLang);
  }
}

function ensureXiaohongshuLinks() {
  document.querySelectorAll(".social-links").forEach((links) => {
    if (links.querySelector(".xhs-link")) return;
    const anchor = document.createElement("a");
    anchor.className = "social-icon xhs-link";
    anchor.href = "https://xhslink.com/m/8yE2abYjyN8";
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
    anchor.setAttribute("aria-label", "Nobody Gallery Xiaohongshu");
    anchor.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4.5" y="5" width="15" height="14" rx="2.2" stroke-width="1.8" />
        <path d="M8 10h8M8 14h8M10 7.5v9M14 7.5v9" stroke-width="1.6" />
      </svg>
    `;
    links.append(anchor);
  });
}

function ensureAddressLines() {
  const homeAbout = document.querySelector(".home-about-copy");
  if (homeAbout && !homeAbout.querySelector(".address-line")) {
    const address = document.createElement("p");
    address.className = "address-line";
    address.dataset.i18n = "galleryAddress";
    const button = homeAbout.querySelector(".button");
    homeAbout.insertBefore(address, button || null);
  }

  const aboutArtistSection = document.querySelector(".about-content #artists");
  if (aboutArtistSection && !aboutArtistSection.querySelector(".address-line")) {
    const address = document.createElement("p");
    address.className = "address-line";
    address.dataset.i18n = "galleryAddress";
    const button = aboutArtistSection.querySelector(".button");
    aboutArtistSection.insertBefore(address, button || null);
  }
}

function ensureNewsletterBlock() {
  if (document.querySelector(".newsletter-signup")) return;
  const footer = document.querySelector(".site-footer");
  if (!footer) return;

  const section = document.createElement("section");
  section.className = "newsletter-signup";
  section.innerHTML = `
    <div class="newsletter-inner">
      <p class="newsletter-title" data-i18n="newsletterTitle"></p>
      <p class="newsletter-text" data-i18n="newsletterText"></p>
      <form class="mail-form">
        <div>
          <input type="email" name="email" data-i18n-placeholder="emailPlaceholder" aria-label="Email" required />
          <button type="submit" data-i18n="subscribe"></button>
        </div>
      </form>
    </div>
  `;
  footer.before(section);
}

function bindMailForms() {
  document.querySelectorAll(".mail-form").forEach((form) => {
    if (form.dataset.bound === "true") return;
    form.dataset.bound = "true";
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      event.currentTarget.reset();
    });
  });
}

async function loadEditableContent() {
  try {
    const fetchJson = async (file) => {
      const response = await fetch(new URL(file, siteRootUrl), { cache: "no-store" });
      if (!response.ok) return null;
      return response.json();
    };

    siteData = await fetchJson("content/site.json");
    if (!siteData) return;
    const [english, german] = await Promise.all([
      fetchJson("content/site.en.json"),
      fetchJson("content/site.de.json"),
    ]);
    if (english) localizedDataFiles.en = english;
    if (german) localizedDataFiles.de = german;
    applyLanguage(currentLang);
  } catch (error) {
    console.warn("Editable content could not be loaded.", error);
  }
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang, { persist: true }));
});

ensureXiaohongshuLinks();
ensureAddressLines();
ensureNewsletterBlock();
bindMailForms();

applyLanguage(getInitialLanguage());
loadEditableContent();
