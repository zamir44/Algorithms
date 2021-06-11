function findMean(array){
    var sum = 0;
    array.forEach(num => sum=sum+num);
    return sum/array.length;
}

function findMedian(array){
    //we can assume the array is sorted
    if(array.length % 2 === 0){
        return (array[array.length/2]+array[array.length/2-1])/2;
    }
    else {
        return array[(array.length-1)/2];
    }
}

function findMode(array){
    //create variables to store current information
    var currentMode = array[0];
    var currentModeCount = 1;
    var currentItem = array[0];
    var currentItemCount = 1;
    
    for(var i=1; i<array.length; i++){
        //if the next item in the array is different
        if(array[i]!==currentItem){
            currentItem = array[i];
            currentItemCount = 1;
        }
        //if the next item is the same
        else{
            currentItemCount++;
            //check to see if currentItem is the mode
            if(currentItemCount>currentModeCount){
                currentMode = currentItem;
                currentModeCount = currentItemCount;
            }
        }
    }
    
    return currentMode;
}

//Always use this to sort a number array
function compareNumbers(a,b){
    return a-b;
}

function meanMedianMode(array){
    //we need to sort the array
    array.sort(compareNumbers);
    
    //return object with mean, median, mode
    var answer = {
        mean: findMean(array),
        median: findMedian(array),
        mode: findMode(array),
    };
        
    return answer;
}


//Test arrays
var arr1 = [3,8,-2,4,9,0,3,5,1];
var arr2 = [8,0,5,8,6,-3,5,8,6,12,8];

var response = meanMedianMode(arr1);
console.log(arr1);
console.log("Mean: " + response.mean);
console.log("Median: " + response.median);
console.log("Mode: " + response.mode);
console.log("");

var newResponse = meanMedianMode(arr2);
console.log(arr2);
console.log("Mean: " + newResponse.mean);
console.log("Median: " + newResponse.median);
console.log("Mode: " + newResponse.mode);
console.log("");