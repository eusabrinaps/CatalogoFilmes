import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


function Apagar() {
    const [id, setId] = useState('');
    const [mensagem, setMensagem] = useState('');
    const navigate = useNavigate();

    const handleDelete = () => {
        if (id.trim() === '') {
            setMensagem('Por favor, insira um id.');
            return;
        }

        axios.delete(`https://68fb8c4494ec960660267104.mockapi.io/filmes/${id}`)
            .then(() => {
                setMensagem('Filme apagado com sucesso!');
                setTimeout(() => navigate('/'), 1000);
            })
            .catch(() => setMensagem('Erro ao apagar.'));
    };

    return (
        <div className="fundo-escuro">
            <div className='apagar-container'>
                <h2 className='apagar-title'>Apagar Filme</h2>

                <input
                    type='text'
                    placeholder='ID do filme'
                    className='form-control mb-2'
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />

                <button className='btn btn-danger me-2' onClick={handleDelete}>Apagar</button>
                <Link to='/' className='btn btn-secondary'>Cancelar</Link>

                {mensagem && <p className='apagar-alerta'>{mensagem}</p>}
            </div>
        </div>
    );
}

export default Apagar;