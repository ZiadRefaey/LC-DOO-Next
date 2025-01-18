import { ReactNode } from "react";

export default function NavWrapper({ children }: { children: ReactNode }) {
  return (
    <header className="w-full sticky bg-transparent ">
      <nav className="w-full">
        <ul className="w-full max-w-[1280px] m-auto hidden xl:flex items-center justify-between">
          {children}
        </ul>
      </nav>
    </header>
  );
}
