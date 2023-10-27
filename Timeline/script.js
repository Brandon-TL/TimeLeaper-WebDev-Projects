/* -- EDIT scrollVelocity TO SET HORIZONTAL SCROLL VELOCITY -- */

const scrollVelocity = 3000;

// Gsap horizontal scroll animation
let sections = gsap.utils.toArray(".container");

let scrollTween = gsap.to(sections, {
	xPercent: -100 * (sections.length + 0.25),
	ease: "none", // <-- IMPORTANT!
	scrollTrigger: {
		trigger: ".wrapper",
		pin: true,
		scrub: 3,
		end: "+=" + scrollVelocity
	}
});

/* -- MAKE MARKERS VISIBLE TO EASILY EDIT ANIMATION SCROLL TRIGGERS POSITION -- */

// ScrollTrigger.defaults({
//     markers: {
//         display: "fixed",
//         startColor: "white",
//         endColor: "white"
//     }
// });

/* -- CREATE ANIMATION -- */

document.querySelectorAll(".component").forEach((component) => {
	gsap.to(component, {
		y: -80,
		filter: " blur(0) brightness(1) opacity(1)",
		duration: 0.3,
		ease: "none",
		scrollTrigger: {
			trigger: component,
			containerAnimation: scrollTween,
			start: "-50 center",
			end: "100% center",
			toggleActions: "play reverse restart reverse",
			onEnter: () => {
				changeBg(component.querySelector("img").src);
				component.classList.add("active");
			},
			onLeave: () => {
				component.classList.remove("active");
			},
			onEnterBack: () => {
				changeBg(component.querySelector("img").src);
				component.classList.add("active");
			},
			onLeaveBack: () => {
				component.classList.remove("active");
			}
		}
	});
});

/**
 * Set event image to background scroll makes it visible on page
 * @param src source link to the image to be displayed
 * @returns void
 */
function changeBg(src) {
	document.querySelector(".duppled-bg").style.backgroundImage =
		"url(" + src + ")";
}
