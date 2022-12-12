import React from "react";
import { Link, NavLink } from "react-router-dom";

export function Category({ to, icon, text }) {
  // if (!isActive) {
  //   return (
  //     <div className="flex items-center p-[16px] hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
  //       <Link to={to} className="flex items-center">
  //         <span>{icon}</span>
  //         <a className="pl-[8px] " href="">
  //           {text}
  //         </a>
  //       </Link>
  //     </div>
  //   );
  // }

  return (
    <div className="flex items-center rounded-3xl bg-neutral-100  ">
      <NavLink to={to} className="flex items-center py-[6px] p-[16px]">
        <span className="px-1">{icon}</span>
        {text}
      </NavLink>
    </div>
  );
}
