import Image from "next/image";
import heroImg from "@/public/hero-img.png";
export default function ImagePanel() {
  return (
    <div className="flex items-center justify-center">
      <div className=" w-[327px]  h-[198px] md:w-[688px] md:h-[411px] xl:h-[358px] xl:w-[600px]  relative  -z-1">
        <Image
          fill
          src={heroImg}
          alt="hero goods image"
          className="object-cover "
        />
      </div>
    </div>
  );
}
