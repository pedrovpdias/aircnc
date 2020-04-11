import React, { useState, useMemo } from 'react';
import api from '../../services/api';

import camera from '../../assets/camera.svg';

import './styles.css';

function New({ history }){
    const [ thumbnail, setThumbnail ] = useState(null);
    const [ company, setCompany ] = useState('');
    const [ techs, setTechs ] = useState('');
    const [ price, setPrice ] = useState('');

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail]);

    async function handleSubmit(e){
        e.preventDefault();

        const data = new FormData();
        const user_id = localStorage.getItem('user_id');

        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        await api.post('/spots', data,{
            headers: {
                user_id
            }
        });

        history.push('dashboard');
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <label id="thumbnail"
                    style={{
                        backgroundImage: `url(${preview})`
                    }}
                    className={thumbnail ? 'has-thumbnail' : null}
                >
                    <input type="file" 
                        onChange={e => (setThumbnail(e.target.files[0]))}
                    />
                    <img src={camera} alt="Select image"/>
                </label>
                
                <input 
                    id="company"
                    placeholder="Empresa:"
                    value={company}
                    onChange={e => (setCompany(e.target.value))}
                />
                <label htmlFor="techs">* separar por vígula</label>
                <input 
                    id="techs"
                    placeholder="Tecnologias utilizadas:"
                    value={techs}
                    onChange={e => (setTechs(e.target.value))}
                />
                <label htmlFor="price">* em branco para gratuito</label>
                <input 
                    id="price"
                    placeholder="Valor da diária:"
                    value={price}
                    onChange={e => (setPrice(e.target.value))}
                />

                <button className="btn">
                    Cadastrar
                </button>
            </form>
        </>
    );
}

export default New;