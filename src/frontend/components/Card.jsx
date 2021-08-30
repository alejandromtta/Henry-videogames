export default function Card ({img, name, genres}){
return(
<div>
    <img src={img} alt={name} height="300px" width="300px"/>
    <h4>{name}</h4>
   {genres.map(e=> {
       return <p>{e.name}</p>
   })}
</div>
)
}