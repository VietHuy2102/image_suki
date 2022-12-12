import React, { useState, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { MdBookmarkAdd } from "react-icons/md";
import Tippy from "@tippyjs/react";

export default function SlideVideo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const res = await fetch(
      "https://pixabay.com/api/videos/?key=31718039-0b39a37e5651c10242aa06ed7&q=girl&pretty=true"
    );
    const { hits } = await res.json();
    setData(hits);
  };

  const stopVideo = (e) =>{
    e.target.pause()
  }
  const playVideo =(e) =>{
    e.target.play()
  }
  
  return (
    <div className="flex">
      <div className="w-1/12" />
      <div className="w-10/12 grid grid-cols-4 gap-4  ">
        {data.map(({ videos }, id) => {
          return (
            <div className=" overflow-hidden relative group " key={id}>
              <video controls onMouseOut={stopVideo} onMouseOver={playVideo}>
                <source src={videos?.large.url}></source>
              </video>
              <div className="hidden group-hover:block">
                <Tippy content="Add to collection" placement="bottom">
                  <div className="absolute top-2 left-4 text-white cursor-pointer">
                    <MdBookmarkAdd size={30} />
                  </div>
                </Tippy>
                <Tippy content="Thích" placement="bottom">
                  <div className="absolute top-2 left-12 text-white cursor-pointer">
                    <AiFillHeart size={30} />
                  </div>
                </Tippy>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-1/12" />
    </div>
  );
}
