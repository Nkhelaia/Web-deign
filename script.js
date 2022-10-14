document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 0, 400, 3000);
    counter("count2", 100, 50, 2500);
    counter("count3", 0, 40, 3000);
   });

   const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    autoplay: {
      delay: 5000
    },
    loop: true,
  
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
  
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".kanan",
      prevEl: ".kiri"
    }
  });
  