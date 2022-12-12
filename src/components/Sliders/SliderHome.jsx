import React, { useState, useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { MdBookmarkAdd } from "react-icons/md";
import Tippy from "@tippyjs/react";

export default function SliderHome() {
  const [data, setData] = useState([]);
  const [favourite, setFavourite] = useState(false);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const res = await fetch(
      "https://pixabay.com/api/?key=31718039-0b39a37e5651c10242aa06ed7&q=yellow+flowers&image_type=photo&pretty=true"
    );
    const { hits } = await res.json();
    setData(hits);
  };

  const ToggleFavourite = () => {
    setFavourite(!favourite);
  };

  return (
    <div className="flex">
      <div className="w-1/12" />
      <div className="w-10/12 grid grid-cols-4 gap-4  ">
        {data.map(({ largeImageURL, pageURL }, id) => {
          return (
            <div className="even:row-span-4 overflow-hidden relative group ">
              <a href={pageURL}>
                <img
                  src={largeImageURL}
                  alt={id}
                  key={id}
                  className="h-full transition object-cover ease-in-out hover:scale-110"
                />
              </a>
              <div className="hidden group-hover:block">
                <Tippy content="Add to collection" placement="bottom">
                  <div className="absolute top-2 left-4 text-white cursor-pointer">
                    <MdBookmarkAdd size={30} />
                  </div>
                </Tippy>
                <div>
                  {favourite ? (
                    <Tippy content="Thích" placement="bottom">
                      <div
                        className="absolute top-2 left-12  text-white cursor-pointer"
                        onClick={ToggleFavourite}
                      >
                        <AiFillHeart size={30} className="bg-[#00ab6b]" />
                      </div>
                    </Tippy>
                  ) : (
                    <Tippy content="Thích" placement="bottom">
                      <div
                        className="absolute top-2 left-12  text-white cursor-pointer"
                        onClick={ToggleFavourite}
                      >
                        <AiFillHeart size={30} />
                      </div>
                    </Tippy>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-1/12" />
    </div>
  );
}
