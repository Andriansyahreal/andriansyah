'use strict';





/**
 * SLIDER
 */

const sliders2 = document.querySelectorAll("[data-slider2]");

const initSlider = function (currentSlider2) {

  const slider2Container2 = currentSlider2.querySelector("[data-slider2-container2]");
  const sliderPrevBtn = currentSlider2.querySelector("[data-slider2-prev]");
  const sliderNextBtn = currentSlider2.querySelector("[data-slider2-next]");

  let totalSliderVisibleItems = Number(getComputedStyle(currentSlider2).getPropertyValue("--slider2-items"));
  let totalSlidableItems = slider2Container2.childElementCount - totalSliderVisibleItems;

  let currentSlidePos = 0;

  const moveSliderItem = function () {
    slider2Container2.style.transform = `translateX(-${slider2Container2.children[currentSlidePos].offsetLeft}px)`;
  }

  /**
   * NEXT SLIDE
   */
  const slideNext = function () {
    const slideEnd = currentSlidePos >= totalSlidableItems;

    if (slideEnd) {
      currentSlidePos = 0;
    } else {
      currentSlidePos++;
    }

    moveSliderItem();
  }

  sliderNextBtn.addEventListener("click", slideNext);

  /**
   * PREVIOUS SLIDE
   */
  const slidePrev = function () {
    if (currentSlidePos <= 0) {
      currentSlidePos = totalSlidableItems;
    } else {
      currentSlidePos--;
    }

    moveSliderItem();
  }

  sliderPrevBtn.addEventListener("click", slidePrev);

  const dontHaveExtraItem = totalSlidableItems <= 0;
  if (dontHaveExtraItem) {
    sliderNextBtn.style.display = 'none';
    sliderPrevBtn.style.display = 'none';
  }

  /**
   * slide with [shift + mouse wheel]
   */

  currentSlider2.addEventListener("wheel", function (event) {
    if (event.shiftKey && event.deltaY > 0) slideNext();
    if (event.shiftKey && event.deltaY < 0) slidePrev();
  });

  /**
   * RESPONSIVE
   */

  window.addEventListener("resize", function () {
    totalSliderVisibleItems = Number(getComputedStyle(currentSlider2).getPropertyValue("--slider2-items"));
    totalSlidableItems = slider2Container2.childElementCount - totalSliderVisibleItems;

    moveSliderItem();
  });

}



for (let i = 0, len = sliders2.length; i < len; i++) { initSlider(sliders2[i]); }