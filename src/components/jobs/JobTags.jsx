import { useState } from "react";

const tags = ["All", "Tech", "Finance", "Product", "Marketing"];

export const JobTags = () => {
  const [activeTag, setActiveTag] = useState("All");
  return (
    <div className="text-center flex sm:flex-nowrap  overflow-x-auto lg:justify-center items-center gap-4 lg:gap-5 my-8 pt-10 px-1 pb-2">
      {tags.map((tag, index) => (
        <div
          className="cursor-pointer rounded-3xl border-2 py-2 px-4  text-base lg:text-lg active:bg-dark-mid active:text-white hover:shadow-lg"
          key={index}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};
