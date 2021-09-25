import { NavLink as Link } from 'react-router-dom';
import style from './Card.module.css'
export default function Card ({img, name, genres,slugName, index}){
return(
<div className={style.container} key={index}>
    <Link to={`/videogames/${slugName}`}>
    <img className={style.img}src={img} alt={name} height="300px" width="350px"/>
    </Link>
    
    <h4 className={style.h4}>{name}</h4>
   {genres.map((e, i)=> {
       return <p className={style.p} key={i}>{e.name}</p>
   })}
</div>
)
}