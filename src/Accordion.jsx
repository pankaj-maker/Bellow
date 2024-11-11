import React from "react";

function Accordion({
  title = "title",
  description = "description",
  isOpen = false,
}) {
  return (
    <details
      className=" w-80 bg-gray-100 m-1 p-2 rounded-lg border-2 border-black"
      open={isOpen}
    >
      <summary className="cursor-pointer font-bold text-stone-900 text-xl">
        {title}
      </summary>
      <p className="text-stone-900 text-lg">{description}</p>
    </details>
  );
}

export default Accordion;
