import React, { useEffect, useState } from "react";
import MySkillsDesk from "./MySkillsDesk.page";
import MySkillsMobile from "./MySkillsMobile.page";

type Props = {};

const MySkills = (props: Props) => {
  const [isDesk, setIsDesk] = useState(window.innerWidth > 1024);
  console.log(isDesk)
  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setIsDesk(true);
    } else {
      setIsDesk(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }); 
  return (isDesk ? <MySkillsDesk /> :<MySkillsMobile />);
};

export default MySkills;
