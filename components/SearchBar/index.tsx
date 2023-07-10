"use client"

import Image from 'next/image'

import React, { useState } from 'react'
import SearchManufacturer from '../SearchManufacturer'

import { SearchManufacturerProps } from '@/types' 

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

// const SearchBar = () => {
//   const [manufacturer, setManuFacturer] = useState("");
//   const [model, setModel] = useState("");

//   const router = useRouter();

//   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (manufacturer.trim() === "" && model.trim() === "") {
//       return alert("Please provide some input");
//     }

//     updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
//   };


type Props = {}

const SearchBar = (props: Props) => {
    const [manufacturer, setManufacturer] = useState('')

    const handleSearch = () => {
    }


  return (
    <form action="" onSubmit={handleSearch} className="searchbar">
        <div className="searchbar__item">
            <SearchManufacturer
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
            />

            <SearchButton otherClasses='sm:hidden' />
        </div>
    </form>
  )
}

export default SearchBar