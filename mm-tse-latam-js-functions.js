import fetch from 'node-fetch';

export function arrayPosition(array){
  // Return the fifth item of the array received as parameter
  return array[4]
}

export function arraySize(array){
  // Return the size of the array received as parameter
  return array.length
}

export function arrayMerge(array1,array2){
  // Return one array with all elements from array1 and all elements from array2 
  // received as parameters in the function
  // Example: array1 = ["cat", "dog", "horse"] array2 = ["turtle", "elephant"]
  // Output = ["cat", "dog", "horse", "turtle", "elephant"]
  return [...array1, ...array2]
}

export function arrayChange(array){
  // Receive an array of numbers and return an array with the same numbers, but as strings.
  let newArr = array.map(x=>x=`${x}`)
  return newArr
}

export function loopConditional(string, element){
  // This function must return the number of times the element appears in the string received
  // Example: String: "today I woke up" element: "o" result: 2
  let count=0
  for (let i = 0; i < string.length; i++) {
    if (string[i]==element) {
      count++
    }
  }
  return count
}

export function sortItOut(array){
 // This function should receive an array of numbers that is out of order,  
 // and sort it from smallest to largest without using the sort() function.
 //  Sample array to use as test: [1,6,15,23,5,2,32,10]
 //  Output: [1,2,5,6,10,15,23,32]
  let pivot

  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (i==0) {
        if (array[i]>array[j]) {
          pivot = array[i]
          array[i]=array[j]
          array[j]=pivot
        }
      }else{
        if (array[i]<array[j]) {
          pivot = array[i]
          array[i]=array[j]
          array[j]=pivot
        }
      }

  }
}
return array
}

export async function objectData(url) {
  // This function should be able to do the following:
  // 1) Capture the information from the url received as parameter (JSON file)
  //  1.1) url to be used as test: https://storage.googleapis.com/mm-tse-latam/orders.json
  // 2) Write a code that can verify the value of all products, and:
  // 3) Return the NAME of the product with the highest price. 
  // p.s.: (The NAME of the product is the 'product' parameter of the JSON file)


  const response = await fetch(url);
  const data = await response.json();
  let price=0
 
    data.map(x=>x.price>price ? price=x.price : null)
    let highest = data.find(x=>x.price==price)
    return highest.product
    
}

export function arrayToObject(array1, array2) {
  // This function should receive 2 arrays, and transform it into a single object, similar to columns and rows of a spreadsheet
  // Sample array1: ["Name", "Address","Zip Code","Phone"]
  // Sample array2: [["Manuel", "Street 01", "00414010","999918888"],["Maria", "Street 02", "00414015","998818877"],["Eduardo", "Street 03", "02614010","974640566"]]
  // Sample expected output: [{Name: "Manuel", Address: "Street 01", Zip Code: "00414010", Phone: "999918888"},{Name: "Maria", Address: "Street 02"...}]
  let newArr=[]
  for (let i = 0; i < array2.length; i++) {
    let newObj={}
      for (let j = 0; j < array1.length; j++) {
        newObj[`${array1[j]}`] = `${array2[i][j]}`
      }
      newArr.push(newObj)
    
  }
  return newArr
 
}
