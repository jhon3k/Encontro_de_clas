import './rodape.css'

const Rodape = (props) => {
    return (
        <footer className="footer">
        <section>
            <ul>
                <li>
                    <a className='logos' href="https://discord.gg/eldenring" target="_blank">
                        <img src="./imagens/logoDiscord.png" alt="" />
                    </a>
                </li>
                <li>
                    <a className='logos' href="https://twitter.com/ELDENRING" target="_blank">
                        <img src="./imagens/twitter.png" alt="" />
                    </a>
                </li>
                <li>
                    <a className='logos' href="https://www.instagram.com/eldenringbrasil/" target="_blank">
                        <img src="/imagens/instagram.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section className='imagem'>
            <img src="./imagens/elden-ringLogo.png" alt="" />
        </section>
        <section>
            <p>
                Projeto desenvolvido por Jhon Feitosa
            </p>
        </section>
    </footer>
    )
}

export default Rodape