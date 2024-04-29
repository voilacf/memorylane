import { Link } from 'react-router-dom';
import './Start.css'

function Start () {
    return (
        <>
        <section>
            <h1>MemoryLane➾</h1>
        </section>
        <section>
            <Link className='primary' to='/signin'><span>Sign in</span></Link>
            <Link className='secondary' to='/signup'><span>Sign up</span></Link>
        </section>
        </>
    );
}

export default Start;