import React from "react";

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-rows-[1fr,68px] xl:grid-rows-1 xl:grid-cols-[295px,1fr] gap-y-10 gap-x-8 max-w-[1240px] m-auto py-10">
      {children}
    </div>
  );
}
