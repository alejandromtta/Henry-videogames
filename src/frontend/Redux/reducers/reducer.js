import {GET_VIDEOGAMES, GET_GENRES, GET_VIDEOGAMES_NAME} from "../actions/actions";

const initialState = {
    videogames: [],
    genres: []
};

export default function reducer (state = initialState, action) {
switch (action.type){
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
    default: {
        return state;
      }
}
}