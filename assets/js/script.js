'use strict';



/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * add event on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * Mobile navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

addEventOnElements(navTogglers, "click", function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
});

addEventOnElements(navLinks, "click", function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("nav-active");
});



/**
 * Header active
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  header.classList[window.scrollY > 100 ? "add" : "remove"]("active");
});



/**
 * Element tilt effect
 */

const tiltElements = document.querySelectorAll("[data-tilt]");

const initTilt = function (event) {

  /** get tilt element center position */
  const centerX = this.offsetWidth / 2;
  const centerY = this.offsetHeight / 2;

  const tiltPosY = ((event.offsetX - centerX) / centerX) * 10;
  const tiltPosX = ((event.offsetY - centerY) / centerY) * 10;

  this.style.transform = `perspective(1000px) rotateX(${tiltPosX}deg) rotateY(${tiltPosY - (tiltPosY * 2)}deg)`;

}

addEventOnElements(tiltElements, "mousemove", initTilt);

addEventOnElements(tiltElements, "mouseout", function () {
  this.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
});



/**
 * Tab content
 */

const tabBtns = document.querySelectorAll("[data-tab-btn]");
const tabContents = document.querySelectorAll("[data-tab-content]");

let lastActiveTabBtn = tabBtns[0];
let lastActiveTabContent = tabContents[0];

const filterContent = function () {

  if (!(lastActiveTabBtn === this)) {

    lastActiveTabBtn.classList.remove("active");
    lastActiveTabContent.classList.remove("active");

    this.classList.add("active");
    lastActiveTabBtn = this;

    const currentTabContent = document.querySelector(`[data-tab-content="${this.dataset.tabBtn}"]`);

    currentTabContent.classList.add("active");
    lastActiveTabContent = currentTabContent;

  }

}

addEventOnElements(tabBtns, "click", filterContent);



/**
 * Custom cursor
 */

const cursors = document.querySelectorAll("[data-cursor]");
const hoveredElements = [...document.querySelectorAll("button"), ...document.querySelectorAll("a")];

window.addEventListener("mousemove", function (event) {

  const posX = event.clientX;
  const posY = event.clientY;

  /** cursor dot position */
  cursors[0].style.left = `${posX}px`;
  cursors[0].style.top = `${posY}px`;

  /** cursor outline position */
  setTimeout(function () {
    cursors[1].style.left = `${posX}px`;
    cursors[1].style.top = `${posY}px`;
  }, 80);

});

/** add hovered class when mouseover on hoverElements */
addEventOnElements(hoveredElements, "mouseover", function () {
  for (let i = 0, len = cursors.length; i < len; i++) {
    cursors[i].classList.add("hovered");
  }
});

/** remove hovered class when mouseout on hoverElements */
addEventOnElements(hoveredElements, "mouseout", function () {
  for (let i = 0, len = cursors.length; i < len; i++) {
    cursors[i].classList.remove("hovered");
  }
});






// 'use strict';





/**
 * SLIDER
 */

// const sliders2 = document.querySelectorAll("[data-slider2]");

// const initSlider = function (currentSlider2) {

//   const slider2Container2 = currentSlider2.querySelector("[data-slider2-container2]");
//   const sliderPrevBtn = currentSlider2.querySelector("[data-slider2-prev]");
//   const sliderNextBtn = currentSlider2.querySelector("[data-slider2-next]");

//   let totalSliderVisibleItems = Number(getComputedStyle(currentSlider2).getPropertyValue("--slider2-items"));
//   let totalSlidableItems = slider2Container2.childElementCount - totalSliderVisibleItems;

//   let currentSlidePos = 0;

//   const moveSliderItem = function () {
//     slider2Container2.style.transform = `translateX(-${slider2Container2.children[currentSlidePos].offsetLeft}px)`;
  // }

/**
 * NEXT SLIDE
 */
  // const slideNext = function () {
  //   const slideEnd = currentSlidePos >= totalSlidableItems;

  //   if (slideEnd) {
  //     currentSlidePos = 0;
  //   } else {
  //     currentSlidePos++;
  //   }

  //   moveSliderItem();
  // }

  // sliderNextBtn.addEventListener("click", slideNext);

/**
 * PREVIOUS SLIDE
 */
  // const slidePrev = function () {
  //   if (currentSlidePos <= 0) {
  //     currentSlidePos = totalSlidableItems;
  //   } else {
  //     currentSlidePos--;
  //   }

  //   moveSliderItem();
  // }

  // sliderPrevBtn.addEventListener("click", slidePrev);

  // const dontHaveExtraItem = totalSlidableItems <= 0;
  // if (dontHaveExtraItem) {
  //   sliderNextBtn.style.display = 'none';
  //   sliderPrevBtn.style.display = 'none';
  // }

/**
 * slide with [shift + mouse wheel]
 */

  // currentSlider2.addEventListener("wheel", function (event) {
  //   if (event.shiftKey && event.deltaY > 0) slideNext();
  //   if (event.shiftKey && event.deltaY < 0) slidePrev();
  // });

/**
 * RESPONSIVE
 */

//   window.addEventListener("resize", function () {
//     totalSliderVisibleItems = Number(getComputedStyle(currentSlider2).getPropertyValue("--slider2-items"));
//     totalSlidableItems = slider2Container2.childElementCount - totalSliderVisibleItems;

//     moveSliderItem();
//   });

// }

// for (let i = 0, len = sliders2.length; i < len; i++) { initSlider(sliders2[i]); }

