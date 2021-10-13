import { combineReducers, createStore } from "redux";
import { ADR_SRV, RESSOURCES_NAME } from '../config/config';


export const initialState = {
    memes: [],
    images: []
}

export const REDUCER_ACTIONS = Object.freeze({
    INIT_IMAGES: 'INIT_IMAGES',
    ADD_MEME: 'ADD_MEME'
})

const REDUCER_PRIVATE_ACTIONS = Object.freeze({
    FULL_INIT: 'FULL_INIT',
    FETCH_ALL: 'FETCH_ALL'
})

function reducer(state = initialState, action) {
    switch (action.type) {
        case REDUCER_ACTIONS.INIT_IMAGES: return { ...state, images: [...action.values] };
        case REDUCER_ACTIONS.ADD_MEME:
            const existPosition = state.memes.findIndex(e => e.id === action.value.id);
            if (existPosition === -1) {
                return { ...state, memes: [...state.memes, action.value] };
            }
            else {
                return { ...state, memes: [...state.memes.slice(0, existPosition), action.value, ...state.memes.slice(existPosition + 1)] };
            }
        case REDUCER_PRIVATE_ACTIONS.FULL_INIT: return { ...state, memes: [...action.memes], images: [...action.images] };
        case REDUCER_PRIVATE_ACTIONS.FETCH_ALL:
            const pmemes = fetch(`${ADR_SRV}${RESSOURCES_NAME.memes}`).then(f => f.json());
            const pmimages = fetch(`${ADR_SRV}${RESSOURCES_NAME.images}`).then(f => f.json());
            Promise.all([pmemes, pmimages])
                .then(ar_ar => {
                    store.dispatch({ type: REDUCER_PRIVATE_ACTIONS.FULL_INIT, memes: ar_ar[0], images: ar_ar[1] })
                    return ar_ar;
                })
            return state;
        default:
            return state
    }
}
export const initialMeme = {
    id: 0,
    imageId: 0,
    text: 'Mon 1er meme je test si ça marche',
    x: 200,
    y: 200,
    fontSize: 50,
    fontWeight: '900',
    color: 'BLUE',
    underline: true,
    italic: false
}
function reducerCurrentMeme(state = initialMeme, action) {
    switch (action.type) {
        case 'UPDATE_CURRENT': return { ...action.value };
        case 'SAVE_CURRENT':
            fetch(`${ADR_SRV}${RESSOURCES_NAME.memes}${undefined !== state.id ? '/' + state.id : ''}`,
                {
                    method: (undefined !== state.id ? 'PUT' : 'POST'),
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(state)
                }
            ).then(f => f.json()).then(o => {
                store.dispatch({ type: REDUCER_ACTIONS.ADD_MEME, value: o })
                store.dispatch({ type: 'UPDATE_CURRENT', value: initialMeme })
            })
            return state;

        default: return state;
    }
}
// création du store
const store = createStore(combineReducers({ current: reducerCurrentMeme, list: reducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//abo au magasin
store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch({ type: REDUCER_PRIVATE_ACTIONS.FETCH_ALL });
//dispatch
//store.dispatch({type:REDUCER_ACTIONS.INIT_IMAGES, values:[{id:0}, {id:1,chien:0}]});
//store.dispatch({type:REDUCER_ACTIONS.ADD_MEME, values:{id:0, text:''}});

export default store;