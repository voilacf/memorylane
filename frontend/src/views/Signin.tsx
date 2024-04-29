import { useState } from 'react';
import './Signin.css'
import axios from 'axios';

function Signin () {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e:any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/api/signin', formData);
            if (response.status === 201) {
                window.location.href="/home";
            }
        } catch (error) {
            console.error('Error while singing in:', error);
            window.alert('Either username or password invalid');
        }
    }

    return (
        <>
        <section>
            <h1>Signin</h1>
        </section>
        <form onSubmit={handleSubmit}>
        <section className='input'>
                <ul>
                    <li>
                        <label htmlFor="">Username</label>
                        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder='Enter Username' required/>
                    </li>
                    <li>
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Enter password' required/>
                    </li>
                </ul>
        </section>
        <section>
            <button className='primary' type='submit'><span>Submit</span></button>
            <a className='secondary' href='/Signup'><span>Sign up</span></a>
        </section>
        </form>
        </>
    );
}

export default Signin;