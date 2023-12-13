const viloes = [
    { "id": 1, "nome": "Duende Verde", pontosDePoder: 90 },
    { "id": 2, "nome": "Joker", pontosDePoder: 65 }
  ]
  
  const getViloes = (req, res) => {
    res.status(200).send({ dados: viloes });
  }
  
  const excluirVilao = (req, res) => {
    res.status(200).send({ mensagem: "Vilão excluído com sucesso" });
  }
  
  const adicionarVilao = (req, res) => {
    res.status(201).send({ mensagem: "Vilão adicionado com sucesso" });
  }
  
  export { getViloes, excluirVilao, adicionarVilao }
  