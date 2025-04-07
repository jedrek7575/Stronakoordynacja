document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".dropdown ul");
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


//Przewijanie do kolejnej sekcji//

document.getElementById("scrollButton").addEventListener("click", function () {
  const firstSection = document.querySelector(".sekcja1"); // Pobierz pierwszą sekcję

  if (firstSection) {
      firstSection.scrollIntoView({ behavior: "smooth" }); // Przewiń do niej
  }
});