import { createStore } from "redux";

export const initialState = {
    memes: [],
    images: []
}

export const REDUCER_ACTIONS=Object.freeze({
    INIT_IMAGES:'INIT_IMAGES',
    ADD_MEME:'ADD_MEME'
})

const REDUCER_PRIVATE_ACTIONS=Object.freeze({
    FULL_INIT:'FULL_INIT',
    FETCH_ALL:'FETCH_ALL'
})

function reducer(state = initialState, action) {
    switch (action.type) {
        case REDUCER_ACTIONS.INIT_IMAGES: return { ...state, images: [...action.values] };
        case REDUCER_ACTIONS.ADD_MEME: return { ...state, memes: [...state.memes, action.value] };

        default:
            return state
    }
}

// création du store
const store=createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//abo au magasin
store.subscribe(()=>{
    console.log(store.getState());
});

//dispatch
store.dispatch({type:REDUCER_ACTIONS.INIT_IMAGES, values:[{id:0}, {id:1,chien:0}]});
store.dispatch({type:REDUCER_ACTIONS.ADD_MEME, values:{id:0, text:''}});

export default store;