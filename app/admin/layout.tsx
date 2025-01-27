import Header from "@/components/admin/layout/header/Header";
import Navbar from "@/components/admin/layout/navbar/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`grid grid-rows-[auto,1fr] xl:grid-cols-[auto,1fr] h-[100vh] w-[100vw]`}
    >
      {/* <div className="w-full h-full bg-green-300 col-span-2"></div> */}
      <Header />
      <Navbar />{" "}
      <main className="w-full h-full bg-blue-300 overflow-y-scroll">
        {children}
      </main>{" "}
    </div>
  );
}
