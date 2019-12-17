const mongoose = require("mongoose")

const DB_URL = process.env.MONGODB_URI
const connect = () => {
    mongoose.connect(DB_URL, {useNewUrlParser:true})
const connection = mongoose.connection
connection.on('error',() => console.error('Erro ao conectar'))

connection.once('open', () => console.log('Yay! Estamos conectados.'))
}

module.exports = {
    connect
}