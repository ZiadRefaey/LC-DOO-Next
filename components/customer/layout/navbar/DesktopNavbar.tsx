import NavWrapper from "./NavWrapper";
import NavLinksWrapper from "./NavLinksWrapper";
import NavLogo from "./NavLogo";
import ThemeSwitcher from "./ThemeSwitcher";
import SearchBar from "./SearchBar";
import ShoppingCart from "./ShoppingCart";
import AuthMenu from "./AuthMenu";

export default function DesktopNavbar() {
  return (
    <NavWrapper>
      <div className="flex  items-center justify-start transition-all duration-500 static">
        <NavLogo />
      </div>
      <NavLinksWrapper />
      <div
        className={`flex items-center justify-end gap-4 transition-all duration-500`}
      >
        <SearchBar />
        <ThemeSwitcher />
        <ShoppingCart />
        <AuthMenu />
        {/* {user && (
          <Popover>
            <Popover.Trigger name={"users-nav-avatar"}>
              <AdminAvatar profilePic={user.pfp} />
            </Popover.Trigger>
            <Popover.Content name={"users-nav-avatar"}>
              <ProfilePopoverModal />
            </Popover.Content>
          </Popover>
        )}
        {!user && <AuthButtons />} */}
      </div>
    </NavWrapper>
  );
}
