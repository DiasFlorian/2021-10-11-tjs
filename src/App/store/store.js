const initialState = {
    memes: [],
    images: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INIT_IMAGES': return { ...state, images: [...action.values] };
        case 'ADD_MEME': return { ...state, memes: [...state.memes, action.value] };

        default:
            return state
    }
}

let state=reducer(undefined, {type:'INIT'});
console.log(state);

state=reducer(state, {type:'INIT_IMAGES', values:[{id:0}, {id:1}, {id:2}]});
console.log(state);

state=reducer(state, {type:'ADD_MEME', value:{id:0, text:'coucou'}});
console.log(state);
