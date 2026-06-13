import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


function Alterar() {
    const { id } = useParams();

    const [values, setValues] = useState({
        nome: '',
        genero: '',
        ano: ''
    });
    
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/filmes/${id}`)
            .then(res => setValues(res.data))
            .catch(err => console.log(err));
    }, [id]);
    
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`${import.meta.env.VITE_API_URL}/filmes/${id}`, values)
            .then(res => {
                alert('Filme atualizado com sucesso!');
                navigate('/');
            })
            .catch(err => {
                console.error('Erro ao atualizar:', err);
                alert('Erro ao atualizar o filme');
            });
    }
    return (
        <div className={'catalog-container d-flex flex-column align-items-center '}>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded custom-card'>
                    <h1 className={'text-center'}>Alterar Filme</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-2'>
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" name='nome' className='form-control'
                                placeholder='Digite o nome'
                                value={values.nome}
                                onChange={e => setValues({ ...values, nome: e.target.value })}
                            />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="genero">Gênero:</label>
                            <input type="text" name='genero' className='form-control'
                                placeholder='Digite o Gênero'
                                value={values.genero}
                                onChange={e => setValues({ ...values, genero: e.target.value })}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="ano">Ano: </label>
                            <input type="text" name='ano' className='form-control'
                                placeholder='Digite o Ano'
                                value={values.ano}
                                onChange={e => setValues({ ...values, ano: e.target.value })}
                            />
                        </div>
                        <button className='btn btn-success'>Atualizar</button>
                        <Link to="/" className='btn btn-primary ms-3'>Voltar</Link>
                    </form>
                </div>
            </div>
        )
}
export default Alterar;