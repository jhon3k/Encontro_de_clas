import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../campoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { Icolaborador } from '../Compartilhado/Interfaces/Icolaborador'

interface FormularioProps {
    jogadorInseridor: (colaborado: Icolaborador) => void;
    times: string[];
}

const Formulario = (props : FormularioProps) => {

    const [nome, setNome] = useState('')
    const [apelido, setApelido] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [data, setData] = useState('')



    const aoSalvar = (evento : React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        props.jogadorInseridor({
            nome,
            apelido,
            imagem,
            time,
            data
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
                    placeholder="Informe a URL da imagem" 
                    valor={imagem}
                    alterado={valor => setImagem(valor)}
                />

                <CampoTexto 
                    obrigatorio={true}
                    label="Data de entrada no time"
                    placeholder="" 
                    valor={data}
                    alterado={valor => setData(valor)}
                    tipo='date'
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