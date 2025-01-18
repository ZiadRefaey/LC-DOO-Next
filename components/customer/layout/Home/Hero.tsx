import React from "react";
import Section from "../Section";
import TextPanel from "./TextPanel";
import ImagePanel from "./ImagePanel";

export default function Hero() {
  return (
    <Section
      className={
        "grid grid-cols-1 xl:grid-cols-2 py-10 items-center justify-center  relative gap-10 max-w-[1280px]"
      }
    >
      <TextPanel />
      <ImagePanel />
    </Section>
  );
}
