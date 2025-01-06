import { Outlet } from "react-router";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import style from './DefaultLayout.module.css'
export function DefaultLayout(){
    return(
        <div className={`row ${style.vh100}`}>
         <Header/>  
         <div className="container">   
            <Outlet/>  
         </div> 
         <Footer/> 
        </div>
    )
}
