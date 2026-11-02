"use client";
import { useState } from "react";

const AddRemoveButton = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount(count + 1);
  };

  const remove = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex items-center justify-center text-xl">
      <button
        onClick={add}
        className="bg-[#A3BFA3] rounded-xl p-2 font-bold pr-4 pl-4"
      >
        +
      </button>
      <input
        value={count}
        readOnly
        className="w-12 font-bold justify-center text-center"
      />
      <button
        onClick={remove}
        className="bg-[#A3BFA3] rounded-xl p-2 font-bold pr-4 pl-4"
      >
        -
      </button>
    </div>
  );
};

export default AddRemoveButton;
