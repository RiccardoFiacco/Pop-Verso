import { NavLink } from "react-router"

export function Navigation(){
    return(
        <div className="row">
            <div className="col">
             <NavLink to="/">Home</NavLink>
            </div>
            <div className="col">
             <NavLink to="/pgs">Personaggi</NavLink>
            </div>
            <div className="col">
             <NavLink to="/teams"></NavLink>
            </div>
        </div>
    )
}