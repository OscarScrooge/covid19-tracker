
const defaultState ={
    countries:[],
    status: {},
    predictions:[],
};

export default function reducer(state = defaultState,action) {

    switch(action.type){
        case 'set-countries':
            return {...state,countries:action.countries};
        case 'set-status':
            return {...state,status:action.status};
        case 'set-predictions':
            return {...state,predictions:action.predictions};
        default:
            return state;
    }
}


