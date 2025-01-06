import { useParams } from "react-router";
import { AddTeam } from './AddTeam';
import { AddPgs } from './AddPgs';
export function Add() {

  const { type } = useParams();
  
  return (
    <div className="container">
      <div className="row">
        <div className="col">
           {type == 'team' ? <AddTeam/>:<AddPgs/>} 
        </div>
      </div>
    </div>
  );
}
