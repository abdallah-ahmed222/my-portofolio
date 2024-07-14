import { FaFacebook } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

// nav links
export const navLinksData = [
  {
    label: "Home",
    to: "/",
    target: "",
  },
  {
    label: "About",
    to: "/about",
    target: "",
  },
  {
    label: "Works",
    to: "/project",
    target: "",
  },
];
// home linksData
export const homeLinksData = [
  {
    label: "Facebook",
    to: "https://www.facebook.com/profile.php?id=100074432431981&mibextid=ZbWKwL",
    element: <FaFacebook />,
  },
  {
    label: "Linked In",
    to: "https://www.linkedin.com/in/abdallah-ahmed-783512231/",
    element: <FaLinkedinIn />,
  },
  {
    label: "GitHub",
    to: "https://github.com/abdallah-ahmed222",
    element: <FaGithub />,
  },
];
