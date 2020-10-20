
export function setCountries(countries){
    return({
        type:'set-countries',
        countries
    })
}

export function setStatusByCountry(status){
    return({
        type: 'set-status',
        status,
    })
}

export function setPredictions(predictions){
    return({
        type: 'set-predictions',
        predictions
    })
}
