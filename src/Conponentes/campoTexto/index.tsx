import './CampoTexto.css';

interface CampoTextoProps {
    alterado: (valor: string) => void;
    label: string;
    obrigatorio?: boolean;
    placeholder: string;
    valor: string;

}

const CampoTexto = ( { alterado, placeholder, label, valor, obrigatorio = false } : CampoTextoProps) => {

    const placeholderModificado = `${placeholder}...`

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        alterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholderModificado}
            />
        </div>
    )
}

export default CampoTexto;