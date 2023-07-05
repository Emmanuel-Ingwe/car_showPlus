"use client"

import React, { useState } from 'react'
import SearchManufacturer from '../SearchManufacturer'

import { SearchManufacturerProps } from '@/types' 


type Props = {}

const SearchBar = (props: Props) => {
    const [manufacturer, setManufacturer] = useState

    const handleSearch = () => {
    }


  return (
    <form action="" onSubmit={handleSearch} className="searchbar">
        <div className="searchbar__item">
            <SearchManufacturer
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
            />
        </div>
    </form>
  )
}

export default SearchBar