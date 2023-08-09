import './rodape.css'

const Rodape = () => {
    return (
        <footer className="footer">
        <div>
            <ul>
                <li>
                    <a className='logos' href="https://discord.gg/eldenring" target="_blank">
                        <img src="./imagens/discord-icone.png" alt="" />
                    </a>
                </li>
                <li>
                    <a className='logos' href="https://twitter.com/ELDENRING" target="_blank">
                        <img src="./imagens/twitter-icon.png" alt="" />
                    </a>
                </li>
                <li>
                    <a className='logos' href="https://www.instagram.com/eldenringbrasil/" target="_blank">
                        <img src="/imagens/instagram-icon.png" alt="" />
                    </a>
                </li>
            </ul>
        </div>
        <div className='imagem'>
            <img src="./imagens/elden-ringLogo.png" alt="" />
        </div>
        <div>
            <p>
                Projeto desenvolvido por Jhon Feitosa
            </p>
        </div>
    </footer>
    )
}

export default Rodape