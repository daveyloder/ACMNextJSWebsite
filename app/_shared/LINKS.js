// Main Nav Links

import {
  FaTwitter,
  FaFacebook,
  FaGithub,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";

export const NAVLINKS = [
  { id: 2, name: "About", href: "/#about" },
  { id: 3, name: "Events", href: "/#events" },
];

export const SOCIALLINKS = [
  {
    id: 1,
    name: "Twitter",
    href: "https://twitter.com/TempleACM",
    FaIcon: FaTwitter,
  },

  {
    id: 2,
    name: "Facebook",
    href: "https://www.facebook.com/TempleACM/",
    FaIcon: FaFacebook,
  },
  {
    id: 3,
    name: "Github",
    href: "https://discord.com/",
    FaIcon: FaGithub,
  },
  {
    id: 4,
    name: "Discord",
    href: "",
    FAIcon: FaDiscord,
  },
  {},
];
