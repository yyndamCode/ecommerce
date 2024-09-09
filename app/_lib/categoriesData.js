import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { PiDesktopLight } from "react-icons/pi";
import { IoWatchOutline } from "react-icons/io5";
import { VscGame } from "react-icons/vsc";
import { GiHeadphones } from "react-icons/gi";
import { PiCameraLight } from "react-icons/pi";

const categories = [
  { id: 1, name: "Phones", icon: <HiOutlineDevicePhoneMobile /> },
  { id: 2, name: "Gaming", icon: <VscGame /> },
  { id: 3, name: "HeadPhones", icon: <GiHeadphones /> },
  { id: 4, name: "Camera", icon: <PiCameraLight /> },
  { id: 5, name: "SmartWatch", icon: <IoWatchOutline /> },
  { id: 6, name: "Computers", icon: <PiDesktopLight /> },
];
export default categories;
