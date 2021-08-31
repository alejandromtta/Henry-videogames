
import React, { useEffect, useState } from "react";


export default function SearchBar({onSearch}) {
    let[state, setState] = useState('');
return(
    <div>
        <form onSubmit={(e)=>{
          e.preventDefault();
          onSearch(state)
        }}>
            <input type="text" onChange={(e)=>{ setState(e.target.value)}}placeholder="Search"/><input type="submit"/>
        </form>
    </div>
)

}