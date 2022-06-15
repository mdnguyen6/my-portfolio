import React, { useEffect, useRef } from "react";
import { textIntro } from "./Animation";
import gsap from "gsap";
import { Link } from "react-router-dom";

type Props = {
  className?: string;
};

const Logo = (props: Props) => {
  let logoRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    textIntro(logoRef.current!);
  }, []);
  return (
    <Link
      to="/"
      ref={logoRef}
      className={`fixed pl-4 font-san text-4xl italic font-semibold tracking-wide text-left ${
        props.className ? props.className : "text-light"
      }`}
    >
      MDN
    </Link>
  );
};

export default Logo;
