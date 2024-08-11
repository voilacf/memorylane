import Todo from '../components/Todo';
import './Todolist.css';

function Todolist () {
    return (
        <>
        <section id="heading"><h1>Todolist</h1></section>
        <section id="content">
            <Todo></Todo>
        </section>
        </>
    );
}

export default Todolist;