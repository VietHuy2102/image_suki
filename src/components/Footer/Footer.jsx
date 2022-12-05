import React from "react";
import LogoIcon from "../Icons/iconsLogo.svg";
import { BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";

export default function Footer() {
    const LinkName = ({ name }) => {
        return (
            <div className="pt-2 hover:decoration-1 hover:underline ">
                <a href="">{name}</a>
            </div>
        );
    };
    return (
        <div>
            <div className="Slider relative w-[1519px] h-[459px] border-t">
                <div className="w-[1215px] h-[273px] absolute top-[64px] left-[152px] ">
                    <div className="w-[759px] py-[24px]">
                        <img className="w-[116px] h-8" src={LogoIcon} alt="" />
                    </div>
                    <span className="py-[24px]">
                        Khám phá trên 3 triệu hình ảnh và video được chia sẻ bởi
                        cộng đồng hào phóng của chúng tôi
                    </span>
                    <div className="flex  py-[24px]  h-[72px]">
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
                <div className="w-[480px] h-[273px] absolute top-[64px] left-[887px]">
                    <div className="flex">
                        <div className=" w-1/3 ">
                            <p>Discover</p>
                            <LinkName name="Editor's Choice" />
                            <LinkName name="Bộ sưu tập được tuyển chọn" />
                            <LinkName name="Hình ảnh phổ biến" />
                            <LinkName name="Video phổ biến" />
                            <LinkName name="Nhạc phổ biến" />
                            <LinkName name="Các tìm kiếm phổ biến" />
                        </div>
                        <div className="w-1/3">
                            <p>Cộng Đồng</p>
                            <LinkName name="Blog" />
                            <LinkName name="Diễn Đàn" />
                            <LinkName name="Creators" />
                            <LinkName name="Máy Ảnh" />
                        </div>
                        <div className="w-1/3">
                            <p>Giới thiệu</p>
                            <LinkName name="Thông tin về chúng tôi" />
                            <LinkName name="FAQ" />
                            <LinkName name="Giấy phép" />
                            <LinkName name="Điều khoản dịch vụ" />
                            <LinkName name="Chính sách bảo mật" />
                            <LinkName name="Cookies Policy" />
                            <LinkName name="API" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
