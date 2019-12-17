const mangasCollection = require('../model/mangaSchema')
const DB_URI=process.env.MONGODB_URI

//Exibe todas as coleções de mangás em ordem alfabética
const getAll = (request, response) => {
    mangasCollection.find((error, mangas)=>{

        if(error){
            return response.status(500).send(error)
        } else {   
            return response.status(200).send(mangas.sort((primeiro, segundo) =>{
                if(primeiro.titulo < segundo.titulo){
                    return -1
                } else if(segundo.titulo > primeiro.titulo){
                    return 1
                } else {
                    return 0
                }
            }))
        }
    })
    
}

//Exibe os mangás por melhor avaliação
const getByRating = (request, response) => {
    mangasCollection.find((error, mangas)=>{

        if(error){
            return response.status(500).send(error)
        } else {
            return response.status(200).send(mangas.sort((primeiro, segundo) =>{
                if(primeiro.avaliacao > segundo.avaliacao){
                    return -1
                } else if(segundo.avaliacao > primeiro.avaliacao){
                    return 1
                } else {
                    return 0
                }
            }))
        }
    })    

}

//Insere uma coleção de mangás no banco
const addManga = (request, response) => {
    const mangaTitulo = request.body.titulo;
    const mangaGenero = request.body.genero;
    const mangas = new mangasCollection({titulo: mangaTitulo, genero: mangaGenero})
    mangas.save((error) => {
        if(error){
            return response.status(400).send(error)
        } else {
            return response.status(201).send(mangas)
        }
    })
}

//Insere uma avaliação no mangá
const rateManga = (request, response) =>{
    const id = request.params.id
    const avaliacao = request.body.avaliacao
    const options = {new:true}
    
    if(avaliacao > 5 || avaliacao < 1) {
        return response.status(400).send("Avaliação deverá ser entre 1 e 5.")
    }
    
    mangasCollection.findByIdAndUpdate(id, {avaliacao}, options, (error, manga) =>{
        if(error){
            return response.status(500).send(error)

        } else {
            if(manga){
                return response.status(200).send(manga)
            } else {
                return response.status(404).send('Não encontrei esta coleção :(')
            }
        }
    })

}

//Delete uma coleção de Mangás
const deleteManga = (request, response) =>{
    const id = request.params.id
    mangasCollection.findByIdAndRemove(id,(error, manga) =>{
        if(error){
            return response.status(500).send(error)
        } else if(manga){
            return response.status(200).send('Coleção deletada com sucesso!' )
        } else {
            return response.sendStatus(404)
        }
    })
}


module.exports = {
    getAll,
    addManga,
    rateManga,
    deleteManga,
    getByRating,
    DB_URI
    
}