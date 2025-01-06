import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router";

export function Details(){
    const {type, id} = useParams();
    const [element, setElement] = useState({});
    const { name, age, shadow, description, team_id, is_spy} = element
    const baseUrl = `http://localhost:3000/${type}/${id}`
    
    useEffect(()=>{
     axios
     .get(baseUrl)
     .then((res)=>{
        setElement(res.data[0])   
     })
     .catch((err)=>console.log(err))
    },[baseUrl])
    
    return(
    <div className="container text-center">
        <div className="row">
            <div className="col">
             <h5 className="card-title">{name}</h5>
             {age ? <p><strong>età</strong>: {age}</p> : ''}
             <p className="card-text">{description}</p>
             {team_id ? team_id.map((team, i)=>{
                <span key={i}>{team}</span>
             }) : ''}
             {shadow ? <p><strong>è un agente ombra?</strong>: {shadow==true ? 'si': 'no' }</p> : ''}
             {is_spy ? <p><strong>è una spia?</strong>: {is_spy==true? 'si': 'no' }</p> : ''}
         </div>
        </div>
        </div>
    )
}