const axios = require ('axios')

async function getGames() {
    try {
        let resultResult = []
        let result = await axios.get("https://api.rawg.io/api/games?key=4c8416d9bb7e4980a24dde3d38557844&page_size=40")
        let resultTwo = await axios.get("https://api.rawg.io/api/games?key=4c8416d9bb7e4980a24dde3d38557844&page=2&page_size=40")
        let resultTres = await axios.get("https://api.rawg.io/api/games?key=4c8416d9bb7e4980a24dde3d38557844&page=5&page_size=20")
        resultTwo = resultTwo.data.results
        result = result.data.results
        resultTres = resultTres.data.results
        let mapResultTres = resultTres.map(data => {
            resultResult.push( {
                nameSlug: data.slug,
                name: data.name,
                img: data.background_image,
                genres: data.genres,
                released: data.released,
                rating: data.rating,
                platforms: data.platforms.map(data=>{
                    return {
                        nameSlug: data.platform.slug,
                        name: data.platform.name
                    }
                })
            })
        })
        let mapResult = result.map(data => {
            resultResult.push( {
                nameSlug: data.slug,
                name: data.name,
                img: data.background_image,
                genres: data.genres,
                released: data.released,
                rating: data.rating,platforms: data.platforms.map(data=>{
                    return {
                        nameSlug: data.platform.slug,
                        name: data.platform.name
                    }
                })
            })
        })
        let mapResultTwo = resultTwo.map(data => {
            resultResult.push({
                nameSlug: data.slug,
                name: data.name,
                img: data.background_image,
                genres: data.genres,
                released: data.released,
                rating: data.rating,platforms: data.platforms.map(data=>{
                    return {
                        nameSlug: data.platform.slug,
                        name: data.platform.name
                    }
                })
            })
        })
        
        return resultResult;
    } catch (err) {
       console.log(err)
    }
 
}
let uwu= async ()=>{
    let uwus = await getGames() 
    console.log(uwus[0].platforms)
}
console.log(uwu())

module.export = getGames