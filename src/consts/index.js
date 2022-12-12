import {
  BsFillHouseDoorFill,
  BsCameraVideoFill,
  BsSoundwave,
  BsMusicNote,
} from "react-icons/bs";
import { MdPhotoCamera } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import { AiFillFire } from "react-icons/ai";

export const categories = () => [
  {
    to: "/",
    icon: <BsFillHouseDoorFill />,
    text: "Home",
    // isActive: currentPath === "/",
  },
  {
    to: "/photos",
    icon: <MdPhotoCamera />,
    text: "Photos",
    // isActive: currentPath.includes("photo"),
  },
  {
    to: "/illustrations",
    icon: <RiPencilFill />,
    text: "Illustrations",
    // isActive: currentPath.includes("illustrations"),
  },
  {
    to: "/vectors",
    icon: <RiPencilFill />,
    text: "Vectors",
    // isActive: currentPath.includes("vectors"),
  },
  {
    to: "/videos",
    icon: <BsCameraVideoFill />,
    text: "Videos",
    // isActive: currentPath.includes("videos"),
  },
  {
    to: "/musics",
    icon: <BsMusicNote />,
    text: "Musics",
    // isActive: currentPath.includes("musics"),
  },
  {
    to: "/sound-effects",
    icon: <BsSoundwave />,
    text: "Hiệu ứng âm thanh",
    // isActive: currentPath.includes("sound-effects"),
  },
  {
    to: "/gifs",
    icon: <AiFillFire />,
    text: "GIF",
    // isActive: currentPath.includes("gifs"),
  },
];
