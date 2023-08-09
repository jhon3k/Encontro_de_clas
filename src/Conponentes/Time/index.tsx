import { Icolaborador } from '../Compartilhado/Interfaces/Icolaborador';
import FicharJogador from '../ficharJogador'
import './Time.css'

interface TimeProps {
    corPrimaria: string;
    corSecundaria: string;
    jogadores: Icolaborador[];
    nome: string;
}

const Time = (props: TimeProps) => {
    const cssCorSecundaria = { background: props.corSecundaria }
    const cssCorPrimaria = { borderColor: props.corPrimaria }

    return (
        (props.jogadores.length > 0) ? <section className='time' style={cssCorSecundaria}>
            <h3 style={cssCorPrimaria}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map(jogador =>
                    <FicharJogador
                        corDeFundo={props.corPrimaria}
                        key={jogador.nome} nome={jogador.nome}
                        apelido={jogador.apelido}
                        imagem={jogador.imagem}
                    />)}
            </div>
        </section>
            : <></>
    )
}

export default Time