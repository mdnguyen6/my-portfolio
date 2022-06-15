import React from "react";

type Props = {
  title: string;
  color: "dark" | "light";
};

const BigTitle = ({ title, color }: Props) => {
  return (
    <h1 className={`absolute text-${color} text-title opacity-20 right-0`}>
      {title}
    </h1>
  );
};

export default BigTitle;
