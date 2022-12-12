import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Note() {
    return (
        <div className="flex">
            <div className="w-1/12"></div>
            <div className=" flex w-10/12 border-t-2 py-[80px]">
                <div className="w-1-12">
                    <div className="flex items-center justify-center w-[50px] h-[50px] bg-[#e5f6f0] rounded-full">
                        <FaHeart className="text-[#00ab6b] text-sm" />
                    </div>
                </div>
                <div className="w-11/12 pl-6">
                    <h5 className="font-bold leading-6 pb-4 text-[#191b26]">
                        Free media you can use anywhere
                    </h5>
                    <span className="flex text-sm leading-6 pb-6 text-[#656f79]">
                        Pixabay is a vibrant community of creatives, sharing
                        royalty free images, videos and music. All content is
                        released under the Pixabay License, which makes them
                        safe to use without asking for permission or giving
                        credit to the artist - even for commercial purposes.
                    </span>
                    <div className="inline-block hover:bg-[#00ab6b1a] p-2 rounded-[8px]">
                        <a className="text-[#00ab6b] text-center text-sm leading-[21px] font-semibold">
                            Learn more about our license
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-1/12"></div>
        </div>
    );
}
