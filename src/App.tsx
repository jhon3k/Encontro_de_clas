import Banner from './Conponentes/Banner';
import { Icolaborador } from './Conponentes/Compartilhado/Interfaces/Icolaborador';
import Formulario from './Conponentes/Formulario';
import Rodape from './Conponentes/Rodape'
import Time from './Conponentes/Time';
import { useState } from 'react';

function App() {

  const times = [
    {
      nome: 'VAGABOND',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'HERO',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'WARRIOR',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'BANDIT',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'ASTROLOGER',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'SAMURAI',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'CONFESSOR',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ]

  const [jogadores, setjogadores] = useState<Icolaborador[]>([])

  const jogadorInseridor = (jogador: Icolaborador) => {

  setjogadores([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner
        enderecoImagem='./imagens/elden-ring.png'
        textoAlternativo='Banner principal da pagina do Organo'
      />
      <Formulario
        times={times.map(time => time.nome)}
        jogadorInseridor={jogador => jogadorInseridor(jogador)}
      />

      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        jogadores={jogadores.filter(jogador => jogador.time === time.nome)}
      />)}
      <Rodape />
    </div>
  )
}

export default App;
