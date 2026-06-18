const DICTS = {
  ru: {
    "title_main":"Главная",
    "title_works":"Мои работы",
    "title_reviews":"Отзывы",
    "title_about":"О себе",
    "title_enrol":"Записаться",
    "title_price":"Цены",
    "title_notes":"Заметки",
    "title_contacts":"Контакты",
    "about_me":"Здравствуйте! Меня зовут Жахонгир Турдиев, я практикующий стоматолог с опытом работы более 5 лет. Мои основные направления — терапия, ортопедия и хирургия.В своей работе я придерживаюсь современных протоколов, использую надёжные материалы и технологии, чтобы лечение было максимально эффективным и безопасным. Особое внимание уделяю психологическому комфорту пациентов: бережно отношусь к их страхам и всегда нахожу индивидуальный подход к каждому. Моя цель — не только сохранить здоровье зубов, но и сделать визиты к стоматологу спокойными, понятными и результативными.",
    "enrol_h":"Оставьте данные и мы с вами свяжемся",
    "enrol_h_name":"Ваше имя",
    "enrol_h_num":"Ваш номер",
    "enrol_btn":"Отправить",
    "notes_1.1":"Как понять, что у вас кариес?",
    "notes_1.2":"Кариес можно заподозрить, если на зубе появилось тёмное или белёсое пятно, чувствительность к сладкому, холодному или горячему, еда застревает в одном месте, появился неприятный запах или маленькая ''ямка'' на зубе.",
    "notes_2.1":"Когда пора ставить коронку?",
    "notes_2.2":"Если зуб сильно разрушен и пломба уже не держится — это первый сигнал. После лечения нерва зуб становится хрупким и требует защиты. Также коронка показана, если зуб изменил цвет, потерял эстетику Коронка помогает восстановить форму зуба, вернуть правильное жевание и сохранить улыбку надолго.",
    "notes_3.1":"Ежедневная забота о зубах.",
    "notes_3.2":"Хорошая гигиена — это чистка зубов дважды в день по 2 минуты, ежедневное использование нити или ёршиков и полоскание после еды. Эти простые привычки защищают от кариеса и сохраняют дёсны здоровыми.",
    "notes_4.1":"Лучшее решение для естественной улыбки",
    "notes_4.2":"Виниры подходят тем, кто хочет идеальную и естественно красивую улыбку. В отличие от пломб и коронок, они тонкие, сохраняют зубы максимально целыми и дают лучший эстетический результат. С винирами зубы выглядят белыми, ровными и гармоничными, а улыбка остаётся естественной.",
    "notes_5.1":"Современное решение при отсутствии зуба",
    "notes_5.2":"Имплантация — лучший способ заменить утраченный зуб. В отличие от моста, имплант не трогает соседние зубы и служит десятилетиями. Если не восстановить зуб вовремя — соседние начнут смещаться, нагрузка на челюсть вырастет, и можно потерять ещё больше зубов. Имплант защищает улыбку и возвращает полноценное жевание.",
    "reviews_h":"Отзывы пациентов",
    "reviews_add_h":"Добавить отзыв",
    "reviews_name":"Ваше имя",
    "reviews_p":"Ваш отзыв",
    "reviews_rate":"Рейтинг:",
    "reviews_btn":"Отправить отзыв",
    "reviews_new":"Пока нет отзывов. Будьте первым!",
    "price_1":"Терапия",
    "price_1.1":"Средний кариес",
    "price_1.2":"Глубокий кариес",
    "price_1.3":"Эндодонтия 1 канал",
    "price_1.4":"Эндодонтия 2 канала",
    "price_1.5":"Эндодонтия 3-4 канала",
    "price_1.6":"Наложение Са+ (1 канал)",
    "price_1.7":"Наложение Са+ (2 канала)",
    "price_1.8":"Наложение Са+ (3-4 канала)",
    "price_1.9":"Build Up фронтальный зуб",
    "price_1.10":"Build Up жевательный зуб",
    "price_1.11":"Наложение стекловолоконного штифта",
    "price_1.12":"Распломбирование 1 канал",
    "price_1.13":"Распломбирование 2 канала",
    "price_1.14":"Распломбирование 3-4 канала",
    "price_1.15":"Экструзия зуба",
    "price_2":"Ортопедия",
    "price_2.1":"Временная коронка (клиническая)",
    "price_2.2":"Протезирование (металлокерамика)",
    "price_2.3":"Протезирование (цирконий)",
    "price_2.4":"Протезирование (виниры)",
    "price_2.5":"Протезирование на имплантах (мк)",
    "price_2.6":"Протезирование на имплантах (цирконий)",
    "price_2.7":"Мультиюнит (при имплантанции)",
    "price_2.8":"Накладка (прессовая керамика)",
    "price_2.9":"Накладка (композитная)",
    "price_3":"Хирургия",
    "price_3.1":"Анестезия",
    "price_3.2":"Удаление простое",
    "price_3.3":"Удаление сложное",
    "price_3.4":"Удаление зуба мудрости",
    "price_3.5":"Наложение (гемостатической губки)",
    "price_3.6":"Наложение швов",
    "price_3.7":"Имплантация",
    "price_3.8":"Костное наращивание",
    "price_3.9":"Синус лифтинг",
    "price_4":"Гигиена и отбеливание",
    "price_4.1":"Профчистка",
    "price_4.2":"Профчистка с air flow",
    "price_4.3":"Отбеливание",
    "work_1":"Восстановление функции и эстетики",
    "work_1.1":"Проведена реставрация и установлена керамическая коронка , восстановлена функция и эстетика.",
    "work_2":"Реставрация фронтальных зубов",
    "work_2.1":"Выполнена эстетическая реставрация фронтальных зубов , восстановив их форму и естественный цвет.",
    "work_3":"Художественная реставрация зуба",
    "work_3.1":"Проведена художественная реставрация зуба , возвращена анатомическая форма , натуральный вид и цвет",
    "work_4":"Керамическая накладка",
    "work_4.1":"Установлена керамическая накладка на разрушенный зуб , восстановлена функция и анатомия зуба.",
    "work_5":"Спасение сильно разрушенного зуба",
    "work_5.1":"Спасение зуба. Проведена экструзия зуба и установлена коронка из диоксида циркония.",
  },
  uz: {
    "title_main":"Asosiy",
    "title_works":"Ishlarim",
    "title_reviews":"Baxolar",
    "title_about":"Men xaqimda",
    "title_enrol":"Yozilish",
    "title_price":"Narxlar",
    "title_notes":"Eslatma",
    "title_contacts":"Kontaktlar",
    "about_me":"Salom! Mening ismim Jaxongir Turdiev, men 5 yildan ortiq tajribaga ega amaliyotchi stomatologman. Mening asosiy mutaxassisligim - terapiya, ortopediya va jarrohlik. Men o'z ishimda zamonaviy protokollarga rioya qilaman, davolashning iloji boricha samarali va xavfsiz bo'lishini ta'minlash uchun ishonchli materiallar va texnologiyalardan foydalanaman. Men bemorlarning psixologik qulayligiga alohida e'tibor beraman: men ularning qo'rquviga ehtiyotkorlik bilan munosabatda bo'laman va har doim har biriga individual yondashuvni topaman. Mening maqsadim nafaqat tish sog'lig'ini saqlab qolish, balki tish shifokoriga tashrif buyurishni xotirjam, tushunarli va samarali qilishdir.",
    "enrol_h":"Ma'lumotlaringizni qoldiring va biz siz bilan bog'lanamiz",
    "enrol_h_name":"Ismingiz",
    "enrol_h_num":"Telefon raqamingiz",
    "enrol_btn":"Jonatish",
    "notes_1.1":"Tishda karies borligini qanday aniqlasa boladi?",
    "notes_1.2":"Agar tishda qorong'u yoki oq rangli nuqta paydo bo'lsa, shirin, sovuq yoki issiqqa sezgirlik, oziq-ovqat bir joyda tiqilib qolsa, tishda yoqimsiz hid yoki kichik ''chuqurcha'' paydo bo'lsa, kariesdan shubhalanish mumkin.",
    "notes_2.1":"Qoplama qo'yish vaqti qachon keladi?",
    "notes_2.2":"Agar tish juda shikastlangan bo'lsa va plomba endi ushlab turmasa, bu birinchi signaldir. Nerv davolangandan so'ng, tish mo'rt bo'lib qoladi va himoya qilishni talab qiladi. Agar tish rangi o'zgargan yoki estetikasini yo'qotgan bo'lsa, toj ham ko'rsatiladi. Toj tish shaklini tiklashga, to'g'ri chaynashni qaytarishga va uzoq vaqt davomida tabassumni saqlashga yordam beradi.",
    "notes_3.1":"Kundalik tish parvarishi.",
    "notes_3.2":"Yaxshi gigiena deganda tishlaringizni kuniga ikki marta 2 daqiqa cho‘tkalash, har kuni tish iplari yoki cho‘tkalardan foydalanish, ovqatdan so‘ng chayish tushuniladi. Ushbu oddiy odatlar bo'shliqlardan himoya qiladi va tish go'shtini sog'lom saqlaydi.",
    "notes_4.1":"Tabiiy tabassum uchun eng yaxshi yechim",
    "notes_4.2":"Vinirlar mukammal va tabiiy ravishda chiroyli tabassumni xohlaydiganlar uchun javob beradi. Plomba va tojlardan farqli o'laroq, ular ingichka bo'lib, tishlarni iloji boricha buzilmasdan saqlaydi va eng yaxshi estetik natija beradi. Shpon bilan tishlar oq, bir tekis va uyg'un ko'rinadi va tabassum tabiiy bo'lib qoladi.",
    "notes_5.1":"Yo'qotilgan tishlar uchun zamonaviy yechim",
    "notes_5.2":"Implantatsiya yo'qolgan tishni almashtirishning eng yaxshi usuli hisoblanadi. Ko'prikdan farqli o'laroq, implant qo'shni tishlarga ta'sir qilmaydi va o'nlab yillar davomida xizmat qiladi. Agar siz tishni o'z vaqtida tiklamasangiz, qo'shni tishlar siljiy boshlaydi, jag'dagi yuk kuchayadi va siz ko'proq tishlarni yo'qotishingiz mumkin. Implant tabassumingizni himoya qiladi va to'liq chaynashni qaytaradi.",
    "reviews_h":"Bemorlarning baxolari",
    "reviews_add_h":"Baxolash",
    "reviews_name":"Ismingiz",
    "reviews_p":"Sizning baxoingiz",
    "reviews_rate":"Reyting:",
    "reviews_btn":"Yuborish",
    "reviews_new":"Hozircha baxolar yo‘q. Birinchi bo'ling!",
    "price_1":"Terapiya",
    "price_1.1":"O‘rtacha kariyes",
    "price_1.2":"chuqur kariyes",
    "price_1.3":"Endodontiya 1 kanal",
    "price_1.4":"Endodontiya 2 kanal",
    "price_1.5":"Endodontiya 3-4 kanal",
    "price_1.6":"Сa+ qoplanishi (1-kanal)",
    "price_1.7":"Сa+ qoplanishi (2 kanal)",
    "price_1.8":"Сa+ qoplanishi (3-4 kanal)",
    "price_1.9":"Build Up (oldingi tish)",
    "price_1.10":"Build Up (chaynash tishi)",
    "price_1.11":"Shisha tolali shtiftni qo‘yish",
    "price_1.12":"1 kanal plombasini olib tashlash",
    "price_1.13":"2 kanal plombasini olib tashlash",
    "price_1.14":"3-4 kanal plombasini olib tashlash",
    "price_1.15":"Tishni chiqarib olish (ekstruziya)",
    "price_2":"Ortopediya",
    "price_2.1":"Klinik vaqtinchalik koronka",
    "price_2.2":"Metallokeramika protezlash",
    "price_2.3":"Tsirkoniy protezlash",
    "price_2.4":"Vinirlar bilan protezlash",
    "price_2.5":"Implantlarda protezlash (metallokeramika)",
    "price_2.6":"Implantlarda protezlash (tsirkoniy)",
    "price_2.7":"Multiunit (implantatsiya jarayonida)",
    "price_2.8":"Press keramika nakladkasi",
    "price_2.9":"Kompozit nakladka",
    "price_3":"Jarrohlik",
    "price_3.1":"Anesteziya",
    "price_3.2":"Oddiy tish olish",
    "price_3.3":"Murakkab tish olish",
    "price_3.4":"Aql tishini olish",
    "price_3.5":"Gemostatik gubkani qo‘yish",
    "price_3.6":"Tikuv qo‘yish",
    "price_3.7":"Implantatsiya",
    "price_3.8":"Suyak augmentatsiyasi",
    "price_3.9":"Sinus lifting",
    "price_4":"Gigiena va oqartirish",
    "price_4.1":"Professional tozalash",
    "price_4.2":"Air Flow bilan professional tozalash",
    "price_4.3":"Tish oqartirish",
    "work_1":"Funktsiyani va estetikani tiklash",
    "work_1.1":"Restavratsiya qilindi va keramika qoplama qo‘yildi, funktsional va estetik ko‘rinish tiklandi.",
    "work_2":"Oldi tishlar restavratsiyasi",
    "work_2.1":"Oldi tishlarning estetik restavratsiyasi bajarildi, ularning shakli va tabiiy rangi tiklandi.",
    "work_3":"Tishning badiiy restavratsiyasi",
    "work_3.1":"Tishga badiiy restavratsiya bajarildi, anatomik shakli, tabiiy ko‘rinishi va rangi tiklandi.",
    "work_4":"Keramik nakladka",
    "work_4.1":"Shikastlangan tishga keramik nakladka qo‘yildi, tishning funktsiyasi va anatomiyasi tiklandi.",
    "work_5":"Kuchli shikastlangan tish saqlab qolinishi",
    "work_5.1":"Tish saqlab qolinishi. Tishga ekstruziya bajarildi va sirkoniy dioksididan tayyorlangan koronka qo‘yildi.",
  }
};


const DEFAULT_LANG = "ru";
const getLang = () => localStorage.getItem("lang") || DEFAULT_LANG;
const setLang = (lang) => localStorage.setItem("lang", lang);

function applyI18n(lang) {
  const dict = DICTS[lang] || {};

  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    const pairs = el.getAttribute("data-i18n-attr")
      .split(",").map(s => s.trim()).filter(Boolean);
    pairs.forEach(pair => {
      const [attr, key] = pair.split("=").map(s => s.trim());
      if (attr && key && dict[key]) {
        el.setAttribute(attr, dict[key]);
        if (attr === "value" && (el.tagName === "INPUT" || el.tagName === "BUTTON")) {
          el.value = dict[key];
        }
      }
    });
  });

  const cur = document.querySelector("[data-lang-current]");
  if (cur) cur.textContent = lang.toUpperCase();
}



function setupLangDropdown() {
  const btn = document.querySelector(".lang-switcher__btn");
  const list = document.getElementById("lang-list");
  if (!btn || !list) return;

  function open() {
    list.hidden = false;
    btn.setAttribute("aria-expanded", "true");
  }
  function close() {
    list.hidden = true;
    btn.setAttribute("aria-expanded", "false");
  }
  function toggle() {
    if (list.hidden) open();
    else close();
  }

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle();
  });


  list.addEventListener("click", (e) => {
    const li = e.target.closest("[data-lang]");
    if (!li) return;
    const lang = li.getAttribute("data-lang");
    setLang(lang);
    applyI18n(lang);
    close();
  });


  list.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const li = document.activeElement;
      if (li && li.hasAttribute("data-lang")) {
        const lang = li.getAttribute("data-lang");
        setLang(lang);
        applyI18n(lang);
        close();
      }
    }
    if (e.key === "Escape") {
      close();
      btn.focus();
    }
  });


  document.addEventListener("click", (e) => {
    if (!list.hidden && !e.target.closest(".lang-switcher")) close();
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const lang = getLang();
  applyI18n(lang);
  setupLangDropdown();
});



