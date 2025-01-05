import { Outlet } from "react-router";
import { Header } from "./Header/Header";
import { Footer } from "./Footer";

export function DefaultLayout(){
    return(
        <>
         <Header/>
         <Outlet/>
         <Footer/>
        </>
    )
}
