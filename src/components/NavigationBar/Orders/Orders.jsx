import React from "react";
import { BsChevronDown } from "react-icons/bs";

export function Orders() {
  return (
    <div className="flex items-center pr-[8px] border-2 text-[#191b26] rounded-full p-[10px]">
      <button>Lựa chọn của biên tập viên</button>
      <span className="ml-2">
        <BsChevronDown />
      </span>
    </div>
  );
}
