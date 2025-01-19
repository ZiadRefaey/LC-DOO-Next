// import React from "react";

// export default function Color({ color }: { color: string }) {
//   return (
//     <div className="group relative size-12 rounded-full border-primary bg-red-500 -z-10 contain-content">
//       <div
//         style={{ backgroundColor: `rgba(var(--${color}))` }}
//         className="left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] absolute size-7 md:size-10 border-2 border-transparent transition-all duration-750 group-hover:scale-75 rounded-full "
//       ></div>
//     </div>
//   );
// }
import React from "react";

export default function Color({ color }: { color: string }) {
  return (
    <div
      style={{ backgroundColor: `rgba(var(--${color}))` }}
      className=" size-7 md:size-10 border-2 border-transparent transition-all duration-750  rounded-full "
    ></div>
  );
}
