const _ = {
  clamp (number, lower, upper){
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  inRange(number, start, end){
    if(end === undefined){
      end = start;
      start = 0;
    };
    if(start > end){
      let temp = end;
      end = start;
      start = temp;
    };
    let isInRange = (start <= number && number < end);
    return isInRange;
    },

  words(string){
    const words = string.split(" ");
    return words;
  },

  pad(string, length){
    if (length <= string.length){
      return string;
    };
    let startPaddingLength = 0;
    if (string.length <= length){
      startPaddingLength = Math.floor((length - string.length) /2);
    };
    if (string.length >= length) {
      startPaddingLength = Math.floor((string.length - length /2));
    };
    let endPaddingLength = length - string.length - startPaddingLength;
    let spacer = ' ';
    let paddedString = spacer.repeat(startPaddingLength) + string + spacer.repeat(endPaddingLength);
    return paddedString;
  },

  has(object, key){
    let hasValue = object[key] != undefined;
    return hasValue;
  },

  invert(object) {
   let invertedObject = {};
   for (let key in object) {
     let originalValue = object[key];
     invertedObject[originalValue] = key;
   };
   return invertedObject;
 },

  findKey(object,predicate){
    for(let key in object) {
      const value = object.key;
      const predicateReturnValue = predicate(value);
      if (predicateReturnValue === true) {
        return key;
      };
      return undefined;
    };
  },

  drop(array, n) {
    if(n === undefined) {
      n = 1;
    };
    let droppedArray = array.slice(n);
    return droppedArray;
  },

  dropWhile(array, predicate){
    let dropNumber = array.findIndex((element, index) => {
      return !(predicate(element, index, array));
    });
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },

  chunk(array, size){
    if(size === undefined) {
      size = 1;
    };
    let arrayChunks = [];
    for (let counter = 0; counter < array.length; counter += size) {
      let arrayChunk = array.slice(counter, counter + size);
      arrayChunks.push(arrayChunk);
    };
    return arrayChunks;
  }
};



// Do not write or modify code below this line.
module.exports = _;
