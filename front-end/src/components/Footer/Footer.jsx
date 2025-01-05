import style from './Footer.module.css'

export function Footer(){
    return(
        <footer className={`${style.background} ${style.mt_auto} `}>
         <div className="container">
             <div className={`col ${style.text}`}>
                 <span>pop-verso</span>
             </div>
         </div>
        </footer>
    )
}