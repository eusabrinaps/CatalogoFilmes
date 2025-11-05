import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';


function Ler() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://68fb8c4494ec960660267104.mockapi.io/filmes/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow-lg px-5 pt-4 pb-5 rounded-4'>
                <h3 className='text-dark mb-4 d-flex justify-content-center align-items-center fw-bold'>
                    Detalhes do Filme
                </h3>

                <div className='mb-3 d-flex align-items-center gap-3'>
                    <label className='text-dark fw-bold' style={{ minWidth: '80px' }}>Nome:</label>
                    <div className='text-dark' style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                        {data.nome}
                    </div>
                </div>

                <div className='mb-3 d-flex align-items-center gap-3'>
                    <label className='text-dark fw-bold' style={{ minWidth: '80px' }}>Gênero:</label>
                    <div className='text-dark' style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                        {data.genero}
                    </div>
                </div>

                <div className='mb-4 d-flex align-items-center gap-3'>
                    <label className='text-dark fw-bold' style={{ minWidth: '80px' }}>Ano:</label>
                    <div className='text-dark' style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                        {data.ano}
                    </div>
                </div>

                <Link to="/" className='btn btn-primary w-100 py-2 rounded-3 fw-bold'>
                    Voltar
                </Link>
            </div>
        </div>

    )
}
export default Ler;