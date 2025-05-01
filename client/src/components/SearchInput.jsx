import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const SearchInput = () => {
  const handleSearch = () =>{
      console.log("Pesquisando...");
  }
  
  return (
    <div className='landing__search-area'> 
      <input type="search" name="search-input" id="search-input" className='landing__search-input' placeholder='Digite aqui o estabelecimento que você procura!'/>
      <button onClick={handleSearch}><FontAwesomeIcon icon={faSearch} /> </button>
    </div>
  )
}

export default SearchInput