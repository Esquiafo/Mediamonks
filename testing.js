import {arrayPosition,arraySize,arrayMerge,arrayChange,loopConditional,sortItOut,objectData,arrayToObject} from './mm-tse-latam-js-functions.js'

console.log(arrayPosition([1,4,6,5,6,7]))
console.log(arraySize([1,2,3,4,5,6,7]))
console.log(arrayMerge([1,2,3,4,5,6,7],[8,9,10]))
console.log(arrayChange([1,2,3,4,5,6,7]))
console.log(loopConditional('today I woke up', 'o'))
console.log(sortItOut([4,6,15,23,5,2,32,10]))
objectData('https://storage.googleapis.com/mm-tse-latam/orders.json').then(x => console.log('El producto mas caro es: ' + x))
console.log(arrayToObject(["Name", "Address","Zip Code","Phone"],[["Manuel", "Street 01", "00414010","999918888"],["Maria", "Street 02", "00414015","998818877"],["Eduardo", "Street 03", "02614010","974640566"]]))