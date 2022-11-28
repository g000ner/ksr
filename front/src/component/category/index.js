import {CaretDownOutlined } from '@ant-design/icons';
import s from './s.module.scss';

export const Category = () => {
    return (
        <div className={s.category}>
            <button className={s.categoryButton} > 
                <div className = {s.textСategory}>Категория </div>
                <div className = {s.iconCategory}>
                    <CaretDownOutlined />
                </div>
            </button>
        </div>
    );
  };