import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from '../components/Card/Card.jsx'
import { Link } from "react-router";
export function Teams(){
    const [teams, setTeams] = useState([]);
    const baseUrl = `http://localhost:3000/teams`

    useEffect(()=>{
     axios
     .get(baseUrl)
     .then((res)=>{
        setTeams(res.data)   
     })
     .catch((err)=>console.log(err))
    },[baseUrl])
    
    return(
    
     <div className="container">
        <div className="row pb-5">
         <div className="col">
             <h1>TUTTI I TEAM DI POP-VERSO</h1>
         </div>
         <div className="col-3">
            <Link to='/team/add' className="btn btn-warning"> aggiungi un nuovo team</Link>
         </div>
        </div>
        <div className="row">
         <div className="col">
            <div className="row row-gap-4">
                {teams ?
                teams.map((el, i)=>{
                 return(
                  <div className="col" key={i}>
                    <Card obj={el}/>
                  </div> 
                 )
                }) : <p>non ci sono team</p>}
            </div>
         </div>
        </div>
     </div>   
     
    )
}