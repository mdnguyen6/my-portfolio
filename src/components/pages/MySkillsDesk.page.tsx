import React, { useLayoutEffect, useRef, useState } from "react";
import Logo from "../common/Logo";
import ParticlesComponent from "../common/ParticlesComponent";
import particlesLight from "../../config/particles-config-light.json";
import mySkills from "../../data/my-skills.data";
import gsap from "gsap";
import ArrowNav from "../common/ArrowNav";
import BigTitle from "../common/BigTitle";
type Props = {};

const MySkillsDesk = (props: Props) => {
  let elems = useRef<HTMLDivElement[]>([]);

  const [state, setState] = useState({ current: 0, next: 1 });

  const onMouseTooltip = (e: any) => {
    gsap.to(elems.current[2], { autoAlpha: 1, left: e.pageX, top: e.pageY });
  };
  const hideOnMouseTooltip = () => {
    gsap.to(elems.current[2], { css: { display: "none" } });
  };

  const showOnMouseTooltip = () => {
    gsap.to(elems.current[2], { css: { display: "block" } });
  };

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

      <div className="flex justify-center items-center w-full h-full group">
        <div
          className="z-[9999]"
          onMouseEnter={() => {
            hideOnMouseTooltip();
          }}
          onMouseLeave={() => {
            showOnMouseTooltip();
          }}
        >
          <div className="bg-dark max-w-[450px] w-[65vw] h-[55vh]  border-solid border-dark border-2 group-hover:bg-light cursor-pointer">
            <div className="text-light pt-10 pl-10 group-hover:text-dark  w-full h-full ">
              <div className="flex justify-center items-center space-x-10">
                <img
                  className="w-[50px] h-[50px]"
                  src={require("../../assets/icons8-backend-development-96.png")}
                  alt=""
                />
                <h1 className="font-medium leading-tight text-4xl ">
                  {mySkills[state.next].field}
                </h1>
              </div>
              <div className="pt-12">
                <strong className="font-medium leading-tight text-2xl mt-0 mb-2">
                  Skills
                </strong>
                <p className="pl-8">{mySkills[state.next].skills}.</p>
              </div>
              <div className="pt-12">
                <strong className="font-medium leading-tight text-2xl mt-0 mb-2">
                  Tools
                </strong>
                <p className="pl-8">{mySkills[state.next].tools}.</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="z-[9999]"
          onMouseEnter={() => {
            hideOnMouseTooltip();
          }}
          onMouseLeave={() => {
            showOnMouseTooltip();
          }}
        >
          <div className="bg-light max-w-[450px] w-[65vw] h-[55vh] border-solid border-dark border-2 group-hover:bg-dark cursor-pointer">
            <div className="text-dark pt-10 pl-10 group-hover:text-light w-full h-full">
              <div className="flex justify-center items-center space-x-10">
                <img
                  className="w-[50px] h-[50px] bg-light rounded-md"
                  src={require("../../assets/icons8-frontend-64.png")}
                  alt=""
                />
                <h1 className="font-medium leading-tight text-4xl text-center">
                  {mySkills[state.current].field}
                </h1>
              </div>
              <div className="pt-12">
                <strong className="font-medium leading-tight text-2xl mt-0 mb-2">
                  Skills
                </strong>
                <p className="pl-8">{mySkills[state.current].skills}.</p>
              </div>
              <div className="pt-12">
                <strong className="font-medium leading-tight text-2xl mt-0 mb-2">
                  Tools
                </strong>
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

export default MySkillsDesk;
