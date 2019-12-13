const mangasCollection = require('../model/mangaSchema')

//Exibe todas as coleções de mangás em ordem alfabética
const getAll = (request, response) => {
    mangasCollection.find((error, mangas)=>{

        if(error){
            return response.status(500).send(error)
        } else {
            
            return response.status(200).send(mangas.sort((primeiro, segundo) =>{
                if(primeiro.titulo.length > segundo.titulo.length){
                    return -1
                } else if(segundo.titulo.length > primeiro.titulo.length){
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
                if(primeiro.avaliacao.length > segundo.avaliacao.length){
                    return -1
                } else if(segundo.avaliacao.length>primeiro.avaliacao.length){
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
    const mangaNome = request.body.nome;
    const mangaGenero = request.body.genero;
    const manga = new mangassCollection({nome: mangaNome, ano: mangaGenero})
    manga.save((error) => {
        if(error){
            return response.status(400).send(error)
        } else {
            return response.status(201).send(manga)
        }
    })
}

//Insere uma avaliação no mangá
const rateManga = (request, response) =>{
    const id = request.params.id
    const manga = request.body
    const options = {new:true}

    manga.avaliacao.forEach(a => {
        if(a > 5 || a < 1){
            return response.status(400).send("Avaliação deverá ser entre 1 e 5.")
        }
    })
    mangasCollection.findByIdAndUpdate(id, manga, options, (error, manga) =>{
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
    getByRating
    
}