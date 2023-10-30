import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";

export default function Example() {
  //   const { t } = useTranslation();
  const people = [
    { name: "Tiếng Anh", key: "en" },
    { name: "Tiếng Việt", key: "vi" },
  ];

  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="relative w-64 bg-white-500">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button
            className="relative w-full cursor-default rounded-lg bg-white-500 
          py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 
          focus-visible:ring-2 focus-visible:ring-white-500/75 focus-visible:ring-offset-2 
          focus-visible:ring-offset-orange-300 sm:text-sm text-black-500"
          >
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 " aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto 
            rounded-md bg-white-500 py-1 text-base shadow-lg ring-1 ring-black-600/5
             focus:outline-none sm:text-sm"
            >
              {people.map((person, personIdx) => {
                const isActive = person.key === selected.key;
                console.log("isActive", isActive, selected, person);
                return (
                  <Listbox.Option
                    key={personIdx}
                    className={`relative cursor-default select-none py-2 pl-10 pr-4 ${
                      isActive
                        ? "text-orange-500 bg-orange-100"
                        : "text-black-500 hover:text-orange-500"
                    }`}
                    value={person}
                  >
                    {({ selected }) => {
                      return (
                        <>
                          <span
                            className={`block truncate ${
                              isActive ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.name}
                          </span>
                          {isActive ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-500">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      );
                    }}
                  </Listbox.Option>
                );
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
