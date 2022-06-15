import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  left: string;
  right: string;
  leftTo: string;
  rightTo: string;
  color: "dark" | "light";
};

const ArrowNav = ({ left, right, leftTo, rightTo, color }: Props) => {
  let btnClass: string;
  if (color === "dark")
    btnClass = "animate-bounce bg-dark border-dark text-light hover:bg-light hover:text-dark rounded-[25%] border-2 border-solid cursor-pointer m-2";
  else
    btnClass = "animate-bounce bg-light border-light text-dark hover:bg-dark hover:text-light rounded-[25%] border-2 border-solid cursor-pointer m-2";
  let navigate = useNavigate();
  return (
    <>
      <div className="fixed z-50 w-full h-full flex justify-center items-end pb-10 xl:flex xl:justify-between xl:items-center pl-2 pr-2">
        <div className={btnClass}>
          <p
            className={`m-2 font-sans font-bold text-md`}
            onClick={() => navigate(`/${leftTo}`)}
          >
            {left}
          </p>
        </div>
        <div className={btnClass}>
          <p
            className={`m-2 font-sans font-bold text-md`}
            onClick={() => navigate(`/${rightTo}`)}
          >
            {right}
          </p>
        </div>
      </div>
    </>
  );
};

export default ArrowNav;
