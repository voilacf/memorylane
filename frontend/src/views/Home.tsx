import './Home.css';
import List from '../components/List';

function Home () {
    const list = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <>
        <section><h1>Your Todolists:</h1></section>
        <main>
            <ul>
                {list.map(value => <li key={value} ><List/></li>)}
            </ul>
        </main>
        </>
    );
}

export default Home;
