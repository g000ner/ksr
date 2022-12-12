import { Header } from "../../component/header";
import fon from './image/fon.png'
import s from "./s.module.scss"


const test = () => {
    return (
    <div>
    <Header />
    <div className={'container'}>
        <div className = {'row'}>
            <div className ={s.content}>
                <div className={s.block}>
                    <h1 className={s.title}>Ваши действия:</h1>
                    <div className={s.text}>
                        <ol>
                            <li>Залить все водой</li>
                            <li>Засыпать землей из-под маминой фиалки</li>
                            <li>Взять кухонное полотенце и накрыть</li>
                            <li>Попытаться отключить из сети</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
  };
  
  export default test;