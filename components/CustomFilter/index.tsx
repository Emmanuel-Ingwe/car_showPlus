"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";

// import { CustomFilterProps } from "@types";
// import { updateSearchParams } from "@utils";

type Props = {}

const CustomFilter = ({title, options}: CustomFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]); // State for storing the selected option

  // update the URL search parameters and navigate to the new URL
  const handleUpdateParams = (e: { title: string; value: string }) => {
    // const newPathName = updateSearchParams(title, e.value.toLowerCase());

    // router.push(newPathName);
  };

  return (
    <div className="w-fit">
      <Listbox
      value={selected}
      onChange={(e) => {
        setSelected(e); // Update the selected option in state
        handleUpdateParams(e); // Update the URL search parameters and navigate to the new URL
      }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/cheron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="chevron"
             />
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter