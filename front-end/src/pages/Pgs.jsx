import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from '../components/Card/Card.jsx'
import { Link } from "react-router";

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
    },[baseUrl])
    
    return(
    
     <div className="container ps-5">
        <div className="row pb-5">
         <div className="col">
             <h1>TUTTI I PERSONAGGI DI POP-VERSO</h1>
         </div>
         <div className="col">
            <Link to='/team/add' className="btn btn-warning"> aggiungi un nuovo personaggio</Link>
         </div>
        </div>
        <div className="row">
         <div className="col">
            <div className="row">
                {pgs ?
                pgs.map((el, i)=>{
                 return(
                  <div className="col" key={i}>
                    <Card obj={el}/>
                  </div> 
                 )
                }) : <p>non ci sono personaggi</p>}
            </div>
         </div>
        </div>
     </div>   
     
    )
}