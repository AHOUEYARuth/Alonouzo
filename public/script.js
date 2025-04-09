let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let slider = document.querySelector(".slider");
let sliderList = slider.querySelector(".slider .list");
let thumbnail = document.querySelector(".slider .images");
let thumbnailItems = thumbnail.querySelectorAll(".item");

// Initialise les images
thumbnail.appendChild(thumbnailItems[0]);

// Boutons manuels
nextBtn.onclick = function () {
  moveSlider("next");
};

prevBtn.onclick = function () {
  moveSlider("prev");
};

// Fonction de déplacement
function moveSlider(direction) {
  let sliderItems = sliderList.querySelectorAll(".item");
  let thumbnailItems = document.querySelectorAll(".images .item");

  if (direction === "next") {
    sliderList.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("next");
  } else {
    sliderList.prepend(sliderItems[sliderItems.length - 1]);
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
    slider.classList.add("prev");
  }

  // Retire la classe après l'animation
  slider.addEventListener(
    "animationend",
    function () {
      if (direction === "next") {
        slider.classList.remove("next");
      } else {
        slider.classList.remove("prev");
      }
    },
    { once: true }
  );
}
setInterval(() => {
  moveSlider("next");
}, 6000);
