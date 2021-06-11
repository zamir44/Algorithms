function binarySearch(numArray, key) {

    console.log("Looking for " + key + " in " + numArray);
    if(numArray.length === 1) {
        if(numArray[0]===key)
                return true;
            else 
                return false;
    }  else {
        var mid = Math.floor(numArray.length / 2);
        if(numArray[mid]>key) {
            var newArr = numArray.slice(0, mid);
            return binarySearch(newArr, key);
        }
        else {
            var newArr = numArray.slice(mid);
            return binarySearch(newArr, key);
        }
    }
}

console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 5))
console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 25))


