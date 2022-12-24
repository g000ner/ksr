import { Header } from "../../component/header";
import avatar from "../../component/cardTest/avatar.png"
import s from "./s.module.scss"
import { useParams } from "react-router";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const StartTest = (props) => {
    const [test, setTest] = useState('');
    const params = useParams();

    const fetchTestById = async (id) => {
        const url = "http://127.0.0.1:8000/api/v1/tests/" + String(id) + "/";
        const fetchedTest = await axios.get(url);
        console.log(fetchedTest);
        setTest(fetchedTest.data);
    }

    useEffect(() => {
        fetchTestById(params.id)
    }, []);


    return (
        <div>
            <Header />
            <div className={'container'}>
                <div className={'row'} style={{ marginTop: '16px' }}>
                    <div className={s.icon}>
                        <img
                            className={s.avatar}
                            src={avatar}
                            alt="avatar"
                        />
                    </div>
                </div>
                <div className={'row'}>
                    <div className={s.title}>
                        <h1 className={s.titleText}>{test.name}</h1>
                    </div>
                </div>
                <div>
                    <Link className={'row'} to={"/test/" + test.id + "/" + test.first_question_id}>
                    <button className={s.button}>Начать</button>
                    </Link>
                </div>
                <div className={'row'}>
                    <div className={s.text}><p>{test.theory}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartTest;