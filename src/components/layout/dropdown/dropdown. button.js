/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineCaretDown } from "react-icons/ai";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// used headless ui to handle the dropdown button and not with core js

export default function SortButton() {
  return (
    <Menu as="div" className="relative inline-block md:mr-[80px] mr-[50px] text-left">
      <Menu.Button
        className="md:inline-flex hidden justify-center w-full rounded-md border border'
         border-[#1AA952] shadow-sm px-4 py-2 bg-white text-sm font-medium text-[#1AA952]
          hover:bg-gray-50 focus:outline-none "
      >
        Sort
        <AiOutlineCaretDown className="-mr-1 ml-2 h-5 w-5" />
      </Menu.Button>

      {/* css transition dropdown  effect */}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {/* sets the menu item in the dropdown */}
        <Menu.Items className="origin-top-left absolute left-0 mt-2 md:w-40 z-30 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none">
          <div className="">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Settings
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
