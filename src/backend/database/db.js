let genres =require('../controllers/genres.json')
const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres://postgres:veigar93@localhost:5432/videogames')

class VideoGames extends Sequelize.Model {}
VideoGames.init({
    nameSlug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING
    },
    img: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    rating: {
        type: Sequelize.INTEGER
    },
    releaseData: {
        type: Sequelize.STRING
    },
    platforms: {
        type: Sequelize.STRING
    },
    isCreated:{
        type: Sequelize.BOOLEAN
    },
}, {
    sequelize,
    modelName: 'VideoGames'
})

class Genres extends Sequelize.Model {}

Genres.init({
    name: {
        type: Sequelize.STRING
    },
    nameSlug: {
        type: Sequelize.STRING
    }
}, {
    sequelize,
    modelName: 'Genres'
})

VideoGames.belongsToMany(Genres, {
    through: 'Genres_Videogames',
})

Genres.belongsToMany(VideoGames, {
    through: 'Genres_Videogames',
})

let UpdateDb = (data) => {
    sequelize.sync({
        force: true
    }).then(async () => {

        let NewVideoGame = await VideoGames.create({
            nameSlug: data.slug,
            name: data.name,
            description: data.description,
            img: data.img,
            rating: data.rating,
            platforms: data.platform,
            releaseData: data.releaseData,
            isCreated: true

        })
        for (let i = 0; i < data.genres.length; i++) {

            let genrer = await Genres.findOne({
                where: {
                    id: data.genres[i]
                }
            })
            console.log(genrer)


            await genrer.addVideoGames(NewVideoGame);


        }
    })
}

let DbDataGames = VideoGames.findAll({
    include: [Genres],
    attributes: ['id', 'name', 'description', 'nameSlug', 'rating', 'platforms', 'img',"isCreated"]
}).then(function (result) {
    let DbGet = JSON.stringify(result)
    return DbGet
})

let DbDataGenres = Genres.findAll({
    attributes: ['id', 'name', 'nameSlug']
}).then(function (result) {
    let DbGet = JSON.stringify(result)
    return DbGet
})



module.exports = {
    UpdateDb,
    DbDataGames,
    DbDataGenres
}


// sequelize.sync({
//     force: true
// }).then(async () => {
// for(let datas of genres) {

//     let  TA = await Genres.create({
//            name: datas.name,
//          nameSlug: datas.slug
//         })


//    }})