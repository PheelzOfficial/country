// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

// const Search = (datas, setSearchResults) => {
//     const handlesubmit = (e) => e.preventDefault();
//     const handleSearchChange = (e) =>{
//         if(!e.target.value){
//             return setSearchResults(datas)
//         }
//             const resultArray = datas.filter(data=> data.includes(e.target.value) || data.includes(e.target.value))
        
//             setSearchResults(resultArray)
//     }
//   return (
//     <div>
//     <form action="" className="search" onSubmit={handlesubmit}>
//     <input type="text" onChange={handleSearchChange} id='search' className="search_input" />
//     <button className="search_button">
//     <FontAwesomeIcon icon={faMagnifyingGlass} />
//     </button>
//     </form>
//     </div>
//   )
// }

// export default Search

import React from 'react'
import { useState } from 'react';
import All from '../All';

const Search = (details) => {
    const [searchField, setSearchField] = useState("");
    const [searchShow, setSearchShow] = useState(false);
    
    const handleChange = e => {
      setSearchField(e.target.value);
      if(e.target.value===""){
        setSearchShow(false);
      }
      else {
        setSearchShow(true);
      }
    };

    const filteredPersons = details.filter(
      data => {
        return (
          data
          .name.official
          .toLowerCase()
          .includes(searchField.toLowerCase())
          );
      }
    );
  
    function searchList() {
    if (searchShow) {
        return (
            <div>
                <All filteredPersons={filteredPersons} />
            </div>
        );
    }
    return (
        <section className="garamond">
                <div className="navy georgia ma0 grow">
                    <h2 className="f2">Search Countries</h2>
                </div>
                <div className="pa2">
                    <input 
                        className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                        type = "search" 
                        placeholder = "Search People" 
                        onChange = {handleChange}
                    />
                </div>
                {searchList()}
            </section>
      );
}
}




export default Search