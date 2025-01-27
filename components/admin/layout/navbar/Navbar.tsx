import { SiGoogleanalytics } from "react-icons/si";
import { GiAmpleDress } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";
import { FaScissors, FaPeopleGroup } from "react-icons/fa6";
import NavLink from "./NavLink";
const iconStyling = "group-hover:text-primarys";
const navigationLinks = [
  {
    path: '/admin/dashboard"',
    title: "Dashboard",
    icon: <SiGoogleanalytics className={iconStyling} />,
  },
  {
    path: '/admin/products"',
    title: "Products",
    icon: <GiAmpleDress className={iconStyling} />,
  },
  {
    path: '/admin/orders"',
    title: "Orders",
    icon: <MdAttachMoney className={iconStyling} />,
  },
  {
    path: '/admin/projects"',
    title: "Projects",
    icon: <FaScissors className={iconStyling} />,
  },
  {
    path: '/admin/customers"',
    title: "Customers",
    icon: <FaPeopleGroup className={iconStyling} />,
  },
];

//flex items-center justify-center h-[99%] my-5 mx-10 w-full self-center flex-col shadow-md bg-card-background rounded-xl max-w-[80%]
export default function Navbar() {
  return (
    <nav className="w-full h-full pb-10 px-10 flex items-start justify-center">
      <ul className="h-full w-full rounded-xl bg-card-background flex flex-col items-start justify-start px-4 py-2 shadow-lg">
        {navigationLinks.map((link) => (
          <NavLink
            href={link.path}
            icon={link.icon}
            linkTitle={link.title}
            key={link.path}
          />
        ))}
      </ul>
    </nav>
  );
}
