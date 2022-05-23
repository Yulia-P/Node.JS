exports.validator1 = function(params, _, raw) {
    console.log('validator1')
    if(!Array.isArray(params)) throw new Error('Array is empty')
    params.forEach(el => {
        if(!isFinite(el)) throw new Error('Check your params')
    })
    return params
}

exports.validator2 = function(params, _, raw) {
    console.log('validator2')
    if(!Array.isArray(params)) throw new Error('Array is empty')
    if(params.length != 2) throw new Error('There must be two parameters')
    params.forEach(el => {
        if(!isFinite(el)) throw new Error('Check your params')
    })
    if(params[1]== 0) throw new Error('На ноль делить собрался?')
    return params
}