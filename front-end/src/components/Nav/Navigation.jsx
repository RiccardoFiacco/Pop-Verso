import { NavLink } from "react-router"
import style from './Navigation.module.css'
export function Navigation(){
    return(
        <div className="container">
         <div className="row">
            <div className="col">
             <NavLink className={`${style.none}`} to="/">Home</NavLink>
            </div>
            <div className="col">
             <NavLink className={`${style.none}`} to="/pgs">Personaggi</NavLink>
            </div>
            <div className="col">
             <NavLink className={`${style.none}`} to="/teams">teams</NavLink>
            </div>
         </div>
        </div>
    )
}