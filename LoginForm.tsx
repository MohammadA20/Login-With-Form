import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Login } from './data';

interface LoginFormProps {
    login: Login[],
    setLogin: React.Dispatch<React.SetStateAction<Login[]>>
}

const initialState = {
    username: '',
    password: ''
};

export const LoginForm = ({ login }: LoginFormProps) => {
    const [formState, setFormState] = useState(initialState);
    const navigate = useNavigate();

    function handleSubmit() {
        const user = login.find(user => user.username === formState.username && user.password === formState.password);
        if (user) {
            alert('Login Successful');
            navigate('/home', { state: { username: formState.username } });
        } else {
            alert('Wrong username or password');
        }
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <>
            <div className='form'>
                <h1>Login</h1>
                <input
                    type="text"
                    name="username"
                    placeholder='username'
                    value={formState.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder='password'
                    value={formState.password}
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Login</button>
            </div>
        </>
    );
};
