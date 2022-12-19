import { Header } from "../../component/header";
import avatar from "../../component/cardTest/avatar.png"
import s from "./s.module.scss"


const startTest = () => {
    return (
    <div>
    <Header />
    <div className={'container'}>
        <div className = {'row'} style= {{marginTop:'16px'}}>
            <div className={s.icon}>
            <img
                className={s.avatar}
                src={avatar}
                alt="avatar"
                />
            </div>
            </div>
        <div className = {'row'}>
            <div className={s.title}>
               <h1 className={s.titleText}>Электоприборы</h1>
            </div>
        </div>
        <div className = {'row'}>
            <button className={s.button}>Начать</button>
        </div>
        <div className = {'row'}>
            <div className={s.text}><p>Электроэнергия является неотъемлемой частью жизни каждого человека, которая делает существование проще и комфортнее. Однако при несоблюдении определенных правил эксплуатации электричества или работа с неисправными электроприборами может привести к порче имущества или возникнет угроза жизни и здоровью человека. К примеру, множество людей живет в домах, которые были построены несколько десятков лет назад, и электропроводка помещений осталась с тех времен. Разумеется, что состояние такой электропроводки оставляет желать лучшего, и, если вовремя не заменить провода, может случиться возгорание и перерасти в пожар.
Порядок действий при возгорании электроприборов:
   - не паниковать, постараться быть собранным и внимательным;
   - быстро отключить прибор от сети (если горит провод, то воспользуйтесь деревянным предметом, например, шваброй или в</p>
   </div>
        </div>
        </div>
    </div>
    );
  };
  
  export default startTest;