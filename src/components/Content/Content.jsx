import React from "react";
import {
    BsFillHouseDoorFill,
    BsVectorPen,
    BsCameraVideoFill,
    BsMusicNoteBeamed,
    BsSoundwave,
    BsChevronDown,
} from "react-icons/bs";
import { MdPhotoCamera } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import { AiFillFire } from "react-icons/ai";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";

export default function Content() {
    return (
        <div className="Content flex py-20">
            <div className="w-1/12"></div>
            <div className="flex  w-10/12  ">
                <div className="flex items-center p-[16px] hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                    <Link to={"/"} className="flex items-center">
                        <span>
                            <BsFillHouseDoorFill />
                        </span>
                        <a className="pl-[8px] " href="">
                            Home
                        </a>
                    </Link>
                </div>
                <div className="flex items-center p-[16px] hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                    <Link to={"/photos"} className="flex items-center">
                        <span>
                            <MdPhotoCamera />
                        </span>
                        <span className="pl-[8px]" href="">
                            Ảnh
                        </span>
                    </Link>
                </div>
                <div className="flex items-center p-[16px] hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                    <Link to={"/illustrations"} className="flex items-center">
                        <span>
                            <RiPencilFill />
                        </span>
                        <span className="pl-[8px]" href="">
                            Minh Họa
                        </span>
                    </Link>
                </div>
                <div className="flex items-center p-[16px] hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                    <Link to={"/vectors"} className="flex items-center">
                        <span>
                            <BsVectorPen />
                        </span>
                        <span className="pl-[8px]" href="">
                            Vectors
                        </span>
                    </Link>
                </div>
                <div className="flex items-center p-[16px] hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                    <Link to={"/videos"} className="flex items-center">
                        <span>
                            <BsCameraVideoFill />
                        </span>
                        <span className="pl-[8px]" href="">
                            Video
                        </span>
                    </Link>
                </div>
                <div className="flex items-center p-[16px] hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                    <Link to={"/music"} className="flex items-center">
                        <span>
                            <BsMusicNoteBeamed />
                        </span>
                        <span className="pl-[8px]" href="">
                            Âm nhạc
                        </span>
                    </Link>
                </div>
                <div className="flex items-center p-[16px] hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                    <Link to={"/sound-effects"} className="flex items-center">
                        <span>
                            <BsSoundwave />
                        </span>
                        <span className="pl-[8px]" href="">
                            Hiệu ứng âm thanh
                        </span>
                    </Link>
                </div>
                <div className="flex items-center p-[16px] hover:rounded-3xl hover:bg-neutral-100 rounded-none py-[6px]">
                    <Link to={"/gifs"} className="flex items-center">
                        <span>
                            <AiFillFire />
                        </span>
                        <span className="pl-[8px] pr-[20px]" href="">
                            GIF
                        </span>
                    </Link>
                </div>
                <div className="flex items-center pr-[8px] border-2 text-[#191b26] rounded-full p-[10px]">
                    

                    <button>Lựa chọn của biên tập viên</button>
                    <span className="ml-2">
                        <BsChevronDown />
                    </span>
                    
                </div>
            </div>
            <div className="w-1/12"></div>
        </div>
    );
}
