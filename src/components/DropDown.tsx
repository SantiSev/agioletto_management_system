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
          "translate-x-[-25%] w-fit p-3 mt-2 bg-orange-500 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        }
      >
        <MenuItem>
          <a className="cursor-pointer flex gap-1 w-fit px-2" href="/license">
            <div className="text-2xl text-white shadow-lg">
              <PiSignOutBold />
            </div>
            <div className="font-sans text-white font-semibold">Log Out</div>
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
