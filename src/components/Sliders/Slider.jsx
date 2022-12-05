import React, { useState, useEffect } from "react";

export default function Slider() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchApi();
    }, []);

    const fetchApi = async () => {
        const res = await fetch(
            "https://pixabay.com/api/?key=31718039-0b39a37e5651c10242aa06ed7&q=yellow+flowers&image_type=photo&pretty=true"
        );
        const data = await res.json();
        const { hits } = data;
        setData(hits);
    };
    
    return (
        <div className="flex">
            <div className="w-1/12"></div>
            <div className="w-10/12 flex flex-wrap ">
                {data.map(({ webformatURL }, id) => {
                    return (
                        <>
                            <img
                                src={webformatURL}
                                alt={id}
                                key={id}
                                className=" max-w-sm w-[25%] h-auto p-3 transition ease-in-out  hover:-translate-y-1 hover:scale-110"
                            />

                        </>
                    );
                })}
            </div>
            <div className="w-1/12"></div>
        </div>
    );
}
