import React, { useState } from 'react';
import api from '../../services/api';

import './styles.css';

function Login({ history }){
    const [email, setEmail] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const response = await api.post('/sessions', {
        email
        });

        const { _id } = response.data;

        localStorage.setItem('user_id', _id);
        history.push('/dashboard');
    }

    return (
        <>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
            </p>

            <form onSubmit={handleSubmit} >
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email" 
                    id="email" 
                    placeholder="E-mail:"
                />
                <button type="submit" className="btn">
                    Entrar
                </button>
            </form>
        </>
    );
}

export default Login;