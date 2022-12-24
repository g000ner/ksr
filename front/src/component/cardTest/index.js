import s from './s.module.scss';
import avatar from './avatar.png';

export const Card = (props) => {
    return (
    <div className={s.card}>
        <div className={s.icon}>
        <img
                className={s.avatar}
                src={avatar}
                alt="avatar"
                />
        </div>
        <div className={s.name}>
             {props.test.name}
        </div>
    </div> 
    );
  };