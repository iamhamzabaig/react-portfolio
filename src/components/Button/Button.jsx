import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

function Button({ label, icon }) {
  let IconComponent;

  if (icon === "download") {
    IconComponent = ArrowDownTrayIcon;
  }

  return (
    <button className="bg-orangetxt px-12 py-2 border-none outline-offset-2 outline-orange-400 outline-2 focus:outline flex items-center gap-2">
      {label}
      {IconComponent && <IconComponent className="w-5 h-5" />}
    </button>
  );
}

export default Button;
