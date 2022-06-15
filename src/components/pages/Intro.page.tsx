import React from "react";
import { useNavigate } from "react-router-dom";
import BigTitle from "../common/BigTitle";
import Logo from "../common/Logo";
import YinyangSvg from "../common/YinyangSvg";

type Props = {};

const Intro = (props: Props) => {
  let navigate = useNavigate();
  return (
    <div className="bg-outerBackground-sm w-full h-full">
      <Logo />
      <YinyangSvg />
      <BigTitle title="MyIntro" color="light" />
      <div className="absolute bg-innerBackground-sm bg-no-repeat p-[2px] left-1/2 top-1/2 max-w-[550px] w-[65vw] h-[55vh] -translate-x-2/4 -translate-y-2/4">
        <div className="bg-outerBackground-sm w-full h-full flex flex-col">
          <div className="flex flex-col justify-around w-full h-1/2 text-light p-10">
            <h1 className="font-medium leading-tight text-4xl mt-0 mb-2">Hi,</h1>
            <h3 className="font-medium leading-tight text-2xl mt-0 mb-2">I'm Manh Dinh Nguyen.</h3>
          </div>
          <div className="flex justify-center items-center w-full h-1/2 text-dark p-5">
            <h6 className=" font-medium leading-tight text-lg mt-0 mb-2">I am a web developer, I love this subject and passionate about creating simple and user-friendly websites.</h6>
          </div>
        </div>
      </div>
      <p onClick={() => navigate('/works')} className="fixed cursor-pointer bg-innerBackground-md bg-clip-text bg-cover text-transparent text-xl font-sans font-bold top-[calc(50%-0.5rem)] -left-6 tracking-widest rotate-90 hover:scale-125">
        MyWorks
      </p>
      <div className="fixed font-sans font-bold text-xl tracking-widest w-full bottom-1 flex justify-around bg-transparent">
        <p onClick={() => navigate('/myskills')} className="text-dark cursor-pointer hover:scale-125">MySkills</p>
      </div>
    </ div>
  );
};

export default Intro;
