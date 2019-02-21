
/**
 * isEmpty function that checks to see if the value passed is empty
 * @param {value to be checked if it is empty} value 
 */

const isEmpty = (value) => {
    return(
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    )
}

module.exports = isEmpty;