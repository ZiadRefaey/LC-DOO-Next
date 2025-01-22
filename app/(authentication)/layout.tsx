import Image from "next/image";
import image from "@/public/auth-image.png";
// import Section from "@/components/customer/ui/Section";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full max-h-[100vh] grid grid-cols-1 lg:grid-cols-2 gap-10 ">
      <div className="hidden lg:block w-full h-[calc(100vh-60px)] md:h-[calc(100vh-80px)]">
        <div className="w-full h-full rounded-3xl relative overflow-hidden">
          <Image
            className="object-cover"
            fill
            src={image}
            alt={"authentication image"}
          />
        </div>
      </div>
      <div className="w-full py-0 overflow-scroll max-h-[calc(100vh-60px)] md:max-h-[calc(100vh-80px] scrollbar-none flex items-center justify-center">
        <div className="w-full">{children}</div>
      </div>
    </main>
  );
}
