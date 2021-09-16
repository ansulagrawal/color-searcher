import React, { useState } from 'react';
import './Home.css'

function Home() {
   const Searcher = [
      { "id": 1, "color": "blue" },
      { "id": 2, "color": "brown" },
      { "id": 3, "color": "yellow" },
      { "id": 4, "color": "red" },
      { "id": 5, "color": "green" },
      { "id": 6, "color": "brown" },
      { "id": 7, "color": "red" },
      { "id": 8, "color": "green" },
      { "id": 9, "color": "yellow" },
      { "id": 10, "color": "brown" },
      { "id": 11, "color": "black" },
      { "id": 12, "color": "purple" },
      { "id": 13, "color": "pink" }
   ]
   const [searchInput, setSearchInput] = useState('');

   return (
      <>
         <div className="wrapperContainer">
            <div className="wrapperInput">
               <input
                  value={searchInput}
                  type="text"
                  placeholder="Search here"
                  onChange={(event) => setSearchInput(event.target.value)}
               />
               <button type="button"> Search </button>
            </div>

            <div className="wrapperBoxes">
               {Searcher.filter((valueBox) => {
                  if (searchInput === '') {
                     return valueBox;
                  } else if (
                     valueBox.color.toLowerCase().includes(searchInput.toLowerCase())
                  ) {
                     return valueBox;
                  } else {
                     return 0;
                  }
               }).map((valueBox, key) => (
                  <div className={`box ${valueBox.color}`} style={{ backgroundColor: valueBox.color }}>
                  </div>
               ))}
            </div>
         </div>
      </>
   )
}

export default Home
