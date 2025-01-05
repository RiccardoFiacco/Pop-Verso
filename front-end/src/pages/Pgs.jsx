import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from '../components/Card/Card.jsx'
export function Pgs(){
    const [pgs, setPgs] = useState([]);
    const baseUrl = `http://localhost:3000/pgs`

    useEffect(()=>{
     axios
     .get(baseUrl)
     .then((res)=>{
        setPgs(res.data)   
     })
     .catch((err)=>console.log(err))
    },[])
    
    return(
     <div className="container">
        <div className="row">
         <div className="col">
             <h1>TUTTI I PERSONAGGI DI POP-VERSO</h1>
         </div>
        </div>
        <div className="row">
         <div className="col">
            {pgs ?
            pgs.map((personaggio, i)=>{
                return(
                    <Card key='i' props={personaggio}/>
                )
            }): <p>non ci sono personaggi</p>}
         </div>
        </div>
     </div>    
    )
}