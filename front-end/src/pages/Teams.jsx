import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from '../components/Card/Card.jsx'
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
    },[])
    
    return(
    
     <div className="container">
        <div className="row">
         <div className="col">
             <h1>TUTTI I TEAM DI POP-VERSO</h1>
         </div>
        </div>
        <div className="row">
         <div className="col">
            <div className="row">
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