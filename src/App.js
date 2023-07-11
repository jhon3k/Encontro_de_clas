import Banner from './Conponentes/Banner';
import Formulario from './Conponentes/Formulario';
import Rodape from './Conponentes/Rodape';
import Time from  './Conponentes/Time';
import { useState } from 'react';

function App() {

  const times = [
    {
      nome: 'VAGABOND',
      corPrimaria: '#57C278',
      corSegundaria: '#D9F7E9'
    },
    {
      nome: 'HERO',
      corPrimaria: '#82CFFA',
      corSegundaria: '#E8F8FF'
    },
    {
      nome: 'WARRIOR',
      corPrimaria: '#A6D157',
      corSegundaria: '#F0F8E2'
    },
    {
      nome: 'BANDIT',
      corPrimaria: '#DB6EBF',
      corSegundaria: '#FAE9F5'
    },
    {
      nome: 'ASTROLOGER',
      corPrimaria: '#E06B69',
      corSegundaria: '#FDE7E8'
    },
    {
      nome: 'SAMURAI',
      corPrimaria: '#FFBA05',
      corSegundaria: '#FFF5D9'
    },
    {
      nome: 'CONFESSOR',
      corPrimaria: '#FF8A29',
      corSegundaria: '#FFEEDF'
    },
  ]

  const [jogadores, setjogadores] = useState([])

  const jogadorInseridor = (jogador) => {

    setjogadores([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} jogadorInseridor={jogador => jogadorInseridor(jogador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSegundaria={time.corSegundaria} 
        jogadores={jogadores.filter(jogador => jogador.time === time.nome)}
      />)}
      <Rodape />
    </div>
  )
}

export default App;
