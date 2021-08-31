import Cards from "./Cards"
import axios from "axios"
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar"
export default function HomePage(){
    let [state, setState] = useState([])
    let route = "http://localhost:3000/videogames"
let onSearch = (data)=>{
       if(data){
           route = `http://localhost:3000/videogames?name=${data}`
           axios.get(route).then(e => {
            setState(e.data)
        })
       }else {
        axios.get(route).then(e => {
            setState(e.data)
       })
    }
}
   

return(<div>
    <p>a</p>
    
    <SearchBar onSearch={onSearch}/>
    <Cards state={state}/>
</div>)
}