import { Header } from "../../component/header";
import s from "./s.module.scss";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router";


const Question = () => {
    const [question, setQuestion] = useState('');
    const [answers, setAnswers] = useState([]);
    const [currAnswer, setCurrAnswer] = useState('');

    const params = useParams();

    const navigate = useNavigate();

    const fetchedQuestion = async (id) => {
        const url = "http://127.0.0.1:8000/api/v1/questions/" + String(id) + "/";
        const fetchedQuestion = await axios.get(url);
        //console.log(fetchedQuestion);
        setQuestion(fetchedQuestion.data);
    }
    
    const fetchAnswers = async (id) => {
        const url = "http://127.0.0.1:8000/api/v1/questions/" + String(id) + "/answers/";
        const fetchedAnswers = await axios.get(url);
        setAnswers(fetchedAnswers.data);
    }

    const onAnswerChanged = async (e) => {
        setCurrAnswer(e.currentTarget.value);
    }

    const onQuestionChanged = async (e) => {
        navigate(`/test/${params.id}/${currAnswer}`);
    }

    useEffect(() => {
        fetchedQuestion(params.question_id);
        fetchAnswers(params.question_id);
    }, []);

    return (
        <div className={s.content}>
            <div className={s.block}>
                <h4>{question.content}</h4>
                <br/>
                <h6 className={s.title}>Ваши действия:</h6>
                <div className={s.text}>
                    <form style={{"listStyle" : "decimal"}}>
                            {answers.length > 0 ? answers.map(answer => <p><input name='question_answers' value={answer.next_question_id} type="radio" onChange={onAnswerChanged}/>{answer.content}</p>) : ''}
                            <input type="submit" value='Ответить' onClick={onQuestionChanged}/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Question;