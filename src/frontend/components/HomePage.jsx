import Cards from "./Cards"
import axios from "axios"
import React, { useEffect, useState } from "react";
export default function HomePage(){
    let [state, setState] = useState([])
    let route = "http://localhost:3000/videogames"
   
  axios.get(route).then(e => {
      setState(e.data)
  })

return(<div>
    <Cards state={state}/>
</div>)
}