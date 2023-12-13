const viloes = [
    { "id": 1, "nome": "Duende Verde", pontosDePoder: 90 },
    { "id": 2, "nome": "Joker", pontosDePoder: 65 }
  ]
  
  const getViloes = (req, res) => {
    res.status(200).send({ dados: viloes });
  }
   
  const adicionarVilao = (req, res) => {
    const novoVilao = req.body

    novoVilao.id = viloes.reduce((maiorid, vilao) => vilao.id > maiorid ? vilao.id : maiorid, 0) + 1

    viloes.push(novoVilao)
    res.status(201).send({ mensagem: "Vilão adicionado com sucesso", vilao: novoVilao });
  }
  

  
const herois = [
    { "id": 1, "nome": "Spider-man", pontosDePoder: 90 },
    { "id": 2, "nome": "Batman", pontosDePoder: 75 }
  ]
  
  const getHerois = (req, res) => {
    res.status(200).send({ dados: herois })
  }
  
  const adicionarHeroi = (req, res) => {
    const novoHeroi = req.body
    // novoHeroi.id = herois.reduce((maiorid, heroi) => {
    //   if(heroi.id > maiorid){
    //     maiorid = heroi.id
    //   }
    //   return maiorid
    // }, 0) + 1

    novoHeroi.id = herois.reduce((maiorid, heroi) => heroi.id > maiorid ? heroi.id : maiorid, 0) + 1
    
    console.log(novoHeroi)
    herois.push(novoHeroi)
    res.status(201).send({ mensagem: "Herói adicionado com sucesso", heroi: novoHeroi })
  }
  

  
  const iniciarBatalha = (req, res) => {
    const  id_heroi = req.body.id_heroi
    const id_vilao = req.body.id_vilao
    const heroi = herois.find(h => h.id === id_heroi)
    const vilao = viloes.find(v => v.id === id_vilao)
  
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
  
    res.json({ batalha: resultadoBatalha })
  }
  
  export { iniciarBatalha,getViloes, getHerois, adicionarHeroi, adicionarVilao }
  
  