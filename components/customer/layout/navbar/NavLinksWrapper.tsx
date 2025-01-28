import NavLink from "./NavLink";

export default function NavLinksWrapper() {
  return (
    <div className={`flex items-center justify-start gap-4`}>
      <li>
        <NavLink href={"/"} active={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink href={"/store"}>Store</NavLink>
      </li>
      <li>
        <NavLink href={"/contact"}>Contact Us</NavLink>
      </li>
      <li>
        <NavLink href={"/admin/dashboard"}>Admin</NavLink>
      </li>
    </div>
  );
}
