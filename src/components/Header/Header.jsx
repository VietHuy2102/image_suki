import React from "react";
import LogoIcon from "../Icons/iconsLogo.svg";
import { IoIosNotifications } from "react-icons/io";
import { HiOutlineArrowUpOnSquare } from "react-icons/hi2";
import noavatar from "../../images/noAvatar.webp";
import Tippy from "@tippyjs/react";
import { DiscoveryAction } from "./DiscoveryAction";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex bg-white fixed left-0 right-0 top-0 z-50">
      <div className="w-1/12 "></div>
      <div className="flex justify-between items-center h-16 w-10/12  ">
        <div className="w-[116px] h-8">
          <Link to={"/"}>
            <img src={LogoIcon} alt="Logoicon" />
          </Link>
        </div>
        <div className="navbar flex w-3/12 mx-10 justify-around">
          <div>
            <DiscoveryAction />
          </div>
          <div>
            <Tippy
              className="w-[448px] h-[152px] !max-w-[448px]"
              offset={[-200, 5]}
              theme={"light"}
              trigger={"click"}
              content={
                <>
                  <div className="border-b-2 pb-4 py-3 px-3">
                    <span>Thông báo</span>
                  </div>
                  <div className="pt-[10px]">
                    <div className="flex items-center justify-center ">
                      <FiCheck
                        size={40}
                        className="bg-[#00ab6b] rounded-full py-2"
                        color="white"
                      />
                    </div>
                    <div className="flex items-center justify-center pt-[10px] ">
                      <span>
                        That's all your notifications from the last 90 days.
                      </span>
                    </div>
                  </div>
                </>
              }
            >
              <Tippy content={"Thông báo"}>
                <button className="flex items-center justify-center bg-white hover:bg-neutral-100 hover:rounded-3xl rounded-none w-10 h-10 ">
                  <IoIosNotifications size={25} />
                </button>
              </Tippy>
            </Tippy>
          </div>
          <div>
            <button className=" flex items-center justify-center hover:bg-neutral-100 hover:rounded-3xl  w-10 h-10 ">
              <img className="rounded-full" src={noavatar} alt="avatar" />
            </button>
          </div>
          <button className="flex items-center  bg-[#00ab6b] hover:bg-[#14bc7d] hover:rounded-3xl rounded-full text-white  py-2 px-4">
            <span>
              <HiOutlineArrowUpOnSquare />
            </span>
            Tải Lên
          </button>
        </div>
      </div>
      <div className="w-1/12 "></div>
    </div>
  );
}
