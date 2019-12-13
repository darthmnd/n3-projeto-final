const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mangaSchema = new Schema({ 
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
        },
        titulo: {
            type: String,
            unique: true,
            required: true
            },
        genero: {
            type: String,
            required: true
        },
        
        avaliacao: [{
            type: Number,
            min: 1,
            max: 5
        }]

        
})

const mangasCollection = mongoose.model('manga', mangaSchema)
module.exports = mangasCollection