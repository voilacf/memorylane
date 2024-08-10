import Todo from '../components/Todo';
import './Todolist.css';

function Todolist () {
    const list = [1,2,3,4,5];
    return (
        <>
        <section id="heading"><h1>Todolist</h1></section>
        <section id="content">
            <div>
                <ul id="todolist">
                    {list.map((item, index) => (
                        <li key={index} ><Todo id={"test"}/></li>
                    ))}
                </ul>
            </div>
        </section>
        </>
    );
}

export default Todolist;