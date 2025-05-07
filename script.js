let menu;  // Zmienna menu dostępna globalnie

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("[data-tab-target]");
  const tabContents = document.querySelectorAll("[data-tab-content]");

  // Definiowanie menu w tym samym miejscu, co reszta kodu
  menu = document.querySelector(".dropdown ul");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.tabTarget);

      // Usuwanie aktywnych klas
      tabContents.forEach(tabContent => tabContent.classList.remove("active"));
      tabs.forEach(t => t.classList.remove("active"));

      // Dodanie aktywnych klas
      tab.classList.add("active");
      target.classList.add("active");

      // Poczekaj na aktualizację DOM, a potem przewiń na górę
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const trybBtn = document.querySelector(".tryb");
  const menuItems = document.querySelectorAll(".dropdown ul li");

  // Obsługa kliknięcia w ikonę trybu (otwieranie/zamykanie menu)
  trybBtn.addEventListener("click", function (event) {
    menu.classList.toggle("active");
    trybBtn.classList.toggle("active");
    event.stopPropagation(); // Zapobiega propagacji kliknięcia do document
  });

  // Obsługa kliknięcia w elementy menu (zamykanie)
  menuItems.forEach(item => {
    item.addEventListener("click", function () {
      menu.classList.remove("active");
      trybBtn.classList.remove("active");
    });
  });

  // Kliknięcie poza menu lub w .tryb zamyka je
  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !trybBtn.contains(event.target)) {
      menu.classList.remove("active");
      trybBtn.classList.remove("active");
    }
  });
});

