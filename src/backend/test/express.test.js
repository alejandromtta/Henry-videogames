const route = "http://localhost:3000/videogames";
let axios = require("axios");

it('should to be an Array with more of 20 objects', async () => {
    let result = await axios.get(route)
    result = result.data

    function check(array) {
        if (array.length > 20) {
            return true;
        } else {
            return false
        }
    }
    expect(check(result)).toBe(true)
});

it('Should return an object with a valid name of video game (route get with name-param)', async () => {
    let route = "http://localhost:3000/videogames?name=dota-2"
    let result = await axios.get(route)
    result = result.data[0]

    function check(data) {
        if (data.name === 'Dota 2') {
            return true;
        } else {
            return false;
        }
    }
    expect(check(result)).toBe(true)
})

it('should return a object with a valid Video Game  name (id param)', async () => {
    let route = "http://localhost:3000/videogames?id=dota-2";
    let result = await axios.get(route)
    result = result.data[0]

    function check(data) {
        if (data.name === 'Dota 2') {
            return true;
        } else {
            return false;
        }
    }
    expect(check(result)).toBe(true)
})

it("VideoGames response must have a description", async () => {
    let route = "http://localhost:3000/videogames?id=dota-2";
    let result = await axios.get(route)
    result = result.data[0]

    function check(data) {
        if (data.description) {
            return true;
        } else {
            return false;
        }
    }
    expect(check(result)).toBe(true)
})

it('Should have a route Genres with a object  with "all genres"', async function () {
    let route = "http://localhost:3000/genres"
    let result = await axios.get(route)
    result = result.data

    function check(array) {
        if (array.length > 5) {
            return true;
        } else {
            return false
        }
    }
    expect(check(result)).toBe(true)
})

it('If a search with an Id param not have results, must return a error object', async () => {
    let route = "http://localhost:3000/videogames?id=ffffffsda";
    let result = await axios.get(route)
    result = result.data
    expect(result.error).toBe("VideoGame not found")
})