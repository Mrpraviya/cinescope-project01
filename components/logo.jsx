//Module exporting the Logo component

// export function Logo({className = "w-8 h-8"}) {
//   return (
//     <svg   height="35" width="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 35" fill="none" className={className}>
//         <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.5 14.25a1.5 1.5 0 1 0-3 0v-6a1.5 1.5 0 1 0-3 0v6a4.5 4.5 0 0 0 4.5 4.5h6a1.5 1.5 0 1 0 0-3h-6z"
//         clipRule="evenodd"
//         className="fill-primary"
//         />
//     </svg>

//   );
// }

import Image from "next/image";
import MyLogo from "./logo.svg";

export function Logo({ className = "w-8 h-8" }) {
  return <Image src={MyLogo} alt="Logo" className={className} />;
}
