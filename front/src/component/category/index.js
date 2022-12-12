import {CaretDownOutlined } from '@ant-design/icons';
import s from './s.module.scss';

document.body.onclick = () => {
    // Найти все открытые <details>
    document.body.querySelectorAll('details.dropdown[open]')
      // И закрыть каждый из них
      .forEach(e => e.open = false)
}

export const Category = () => {
    return (
        <div>
        <div className={s.category}>
            <div  > 
                <details className={s.categoryButton}>
                    <summary className={s.Category}>
                        <div className = {s.textСategory}>
                            Категория
                        </div>
                        <div className = {s.iconCategory}>
                        <CaretDownOutlined />
                        </div>
                    </summary>

                    <ul className={s.list}>
                        <li>Пожары</li>
                        <li>Медицина</li>
                        <li>Электричество</li>
                    </ul>
                </details>
            </div>
        </div>
        </div>
    );
  };
