import gsap from "gsap";


export const textIntro = (elem: any) => {
  gsap.fromTo(elem, {
    opacity: 0,
    duration: 1,
    scale: 1.5,
    ease: "power.out"
  },{
    opacity: 1,
    duration: 1,
    scale: 1,
    repeat: -1,
    yoyo: true,
  });
};

//Open menu
