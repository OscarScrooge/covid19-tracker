
const defaultState ={
    countries:[],
    status: {},
    predictions:[],
    countryName:"",
};

export default function reducer(state = defaultState,action) {

    switch(action.type){
        case 'set-countries':
            return {...state,countries:action.countries};
        case 'set-status':
            return {...state,status:action.status,countryName: action.countryName};
        case 'set-predictions':
            return {...state,predictions:action.predictions};
        default:
            return state;
    }
}


