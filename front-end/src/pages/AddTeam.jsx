import axios from "axios"
import { useState } from "react";
export function AddTeam(){
    const startObj={
        name: '',
        description: '',  
    }

    const [formData, setFormData] = useState(startObj);
    const baseUrl = 'http://localhost:3000/pgs'

    function changeHandler(e){
        e.preventDefault()
  
        setFormData((formData) => {
          return {
            ...formData,
            [e.target.name]: value,
          }; 
        })
      }


    function add(){
        axios
        .post(baseUrl)
        .then()
    }

    return(
        <htmlForm className="row g-3 fs-2">
            <div className="col-md-6">
                <input onChange={(e) => changeHandler(e)} type="email" value={startObj.name} className="htmlForm-control" id="inputEmail4" placeholder="inserici nome"/>
            </div>
            <div className="col-12">
                <textarea onChange={(e) => changeHandler(e)} className="form-control" value={startObj.description} placeholder="inserici descrizione"></textarea>
            </div>
            <div className="col-12">
                <button type="submit" onSubmit={add} className="btn btn-primary">Invia</button>
            </div>
        </htmlForm>
    )
}