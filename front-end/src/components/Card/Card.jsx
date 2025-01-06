import { Link } from "react-router"
import style from './Card.module.css'
export function Card({obj = {}}){
    const {id, name, age} = obj

    return(
        <div id={id} className={`card ${style.w18}`}>
         <div className="card-body">
            <div className="row">
                <div className="col">
                    <h5>{name}</h5>
                </div>
                <div className="col">
                    <Link to={age?`/pgs/${id}`:`/teams/${id}`} className="btn btn-warning">Dettagli</Link>
                </div>
            </div>    
         </div>
        </div>
    )
}