
//function to get current date
export const getCurrentDate = () => {
    let cDate = new Date()
    let year = cDate.getFullYear()
    let month = String(cDate.getMonth() + 1)
    let day = String(cDate.getDate())

    { month.length < 2 && (month = `0${month}`) }
    { day.length < 2 && (day = `0${day}`) }

    let fullDate = `${year}-${month}-${day}`
    return fullDate
}
//restriction (3-parameter, month<=11, year<=364)
//function to get custom before date from current date
export const getBeforeDate = (beforeYear, beforeMonth, beforeDay) => {
    let cDate = new Date()
    let year = cDate.getFullYear() - beforeYear
    let month = String((cDate.getMonth() + 1) - beforeMonth)
    let day = String(cDate.getDate() - beforeDay)

    { month.length < 2 && (month = `0${month}`) }
    { day.length < 2 && (day = `0${day}`) }

    let fullBeforeDate = `${year}-${month}-${day}`
    return fullBeforeDate
}
//glitch if month=12, current=8 then =8-12 wrong
//restriction (3-parameter, month<=11, year<=364)
//function to get custom after date from current date
export const getAfterDate = (afterYear, afterMonth, afterDay) => {
    let cDate = new Date()
    let year = cDate.getFullYear() + afterYear
    let month = String((cDate.getMonth() + 1) + afterMonth)
    let day = String(cDate.getDate() + afterDay)

    { month.length < 2 && (month = `0${month}`) }
    { day.length < 2 && (day = `0${day}`) }

    let fullBeforeDate = `${year}-${month}-${day}`
    return fullBeforeDate
}

//have to work on this comman get data format, very usefull
// const getCurrentYMD = () => {
//     let cDate = new Date()
//     let year = cDate.getFullYear()
//     let month = String(cDate.getMonth() + 1)
//     let day = String(cDate.getDate())

//     { month.length < 2 && (month = `0${month}`) }
//     { day.length < 2 && (day = `0${day}`) }

//     let fullFormattedDate = `${year}-${month}-${day}`
//     let allDates = {
//         year,
//         month,
//         day,
//         fullFormattedDate
//     }
//     return allDates
// }

export const returnCapitalize = (currentValue) => {
    let capitalizeValue = currentValue.toUpperCase()
    return capitalizeValue
}
export const allowFloatInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^\d*\.?\d*$/;  //number + one dot
    if (currentValue === '' || re.test(currentValue)) //test for float input only one dot allowed
        return currentValue
    else
        return oldValue
}
export const allowNumberInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[0-9\b]+$/;     //number
    if (currentValue === '' || re.test(currentValue)) //test
        return currentValue
    else
        return oldValue
}
export const allowNumberCommaInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[0-9\b,]+$/;     //number + comma
    if (currentValue === '' || re.test(currentValue)) //test
        return currentValue
    else
        return oldValue
}
export const allowCharacterInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[a-zA-Z\s]*$/;  //character + space
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowCharacterSpaceCommaInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[\a-zA-Z,! ]*$/; //character + space + comma
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowCharacterNumberInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[\a-zA-Z0-9!]*$/;    //character + number 
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowMailInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    const re = /^[\a-zA-Z0-9@.!]*$/;    //character + number 
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowCharacterNumberSpaceInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    // const re = /^[\.a-zA-Z0-9,! ]*$/; //character + number + space + dot + comma
    const re = /^[\a-zA-Z0-9! ]*$/;    //character + number + space
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
export const allowCharacterNumberSpaceCommaInput = (currentValue, oldValue, max = null) => {
    if (currentValue.length > max)  //stop if max value and return oldvalue
        return oldValue

    // const re = /^[\.a-zA-Z0-9,! ]*$/; //character + number + space + dot + comma
    const re = /^[\a-zA-Z0-9!, ]*$/;    //character + number + space
    if (currentValue === '' || re.test(currentValue)) //test 
        return currentValue
    else
        return oldValue
}
