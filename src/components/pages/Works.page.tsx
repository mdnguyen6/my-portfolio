import React, { useState } from "react";
import ParticlesComponent from "../common/ParticlesComponent";
import particlesDark from "../../config/particles-config.json";
import Logo from "../common/Logo";
import YinyangSvg from "../common/YinyangSvg";
import { useViewportScroll } from "framer-motion";
import workData from "../../data/work.data"

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Mousewheel, Autoplay, EffectCube, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Card from "../common/Card";
import ArrowNav from "../common/ArrowNav";
import BigTitle from "../common/BigTitle";
type Props = {};

const Works = (props: Props) => {
  const [deg, setDeg] = useState(0);
  const { scrollY } = useViewportScroll();
  scrollY.onChange((y) => {
    setDeg(y);
  });
  return (
    <div className="bg-dark w-screen h-screen">
      <ParticlesComponent options={particlesDark} />
      <Logo />
      <ArrowNav left="myIntro" right="mySkills" leftTo="" rightTo="myskills" color="light" />
      <BigTitle title="MyWorks" color="light"/>
      <div className="w-full h-full flex justify-center items-center">
        <div className="z-[9999]">
          <Swiper
          effect={"cube"}
          loop={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          mousewheel={true}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Autoplay, EffectCube, Pagination]}
          className="mySwiper w-[400px] h-[400px] xl:w-[500px] xl:h-[500px]"
        >
          {workData.map(work =>
            <SwiperSlide>
              <Card work={work}/>
            </SwiperSlide>
          )}
        </Swiper></div>
      </div>
      <YinyangSvg rotate={deg} />
    </div>
  );
};

export default Works;
