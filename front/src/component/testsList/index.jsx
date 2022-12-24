import { Header } from "../../component/header";
import s from "./s.module.scss"
import { Card } from "../cardTest";
import { Link } from 'react-router-dom';



const TestList = (props) => {
    return (
        <div className="row">
            {props.tests.map((test) =>
                <div className="col-6">
                    <Link to={"/startTest/" + test.id} style={{"textDecoration": "none", "color": "black"}}>
                        <Card test={test} />
                    </Link>
                </div>
            )
            }
        </div>
    );
};

export default TestList;



{/* */ }