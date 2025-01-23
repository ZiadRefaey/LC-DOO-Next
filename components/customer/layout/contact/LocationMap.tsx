import React from "react";

export default function LocationMap() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d214.19006363699597!2d31.003436968396816!3d30.801483996035127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2LTYp9ix2Lkg2KfZhNit2YTZiNiMIFRhbnRhIFFpc20gMiwgU2Vjb25kIFRhbnRh!5e0!3m2!1sen!2seg!4v1737652450821!5m2!1sen!2seg"
      className="w-full h-[551px] md:h-[366px] xl:h-[551px] rounded-xl"
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
