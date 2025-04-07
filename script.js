document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("[data-tab-target]");
  const tabContents = document.querySelectorAll("[data-tab-content]");

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





// Pojawianie i znikanie tekstu dla <p> i <h1>
let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add("visible");
      } else {
          entry.target.classList.remove("visible");
      }
  });
}, { threshold: 0.3 });



// Obserwowanie wszystkich <p> i <h1>
document.querySelectorAll("p, h1").forEach(el => observer.observe(el));




//Rozwijanie kontaktu//

document.addEventListener("DOMContentLoaded", function () {
  let activeImg = null;
  let activeText = null;

  document.querySelectorAll("img").forEach(img => {
      img.addEventListener("click", function (event) {
          const textClass = img.classList[0] + "t"; // Pobranie klasy + "t"
          const textElement = document.querySelector("." + textClass);

          if (textElement) {
              // Usuwanie klasy active z poprzedniego obrazka i tekstu
              if (activeImg && activeImg !== img) {
                  activeImg.classList.remove("active");
              }
              if (activeText && activeText !== textElement) {
                  activeText.classList.remove("active");
              }

              textElement.classList.toggle("active");
              img.classList.toggle("active");
              
              // Aktualizacja aktywnych elementów
              activeImg = img.classList.contains("active") ? img : null;
              activeText = textElement.classList.contains("active") ? textElement : null;
              
              event.stopPropagation();
          }
      });
  });

  document.addEventListener("click", function (event) {
      if (activeImg && activeText && !activeImg.contains(event.target) && !activeText.contains(event.target)) {
          activeImg.classList.remove("active");
          activeText.classList.remove("active");
          activeImg = null;
          activeText = null;
      }
  });
});


const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.but-nxt',
    prevEl: '.but-prev',
  },
});