import Tippy from "@tippyjs/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { categories } from "../../consts";
import { CategoryItem } from "./CategoryItem";

export function DiscoveryAction() {
  return (
    <Tippy
      className="bg-[#191b26] w-[850px] !max-w-[850px] h-[365px]"
      trigger="click"
      placement="bottom-start"
      offset={[-730, 0]}
      hideOnClick={true}
      interactive
      content={
        <div>
          <div className="flex justify-start  text-white font-normal rounded-[10px]">
            <div className="w-6/12 border-r-[1px] p-5">
              <span className="text-lg">Truyền Thông</span>
              {categories("").map((category) => (
                <CategoryItem {...category} />
              ))}
            </div>
            <div className="w-6/12 p-5">
              <span className="text-lg">Discovery</span>
              <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-[#ffffff1a] rounded-none py-[6px]">
                <Link to={"/editors_choice"} className={"flex items-center "}>
                  <span className="pl-[8px] text-sm" href="">
                    Lựa chọn của biên tập viên
                  </span>
                </Link>
              </div>
              <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-[#ffffff1a] rounded-none py-[6px]">
                <Link to={"/images/search"} className={"flex items-center "}>
                  <a className="pl-[8px] text-sm" href="">
                    Hình ảnh phổ biến
                  </a>
                </Link>
              </div>
              <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-[#ffffff1a] rounded-none py-[6px]">
                <Link to={"/videos/search"} className={"flex items-center "}>
                  <span className="pl-[8px] text-sm" href="">
                    Video phổ biến
                  </span>
                </Link>
              </div>
              <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-[#ffffff1a] rounded-none py-[6px]">
                <a className="pl-[8px] text-sm" href="">
                  Nhạc phổ biến
                </a>
              </div>
              <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-[#ffffff1a] rounded-none py-[6px]">
                <a className="pl-[8px] text-sm" href="">
                  Các tìm kiếm phổ biến
                </a>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <button className="flex items-center w-[120px] h-[40px] bg-white hover:bg-neutral-100 hover:rounded-3xl rounded-none px-[6px] ">
        Khám phá
        <span className="mx-2">
          <BsChevronDown />
        </span>
      </button>
    </Tippy>
  );
}
