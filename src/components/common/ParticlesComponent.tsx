import React from "react";
import Particles from "react-tsparticles";
import type {
  Container,
  Engine,
  IOptions,
  RecursivePartial,
} from "tsparticles-engine";
import { loadFull } from "tsparticles";

interface IProps {
  options: {};
}

const ParticlesComponent = (props: IProps) => {
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  const particlesLoaded: (container: Container) => Promise<void> = (
    container
  ) => {
    return Promise.resolve();
  };
  return (
    <div className="absolute w-full h-full">
      <Particles
        style={{position:'fixed',top:0}}
        options={props.options as RecursivePartial<IOptions>}
        init={particlesInit}
        loaded={particlesLoaded}
      />
    </div>
  );
};

export default ParticlesComponent;
