import s from './s.module.scss';


export const Header = () => {
    return (
    <div className={s.Header}>
        <div className={s.header}>
        <div className={s.Label}>
            <div className={s.Name}>
                Тест БЖД
            </div>
            <div className={s.Status}>
                История твоего выживания...
            </div>
        </div>
        </div>
    </div> 
    );
  };