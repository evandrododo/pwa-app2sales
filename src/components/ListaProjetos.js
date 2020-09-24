import React, { useState } from 'react';

const projetos = [
    {
        nome: 'Corporativo II',
        imgurl: '',
        clientes: [
            {
                avatarurl: '',
                nome_cliente: ''
            }
        ]
    },
    {
        nome: 'Corporativo 5III',
        imgurl: '',
        clientes: [
            {
                avatarurl: '',
                nome_cliente: ''
            }
        ]
    },
    {
        nome: 'Residencial 4II',
        imgurl: '',
        clientes: [
            {
                avatarurl: '',
                nome_cliente: ''
            }
        ]
    },
    {
        nome: 'Corporativo3II',
        imgurl: '',
        clientes: [
            {
                avatarurl: '',
                nome_cliente: ''
            }
        ]
    },
    {
        nome: 'Corporativo 2II',
        imgurl: '',
        clientes: [
            {
                avatarurl: '',
                nome_cliente: ''
            }
        ]
    },
    {
        nome: 'Corporativo 1II',
        imgurl: '',
        clientes: [
            {
                avatarurl: '',
                nome_cliente: ''
            }
        ]
    }
]

const FiltroProjeto = ({ filtro, setFiltro }) => {
    return <input type='text' onChange={e => setFiltro(e.target.value)} value={filtro} ></input>
}

export const ListaProjetos = () => {
    const [filtro, setFiltro] = useState('');
    return (
      <div>
        <FiltroProjeto filtro={filtro} setFiltro={setFiltro} />

        {projetos
          .filter((projeto) => {
            const nomeProjeto = projeto.nome.toLowerCase();
            const filtroProjeto = filtro.toLowerCase()
            return nomeProjeto.indexOf(filtroProjeto) >= 0;
          })
          .map((projeto) => {
            return (
                <div
                  key={projeto.nome}
                  style={{
                    width: "30%",
                    backgroundColor: "grey",
                    margin: "1%",
                    minWidth: 200,
                    position: "relative",
                    float: "left",
                  }}
                >
                  <span>{projeto.nome}</span>
                </div>
            );
          })}
      </div>
    );
}