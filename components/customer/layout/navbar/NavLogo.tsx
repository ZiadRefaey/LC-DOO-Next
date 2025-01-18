import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";

// export default function NavLogo() {
//   return (
//     <li className="mr-3 w-[250px] h-full">
//       <Link href="/" className="w-full h-full relative">
//         <Image src={logo} className="object-cover" fill alt="" />
//       </Link>
//     </li>
//   );
// }

export default function NavLogo() {
  return (
    <Link href={"/"} className="relative w-[160px] h-[29px] ">
      {/* <li className=""> */}
      <Image
        className="object-cover w-full h-full"
        fill
        alt="Logo"
        src={logo}
      />
    </Link>
    // </li>
  );
}
