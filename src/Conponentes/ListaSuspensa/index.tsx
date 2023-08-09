import './ListaSuspensa.css'

interface ListaSuspensaProps {
    alterado: (valor: string) => void;
    label: string;
    obrigatorio: boolean;
    valor: string;
    itens: string[]
}

const ListaSuspensa = (props: ListaSuspensaProps) => {

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select
                onChange={evento =>
                    props.alterado(evento.target.value)}
                    required={props.obrigatorio}
                    value={props.valor}>
                <option value="">click para selecionar</option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa