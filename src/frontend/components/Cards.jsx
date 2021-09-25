import Card from "./Card.jsx"
import style from "./Cards.module.css"

export default function Cards ({state}) {
    console.log(state)
    if(state[0] !== {error: "VideoGame not found"} && state[0]){
       return(<div className={style.container}>
       <div className={style.parent}>{ state.map((e, i) => {
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
       
    })}</div></div>) 
    } else {
        return (
            <div>
                <p>No Video Game Found.</p>
            </div>
        )
    }
}