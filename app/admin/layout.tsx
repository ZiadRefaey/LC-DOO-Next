export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`grid grid-rows-[82px,1fr] xl:grid-cols-[266px,1fr] h-[100vh] w-[100vw]`}
    >
      <div className="w-full h-full bg-green-300 col-span-2"></div>
      <div className="w-full h-full bg-red-300"></div>
      <main className="w-full h-full bg-blue-300 overflow-y-scroll ">
        {children}
      </main>{" "}
    </div>
  );
}
