let {DbDataGames, UpdateDb, DbDataGenres} = require ("../database/db")
let Games = require('../controllers/videogames.json')
Games = Games.concat(DbDataGames)
const { Router
} = require('express');
const router = Router();

router.get('/videogames', async function(req, res) {
    let name = req.query.name;
    let id = req.query.id;
    let detail;
    let detailName;
    
    
if(name){
detailName =  await Games.filter(e=> {
    if(name == e.nameSlug){
        return e;
    }
    })
if(!detailName[0]){
res.json({error: "VideoGame not found"})
} else {
    res.json(detailName)
}

}else if(id){
 detail = await Games.filter(e=> {
        if(id == e.nameSlug){
            return e;
        }
        })
        if(!detail[0]){
            res.json({error: "VideoGame not found"})
        } else {
            res.json(detail)
        }
    
     
}else {
 res.json(Games)
}
  
})

router.get('/genres', async function (req, res){
let Genres = await DbDataGenres;
Genres = JSON.parse(Genres)
res.status(200).json(Genres)
})


router.post("/videogames", async function (req, res){
    let data = req.body;
    if(data.slug && data.name && data.description && data.rating && data.img && data.platform && data.reseaseData && data.genres){
        let obj = {
            nameSlug: data.slug,
            name: data.name,
            description: data.description,
            img: data.img,
            rating: data.rating,
            platforms: data.platform,
            releaseData: data.releaseData,
            genres: data.genres
        };
        UpdateDb(obj);
        res.json({done: "Video game added successfully"})
    } else {
        res.json({errpr: "Something went wrong"})
    }
    
   
    
})
module.exports = router;