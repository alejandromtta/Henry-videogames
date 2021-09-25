import {
    GET_VIDEOGAMES,
    GET_GENRES,
    GET_VIDEOGAMES_NAME,
    ORDER_GENRES,
    ORDER_VIDEOGAMES,
    GET_ORIGINAL_FILTER
} from "../actions/actions";

const initialState = {
    videogames: [],
    genres: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_VIDEOGAMES: {
            return {
                ...state,
                videogames: action.payload
            }
        }
        case GET_VIDEOGAMES_NAME: {
            return {
                ...state,
                videogames: action.payload
            }
        }
        case GET_GENRES: {
            return {
                ...state,
                genres: action.payload
            }
        }
        case ORDER_GENRES: {
            return {
                ...state,
                videogames: action.payload
            }
        }
        case ORDER_VIDEOGAMES: {
            return {
                ...state,
                videogames: action.payload
            }
        }
        case GET_ORIGINAL_FILTER: {
            return {
                ...state,
                videogames: action.payload
            }
        }
        default: {
            return state;
        }
    }
}