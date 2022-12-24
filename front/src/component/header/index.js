import s from './s.module.scss';
import { Link } from 'react-router-dom';


export const Header = () => {
    return (
        <div className={s.Header}>
            <div className={s.header}>
                <div className={s.Label}>
                    <Link to={"/"} style={{"text-decoration": "none"}}>
                        <div className={s.Name}>
                            Тест БЖД
                        </div>
                        <div className={s.Status}>
                            История твоего выживания...
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};