import { Link } from "react-router"

export function Card({obj = {}}){
    const {id, name, age, description} = obj

    return(
        <div id={id} className="card" style={{width: "18rem"}}>
         <div className="card-body">
             <h5 className="card-title">{name}</h5>
             <p className="card-text">{description}</p>
             <Link to={age?`/pgs/${id}`:`/teams/${id}`} className="btn btn-warning">Dettagli</Link>
         </div>
        </div>
    )
}