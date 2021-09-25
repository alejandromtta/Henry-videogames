import axios from 'axios';
import {
    sort,
    secondSort
} from "./order.controller"
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";
export const ORDER_GENRES = "ORDER_GENRES";
export const ORDER_VIDEOGAMES = "ORDER_VIDEOGAMES";
export const GET_VIDEOGAMES_NAME = "GET_VIDEOGAMES_NAME"
export const GET_ORIGINAL_FILTER = "GET_ORIGINAL_FILTER"

export function getOriginalFilter(data) {
    let route = "http://localhost:3000/videogames"
    return async function (dispatch) {
        let result = await axios.get(route);
        result = result.data
        let originalResult = result;
        dispatch({
            type: ORDER_VIDEOGAMES,
            payload: secondSort(data, result, originalResult)
        });
    }
}

export function orderVideogames(data, type) {
    let route = "http://localhost:3000/videogames";
    return async function (dispatch) {
        let result = await axios.get(route);
        result = result.data
        let resultOriginal = await axios.get(route);
        resultOriginal = resultOriginal.data
        dispatch({
            type: ORDER_VIDEOGAMES,
            payload: sort(resultOriginal, result, data, type)


        });
    };
}

export function orderGenres(name) {
    let route = "http://localhost:3000/videogames";
    if (name) {
        return async function (dispatch) {
            let result = await axios.get(route)
            result = result.data;

            let filter;
            filter = result.filter(data => {


                if (data.id) {
                    let comprobar = data.genres.find(e => e.nameSlug === name)
                    console.log(data)
                    if (comprobar) {
                        return data
                    }
                }

            })

            dispatch({
                type: ORDER_GENRES,
                payload: filter
            })
        }
    } else {
        return async function (dispatch) {
            let result = await axios.get(route)
            result = result.data;
            dispatch({
                type: ORDER_GENRES,
                payload: result
            })
        }
    }
}
export function getGenres() {
    let route = "http://localhost:3000/genres";

    return async function (dispatch) {
        let result = await axios.get(route);
        result = result.data;
        dispatch({
            type: GET_GENRES,
            payload: result
        })
    }
}
export function getGamesByName(state, name) {
    //reformar funcion, en vez de pedir un state, usar la api, mapear coincidencias 
    // asi evitamos que se haga redundante el state y resolvemos el bug donde el search se salta el state y se mete al if
    //hacer un filter en el backend para saltar los objetos vacios y asi tener la db en tiempo real por peticion.
    if (state && name) {
        if (state[0]) {
            let newState = state.map(e => {
                if (e.name === name) {
                    return e.nameSlug;
                }
            })

            if (newState) newState = newState.filter(Boolean)
            let route = `http://localhost:3000/videogames?name=${newState[0]}`;

            return async function (dispatch) {
                let result = await axios.get(route)
                result = result.data;
                dispatch({
                    type: GET_VIDEOGAMES_NAME,
                    payload: newState ?
                        result : []
                })
            }
        } else {
            let route = "http://localhost:3000/videogames"
            return async function (dispatch) {
                let result = await axios.get(route)
                result = result.data;
                dispatch({
                    type: GET_VIDEOGAMES_NAME,
                    payload: result
                })
            }
        }
    } else {
        let route = "http://localhost:3000/videogames"
        return async function (dispatch) {
            let result = await axios.get(route)
            result = result.data;
            dispatch({
                type: GET_VIDEOGAMES_NAME,
                payload: result
            })
        }
    }
}

export function getVideogames(name) {
    let route = "http://localhost:3000/videogames";
    if (name) {
        route = route + `?name=${name}`
    }
    return async function (dispatch) {
        let result = await axios.get(route);
        result = result.data;
        dispatch({
            type: GET_VIDEOGAMES,
            payload: result
        })
    }
}
