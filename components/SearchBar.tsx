"use client"
import { useState } from "react"
import SearchProjects from "./SearchProjects"

const SearchBar = () => {
    const [project, setProject] = useState('')

    const handleSearch = () => { }

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            {/* Implementing a combobox"auto complete search" */}
            <div className="searchbar__item">
                <SearchProjects 
                    project={project}
                    setProject={setProject}
                />
            </div>
        </form>
    )
}

export default SearchBar