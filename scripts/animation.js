// const greenPath = document.getElementById("green-path");
const greenCircle = document.getElementById("green-circle");
const yellowCircle = document.getElementById("yellow-circle");
const redCircle = document.getElementById("red-circle");

const liquid = document.getElementById("liquid");

// Bubbles
const bubble1 = document.getElementById("bubble1");
const bubble2 = document.getElementById("bubble2");
const bubble3 = document.getElementById("bubble3");
const bubble4 = document.getElementById("bubble4");
const bubble5 = document.getElementById("bubble5");
const bubble6 = document.getElementById("bubble6");
const bubble7 = document.getElementById("bubble7");
const bubble8 = document.getElementById("bubble8");

gsap.registerPlugin(MotionPathPlugin);

MotionPathPlugin.convertToPath("#green-path", true);
// MotionPathPlugin.convertToPath("#yellow-path", true);

gsap.to(greenCircle, {
  motionPath: {
    path: "#green-path",
    align: "self",
  },
  duration: 2,
  repeat: -1,
  ease: "linear",
});

gsap.to(yellowCircle, {
  motionPath: {
    path: "#yellow-path",
    start: 0,
    offsetY: -405,
    offsetX: -110,
  },
  duration: 2.5,
  repeat: -1,
  ease: "linear",
});

gsap.to(redCircle, {
  motionPath: {
    path: "#red-path",
    align: "self",
    offsetX: 210,
    offsetY: 360,
  },
  duration: 3,
  repeat: -1,
  ease: "linear",
});

gsap.to(liquid, {
  boxShadow: "0px 0px 100px #afc42d",
  repeat: -1,
  duration: 5,
});

const tlBubble1 = gsap.timeline({ repeat: -1 });
tlBubble1.to(bubble1, {
  y: 2200,
  fill: "#afc42d",
  duration: 4,
  ease: "power1.in",
});
tlBubble1.to(bubble1, { opacity: 0, duration: 0.2 }, "-=0.2");

const tlBubble2 = gsap.timeline({ repeat: -1 });
tlBubble2.to(bubble2, {
  y: 1800,
  x: -200,
  duration: 3.5,
  ease: "power1.in",
});
tlBubble2.to(
  bubble2,
  {
    fill: "#afc42d",
    duration: 3,
    ease: "power1.in",
  },
  "<"
);
tlBubble2.to(bubble2, { opacity: 0, duration: 0.2 }, "-=0.2");

const tlBubble3 = gsap.timeline({ repeat: -1 });
tlBubble3.to(bubble3, {
  y: 1800,
  duration: 3,
});
tlBubble3.from(
  bubble3,
  {
    y: -500,
    fill: "#ffff",
    duration: 1.5,
  },
  ">"
);

const tlBubble4 = gsap.timeline({ repeat: -1 });
tlBubble4.to(bubble4, {
  y: 1800,
  duration: 3.1,
});
tlBubble4.from(
  bubble4,
  {
    y: -500,
    fill: "#ffff",
    duration: 1.5,
  },
  ">"
);

const tlBubble5 = gsap.timeline({ repeat: -1 });
tlBubble5.to(bubble5, {
  y: 1600,
  duration: 2.8,
});
tlBubble5.from(
  bubble5,
  {
    y: -500,
    fill: "#ffff",
    duration: 1.5,
  },
  ">"
);

const tlBubble6 = gsap.timeline({ repeat: -1 });
tlBubble6.to(bubble6, {
  y: 1600,
  duration: 2.8,
});
tlBubble6.from(
  bubble6,
  {
    y: -500,
    fill: "#ffff",
    duration: 1.5,
  },
  ">"
);

const tlBubble7 = gsap.timeline({ repeat: -1 });
tlBubble7.to(bubble7, {
  y: 500,
  x: 100,
  duration: 1,
});
tlBubble7.from(bubble7, {
  y: -1800,
  fill: "#ffff",
  duration: 3,
});

const tlBubble8 = gsap.timeline({ repeat: -1 });
tlBubble8.to(bubble8, {
  y: 500,
  x: 100,
  duration: 1,
});
tlBubble8.from(bubble8, {
  y: -1800,

  duration: 3,
});
tlBubble8.from(
  bubble8,
  {
    fill: "#ffff",
    duration: 1,
  },
  "<"
);
