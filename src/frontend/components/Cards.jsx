import Card from "./Card.jsx"


export default function Cards ({state}) {
    console.log('uwu', state)
    if(state){
       return(<div>{ state.map(e => {
           if(e.name){
            return (<Card 
                img={e.img}
                name={e.name}
                genres={e.genres} />
         )
           }
       
    })}</div>) 
    } else {
        return (
            <div>
                <p>No Video Games Found.</p>
            </div>
        )
    }
}