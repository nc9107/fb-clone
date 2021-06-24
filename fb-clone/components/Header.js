import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

function Header() {
  return (
    //   Styling so that header bar sticks to the top even when scrolling and there is a shadow affect at the bottom
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px shadow-md">
      {/* Left */}
      <div className="flex items-center">
        {/* Does lazy loading which means it only loads up when 
            the user scrolls up to it and not when it is on the screen */}
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2 ">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none 
            placeholder-gray-500 flex-shrink"
            type="text"
            placeHolder="Search Facebook"
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        {/* Smaller screen space of 6 and as it grows space of 2 */}
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active={true} Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}
      <div>
        {/* Profile Pic */}

        <p className="whitespace-nowrap front-semibold pr-3">
          Nishanth Chaganty
        </p>
      </div>
    </div>
  );
}

export default Header;
