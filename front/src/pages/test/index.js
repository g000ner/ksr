import { Header } from "../../component/header";
import fon from './image/fon.png'
import s from "./s.module.scss";
import Question from "../../component/question";


const test = () => {
    


    return (
    <div>
    <Header />
    <div className={'container'}>
        <div className = {'row'}>
                <Question />
        </div>
    </div>
    </div>
    );
  };
  
  export default test;