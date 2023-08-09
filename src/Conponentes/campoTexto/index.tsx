import './CampoTexto.css';

interface CampoTextoProps {
    alterado: (valor: string) => void;
    label: string;
    obrigatorio?: boolean;
    placeholder: string;
    valor: string;
    tipo?: 'text' | 'password' | 'date' | 'email' | 'nunber';

}

const CampoTexto = ( { alterado, placeholder, label, valor, obrigatorio = false, tipo = 'text' } : CampoTextoProps) => {

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
                type={tipo}
            />
        </div>
    )
}

export default CampoTexto;