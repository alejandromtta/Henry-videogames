const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://postgres:veigar93@localhost:5432/pi')
const c = require('../controllers/axios.controller')
class Videogame extends Sequelize.Model {}
Videogame.init({
    id:
})