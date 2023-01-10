//Inspire by Rajacharles GSAP-Sequence-Landing-Page-Transition-Animation

let t1 = gsap.timeline();

t1.from(".name", {
    opacity: 0,
    xPercent: -100,
    delay: 0.5,
    duration: 1,
    ease: "power1.out",
    yoyo: true,
});
t1.from(
    ".dot",
    {
        opacity: 0,
        yPercent: 100,
        delay: 0.5,
        repeatDelay: 1,
        duration: 1,
        ease: "power1.out",
    },
    0.01
);

t1.to(".dot", {
    x: 20,
    duration: 1,
    ease: "power1.out",
});

t1.to(".dot", {
    x: -5,
    duration: 0.5,
    ease: "power1.out",
});

t1.to(".name", {
    opacity: 0,
    xPercent: -100,
    duration: 1,
    ease: "power1.out",
    yoyo: true,
});

t1.to(
    ".dot",
    {
        opacity: 0,
        duration: 1,
        ease: "expo.out",
    },
    3
);
t1.to(
    ".cover",
    {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
    },
    3
);

//
t1.to(
    ".cover-2",
    {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
    },
    3.2
);
t1.to(
    ".cover-3",
    {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
    },
    3.4
);
t1.to(
    ".cover-4",
    {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
    },
    3.6
);
//Portfolio
t1.from(
    ".portfolio-intro",
    {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
        opacity: 0,
    },
    3.8
);
t1.from(".cover-5", {
    yPercent: -100,
    duration: 1,
    ease: "power1.out",
    delay: 0.4,
});

