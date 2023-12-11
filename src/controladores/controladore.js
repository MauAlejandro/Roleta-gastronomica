const { oQuefazer, oQueCozinhar, participantes } = require("../bancoDeDados")

const bemVindos = (req, res) => {
    let menssagem = { menssagem: "bem-vindo a roleta gastronomica" }

    res.status(200).json(menssagem)
}

const exibirParticipantes = (req, res) => {

    res.status(200).json({ participantes })
}

const addParticipante = (req, res) => {
    const { nome, idade, sexo } = req.body

    const participanteNovo = {nome, idade, sexo}

    participantes.push(participanteNovo)

    res.status(201).json({menssagem: "participante adicionado"})
}


module.exports = { bemVindos, exibirParticipantes, addParticipante }