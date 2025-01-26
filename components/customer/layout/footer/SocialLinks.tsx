import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
const mediaIconsStyling =
  "size-8 hover:text-primary-text hover:translate-y-[-2px] transition-all duration-150 cursor-pointer";
const socialMediaLinks = [
  {
    icon: <FaFacebookSquare className={mediaIconsStyling} />,
    href: "https://www.facebook.com/",
  },
  {
    icon: <FaInstagram className={mediaIconsStyling} />,
    href: "https://www.instagram.com/",
  },
];
export default function SocialLinks() {
  return (
    <div className="flex gap-4 text-primary-text-soft">
      {socialMediaLinks.map((link) => (
        <a href={link.href} key={link.href} target="_blank">
          {link.icon}
        </a>
      ))}
    </div>
  );
}
