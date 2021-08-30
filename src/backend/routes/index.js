
let Games = require('../controllers/videogames.json')
const { Router
} = require('express');
const router = Router();

router.get('/videogames', async function(req, res) {
   
    
res.json(Games)
})

module.exports = router;