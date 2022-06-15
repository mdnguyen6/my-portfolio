import React, { useLayoutEffect, useRef, useState } from "react";
import Logo from "../common/Logo";
import ParticlesComponent from "../common/ParticlesComponent";
import particlesLight from "../../config/particles-config-light.json";
import mySkills from "../../data/my-skills.data";
import gsap from "gsap";
import ArrowNav from "../common/ArrowNav";
import BigTitle from "../common/BigTitle";
type Props = {};

const MySkills = (props: Props) => {
  let timer: any = null;
  let elems = useRef<HTMLDivElement[]>([]);
  let timeline = gsap.timeline({
    defaults: {
      duration: 0.75,
      ease: "power3.inOut",
    },
    paused: true,
  });
  const [state, setState] = useState({ current: 0, next: 1 });
  const activateTimer = () => {
    timer = setTimeout(() => {
      stepForward();
    }, 4000);
  };

  const calculateIndexs = (index: number) => {
    if (index === mySkills.length - 1) {
      setState({ current: index, next: 0 });
    } else {
      setState({ current: index, next: index + 1 });
    }
  };

  const flowUp = (onComplete: () => void) => {
    timeline
      .to(elems.current[0], {
        y: "-100%",
        opacity: 0,
        scale: 0.5,
        onComplete,
      })
      .play();
  };

  const stepForward = () => {
    flowUp(() => calculateIndexs(state.next));
  };

  const onMouseTooltip = (e: any) => {
    gsap.to(elems.current[2], { autoAlpha: 1, left: e.pageX, top: e.pageY });
  };
  const hideOnMouseTooltip = () => {
    gsap.to(elems.current[2], { css: { display: "none" } });
  };

  const showOnMouseTooltip = () => {
    gsap.to(elems.current[2], { css: { display: "block" } });
  };

  useLayoutEffect(() => {
    gsap.set(elems.current[0], {
      x: "0",
      y: "0",
      opacity: 1,
      scale: 1,
    });
    gsap.fromTo(
      elems.current[0],
      {
        x: () => {
          return "20vw";
        },
        y: "60%",
        opacity: 0.4,
      },
      {
        x: () => {
          return "30vw";
        },
        y: "40%",
        opacity: 1,
        scale: 1,
      }
    );
    activateTimer();

    return () => {
      clearTimeout(timer);
    };
  }, [state]);
  return (
    <div
      className="bg-light w-full h-full"
      onMouseMove={(e) => onMouseTooltip(e)}
    >
      <ArrowNav
        left="MyIntro"
        right="MyWorks"
        leftTo=""
        rightTo="works"
        color="dark"
      />
      <ParticlesComponent options={particlesLight} />
      <Logo className="text-dark" />
      <BigTitle title="MySkills" color="dark" />

      <div ref={(e) => (elems.current[1] = e!)} className="opacity-[0.4]">
        <div className="absolute bg-dark top-1/2 left-1/2 -translate-x-[65%] -translate-y-[35%] max-w-[450px] w-[65vw] h-[55vh]  border-solid border-dark border-2">
          <div className="text-light pt-10 pl-10  w-full h-full ">
            <div className="">
              <h1 className="font-medium leading-tight text-4xl text-center">
                {mySkills[state.next].field}
              </h1>
            </div>
            <div className="pt-12">
              <strong className="font-medium leading-tight text-2xl mt-0 mb-2">Skills</strong>
              <p className="pl-8">{mySkills[state.next].skills}.</p>
            </div>
            <div className="pt-12">
              <strong className="font-medium leading-tight text-2xl mt-0 mb-2">Tools</strong>
              <p className="pl-8">{mySkills[state.next].tools}.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="group relative z-[9999]"
          onMouseEnter={() => {
            clearTimeout(timer);
            hideOnMouseTooltip();
          }}
          onMouseLeave={() => {
            activateTimer();
            showOnMouseTooltip();
          }}
        >
          <div
            ref={(e) => (elems.current[0] = e!)}
            className="absolute bg-light max-w-[450px] w-[65vw] h-[55vh] border-solid border-dark border-2 group-hover:bg-dark cursor-pointer"
          >
            <div className="text-dark pt-10 pl-10 group-hover:text-light w-full h-full">
              <div className="">
                <h1 className="font-medium leading-tight text-4xl text-center">
                  {mySkills[state.current].field}
                </h1>
                
              </div>
              <div className="pt-12">
                <strong className="font-medium leading-tight text-2xl mt-0 mb-2">Skills</strong>
                <p className="pl-8">{mySkills[state.current].skills}.</p>
              </div>
              <div className="pt-12">
                <strong className="font-medium leading-tight text-2xl mt-0 mb-2">Tools</strong>
                <p className="pl-8">{mySkills[state.current].tools}.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        ref={(e) => (elems.current[2] = e!)}
        className="absolute w-[40px] bg-[#555] text-[#fff] text-xs text-center rounded-md -ml-6 cursor-none"
      >
        MDN
      </div>
    </div>
  );
};

export default MySkills;
