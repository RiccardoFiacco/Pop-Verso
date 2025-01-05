import { Link } from "react-router"

export function Card({obj = {}}){
    const {id, name, age, shadow, description, team_id, is_spy} = obj

    return(
        <div id={id} className="card" style={{width: "18rem"}}>
         <div className="card-body">
             <h5 className="card-title">{name}</h5>
             {age ? <p><strong>età</strong>: {age}</p> : ''}
             <p className="card-text">{description}</p>
             {team_id ? team_id.map((team, i)=>{
                <span key={i}>{team}</span>
             }) : ''}
             {shadow ? <p><strong>è un agente ombra?</strong>: {shadow==true ? 'si': 'no' }</p> : ''}
             {is_spy ? <p><strong>è una spia?</strong>: {is_spy==true? 'si': 'no' }</p> : ''}
             <Link href="#" className="btn btn-primary">Dettagli</Link>
         </div>
        </div>
    )
}