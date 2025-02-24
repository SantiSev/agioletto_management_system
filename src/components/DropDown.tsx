import { PiSignOutBold } from "react-icons/pi";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

interface DropDownProps {
  children: React.ReactNode;
}

export function DropDown({ children }: DropDownProps) {
  return (
    <Menu>
      <MenuButton>
        <div className="mt-1">{children}</div>
      </MenuButton>
      <MenuItems
        anchor="bottom"
        className={
          "translate-x-[-25%] w-fit px-4 p-3 mt-4 bg-orange-500 bg-opacity-90 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-30"
        }
      >
        <MenuItem>
          <a className="cursor-pointer flex gap-1 w-fit px-2 ">
            <div className="text-2xl text-white shadow-lg">
              <PiSignOutBold />
            </div>
            <div className="font-sans text-white font-semibold whitespace-nowrap">Log Out</div>
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
