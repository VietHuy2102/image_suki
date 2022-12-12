import React from "react";
import { Link } from "react-router-dom";

export function CategoryItem({ icon, text, to }) {
  return (
    <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-[#ffffff1a] rounded-none py-[6px]">
      <Link to={to} className={"flex items-center "}>
        <span>{icon}</span>
        <span className="pl-[8px] text-sm" href="">
          {text}
        </span>
      </Link>
    </div>
  );
}
