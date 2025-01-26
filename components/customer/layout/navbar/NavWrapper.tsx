import { ReactNode } from "react";

export default function NavWrapper({ children }: { children: ReactNode }) {
  return (
    <header className="w-full sticky bg-transparent  mt-6 md:mt-10  mb-[60px] m-auto xl:mb-[100px]">
      <nav className="w-full">
        <ul className="w-full max-w-[1240px] m-auto hidden xl:flex items-center justify-between">
          {children}
        </ul>
      </nav>
    </header>
  );
}
