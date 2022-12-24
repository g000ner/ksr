import { Header } from "../../component/header";
import s from "./s.module.scss";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import axios from 'axios';
import { useParams } from "react-router";


const Question = () => {
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState([]);

    const params = useParams();

    const fetchedQuestion = async (id) => {
        const url = "http://127.0.0.1:8000/api/v1/questions/" + String(id) + "/";
        const fetchedQuestion = await axios.get(url);
        //console.log(fetchedQuestion);
        setQuestion(fetchedQuestion.data);
    }

    useEffect(() => {
        fetchedQuestion(params.question_id);
    }, []);

    return (
        <div className={s.content}>
            <div className={s.block}>
                <h4>{question.content}</h4>
                <br/>
                <h6 className={s.title}>Ваши действия:</h6>
                <div className={s.text}>
                    <ol style={{"listStyle" : "decimal"}}>
                        <li><Link>Залить все водой</Link></li>
                        <li><Link>Засыпать землей из-под маминой фиалки</Link></li>
                        <li><Link>Взять кухонное полотенце и накрыть</Link></li>
                        <li><Link>Попытаться отключить из сети</Link></li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Question;