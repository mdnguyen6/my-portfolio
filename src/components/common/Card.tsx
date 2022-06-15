import React from "react";
import { Work } from "../../data/work.data";

type Props = {
  work: Work;
};

const Card = ({ work }: Props) => {
  const { name, description, tags, demo, github } = work;
  return (
    <div className="w-full h-full shadow-md bg-light">
      <div className="w-full h-full flex flex-col justify-around p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700">
          {description}
        </p>
        <div className="">
          {tags.map((tag) => (
            <strong className="mb-3 font-normal">
              #{tag}
            </strong>
          ))}
        </div>

        <div className="flex justify-between">
          <a
            href={demo}
            className="inline-flex justify-center w-1/2 py-2 px-3 m-2 text-sm font-medium text-light bg-dark hover:bg-neutral-400 hover:text-dark focus:ring-4 focus:outline-none"
          >
            Visit
          </a>
          <a
            href={github}
            className="inline-flex justify-center w-1/2 py-2 px-3 m-2 text-sm font-medium text-light bg-dark hover:bg-neutral-400 hover:text-dark focus:ring-4 focus:outline-none"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
