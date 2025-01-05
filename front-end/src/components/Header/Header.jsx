import style from './Header.module.css'
import { Navigation } from '../Nav/Navigation'
export function Header(){
    return(
        <header>
            <div className={`${style.background} ${style.row}`}>
                <div className={`col ${style.text}`}>
                    <span>POP-VERSO</span>
                </div>
                <div className={`col ${style.text}`}>
                    <Navigation/>
                </div>
            </div>
        </header>
    )
}