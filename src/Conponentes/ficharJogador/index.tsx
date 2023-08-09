import './FicharJogador.css'

interface FicharJogadorProps {
    apelido: string;
    corDeFundo: string;
    data: string
    imagem: string;
    nome: string;
}

const FicharJogador = ({ nome, apelido, imagem, corDeFundo, data } : FicharJogadorProps) => {
    return (
        <div className='otaku'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
                
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{apelido}</h5>
                <h5>{new Date(data).toLocaleDateString()}</h5>
            </div>
        </div>
    )
}

export default FicharJogador