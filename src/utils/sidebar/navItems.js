import { GoHomeFill } from "react-icons/go";
import { GrMail } from "react-icons/gr";
import { BsExclamationSquareFill } from "react-icons/bs";

const homeIcon = GoHomeFill();
const contactIcon = GrMail();
const aboutIcon = BsExclamationSquareFill();

const NavItems = [
  {
    id: 1,
    name: "Home",
    image: homeIcon,
  },
  {
    id: 2,
    name: "Sobre",
    image: aboutIcon,
  },
  {
    id: 3,
    name: "Contato",
    image: contactIcon,
  },
];

export default NavItems;
