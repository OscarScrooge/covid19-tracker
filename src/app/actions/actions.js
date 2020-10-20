
export function setCountries(countries){
    return({
        type:'set-countries',
        countries
    })
}

export function setStatusByCountry(status,countryName){
    return({
        type: 'set-status',
        status,
        countryName
    })
}

export function setPredictions(predictions){
    return({
        type: 'set-predictions',
        predictions
    })
}
