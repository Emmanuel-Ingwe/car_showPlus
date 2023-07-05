import React from 'react'
import SearchManufacturer from '../SearchManufacturer'

type Props = {}

const SearchBar = (props: Props) => {
    const handleSearch = () => {

    }


  return (
    <form action="" onSubmit={handleSearch} className="searchbar">
        <div className="searchbar__item">
            <SearchManufacturer />
        </div>
    </form>
  )
}

export default SearchBar