import { getHerois } from '../ControleHeroi/herois.js'
import { getViloes } from '../ControleVilao/viloes.js'

const iniciarBatalha = (req, res) => {
  const { id_heroi, id_vilao } = req.body;
  const heroi = getHerois().find(hero => hero.id === id_heroi)
  const vilao = getViloes().find(villain => villain.id === id_vilao)

  if (!heroi || !vilao) {
    return res.status(404).json({ message: 'Herói ou vilão não encontrado!' });
  }

  let resultadoBatalha

  switch (true) {
    case vilao.pontosDePoder > heroi.pontosDePoder:
      resultadoBatalha = `${vilao.nome} venceu ${heroi.nome}!`
      break;
    case heroi.pontosDePoder > vilao.pontosDePoder:
      resultadoBatalha = `${heroi.nome} venceu ${vilao.nome}!`
      break;
    default:
      resultadoBatalha = 'A batalha terminou em empate!'
  }

  res.json({ batalha: resultadoBatalha });
};

export { iniciarBatalha };
