let {
    DbDataGames,
    UpdateDb,
    DbDataGenres
} = require("../database/db")
let Games = require('../controllers/videogames.json')



const {
    Router
} = require('express');
const router = Router();

router.get('/', function (req, res) {
    res.status(200).json({
        Welcome: "this api have Video Games route, Genres Route,search route by id param and name param."
    })
})
router.get('/videogames', async function (req, res) {
    let dbgames = await DbDataGames
    dbgames = JSON.parse(dbgames)
    dbgames = dbgames.map(function (e) {
        if (typeof e.platforms != "Array") {
            let uwu = e.Genres;
            e.genres = uwu;
            let videogame = e.platforms.split(",")
            e.platforms = [];
            for (let i = 0; i < videogame.length; i++) {
                let format = videogame[i].replace(/\s|\+/g, "-");
                e.platforms.push({
                    nameSlug: format,
                    name: videogame[i]
                })
            }
            return e;
        }
    })
    Games = Games.concat(dbgames)

    if (Games[Games.length - 1].name === Games[Games.length - 2].name) {
        Games[Games.length - 1] = undefined;
    }
    Games = Games.filter(Boolean)


    let name = req.query.name;
    let id = req.query.id;
    let detail;
    let detailName;


    if (name) {
        detailName = await Games.filter(e => {
            if (name == e.nameSlug) {
                return e;
            }
        })
        if (!detailName[0]) {
            res.json({
                error: "VideoGame not found"
            })
        } else {
            res.status(200).json(detailName)
        }

    } else if (id) {
        detail = await Games.filter(e => {
            if (id == e.nameSlug) {
                return e;
            }
        })
        if (!detail[0]) {
            res.json({
                error: "VideoGame not found"
            })
        } else {
            res.status(200).json(detail)
        }


    } else {
        res.status(200).json(Games)
    }

})

router.get('/genres', async function (req, res) {
    let Genres = await DbDataGenres;
    Genres = JSON.parse(Genres)
    res.status(200).json(Genres)
})


router.post("/videogames", async function (req, res) {
    let data = req.body;

    if (data.name && data.description && data.rating && data.img && data.platforms && data.releaseData && data.genres) {
        data.name = data.name.replace(/\s|\+/g, "-");
        data.rating = parseInt(data.rating)
        let obj = {
            nameSlug: data.name,
            name: data.name,
            description: data.description,
            img: data.img,
            rating: data.rating,
            platforms: data.platforms.toString(),
            releaseData: data.releaseData,
            genres: data.genres
        };
        UpdateDb(obj)
        res.json({
            done: "Video game added successfully"
        })
    } else {
        res.json({
            error: "Something went wrong"
        })
    }



})
module.exports = router;