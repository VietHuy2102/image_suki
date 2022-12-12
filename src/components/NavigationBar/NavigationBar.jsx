import React from "react";
import Categories from "./Categories/Categories";
import { Orders } from "./Orders/Orders";
// import { useLocation } from "react-router-dom";

export function NavigationBar() {
  // const { pathname } = useLocation();

  return (
    <div className="Content flex py-20">
      <div className="w-1/12"></div>
      <div className="flex  w-10/12  justify-between">
        <Categories />
        {/* <Orders /> */}
      </div>
      <div className="w-1/12"></div>
    </div>
  );
}
