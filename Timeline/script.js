// Gsap horizontal scroll animation
let sections = gsap.utils.toArray(".container");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none", // <-- IMPORTANT!
  scrollTrigger: {
    trigger: ".wrapper",
    pin: true,
    scrub: 3,
    end: "+=8000"
  }
});

// Make marker visible to easy edit animation on scroll triggers position
// ScrollTrigger.defaults({
//     markers: {
//         startColor: "white",
//         endColor: "white"
//     }
// });

// red section
document.querySelectorAll('.component').forEach(component => {
  gsap.to(component, {
    y: -80,
    filter: " blur(0) brightness(1) opacity(1)",
    duration: .3,
    ease: "none",
    scrollTrigger: {
      trigger: component,
      containerAnimation: scrollTween,
      start: "-50 center",
      end: "100% center",
      toggleActions: "play reverse restart reverse",
      onEnter: () => {
        changeBg(component.querySelector('img').src);
        flashYear(component.querySelector('.img-year').textContent);
        component.classList.add('active');
      },
      onLeave: () => {
        component.classList.remove('active');
      },
      onEnterBack: () => {
        changeBg(component.querySelector('img').src);
        flashYear(component.querySelector('.img-year').textContent);
        component.classList.add('active');
      },
      onLeaveBack: () => {
        component.classList.remove('active');
      },
    }
  });
});


// Change background image
function changeBg (src) {
    document.querySelector('.duppled-bg').style.backgroundImage = "url("+src+")";
}

// Flash component's year at the background when animates in (not finished)
function flashYear(year) {
	const container = document.querySelector(".flash-container");

	container.innerHTML = "";
	container.insertAdjacentHTML("beforeend", `<div class="flash">${year}</div>`);
} 