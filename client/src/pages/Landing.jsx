import React, { useEffect, useState } from 'react';
import HeaderTop from '../components/HeaderTop'
import SearchInput from '../components/SearchInput';
import EstablishmentList from '../components/EstablishmentList';
import { getEstabelecimentoArray } from '../assets/database/estabelecimentoArray';


const Landing = () => {
  const [estabelecimentoArray, setEstabelecimentoArray] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await getEstabelecimentoArray();
        setEstabelecimentoArray(data);
      };
  
      fetchData();
    }, []);
  
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
          <EstablishmentList establishmentArray={estabelecimentoArray}/>
      </div>
    </>
  )
}

export default Landing;