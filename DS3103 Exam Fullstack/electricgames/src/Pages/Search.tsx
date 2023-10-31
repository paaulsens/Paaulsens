import { useState } from 'react';

import Logo from '../Components/Logo'
import Navbar from '../Components/Navbar/Navbar_Search';
import Searchbar from '../Components/SearchPage/Searchbar';
import Games_ByTitle from '../Components/Games/Games_ByTitle';
import Hr from '../Components/Hr';

import '../Css/Search.css';

const Search = () => {
  
  const [input, setInput] = useState<string>('')

  const [sortFilter, setSortFilter] = useState<string>('id-asc')

  const sortId = () => {
    if(sortFilter === "id-asc"){
      setSortFilter("id-desc")
    }else{
      setSortFilter("id-asc")
    }
  }

  const sortTitle = () => {
    if(sortFilter === "title-asc"){
      setSortFilter("title-desc")
    }else{
      setSortFilter("title-asc")
    }
  }

  const sortDev = () => {
    if(sortFilter === "dev-asc"){
      setSortFilter("dev-desc")
    }else{
      setSortFilter("dev-asc")
    }
  }

  const sortYear = () => {
    if(sortFilter === "year-asc"){
      setSortFilter("year-desc")
    }else{
      setSortFilter("year-asc")
    }
  }

  return (
    <div>
      <Logo />
      <Navbar />
      <Searchbar setInput={setInput}/>
      <Hr legend="Sort by"/>
      
      <div>
        <div className="wrapper sort-options">
          <p onClick={sortId} className="grid-three yellowlink sort-option">Id<br/>↑↓</p>
          <p onClick={sortTitle} className="grid-three yellowlink sort-option">Title<br/>↑↓</p>
          <p onClick={sortDev} className="grid-three yellowlink sort-option">Developer<br/>↑↓</p>
          <p onClick={sortYear} className="grid-three yellowlink sort-option">Release<br/>↑↓</p>
        </div>
      </div>

      <div className="justify-content-center">
        <div className="searchresults justify-content-center">
          <Games_ByTitle input={input} sortBy={sortFilter}/>
        </div>
      </div>
    </div>
  );
}

export default Search;