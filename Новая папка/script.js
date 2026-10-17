
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const translations = {
  ru: {
    navAbout: "О проекте",
    navProblems: "Проблемы",
    navActions: "Решения",
    navQuiz: "Викторина",
    eyebrow: "🌍 Наш дом — наша ответственность",
    heroTitle: 'Будущее планеты <span>начинается с нас</span>',
    heroText: "Экология — это наш воздух, вода, леса и жизнь будущих поколений.",
    heroButton: "Начать с малого",
    learnMore: "Узнать больше",
    aboutLabel: "О проекте",
    aboutTitle: "Почему экология важна?",
    aboutText: "Здоровая планета — основа благополучия людей и всех живых организмов.",
    forestTitle: "Леса",
    forestText: "Поддерживают биоразнообразие и поглощают углекислый газ.",
    waterTitle: "Чистая вода",
    waterText: "Необходима людям, животным и растениям.",
    energyTitle: "Чистая энергия",
    energyText: "Солнечная и ветровая энергия помогают уменьшать выбросы.",
    problemLabel: "Вызовы планеты",
    problemTitle: "Главные экологические проблемы",
    airTitle: "Загрязнение воздуха",
    airText: "Транспорт и промышленность ухудшают качество воздуха.",
    airTag: "Качество воздуха",
    plasticTitle: "Пластиковые отходы",
    plasticText: "Пластик загрязняет почву, реки и океаны.",
    plasticTag: "Отходы",
    climateTitle: "Изменение климата",
    climateText: "Парниковые газы усиливают глобальное потепление.",
    climateTag: "Климат",
    dataLabel: "Экологические данные",
    dataTitle: "Изучай изменения",
    dataText: "Демонстрационный график с условными значениями.",
    metricLabel: "Показатель:",
    metricTemp: "Условная температура",
    metricEmissions: "Индекс выбросов",
    metricRecycling: "Доля переработки",
    actionsLabel: "Действуй сегодня",
    actionsTitle: "7 способов помочь планете",
    actionsText: "Отмечай полезные привычки и следи за своим прогрессом.",
    action1: "♻️ Сортировать отходы и сдавать вторсырьё.",
    action2: "🚰 Экономить воду дома.",
    action3: "💡 Выключать ненужный свет.",
    action4: "🛍️ Использовать многоразовую сумку.",
    action5: "🚲 Чаще ходить пешком или ездить на велосипеде.",
    action6: "🌱 Беречь растения и природу.",
    action7: "📚 Делиться проверенной экологической информацией.",
    progress: "Выполнено: {done} из {total}",
    progressComplete: "Выполнено: {done} из {total} — Отличная работа! 🌍",
    quizLabel: "Проверь себя",
    quizTitle: "Экологическая викторина 🌿",
    nextQuestion: "Следующий вопрос",
    restartQuiz: "Пройти заново",
    selectAnswer: "Сначала выбери ответ.",
    correct: "Верно! ",
    incorrect: "Не совсем. ",
    score: "Правильных ответов: {score} из {total}",
    quizFinished: "Викторина завершена! Результат: {score} из {total}.",
    ctaTitle: "Маленькие действия создают большие перемены.",
    ctaText: "Начни сегодня — ради чистой и здоровой планеты.",
    ctaButton: "Мой экологический план",
    footerText: "Учебный проект об экологии и защите окружающей среды.",
    chartNote: "{label}. Единица измерения: {unit}. Все значения условные, для демонстрации.",
    chartTemp: "Условное изменение температуры",
    chartEmissions: "Условный индекс выбросов",
    chartRecycling: "Условная доля переработки",
    unitTemp: "°C",
    unitIndex: "пунктов",
    unitPercent: "%",
    questions: [
      {
        q: "Что помогает сократить одноразовый пластиковый мусор?",
        a: ["Покупать больше упаковки", "Использовать многоразовую бутылку", "Оставлять пластик на природе"],
        c: 1,
        e: "Многоразовая бутылка помогает уменьшить количество отходов."
      },
      {
        q: "Как лучше экономить электричество?",
        a: ["Оставлять свет включённым", "Включать все приборы одновременно", "Выключать ненужный свет"],
        c: 2,
        e: "Выключай свет и приборы, которыми не пользуешься."
      },
      {
        q: "Какой источник энергии является возобновляемым?",
        a: ["Солнечная энергия", "Уголь", "Бензин"],
        c: 0,
        e: "Солнечная энергия восполняется естественным образом."
      },
      {
        q: "Почему важно беречь леса?",
        a: ["Чтобы производить больше мусора", "Чтобы сохранять места обитания животных", "Чтобы загрязнять реки"],
        c: 1,
        e: "Леса поддерживают биоразнообразие и важны для экосистем."
      },
      {
        q: "Что следует делать с мусором на природе?",
        a: ["Оставить его под деревом", "Бросить в реку", "Забрать и выбросить в подходящий контейнер"],
        c: 2,
        e: "Уноси отходы с собой и сортируй их там, где это возможно."
      }
    ]
  },

  en: {
    navAbout: "About",
    navProblems: "Problems",
    navActions: "Solutions",
    navQuiz: "Quiz",
    eyebrow: "🌍 Our home, our responsibility",
    heroTitle: 'The planet’s future <span>starts with us</span>',
    heroText: "Ecology is about our air, water, forests, and the lives of future generations.",
    heroButton: "Start small",
    learnMore: "Learn more",
    aboutLabel: "About",
    aboutTitle: "Why does ecology matter?",
    aboutText: "A healthy planet is essential for people and all living things.",
    forestTitle: "Forests",
    forestText: "Forests support biodiversity and absorb carbon dioxide.",
    waterTitle: "Clean water",
    waterText: "Water is essential for people, animals, and plants.",
    energyTitle: "Clean energy",
    energyText: "Solar and wind power help reduce emissions.",
    problemLabel: "Planetary challenges",
    problemTitle: "Major environmental problems",
    airTitle: "Air pollution",
    airText: "Transport and industry can reduce air quality.",
    airTag: "Air quality",
    plasticTitle: "Plastic waste",
    plasticText: "Plastic pollutes soil, rivers, and oceans.",
    plasticTag: "Waste",
    climateTitle: "Climate change",
    climateText: "Greenhouse gases contribute to global warming.",
    climateTag: "Climate",
    dataLabel: "Environmental data",
    dataTitle: "Explore the changes",
    dataText: "A demonstration chart using illustrative values.",
    metricLabel: "Indicator:",
    metricTemp: "Illustrative temperature",
    metricEmissions: "Emissions index",
    metricRecycling: "Recycling share",
    actionsLabel: "Take action today",
    actionsTitle: "7 ways to help the planet",
    actionsText: "Check off good habits and track your progress.",
    action1: "♻️ Sort waste and recycle materials.",
    action2: "🚰 Save water at home.",
    action3: "💡 Turn off unnecessary lights.",
    action4: "🛍️ Use a reusable shopping bag.",
    action5: "🚲 Walk or cycle more often.",
    action6: "🌱 Protect plants and nature.",
    action7: "📚 Share reliable environmental information.",
    progress: "Completed: {done} of {total}",
    progressComplete: "Completed: {done} of {total} — Great job! 🌍",
    quizLabel: "Test yourself",
    quizTitle: "Environmental quiz 🌿",
    nextQuestion: "Next question",
    restartQuiz: "Try again",
    selectAnswer: "Choose an answer first.",
    correct: "Correct! ",
    incorrect: "Not quite. ",
    score: "Correct answers: {score} of {total}",
    quizFinished: "Quiz complete! Your score: {score} of {total}.",
    ctaTitle: "Small actions create big changes.",
    ctaText: "Start today for a cleaner, healthier planet.",
    ctaButton: "My eco plan",
    footerText: "An educational project about ecology and environmental protection.",
    chartNote: "{label}. Unit: {unit}. All values are illustrative.",
    chartTemp: "Illustrative temperature change",
    chartEmissions: "Illustrative emissions index",
    chartRecycling: "Illustrative recycling share",
    unitTemp: "°C",
    unitIndex: "points",
    unitPercent: "%",
    questions: [
      {
        q: "What helps reduce single-use plastic waste?",
        a: ["Buying more packaging", "Using a reusable bottle", "Leaving plastic in nature"],
        c: 1,
        e: "A reusable bottle helps reduce waste."
      },
      {
        q: "How can you save electricity?",
        a: ["Leave lights on", "Turn on every appliance", "Switch off unnecessary lights"],
        c: 2,
        e: "Turn off lights and appliances you are not using."
      },
      {
        q: "Which energy source is renewable?",
        a: ["Solar energy", "Coal", "Gasoline"],
        c: 0,
        e: "Solar energy is naturally replenished."
      },
      {
        q: "Why should we protect forests?",
        a: ["To create more waste", "To preserve animal habitats", "To pollute rivers"],
        c: 1,
        e: "Forests support biodiversity and healthy ecosystems."
      },
      {
        q: "What should you do with litter in nature?",
        a: ["Leave it under a tree", "Throw it into a river", "Take it away and dispose of it properly"],
        c: 2,
        e: "Take your litter with you and sort it when possible."
      }
    ]
  },

  uz: {
    navAbout: "Loyiha haqida",
    navProblems: "Muammolar",
    navActions: "Yechimlar",
    navQuiz: "Viktorina",
    eyebrow: "🌍 Uyimiz — bizning mas'uliyatimiz",
    heroTitle: 'Sayyoramiz kelajagi <span>bizdan boshlanadi</span>',
    heroText: "Ekologiya — bu havomiz, suvimiz, o‘rmonlarimiz va kelajak avlod hayotidir.",
    heroButton: "Kichik qadamdan boshlang",
    learnMore: "Batafsil",
    aboutLabel: "Loyiha haqida",
    aboutTitle: "Ekologiya nima uchun muhim?",
    aboutText: "Sog‘lom sayyora insonlar va barcha tirik mavjudotlar farovonligi uchun zarur.",
    forestTitle: "O‘rmonlar",
    forestText: "O‘rmonlar biologik xilma-xillikni saqlaydi va karbonat angidridni yutadi.",
    waterTitle: "Toza suv",
    waterText: "Suv insonlar, hayvonlar va o‘simliklar uchun zarur.",
    energyTitle: "Toza energiya",
    energyText: "Quyosh va shamol energiyasi zararli chiqindilarni kamaytirishga yordam beradi.",
    problemLabel: "Sayyora muammolari",
    problemTitle: "Asosiy ekologik muammolar",
    airTitle: "Havo ifloslanishi",
    airText: "Transport va sanoat havo sifatini yomonlashtirishi mumkin.",
    airTag: "Havo sifati",
    plasticTitle: "Plastik chiqindilar",
    plasticText: "Plastik tuproq, daryolar va okeanlarni ifloslantiradi.",
    plasticTag: "Chiqindilar",
    climateTitle: "Iqlim o‘zgarishi",
    climateText: "Issiqxona gazlari global isishga hissa qo‘shadi.",
    climateTag: "Iqlim",
    dataLabel: "Ekologik ma'lumotlar",
    dataTitle: "O‘zgarishlarni o‘rganing",
    dataText: "Shartli qiymatlardan foydalanilgan namoyish grafigi.",
    metricLabel: "Ko‘rsatkich:",
    metricTemp: "Shartli harorat",
    metricEmissions: "Chiqindilar indeksi",
    metricRecycling: "Qayta ishlash ulushi",
    actionsLabel: "Bugun harakat qiling",
    actionsTitle: "Sayyoraga yordam berishning 7 usuli",
    actionsText: "Foydali odatlarni belgilang va natijangizni kuzating.",
    action1: "♻️ Chiqindilarni saralash va qayta ishlashga topshirish.",
    action2: "🚰 Uyda suvni tejash.",
    action3: "💡 Keraksiz chiroqlarni o‘chirish.",
    action4: "🛍️ Qayta ishlatiladigan sumkadan foydalanish.",
    action5: "🚲 Ko‘proq piyoda yurish yoki velosiped haydash.",
    action6: "🌱 O‘simliklar va tabiatni asrash.",
    action7: "📚 Ishonchli ekologik ma'lumotlarni ulashish.",
    progress: "Bajarildi: {done} / {total}",
    progressComplete: "Bajarildi: {done} / {total} — Ajoyib! 🌍",
    quizLabel: "O‘zingizni sinang",
    quizTitle: "Ekologik viktorina 🌿",
    nextQuestion: "Keyingi savol",
    restartQuiz: "Qayta boshlash",
    selectAnswer: "Avval javobni tanlang.",
    correct: "To‘g‘ri! ",
    incorrect: "Afsus, noto‘g‘ri. ",
    score: "To‘g‘ri javoblar: {score} / {total}",
    quizFinished: "Viktorina tugadi! Natija: {score} / {total}.",
    ctaTitle: "Kichik harakatlar katta o‘zgarishlar yaratadi.",
    ctaText: "Toza va sog‘lom sayyora uchun bugundan boshlang.",
    ctaButton: "Mening ekologik rejam",
    footerText: "Ekologiya va atrof-muhitni muhofaza qilish haqidagi o‘quv loyihasi.",
    chartNote: "{label}. O‘lchov birligi: {unit}. Barcha qiymatlar shartli.",
    chartTemp: "Shartli harorat o‘zgarishi",
    chartEmissions: "Shartli chiqindilar indeksi",
    chartRecycling: "Shartli qayta ishlash ulushi",
    unitTemp: "°C",
    unitIndex: "punkt",
    unitPercent: "%",
    questions: [
      {
        q: "Bir martalik plastik chiqindilarni kamaytirishga nima yordam beradi?",
        a: ["Ko‘proq qadoq sotib olish", "Qayta ishlatiladigan idishdan foydalanish", "Plastikni tabiatda qoldirish"],
        c: 1,
        e: "Qayta ishlatiladigan idish chiqindilar miqdorini kamaytiradi."
      },
      {
        q: "Elektr energiyasini qanday tejash mumkin?",
        a: ["Chiroqlarni yoqib qo‘yish", "Barcha qurilmalarni yoqish", "Keraksiz chiroqlarni o‘chirish"],
        c: 2,
        e: "Foydalanilmayotgan chiroq va qurilmalarni o‘chiring."
      },
      {
        q: "Qaysi energiya manbai qayta tiklanadi?",
        a: ["Quyosh energiyasi", "Ko‘mir", "Benzin"],
        c: 0,
        e: "Quyosh energiyasi tabiiy ravishda yangilanadi."
      },
      {
        q: "Nima uchun o‘rmonlarni asrash kerak?",
        a: ["Ko‘proq chiqindi chiqarish uchun", "Hayvonlarning yashash joylarini saqlash uchun", "Daryolarni ifloslantirish uchun"],
        c: 1,
        e: "O‘rmonlar biologik xilma-xillik va ekotizimlarni qo‘llab-quvvatlaydi."
      },
      {
        q: "Tabiatdagi chiqindilar bilan nima qilish kerak?",
        a: ["Daraxt ostida qoldirish", "Daryoga tashlash", "Olib ketib, tegishli joyga tashlash"],
        c: 2,
        e: "Chiqindilarni o‘zingiz bilan olib keting va imkon bo‘lsa saralang."
      }
    ]
  }
};

let language = "ru";

function t(key) {
  return translations[language][key] ?? translations.ru[key] ?? key;
}

function format(template, values = {}) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

// Language switching
function setLanguage(lang) {
  if (!translations[lang]) return;

  language = lang;
  document.documentElement.lang = lang;

  $$("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      element.innerHTML = translations[lang][key];
    }
  });

  $("#languageSelect").value = lang;
  updateProgress();
  drawChart();
  renderQuestion();
}

$("#languageSelect").addEventListener("change", event => {
  setLanguage(event.target.value);
  try {
    localStorage.setItem("ecoLanguage", language);
  } catch {}
});

// Dark mode
const themeToggle = $("#themeToggle");

function updateTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Light theme" : "Dark theme"
  );
}

try {
  updateTheme(localStorage.getItem("ecoTheme") === "dark");
} catch {
  updateTheme(false);
}

themeToggle.addEventListener("click", () => {
  const dark = !document.body.classList.contains("dark");
  updateTheme(dark);
  try {
    localStorage.setItem("ecoTheme", dark ? "dark" : "light");
  } catch {}
  drawChart();
});

// Animated page progress and back-to-top button
const pageProgress = $("#pageProgress");
const backToTop = $("#backToTop");

function updateScrollUI() {
  const maxScroll =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = maxScroll > 0
    ? (window.scrollY / maxScroll) * 100
    : 0;

  pageProgress.style.width = `${progress}%`;
  backToTop.classList.toggle("visible", window.scrollY > 450);
}

window.addEventListener("scroll", updateScrollUI, { passive: true });

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Reveal sections on scroll
const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

$$(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${(index % 3) * 100}ms`;

  if (revealObserver) {
    revealObserver.observe(element);
  } else {
    element.classList.add("visible");
  }
});

// Demo chart data: illustrative, not live measurements
const chartData = {
  temperature: {
    values: [0.2, 0.35, 0.3, 0.5, 0.62, 0.58, 0.8],
    unitKey: "unitTemp",
    labelKey: "chartTemp"
  },
  emissions: {
    values: [85, 82, 79, 81, 73, 69, 65],
    unitKey: "unitIndex",
    labelKey: "chartEmissions"
  },
  recycling: {
    values: [12, 15, 19, 23, 28, 34, 40],
    unitKey: "unitPercent",
    labelKey: "chartRecycling"
  }
};

const canvas = $("#ecoChart");
const chartMetric = $("#chartMetric");
const chartNote = $("#chartNote");

function drawChart() {
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  if (!ctx || rect.width === 0) return;

  const ratio = window.devicePixelRatio || 1;
  const width = rect.width;
  const height = 300;

  canvas.width = Math.round(width * ratio);
  canvas.height = Math.round(height * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, width, height);

  const data = chartData[chartMetric.value];
  const values = data.values;
  const css = getComputedStyle(document.body);
  const textColor = css.getPropertyValue("--muted").trim();
  const lineColor = css.getPropertyValue("--green").trim();
  const gridColor = css.getPropertyValue("--border").trim();

  const padding = { top: 25, right: 15, bottom: 38, left: 42 };
  const graphWidth = width - padding.left - padding.right;
  const graphHeight = height - padding.top - padding.bottom;
  const minValue = Math.min(0, ...values);
  const maxValue = Math.max(...values) * 1.15 || 1;
  const range = maxValue - minValue || 1;

  ctx.font = "12px Arial";
  ctx.lineWidth = 1;
  ctx.strokeStyle = gridColor;
  ctx.fillStyle = textColor;

  for (let i = 0; i <= 4; i++) {
    const y = padding.top + graphHeight * i / 4;

    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.stroke();

    const value = maxValue - range * i / 4;
    ctx.fillText(value.toFixed(0), 4, y + 4);
  }

  const points = values.map((value, index) => ({
    x: padding.left + graphWidth * index / (values.length - 1),
    y: padding.top + graphHeight -
      ((value - minValue) / range) * graphHeight
  }));

  const gradient = ctx.createLinearGradient(0, padding.top, 0, height);
  gradient.addColorStop(0, "rgba(55, 160, 85, .28)");
  gradient.addColorStop(1, "rgba(55, 160, 85, .01)");

  ctx.beginPath();
  ctx.moveTo(points[0].x, padding.top + graphHeight);
  points.forEach(point => ctx.lineTo(point.x, point.y));
  ctx.lineTo(points[points.length - 1].x, padding.top + graphHeight);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  points.slice(1).forEach(point => ctx.lineTo(point.x, point.y));
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.stroke();

  points.forEach((point, index) => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = lineColor;
    ctx.fill();

    ctx.fillStyle = textColor;
    ctx.textAlign = "center";
    ctx.fillText(String(2020 + index), point.x, height - 12);
  });

  ctx.textAlign = "start";

  chartNote.textContent = format(t("chartNote"), {
    label: t(data.labelKey),
    unit: t(data.unitKey)
  });
}

chartMetric.addEventListener("change", drawChart);
window.addEventListener("resize", drawChart);

// Eco checklist
const checkboxes = $$('.action-item input[type="checkbox"]');

function updateProgress() {
  const done = checkboxes.filter(box => box.checked).length;
  const total = checkboxes.length;
  const key = done === total ? "progressComplete" : "progress";

  $("#progressText").textContent = format(t(key), { done, total });
}

checkboxes.forEach(box => box.addEventListener("change", updateProgress));

// Quiz
let questionIndex = 0;
let score = 0;
let answered = false;
let finished = false;

function renderQuestion() {
  const questions = t("questions");
  const question = questions[questionIndex];

  $("#question").textContent = question.q;
  $("#answers").replaceChildren();
  $("#quizResult").textContent = "";
  $("#quizScore").textContent = format(t("score"), {
    score,
    total: questionIndex + (answered ? 1 : 0)
  });

  answered = false;
  finished = false;
  $("#nextQuestion").textContent = t("nextQuestion");

  question.a.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.textContent = answer;

    button.addEventListener("click", () => {
      if (answered) return;
      answered = true;

      const buttons = $$("#answers .answer");

      buttons.forEach((item, itemIndex) => {
        item.disabled = true;
        if (itemIndex === question.c) {
          item.classList.add("correct");
        }
      });

      if (index === question.c) {
        score++;
        $("#quizResult").textContent = t("correct") + question.e;
      } else {
        button.classList.add("incorrect");
        $("#quizResult").textContent = t("incorrect") + question.e;
      }

      $("#quizScore").textContent = format(t("score"), {
        score,
        total: questionIndex + 1
      });

      $("#nextQuestion").textContent =
        questionIndex === questions.length - 1
          ? t("restartQuiz")
          : t("nextQuestion");
    });

    $("#answers").appendChild(button);
  });
}

$("#nextQuestion").addEventListener("click", () => {
  if (!answered) {
    $("#quizResult").textContent = t("selectAnswer");
    return;
  }

  const questions = t("questions");

  if (questionIndex < questions.length - 1) {
    questionIndex++;
    renderQuestion();
  } else {
    const finalScore = score;
    finished = true;
    questionIndex = 0;
    score = 0;
    renderQuestion();

    $("#quizResult").textContent = format(t("quizFinished"), {
      score: finalScore,
      total: questions.length
    });
  }
});

// Initial setup
document.querySelector("#year").textContent = new Date().getFullYear();

try {
  const savedLanguage = localStorage.getItem("ecoLanguage");
  setLanguage(translations[savedLanguage] ? savedLanguage : "ru");
} catch {
  setLanguage("ru");
}

updateProgress();
updateScrollUI();
renderQuestion();
drawChart();
