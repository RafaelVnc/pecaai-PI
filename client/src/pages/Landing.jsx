import React from 'react'
import HeaderTop from '../components/HeaderTop'
import SearchInput from '../components/SearchInput';
import EstablishmentList from '../components/EstablishmentList';

const Landing = () => {
  return (
    <>
      <HeaderTop />
      <div className='landing__main-container'>
        <div className='landing__search-wrapper'>
          <SearchInput />
        </div>
        <div className='landing__left-content'>
          <h1 className="landing__titles">Principais estabelecimentos</h1>
        </div>
          <EstablishmentList />
      </div>
    </>
  )
}

export default Landing;