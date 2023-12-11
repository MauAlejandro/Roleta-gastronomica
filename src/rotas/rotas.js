const express = require("express")
const app = express()
const { bemVindos, exibirParticipantes, addParticipante } = require("../controladores/controladore")

app.get("/roleta.gastronomica", bemVindos)
app.get("/roleta.gastronomica/participantes", exibirParticipantes)
app.post("/roleta.gastronomica/participantes", addParticipante)



module.exports = app