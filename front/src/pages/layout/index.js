import { Header } from "../../component/header";
import { Card } from "../../component/cardTest";
import { SearchBar } from "../../component/search";
import { Category } from "../../component/category";
import s from "./s.module.scss"
import { useState, useEffect, useMemo } from "react";
import axios from 'axios';
import TestList from "../../component/testsList";


const Layout = () => {
    const [tests, setTests] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const searchedTests = useMemo(() => {
        return tests.filter(test => test.name.toLowerCase().includes(searchQuery.toLowerCase()));
      }, [searchQuery, tests])

    const fetchTests = async () => {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/tests/");
        console.log(response.data);
        setTests(response.data);
    }

    useEffect(() => {
        fetchTests();
    }, []);

    return (
        <div>
            <Header />
            <div className={'container'}>
                <div className={'row'} style={{ marginTop: '16px' }}>
                    <Category />
                    <div className={'col-3'}></div>
                    <SearchBar
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                    <div className={s.listCard}>
                            {tests.length ?
                             <TestList
                                tests={searchedTests}
                            /> :
                            <p>Нет тестов</p>
                            }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;