import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function Example() {
  const { i18n, t } = useTranslation();
  var language;
  if (typeof window !== "undefined") {
    language = localStorage.getItem("language");
  }

  const people = [
    {
      name: t("language.en"),
      key: "en",
      icon: "/assets/Icon/locales/en_ic.png",
    },
    {
      name: t("language.vi"),
      key: "vi",
      icon: "/assets/Icon/locales/vi_ic.png",
    },
  ];

  const handleChangeLanguage = (lng) => {
    localStorage.setItem("language", lng.key);
    i18n.changeLanguage(lng.key);
  };

  const [selected, setSelected] = useState(
    people.filter((item) => item.key == language)?.[0] || people[0]
  );

  useEffect(() => {
    language && setSelected(people.filter((item) => item.key == language)?.[0]);
  }, [language]);

  const genFlag = (src) => {
    return (
      <div className="p-2 lg:p-0 md:h-7 md:w-7 h-12 w-12 flex items-center">
        <Image src={src} width={250} height={170} alt="Flag icon" />
      </div>
    );
  };

  return (
    <div className="relative w-48 bg-white-500">
      <Listbox value={selected} onChange={handleChangeLanguage}>
        <div className="relative mt-1 justify-end flex">
          <Listbox.Button
            className="relative w-16 cursor-pointer bg-white-500 
          py-2 px-2 text-left focus:outline-none focus-visible:border-indigo-500 
          focus-visible:ring-2 focus-visible:ring-white-500/75 focus-visible:ring-offset-2 
          focus-visible:ring-offset-orange-300 sm:text-sm text-black-500 hover:opacity-70
          "
          >
            <span className="truncate flex items-center">
              {genFlag(selected.icon)}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
              <ChevronDownIcon className="h-5 w-5 " aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className="absolute top-16 sm:top-10 mt-1 max-h-60 w-full overflow-auto 
            rounded-md bg-white-500 py-1 text-base ring-1 ring-black-600/5
             focus:outline-none sm:text-sm"
            >
              {people.map((person, personIdx) => {
                const isActive = person.key === selected.key;
                return (
                  <Listbox.Option
                    key={personIdx}
                    className={`relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      isActive
                        ? "text-orange-500 bg-orange-100 hover:text-orange-300"
                        : "text-black-500 hover:text-orange-300"
                    }`}
                    value={person}
                  >
                    {({ selected }) => {
                      return (
                        <>
                          <span
                            className={`truncate flex flex-row items-center ${
                              isActive ? "font-medium" : "font-normal"
                            }`}
                          >
                            {genFlag(person.icon)}
                            <div className="pl-3">{person.name}</div>
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
