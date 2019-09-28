
const colors = ['red', 'blue']
// console.log(colors)

for(color of colors){
  // console.log('o', color)
}





















function sumArray(array){
  const result = 0

  for(num of array) {
    // const newResult = result + num
    // result = newResult
    result += num
  }
  return result
}
console.log('v', sumArray([1,2,3,4]))


function productArray(array) {
  let result = 1

  for(num of array) {
    result = result * num
  }
  return result
}

console.log('c', productArray([1,2,3,4]))
console.log('c', productArray([2,2,3]))


function hasFun(array){

  for(el of array){
    if(el == 'fun'){
      return true
    }
  }
  return false
}

// console.log('b', hasFun(['wgwg', 3, 'fun', true]))


function containsOnlyBooleans(array){
  let result = true;
  for(el of array){
    if(typeof el !== 'boolean'){
      return result = false
    }
    // else {
    //   result = true
    // }
  }
  return result
}

// function containsOnlyBooleansTwo(array){
//   let result;
//   for(el of array){
//     if(el === true || el === false){
//       result = true
//     }
//   }
//   return result
// }


// console.log(0 == true) // false
// console.log(1 == true) // true
// console.log(1 === true) // false
// console.log(2 == true) // false
// console.log(2 === true) // false
// console.log('hi' == true) // false

console.log('go', containsOnlyBooleans([true, true, true, false, false]))
// console.log('c', containsOnlyBooleansTwo([true, true, true, false, false, 3]))


function concatenate(arrayOne, arrayTwo){

  // for(arr of arrayTwo){
  //   arrayOne += ','
  //   arrayOne += arr
  // }
  // return arrayOne

  for(el of arrayTwo){
    arrayOne.push(el)
  }
  return arrayOne
}


// console.log('s', concatenate(['df', 'er'], ['qq', 'ww']))



function getEvenNumbers(array) {
  let result = []
  for(num of array){
    if(num % 2 == 0){
      result.push(num)
    }
  }
  return result
}

// console.log('q', getEvenNumbers([1, 2, 3, 4, 5, 6]))


function getMulipliedArray(array, multiplier){
  const result = []
  for(num of array){
    result.push(num * multiplier)
  }
  return result
}

console.log('p', getMulipliedArray([1,2,3], 6))


function isSorted(array){
  let current = 0;
  for(num of array){
    if(num > current){
      current = num
    }else{
      return false
    }
  }
  return true
}

// console.log('l', isSorted([2,3,4]))


function countOccurences(array, element){
  let count = 0;
  for(el of array){
    if(el == element){
      count++
    }
  }
  return count
}

// console.log('a', countOccurences([1,2,3,2,2,2], 2))
// console.log('a', countOccurences([false, true, false], false))


function reverse(array){
  let result = []
  for(el of array){
    result.unshift(el)
  }
  return result
}

// console.log('s', reverse([1,2,3]))


function getOperatedarray(array, operater, number){
  let result = []

  for(num of array){
    if(operater == '+')
    result.push(num + number)
    if(operater == '-')
    result.push(num - number)
    if(operater == '/')
    result.push(num / number)
    if(operater == '*')
    result.push(num * number)
  }
  return result
}


// console.log('b', getOperatedarray([1,2,3], "/", 4))


function callADoctor(array){
  let result = ''
  let painArray = []
  let painString = ''

  if(array.length == 1){
    for(el of array){
      if(el[el.length - 1] != 's'){
        return result = 'Doctor, doctor! My ' + el + ' hurts!'
      }else {
        return result = 'Doctor, doctor! My ' + el + ' hurt!' 
      }
    }
  }

  for(el of array){
    painArray.push(el)
  }
  painArray.pop()
  for(el of painArray){
    painString += el
    painString += ', '
  }
  
  result = 'Doctor, doctor! My ' + painString + 'and ' + array[array.length -1] + ' hurt!'
  return result
}

// console.log('r',callADoctor(['head', 'shoulders', 'knees']) )
// console.log('r',callADoctor(['knees']) )


function deepCount(arr) {
  let elements = 0;
  console.log('')
  for(var i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      elements += deepCount(arr[i]) + 1;
    } else {
      elements++;
    }
  }
  return elements;
}


// console.log(deepCount([1, 2, 3]));  //>>>>> 3
// console.log(deepCount(["x", "y", ["z"]]));  //>>>>> 4
// console.log(deepCount([1, 2, [3, 4, [5]]]));  //>>>>> 7

