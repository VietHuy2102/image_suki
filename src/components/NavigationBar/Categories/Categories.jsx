import React from "react";
import { Category } from "./Category";
import { categories } from "../../../consts";

export default function Categories() {
  return (
    <div className="flex gap-2">
      {categories().map(({ to, icon, text, isActive }) => (
        <Category
          to={to}
          icon={icon}
          text={text}
          key={text}
          isActive={isActive}
        />
      ))}
    </div>
  );
}
