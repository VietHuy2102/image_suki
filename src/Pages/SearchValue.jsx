import React from "react";
import LogoIcon from "../components/Icons/iconsLogo.svg";
import { IoSearch } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { HiOutlineArrowUpOnSquare } from "react-icons/hi2";
import noavatar from "../images/noAvatar.webp";
import { DiscoveryAction } from "../components/Header/DiscoveryAction";
import { useParams,Link } from "react-router-dom";
import { useState,useRef,useEffect  } from "react";
import Tippy from "@tippyjs/react";
import debounce from "lodash.debounce";


export default function SearchValue() {
  const { q } = useParams();
  const [value, setValue] = React.useState(q || "");
  const [type, setType] = React.useState("all");
  const [images, setImages] = React.useState([]);

  const [query, setQuery] = useState(value);

  React.useEffect(() => {
    fetch(`https://pixabay.com/api/?key=31718039-0b39a37e5651c10242aa06ed7&q=${query
      .split(" ")
      .join("+")}&image_type=${type}
    `)
      .then((response) => response.json())
      .then(({ hits }) => setImages(hits));
    
  }, [query, type]);
  

  const ChangevalueInput = (e) => {
    setValue(e.target.value);
  };
  const debounceOnChange = useRef(debounce(setQuery, 2000)).current;

  
  useEffect(() => {
    debounceOnChange(value);
  }, [value]);

  return (
    <>
      <div className="flex">
        <div className=" w-1/12 p-3">
          <div className="w-[116px] h-8 ">
            <Link to={"/"} className="cursor-pointer">
            <img src={LogoIcon} />
            </Link>
          </div>
        </div>
        <div className=" w-4/12 p-2 ml-[25px]  ">
          {/* Search */}
          <form className="relative ">
            <span className="absolute top-[10px] border-none left-[15px]   ">
              <IoSearch />
            </span>
            <input
              value={value}
              onChange={ChangevalueInput}
              type="search"
              className="w-[400px] p-1 pl-10  border-2 bg-[#f7f7f7]"
              placeholder="Tìm kiếm"
            />
            <Tippy
              className=" w-[180px]  h-[400px]"
              trigger="click"
              interactive
              placement="bottom-start"
              offset={[-110, 5]}
              theme={"black"}
              hideOnClick={true}
              arrow={false}
              content={
                <div>
                  {/* <div className="flex items-center p-2 hover:bg-[#22242f] hover:text-white rounded-none cursor-pointer ">
                    <span className="px-3">Ảnh</span>
                  </div>
                  <div className="flex items-center p-2 ml-5  hover:bg-[#22242f] hover:text-white rounded-none cursor-pointer">
                    <span className="px-3">Ảnh</span>
                  </div>
                  <div className="flex items-center p-2 ml-5 hover:bg-[#22242f] hover:text-white rounded-none cursor-pointer">
                    <span className="px-3">Đồ họa Vector</span>
                  </div>
                  <div className="flex items-center p-2 ml-5 hover:bg-[#22242f] hover:text-white rounded-none cursor-pointer">
                    <span className="px-3">Minh Họa</span>
                  </div> */}
                  <div className="flex items-center p-2 hover:bg-[#22242f] hover:text-white rounded-none cursor-pointer ">
                  <select name="" id="" className="bg-black focus:outline-none w-full">
                    <option value="">Ảnh</option>
                    <option value="">Đồ họa Vector</option>
                    <option value="">Minh Họa</option>
                  </select>
                 </div>
                  <div className="flex items-center p-2 hover:bg-[#22242f] hover:text-white rounded-none cursor-pointer">
                    <a className="pl-[8px]" href="">
                      Video
                    </a>
                  </div>
                  <div className="flex items-center p-2 hover:bg-[#22242f] hover:text-white rounded-none cursor-pointer">
                    <a className="pl-[8px]" href="">
                      Âm nhạc
                    </a>
                  </div>
                  <div className="flex items-center p-2 hover:bg-[#22242f] hover:text-white rounded-none cursor-pointer">
                    <a className="pl-[8px]" href="">
                      Hiệu ứng âm thanh
                    </a>
                  </div>
                  <div className="flex items-center p-2 hover:bg-[#22242f] hover:text-white rounded-none cursor-pointer">
                    <a className="pl-[8px] pr-[20px]" href="">
                      GIF
                    </a>
                  </div>
                  <div className="flex items-center p-2 hover:bg-[#22242f] hover:text-white rounded-none cursor-pointer">
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
                className="absolute flex items-center top-[6px] right-[118px] pl-2 bg-white hover:text-black"
              >
                Ảnh
                <span className="px-[3px]">
                  <BsChevronDown />
                </span>
              </button>
            </Tippy>
          </form>
        </div>
        <div className="flex w-7/12 justify-end">
          <div className="p-2 ">
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
                <button className="flex items-center justify-center mt-[6px]  ml-[20px] bg-white hover:bg-neutral-100 hover:rounded-3xl rounded-none w-10 h-10 ">
                  <IoIosNotifications size={25} />
                </button>
              </Tippy>
            </Tippy>
          </div>
          <div>
            <button className=" flex items-center justify-center mt-[6px]  ml-[20px] hover:bg-neutral-100 hover:rounded-3xl  w-10 h-10 ">
              <img className="rounded-full" src={noavatar} alt="avatar" />
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
      <div className="grid grid-cols-6 gap-2">
        {images.map(({ webformatURL }) => {
          return (
            <div>
              <img
                src={webformatURL}
                className="w-[250px] h-auto transition object-cover ease-in-out"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
