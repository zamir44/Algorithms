function mergeSort(arr){
    //base case=stopping point
    if(arr.length===1)
        return arr;
    //recursive step=main algorithm
    else{
        //break it into two arrays
        var middle = Math.floor(arr.length/2);
        var arr1 = arr.slice(0,middle);
        var arr2 = arr.slice(middle);
        return merge(mergeSort(arr1),mergeSort(arr2));
    }
}

function merge(arr1,arr2){
    //this assumes the arrays are already sorted
    var finalArr = [];
    
    while(arr1.length>0 || arr2.length>0){
        if(arr1.length===0)
            finalArr.push(arr2.shift());
        else if(arr2.length===0)
            finalArr.push(arr1.shift());
        else{
            //both arrays have at least one element
            if(arr1[0]<arr2[0])
                finalArr.push(arr1.shift());
            else
                finalArr.push(arr2.shift());
        }
    }
    
    
    //return a single sorted array
    return finalArr;
}

var a = [8,12,0,6,-3,5,7,3,5,-2,29,-35,6];

console.log(mergeSort(a));