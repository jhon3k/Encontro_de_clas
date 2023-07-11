import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../campoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [apelido, setApelido] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.jogadorInseridor({
            nome,
            apelido,
            imagem,
            time
        })
        setNome('')
        setApelido('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para entrar no seu clã</h2>

                <CampoTexto 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    valor={nome}
                    alterado={valor => setNome(valor)}
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Apelido" 
                    placeholder="Digite seu apelido" 
                    valor={apelido}
                    alterado={valor => setApelido(valor)}
                />

                <CampoTexto 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    valor={imagem}
                    alterado={valor => setImagem(valor)}
                />
                    
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Escolha seu Clã" 
                    itens={props.times}
                    valor={time}
                    alterado={valor => setTime(valor)}
                />

                <Botao>
                    Criar Fichar
                </Botao>
            </form>
        </section>
    )
}

export default Formulario