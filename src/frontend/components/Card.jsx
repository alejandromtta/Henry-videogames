import { NavLink as Link } from 'react-router-dom';
export default function Card ({img, name, genres,slugName, index}){
return(
<div key={index}>
    <Link to={`/videogames/${slugName}`}>
    <img src={img} alt={name} height="300px" width="300px"/>
    </Link>
    
    <h4>{name}</h4>
   {genres.map((e, i)=> {
       return <p key={i}>{e.name}</p>
   })}
</div>
)
}