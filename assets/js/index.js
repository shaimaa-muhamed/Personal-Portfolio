// ^ =================<Html Element >>==============
var themeToggleBtn = document.querySelector("#theme-toggle-button");
var html = document.querySelector("html");
var settingsToggle = document.querySelector("#settings-toggle");
var asideCancelBtn = document.querySelector("#asideCancelBtn");
var sideBar = document.querySelector("aside");
var alexFont = document.querySelector("#alexFont");
var defaultFont = document.querySelector("#defaultFont");
var cairoFont = document.querySelector("#cairoFont");
var themeBtns = Array.from(document.querySelectorAll(".theme-btns button"));
var resetBtn = document.querySelector("#resetBtn");
var webBtn = document.querySelector("#webBtn");
var portfolioGrid = document.querySelector("#portfolio-grid");
var portfolioFilterBtns = document.querySelectorAll(".portfolio-filter");
var testimonialCards = Array.from(
  document.querySelectorAll(".testimonial-card"),
);

var homeSection = document.querySelector("#hero-section");
var aboutSection = document.querySelector("#about");
var portfolioSection = document.querySelector("#portfolio");
var experienceSection = document.querySelector("#experience");
var testimonialSection = document.querySelector("#testimonials");
var contactSection = document.querySelector("#contact");
var homeLink = document.querySelector("#heroLink");
var aboutLink = document.querySelector("#aboutLink");
var portfolioLink = document.querySelector("#portfolioLink");
var experienceLink = document.querySelector("#experienceLink");
var testimonialsLink = document.querySelector("#testimonialsLink");
var contactLink = document.querySelector("#contactLink");

var carousel = document.getElementById("testimonials-carousel");
var nextBtn = document.getElementById("next-testimonial");
var prevBtn = document.getElementById("prev-testimonial");

var indicators = document.querySelectorAll(".carousel-indicator");
var cards = document.querySelectorAll(".testimonial-card");

var scrollTopBtn = document.getElementById("scroll-to-top");

console.log(scrollTopBtn);
// ! =================<Vraiables >>==============
themeList = [
  {
    primaryColor: "#6366f1",
    secondaryColor: "#8b5cf6",
    accentColor: "#a855f7",
  },
  {
    primaryColor: "#ec4899",
    secondaryColor: "#f97316",
    accentColor: "#fb923c",
  },
  {
    primaryColor: "#10b981",
    secondaryColor: "#059669",
    accentColor: "#34d399",
  },
  {
    primaryColor: "#3b82f6",
    secondaryColor: "#06b6d4",
    accentColor: "#22d3ee",
  },
  {
    primaryColor: "##ef4444",
    secondaryColor: "#f43f5e",
    accentColor: "#fb7185",
  },
  {
    primaryColor: "#f59e0b",
    secondaryColor: "#ea580c",
    accentColor: "#fbbf24",
  },
];
var index = 0;
var total = indicators.length;

// ? =================<Functions >>==============
function hideSideBar() {
  sideBar.classList.add("hidden");
}
function showSideBar() {
  sideBar.classList.remove("hidden");
}
function changeTheme(index) {
  html.style.setProperty("--color-primary", themeList[index].primaryColor);
  html.style.setProperty("--color-secondary", themeList[index].secondaryColor);
  html.style.setProperty("--color-accent", themeList[index].accentColor);
}

function updateCarousel() {
  var cardWidth = cards[0].offsetWidth;
  var translateValue = index * cardWidth;

  carousel.style.transform = "translateX(" + translateValue + "px)";
  for (var i = 0; i < indicators.length; i++) {
    indicators[i].classList.add("dark:bg-slate-600", "active", "bg-accent");
  }

  console.log(cards);
  indicators[index].classList.remove(
    "dark:bg-slate-600",
    "active",
    "bg-accent",
  );
}

// * =================<Events >>==============

// Scroll Spy

window.addEventListener("scroll", function () {
  homeLink.classList.remove("active");
  aboutLink.classList.remove("active");
  portfolioLink.classList.remove("active");
  experienceLink.classList.remove("active");
  testimonialsLink.classList.remove("active");
  contactLink.classList.remove("active");

  if (scrollY >= contactSection.offsetTop - 88) {
    contactLink.classList.add("active");
  } else if (scrollY >= testimonialSection.offsetTop - 88) {
    testimonialsLink.classList.add("active");
  } else if (scrollY >= experienceSection.offsetTop - 88) {
    experienceLink.classList.add("active");
  } else if (scrollY >= portfolioSection.offsetTop - 88) {
    portfolioLink.classList.add("active");
  } else if (scrollY >= aboutSection.offsetTop - 88) {
    aboutLink.classList.add("active");
  } else {
    homeLink.classList.add("active");
  }
});

// //////////
themeToggleBtn.addEventListener("click", function () {
  html.classList.toggle("dark");
});
settingsToggle.addEventListener("click", showSideBar);
asideCancelBtn.addEventListener("click", hideSideBar);
// change theme color
for (let i = 0; i < themeBtns.length; i++) {
  themeBtns[i].addEventListener("click", function () {
    changeTheme(i);
  });
}
//reset button(them color, lang ,hide siebar)
resetBtn.addEventListener("click", function () {
  changeTheme(0);

  hideSideBar();
});
alexFont.addEventListener("click", function () {
  html.style.setProperty("--default-font-family", "Alexandria");
});
// Nav &Tabs
for (let i = 0; i < portfolioFilterBtns.length; i++) {
  portfolioFilterBtns[i].addEventListener("click", function () {
    switch (i) {
      case 0: {
        for (var j = 0; j < portfolioFilterBtns.length; j++) {
          portfolioFilterBtns[j].classList.remove(
            "active",
            "hover:shadow-lg",
            "hover:shadow-primary/50",
            "bg-linear-to-r",
            "from-primary",
            "to-secondary",
            "text-white",
            "shadow-lg",
            "shadow-primary/50",
          );
        }
        portfolioFilterBtns[i].classList.add(
          "active",
          "hover:shadow-lg",
          "hover:shadow-primary/50",
          "bg-linear-to-r",
          "from-primary",
          "to-secondary",
          "text-white",
          "shadow-lg",
          "shadow-primary/50",
        );
        portfolioGrid.innerHTML = `  <div
              class="portfolio-item group relative bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-primary transition-all duration-300"
              data-category="web"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="/assets/imgs/portfolio-1-BqicZ04C.webp"
                  alt="modern e-commerce website design with purple gradient, shopping cart interface, product showcase"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >موقع ويب</span
                  >
                  <div class="flex gap-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">متجر إلكتروني متكامل</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  منصة تجارة إلكترونية حديثة مع نظام دفع آمن وإدارة المنتجات
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >React</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Node.js</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >MongoDB</span
                  >
                </div>
              </div>
            </div>

            <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-secondary transition-all duration-300"
              data-category="app"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="/assets/imgs/portfolio-2-D0_acfF_.webp"
                  alt="mobile task management app interface with colorful cards, todo list, modern UI design"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium"
                    >تطبيق</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">تطبيق إدارة المهام</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  تطبيق ويب تفاعلي لإدارة المهام مع ميزات التعاون الجماعي
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Vue.js</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Firebase</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Tailwind</span
                  >
                </div>
              </div>
            </div>

            <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-accent transition-all duration-300"
              data-category="design"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="/assets/imgs/portfolio-3-uJsBXCgl.webp"
                  alt="modern portfolio website design with minimalist layout, creative typography, pink and purple accents"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium"
                    >تصميم</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="تصميم المشروع على Figma"
                    >
                      <i
                        class="fa-brands fa-figma text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">موقع شخصي إبداعي</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  تصميم موقع شخصي بأسلوب عصري وألوان جريئة
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Figma</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >UI/UX</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Prototype</span
                  >
                </div>
              </div>
            </div>

            <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-primary transition-all duration-300"
              data-category="web"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="/assets/imgs/portfolio-4-Czusdp5K.webp"
                  alt="corporate business website with professional layout, blue and white color scheme, modern design"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >موقع ويب</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">موقع شركة استشارية</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  موقع احترافي لشركة استشارات مع نظام حجز المواعيد
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Next.js</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >TypeScript</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Prisma</span
                  >
                </div>
              </div>
            </div>

            <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-secondary transition-all duration-300"
              data-category="app"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="/assets/imgs/portfolio-5-ChqqtI-W.webp"
                  alt="social media dashboard with analytics charts, user engagement metrics, modern interface design"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium"
                    >تطبيق</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">لوحة تحليلات اجتماعية</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  منصة تحليل وإدارة حسابات التواصل الاجتماعي
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >React</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Chart.js</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >API</span
                  >
                </div>
              </div>
            </div>

            <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-accent transition-all duration-300"
              data-category="ecommerce"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="/assets/imgs/portfolio-6-C9bxzsei.webp"
                  alt="fashion e-commerce website with luxury product display, elegant design, shopping experience"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium"
                    >تجارة</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">متجر أزياء فاخر</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  منصة تسوق راقية للأزياء مع تجربة مستخدم استثنائية
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Next.js</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Stripe</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Sanity</span
                  >
                </div>
              </div>
            </div>

            <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-primary transition-all duration-300"
              data-category="web"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="/assets/imgs/portfolio-7-BXDNVwGk.webp"
                  alt="restaurant website with food menu, online ordering system, appetizing food photography"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >موقع ويب</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">موقع مطعم وتوصيل</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  منصة طلب طعام مع نظام توصيل وتتبع الطلبات
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >React</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Express</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >PostgreSQL</span
                  >
                </div>
              </div>
            </div>

            <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-secondary transition-all duration-300"
              data-category="app"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="/assets/imgs/portfolio-8-BnHB_F_a.webp"
                  alt="fitness tracking app interface with workout plans, progress charts, health metrics dashboard"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium"
                    >تطبيق</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">تطبيق لياقة بدنية</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  تطبيق متكامل لتتبع التمارين والتغذية والتقدم
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >React Native</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Redux</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Firebase</span
                  >
                </div>
              </div>
            </div>

            <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-accent transition-all duration-300"
              data-category="design"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="/assets/imgs/portfolio-9-Q6q-wpwU.webp"
                  alt="mobile app ui design mockup with colorful screens, modern interface, user experience showcase"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium"
                    >تصميم</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="تصميم المشروع على Figma"
                    >
                      <i
                        class="fa-brands fa-figma text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">تصميم تطبيق جوال</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  تصميم UI/UX كامل لتطبيق جوال متعدد الوظائف
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Figma</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Adobe XD</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Sketch</span
                  >
                </div>
              </div>
            </div>`;
        break;
      }
      case 1: {
        for (var j = 0; j < portfolioFilterBtns.length; j++) {
          portfolioFilterBtns[j].classList.remove(
            "active",
            "hover:shadow-lg",
            "hover:shadow-primary/50",
            "bg-linear-to-r",
            "from-primary",
            "to-secondary",
            "text-white",
            "shadow-lg",
            "shadow-primary/50",
          );
        }
        portfolioFilterBtns[i].classList.add(
          "active",
          "hover:shadow-lg",
          "hover:shadow-primary/50",
          "bg-linear-to-r",
          "from-primary",
          "to-secondary",
          "text-white",
          "shadow-lg",
          "shadow-primary/50",
        );
        portfolioGrid.innerHTML = `
     <div
              class="portfolio-item group relative bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-primary transition-all duration-300"
              data-category="web"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="/assets/imgs/portfolio-1-BqicZ04C.webp"
                  alt="modern e-commerce website design with purple gradient, shopping cart interface, product showcase"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >موقع ويب</span
                  >
                  <div class="flex gap-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">متجر إلكتروني متكامل</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  منصة تجارة إلكترونية حديثة مع نظام دفع آمن وإدارة المنتجات
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >React</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Node.js</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >MongoDB</span
                  >
                </div>
              </div>
            </div>
 <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-primary transition-all duration-300"
              data-category="web"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="/assets/imgs/portfolio-4-Czusdp5K.webp"
                  alt="corporate business website with professional layout, blue and white color scheme, modern design"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >موقع ويب</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">موقع شركة استشارية</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  موقع احترافي لشركة استشارات مع نظام حجز المواعيد
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Next.js</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >TypeScript</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Prisma</span
                  >
                </div>
              </div>
            </div>

              <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-primary transition-all duration-300"
              data-category="web"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="/assets/imgs/portfolio-7-BXDNVwGk.webp"
                  alt="restaurant website with food menu, online ordering system, appetizing food photography"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >موقع ويب</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">موقع مطعم وتوصيل</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  منصة طلب طعام مع نظام توصيل وتتبع الطلبات
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >React</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Express</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >PostgreSQL</span
                  >
                </div>
              </div>
            </div>

    `;
        break;
      }
      case 2: {
        for (var j = 0; j < portfolioFilterBtns.length; j++) {
          portfolioFilterBtns[j].classList.remove(
            "active",
            "hover:shadow-lg",
            "hover:shadow-primary/50",
            "bg-linear-to-r",
            "from-primary",
            "to-secondary",
            "text-white",
            "shadow-lg",
            "shadow-primary/50",
          );
        }
        portfolioFilterBtns[i].classList.add(
          "active",
          "hover:shadow-lg",
          "hover:shadow-primary/50",
          "bg-linear-to-r",
          "from-primary",
          "to-secondary",
          "text-white",
          "shadow-lg",
          "shadow-primary/50",
        );
        portfolioGrid.innerHTML = `
          <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-secondary transition-all duration-300"
              data-category="app"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="/assets/imgs/portfolio-2-D0_acfF_.webp"
                  alt="mobile task management app interface with colorful cards, todo list, modern UI design"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium"
                    >تطبيق</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">تطبيق إدارة المهام</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  تطبيق ويب تفاعلي لإدارة المهام مع ميزات التعاون الجماعي
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Vue.js</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Firebase</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Tailwind</span
                  >
                </div>
              </div>
            </div>
 <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-secondary transition-all duration-300"
              data-category="app"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="/assets/imgs/portfolio-5-ChqqtI-W.webp"
                  alt="social media dashboard with analytics charts, user engagement metrics, modern interface design"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium"
                    >تطبيق</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">لوحة تحليلات اجتماعية</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  منصة تحليل وإدارة حسابات التواصل الاجتماعي
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >React</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Chart.js</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >API</span
                  >
                </div>
              </div>
            </div>
              <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-secondary transition-all duration-300"
              data-category="app"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="/assets/imgs/portfolio-8-BnHB_F_a.webp"
                  alt="fitness tracking app interface with workout plans, progress charts, health metrics dashboard"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium"
                    >تطبيق</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">تطبيق لياقة بدنية</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  تطبيق متكامل لتتبع التمارين والتغذية والتقدم
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >React Native</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Redux</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Firebase</span
                  >
                </div>
              </div>
            </div>
        `;
        break;
      }
      case 3: {
        for (var j = 0; j < portfolioFilterBtns.length; j++) {
          portfolioFilterBtns[j].classList.remove(
            "active",
            "hover:shadow-lg",
            "hover:shadow-primary/50",
            "bg-linear-to-r",
            "from-primary",
            "to-secondary",
            "text-white",
            "shadow-lg",
            "shadow-primary/50",
          );
        }
        portfolioFilterBtns[i].classList.add(
          "active",
          "hover:shadow-lg",
          "hover:shadow-primary/50",
          "bg-linear-to-r",
          "from-primary",
          "to-secondary",
          "text-white",
          "shadow-lg",
          "shadow-primary/50",
        );
        portfolioGrid.innerHTML = `
          <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-accent transition-all duration-300"
              data-category="design"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="/assets/imgs/portfolio-3-uJsBXCgl.webp"
                  alt="modern portfolio website design with minimalist layout, creative typography, pink and purple accents"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium"
                    >تصميم</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="تصميم المشروع على Figma"
                    >
                      <i
                        class="fa-brands fa-figma text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">موقع شخصي إبداعي</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  تصميم موقع شخصي بأسلوب عصري وألوان جريئة
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Figma</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >UI/UX</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Prototype</span
                  >
                </div>
              </div>
            </div>
              <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-accent transition-all duration-300"
              data-category="design"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="/assets/imgs/portfolio-9-Q6q-wpwU.webp"
                  alt="mobile app ui design mockup with colorful screens, modern interface, user experience showcase"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium"
                    >تصميم</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="تصميم المشروع على Figma"
                    >
                      <i
                        class="fa-brands fa-figma text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">تصميم تطبيق جوال</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  تصميم UI/UX كامل لتطبيق جوال متعدد الوظائف
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Figma</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Adobe XD</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Sketch</span
                  >
                </div>
              </div>
            </div>

        `;
        break;
      }
      case 4: {
        for (var j = 0; j < portfolioFilterBtns.length; j++) {
          portfolioFilterBtns[j].classList.remove(
            "active",
            "hover:shadow-lg",
            "hover:shadow-primary/50",
            "bg-linear-to-r",
            "from-primary",
            "to-secondary",
            "text-white",
            "shadow-lg",
            "shadow-primary/50",
          );
        }
        portfolioFilterBtns[i].classList.add(
          "active",
          "hover:shadow-lg",
          "hover:shadow-primary/50",
          "bg-linear-to-r",
          "from-primary",
          "to-secondary",
          "text-white",
          "shadow-lg",
          "shadow-primary/50",
        );
        portfolioGrid.innerHTML = ` <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-accent transition-all duration-300"
              data-category="ecommerce"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="/assets/imgs/portfolio-6-C9bxzsei.webp"
                  alt="fashion e-commerce website with luxury product display, elegant design, shopping experience"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium"
                    >تجارة</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">متجر أزياء فاخر</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  منصة تسوق راقية للأزياء مع تجربة مستخدم استثنائية
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Next.js</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Stripe</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Sanity</span
                  >
                </div>
              </div>
            </div>`;
        break;
      }
    }
  });
}
// Carosul
for (let i = 0; i < testimonialCards.length; i++) {
  testimonialCards[i].addEventListener("click", function (e) {
    console.log(i);
  });
}
nextBtn.addEventListener("click", function () {
  index++;

  if (index >= total) {
    index = 0;
  }

  updateCarousel();
});

prevBtn.addEventListener("click", function () {
  index--;

  if (index < 0) {
    index = total - 1;
  }

  updateCarousel();
});
for (var i = 0; i < indicators.length; i++) {
  indicators[i].addEventListener("click", function () {
    index = Number(this.getAttribute("data-index"));

    updateCarousel();
  });
}
window.addEventListener("scroll", function () {
  if (scrollY >= aboutSection.offsetTop) {
    scrollTopBtn.classList.remove("opacity-0", "invisible");
  } else {
    scrollTopBtn.classList.add("opacity-0", "invisible");
  }
});
