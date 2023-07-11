import FicharJogador from '../ficharJogador'
import './Time.css'

const Time = (props) => {
    const cssCorSegundaria = { background: props.corSegundaria }
    const cssCorPrimaria = {borderColor: props.corPrimaria}
    
    return (  
        (props.jogadores.length > 0) ? <section className='time' style={cssCorSegundaria}>
            <h3 style={cssCorPrimaria}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map(jogador => <FicharJogador corDeFundo={props.corPrimaria} key={jogador.nome} nome={jogador.nome} apelido={jogador.apelido} imagem={jogador.imagem}/>  )}
            </div>
        </section>
        : ''
    )
}

export default Time