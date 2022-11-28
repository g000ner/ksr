import { Header } from "../../component/header";
import { Card } from "../../component/cardTest";
import {SearchBar} from "../../component/search";
import { Category } from "../../component/category";
import s from "./s.module.scss"

const Layout = () => {
    return (
    <div>
    <Header />
    <div className={'container'}>
        <div className = {'row'} style= {{marginTop:'16px'}}>
            <div className = {'col-2'}>
            <Category />
            </div>
            <div className = {'col-2'}></div>
            <SearchBar />
            <div className={s.listCard}>
            <div className = {'row'}>
                <div className = {'col-6'}>
                <Card />
                </div>
                <div className = {'col-6'}>
                <Card />
                </div>
                <div className = {'col-6'}>
                <Card />
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
    );
  };
  
  export default Layout;