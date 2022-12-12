import React from "react";
import banner from "../../images/banner1.png";
import { IoSearch } from "react-icons/io5";
import {
  BsCameraVideoFill,
  BsChevronDown,
  BsMusicNoteBeamed,
  BsSoundwave,
  BsCameraFill,
  BsVectorPen,
  BsPersonFill,
} from "react-icons/bs";
import { AiFillFire } from "react-icons/ai";
import { RiImageFill, RiPencilFill } from "react-icons/ri";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Container({ heading, note, search }) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="Container relative bg-[rgba(0,0,0,.3)]">
      <img
        className="w-full object-cover object-[20%_40%]  h-[552px]"
        src={banner}
        alt=""
      />

      <div className="absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 ">
        <h1 className="text-white text-[32px] font-extrabold">{heading}</h1>
        <h2 className="text-white text-[14px]  my-5">{note}</h2>
        <form className="relative " onSubmit={() => navigate("/images/search")}>
          <span
            className="absolute top-[21px] left-[15px] cursor-pointer "
            onClick={() => navigate("/images/search")}
          >
            <IoSearch className={`${inputValue !== "" && "text-green-400"}`} />
          </span>
          <input
            type="search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-[840px] p-4 pl-10 rounded-full focus:outline-none "
            placeholder="Tìm kiếm hình minh họa"
          />
          <Tippy
            className=" w-[216px]  h-[492px]"
            trigger="click"
            placement="bottom-start"
            offset={[-95, 5]}
            theme={"light"}
            hideOnClick={true}
            arrow={false}
            content={
              <div>
                <div className="flex items-center p-4 ">
                  <RiImageFill />
                  <span className="px-3">All images</span>
                </div>
                <div className="flex items-center px-[42px] py-[6px] ">
                  <BsCameraFill />
                  <span className="px-3">Ảnh</span>
                </div>
                <div className="flex items-center px-[42px] py-[6px] ">
                  <RiPencilFill />
                  <span className="px-3">Minh Họa</span>
                </div>
                <div className="flex items-center px-[42px] py-[6px]">
                  <BsVectorPen />
                  <span className="px-3">Vectors</span>
                </div>
                <div className="flex items-center p-[16px] my-5 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                  <span>
                    <BsCameraVideoFill />
                  </span>
                  <a className="pl-[8px]" href="">
                    Video
                  </a>
                </div>
                <div className="flex items-center p-[16px] my-5 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                  <span>
                    <BsMusicNoteBeamed />
                  </span>
                  <a className="pl-[8px]" href="">
                    Âm nhạc
                  </a>
                </div>
                <div className="flex items-center p-[16px] my-5 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                  <span>
                    <BsSoundwave />
                  </span>
                  <a className="pl-[8px]" href="">
                    Hiệu ứng âm thanh
                  </a>
                </div>
                <div className="flex items-center p-[16px] my-5 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                  <span>
                    <AiFillFire />
                  </span>
                  <a className="pl-[8px] pr-[20px]" href="">
                    GIF
                  </a>
                </div>
                <div className="flex items-center p-[16px] my-5 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                  <span>
                    <BsPersonFill />
                  </span>
                  <a className="pl-[8px] pr-[20px]" href="">
                    Người dùng
                  </a>
                </div>
                <div className="relative border-t-[1px] h-[8px]">
                  <span className="absolute top-[30px] left-[15px]">
                    Search Option
                  </span>
                </div>
              </div>
            }
          >
            <button
              type="button"
              className="absolute flex items-center font-medium right-[14px] bottom-[8px] py-2 hover:bg-[#f7f7f7] rounded-full px-2 "
            >
              {search}
              <span className="px-[3px]">
                <BsChevronDown />
              </span>
            </button>
          </Tippy>
        </form>
      </div>
    </div>
  );
}
