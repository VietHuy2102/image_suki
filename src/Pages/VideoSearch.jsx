import React from "react";
import LogoIcon from "../components/Icons/iconsLogo.svg";
import { IoLogoFacebook, IoSearch } from "react-icons/io5";
import {
    BsCameraVideoFill,
    BsChevronDown,
    BsGithub,
    BsInstagram,
    BsMusicNoteBeamed,
    BsSoundwave,
    BsTwitter,
    BsVectorPen,
} from "react-icons/bs";
import Tippy from "@tippyjs/react";
import { MdLanguage, MdPhotoCamera } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import { AiFillFire } from "react-icons/ai";
import { FiCheck } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { HiOutlineArrowUpOnSquare } from "react-icons/hi2";
import noavatar from "../images/noAvatar.webp";

export default function VideoSearch() {
    return (
        <div className="flex">
            <div className=" w-1/12 p-3">
                <div className="w-[116px] h-8 ">
                    <img src={LogoIcon} />
                </div>
            </div>
            <div className=" w-4/12 p-2 ml-[25px]  ">
                {/* Search */}
                <form className="relative ">
                    <span className="absolute top-[10px] border-none left-[15px]   ">
                        <IoSearch />
                    </span>
                    <input
                        type="search"
                        className="w-[400px] p-1 pl-10  border-2 bg-[#f7f7f7]"
                        placeholder="Tìm kiếm "
                    />
                    <button
                        type="button"
                        className="absolute flex items-center top-[6px] right-[118px] pl-2 bg-white hover:text-black"
                    >
                        Video
                        <span className="px-[3px]">
                            <BsChevronDown />
                        </span>
                    </button>
                </form>
            </div>
            <div className="flex w-7/12 justify-end">
                <div>
                    <Tippy
                        className="bg-[#191b26] w-[597px] !max-w-[597px] h-[590px]"
                        trigger="click"
                        placement="bottom-start"

                        offset={[-730, 0]}
                        hideOnClick={true}
                        content={
                            <div>
                                <div className="flex justify-start  text-white font-normal rounded-[10px]">
                                    <div className=" w-4/12  p-5">
                                        <div className="w-full  p-1">
                                            <span className="text-lg">
                                                Truyền Thông
                                            </span>
                                            <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                                <span>
                                                    <MdPhotoCamera />
                                                </span>
                                                <a
                                                    className="pl-[8px] text-sm"
                                                    href=""
                                                >
                                                    Ảnh
                                                </a>
                                            </div>
                                            <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                                <span>
                                                    <RiPencilFill />
                                                </span>
                                                <a className="pl-[8px]" href="">
                                                    Minh Họa
                                                </a>
                                            </div>
                                            <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                                <span>
                                                    <BsVectorPen />
                                                </span>
                                                <a className="pl-[8px]" href="">
                                                    Vectors
                                                </a>
                                            </div>
                                            <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                                <span>
                                                    <BsCameraVideoFill />
                                                </span>
                                                <a className="pl-[8px]" href="">
                                                    Video
                                                </a>
                                            </div>
                                            <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                                <span>
                                                    <BsMusicNoteBeamed />
                                                </span>
                                                <a className="pl-[8px]" href="">
                                                    Âm nhạc
                                                </a>
                                            </div>
                                            <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                                <span>
                                                    <BsSoundwave />
                                                </span>
                                                <a className="pl-[8px]" href="">
                                                    Hiệu ứng âm thanh
                                                </a>
                                            </div>
                                            <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                                <span>
                                                    <AiFillFire />
                                                </span>
                                                <a
                                                    className="pl-[8px] pr-[20px]"
                                                    href=""
                                                >
                                                    GIF
                                                </a>
                                            </div>
                                        </div>
                                        <div className="w-full border-y-[1px] p-1">
                                            <div className="flex items-start  hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                                <a
                                                    className="pl-[8px] text-sm"
                                                    href=""
                                                >
                                                    Lựa chọn của biên tập viên
                                                </a>
                                            </div>
                                            <div className="flex items-start  hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                                <a
                                                    className="pl-[8px] text-sm"
                                                    href=""
                                                >
                                                    Bộ sưu tập được tuyển chọn
                                                </a>
                                            </div>
                                            <div className="flex items-start  hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                                <a
                                                    className="pl-[8px] text-sm"
                                                    href=""
                                                >
                                                    Hình ảnh phổ biến
                                                </a>
                                            </div>
                                            <div className="flex items-start  hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                                <a
                                                    className="pl-[8px] text-sm"
                                                    href=""
                                                >
                                                    Video phổ biến
                                                </a>
                                            </div>
                                            <div className="flex items-start  hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                                <a
                                                    className="pl-[8px] text-sm"
                                                    href=""
                                                >
                                                    Nhạc phổ biến
                                                </a>
                                            </div>
                                            <div className="flex items-start  hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                                <a
                                                    className="pl-[8px] text-sm"
                                                    href=""
                                                >
                                                    Các tìm kiếm phổ biến
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-4/12 border-x-[1px] p-5">
                                        <span className="text-lg">
                                            Cộng Đồng
                                        </span>
                                        <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                            <a
                                                className="pl-[8px] text-sm"
                                                href=""
                                            >
                                                Creators
                                            </a>
                                        </div>
                                        <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                            <a
                                                className="pl-[8px] text-sm"
                                                href=""
                                            >
                                                Diễn đàn
                                            </a>
                                        </div>
                                        <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                            <a
                                                className="pl-[8px] text-sm"
                                                href=""
                                            >
                                                Blog
                                            </a>
                                        </div>
                                        <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                            <a
                                                className="pl-[8px] text-sm"
                                                href=""
                                            >
                                                Máy ảnh
                                            </a>
                                        </div>
                                    </div>
                                    <div className="w-4/12 border-l-[1px] p-5">
                                        <span className="text-lg">
                                            Giới Thiệu
                                        </span>
                                        <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                            <a
                                                className="pl-[8px] text-sm"
                                                href=""
                                            >
                                                Thông tin về chúng tôi
                                            </a>
                                        </div>
                                        <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                            <a
                                                className="pl-[8px] text-sm"
                                                href=""
                                            >
                                                FAQ
                                            </a>
                                        </div>
                                        <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                            <a
                                                className="pl-[8px] text-sm"
                                                href=""
                                            >
                                                Giấy phép
                                            </a>
                                        </div>
                                        <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                            <a
                                                className="pl-[8px] text-sm"
                                                href=""
                                            >
                                                Điều khoản dịch vụ
                                            </a>
                                        </div>
                                        <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                            <a
                                                className="pl-[8px] text-sm"
                                                href=""
                                            >
                                                Chính sách bảo mật
                                            </a>
                                        </div>
                                        <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                            <a
                                                className="pl-[8px] text-sm"
                                                href=""
                                            >
                                                Cookies Policy
                                            </a>
                                        </div>
                                        <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                            <a
                                                className="pl-[8px] text-sm"
                                                href=""
                                            >
                                                API
                                            </a>
                                        </div>
                                        <div className="flex items-center p-[16px] my-1 hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                                            <span>
                                                <MdLanguage />
                                            </span>
                                            <a
                                                className="pl-[8px] text-sm"
                                                href=""
                                            >
                                                Ngôn ngữ
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end  items-center w-12/12 border-t-[1px] h-[72px]">
                                    <div className="px-4 text-xl ">
                                        <IoLogoFacebook />
                                    </div>
                                    <div className="px-4 text-xl ">
                                        <BsInstagram />
                                    </div>
                                    <div className="px-4 text-xl ">
                                        <BsTwitter />
                                    </div>
                                    <div className="px-4 pr-16 text-xl ">
                                        <BsGithub />
                                    </div>
                                </div>
                            </div>
                        }
                    >
                        <button className="flex items-center w-[120px] h-[40px] bg-white hover:bg-neutral-100 hover:rounded-3xl rounded-none mt-[6px] px-[6px] ">
                            Khám phá
                            <span className="mx-2">
                                <BsChevronDown />
                            </span>
                        </button>
                    </Tippy>
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
                                            That's all your notifications from
                                            the last 90 days.
                                        </span>
                                    </div>
                                </div>
                            </>
                        }
                    >
                        <Tippy content={"Thông báo"}>
                            <button className="flex items-center justify-center mt-[6px]  ml-[20px] bg-white hover:bg-neutral-100 hover:rounded-3xl rounded-none w-10 h-10 ">
                                <IoIosNotifications size={25} />
                            </button>
                        </Tippy>
                    </Tippy>
                </div>
                <div>
                    <button className=" flex items-center justify-center mt-[6px]  ml-[20px] hover:bg-neutral-100 hover:rounded-3xl  w-10 h-10 ">
                        <img
                            className="rounded-full"
                            src={noavatar}
                            alt="avatar"
                        />
                    </button>
                </div>
                <button className="flex items-center bg-[#00ab6b] mx-[20px] hover:bg-[#14bc7d] hover:rounded-3xl rounded-full text-white  my-[10px] px-4">
                    <span>
                        <HiOutlineArrowUpOnSquare />
                    </span>
                    Tải Lên
                </button>
            </div>
        </div>
    );
}
