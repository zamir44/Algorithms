function reverseArray(arr) {
    //without using a second array
    for(var i=0;i<arr.length/2;i++){
        //swap two items from the array
        var first = arr[i];
        var second = arr[arr.length-1-i];
        arr[i]=second;
        arr[arr.length-1-i]=first;
    }
    
    return arr;
}

testArr=[3,9,1,'r','w','sponge',6,0];

console.log(reverseArray(testArr));