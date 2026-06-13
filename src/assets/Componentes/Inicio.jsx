import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Inicio() {
    const [filmes, setFilmes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('${import.meta.env.VITE_API_URL}/filmes')
            .then(resp => setFilmes(resp.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`${import.meta.env.VITE_API_URL}/filmes/${id}`)
            .then(() => setFilmes(prev => prev.filter(f => f.id !== id)))
            .catch(err => {
                console.error('Erro ao apagar:', err);
                alert('Erro ao apagar o filme');
            });
    }

    const handleAlterarClick = () => {
        const id = prompt('Digite o ID do filme para alterar:');
        if (!id) return;
        axios.get(`${import.meta.env.VITE_API_URL}/filmes/${id}`)
            .then(() => navigate(`/alterar/${id}`))
            .catch(() => alert('Filme não encontrado'));
    }

    const handleApagarClick = () => {
        const id = prompt('Digite o ID do filme para apagar:');
        if (!id) return;
        axios.get(`${import.meta.env.VITE_API_URL}/filmes/${id}`)
            .then(resp => { {
                    handleDelete(id);
                }
            })
            .catch(() => alert('Filme não encontrado'));
    }

    return (
        <div className={'catalog-container d-flex flex-column align-items-center'}>
            <h1 className={'text-center text-dark fw-bold mb-4 '}>Catálogo de Filmes</h1>
            
            <div className='w-75 d-flex justify-content-end mb-3 gap-2'>
                <button className='btn btn-dark ' onClick={handleAlterarClick}>Alterar</button>
                <button className='btn btn-danger ' onClick={handleApagarClick}>Apagar</button>
                <Link to="/adicionar" className='btn btn-success'>Adicionar</Link>
            </div>
            <div className='w-75 rounded bg-white border shadow p-4 custom-card'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filmes.map((f) => (
                            <tr
                                key={f.id}
                                onClick={() => navigate(`/ler/${f.id}`)}
                                style={{ cursor: 'pointer' }}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/ler/${f.id}`) }}
                            >
                                <td>{f.id}</td>
                                <td>{f.nome}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Inicio
