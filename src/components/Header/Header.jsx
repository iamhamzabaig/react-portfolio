import React from "react";
import { HomeIcon, UserIcon, CogIcon } from "@heroicons/react/24/solid";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Header() {
  const icons = [
    { Icon: HomeIcon, label: "Home" },
    { Icon: UserIcon, label: "User" },
    { Icon: CogIcon, label: "Settings" },
  ];

  return (
    <div className="w-[6rem] h-screen fixed right-0 top-0 flex flex-col items-center justify-between bg-white dark:bg-secondaryDarkBg py-4 shadow-lg">
      <div className="mb-auto">
        <ThemeToggle />
      </div>

      <div className="flex flex-col items-center justify-center space-y-8 my-auto">
        {icons.map(({ Icon, label }) => (
          <Icon
            key={label}
            aria-label={label}
            className="dark:text-white w-6 h-6 cursor-pointer hover:text-orangetxt dark:hover:text-orangetxt transition-all ease-in-out duration-500"
          />
        ))}
      </div>
    </div>
  );
}

export default Header;
