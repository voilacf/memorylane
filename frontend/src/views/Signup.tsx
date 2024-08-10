import axios from 'axios';
import { useState } from 'react';
import './Signup.css'

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmedPassword: ''
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
            const response = await axios.post('http://localhost:3000/api/signup', formData);
            console.log('User registered successfully');
            if (response.status === 201) {
                window.location.href="/home";
            }
       } catch (error) {
            console.error('Error registering user:', error);
            window.alert(`Passwords do not match`);
       }

    }

    return (
        <>
        <section>
            <h1>Signup</h1>
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
                    <li>
                        <label htmlFor="">Confirm Password</label>
                        <input type="password" name="confirmedPassword" value={formData.confirmedPassword} onChange={handleChange} placeholder='Confirm password' required/>
                    </li>
                </ul>
        </section>
        <section>
            <button className='primary submit-btn' type='submit'><span>Get started</span></button>
            <a className='secondary' href='/'><span>Go back</span></a>
        </section>
        </form>
        </>
    );
}

export default Signup;