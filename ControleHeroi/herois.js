
const herois = [
  { "id": 1, "nome": "Spider-man", pontosDePoder: 90 },
  { "id": 2, "nome": "Batman", pontosDePoder: 75 }
]

const getHerois = (req, res) => {
  res.status(200).send({ dados: herois })
}

const excluirHeroi = (req, res) => {
  const idExcluir = parseInt(req.params.id)
  const indiceHeroi = herois.findIndex(hero => hero.id === idExcluir)

  if (indiceHeroi !== -1) {
    herois.splice(indiceHeroi, 1)
    res.status(200).send({ mensagem: "Herói excluído com sucesso" })
  } else {
    res.status(404).send({ mensagem: "Herói não encontrado" })
  }
}

const adicionarHeroi = (req, res) => {
  const novoHeroi = req.body
  herois.push(novoHeroi)
  res.status(201).send({ mensagem: "Herói adicionado com sucesso", heroi: novoHeroi })
}

export { getHerois, excluirHeroi, adicionarHeroi }
