import Card from "./Card.jsx"


export default function Cards ({state}) {
    console.log(state)
    if(state[0] !== {error: "VideoGame not found"} && state[0]){
       return(<div>{ state.map((e, i) => {
           if(e.name){
            return (<div key={i}><Card 
                slugName={e.nameSlug}
                img={e.img}
                name={e.name}
                genres={e.genres}
                index={i} />
                </div>
         )
           } else{
               return <div key={i}><p>error</p></div>;
           }
       
    })}</div>) 
    } else {
        return (
            <div>
                <p>No Video Game Found.</p>
            </div>
        )
    }
}