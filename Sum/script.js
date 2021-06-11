//solution using brute force
function twoSum(numArray,sum){
    var goodPairs = [];
    
    //nested for loops to check all pairs
    for(var i=0; i<numArray.length; i++){
        for(var j=i+1; j<numArray.length; j++){
            if(numArray[i]+numArray[j]===sum){
                var pair = [numArray[i],numArray[j]];
                goodPairs.push(pair);
            }
        }
    }
    
    return goodPairs;
}

//test the function
var arr = [3,6,1,0,4,2,5,1,9,3,1,5,2];
console.log(twoSum(arr,5));


//solution using a hash table (object)
function twoSumHash(numArray,sum){
    var goodPairs = [];
    
    //use first for loop to set up an object
    var numObj = {
    };
    for(var i=0; i<numArray.length; i++){
        if(numObj.hasOwnProperty(numArray[i]))
            numObj[numArray[i]]++;
        else
            numObj[numArray[i]] = 1;
    }

    //use second for loop to use the object
    for(var i=0; i<numArray.length; i++){                 //first, i=0
        if(numArray[i]<sum/2){                            //only check pairs where first number is less than sum/2
            var diff = sum - numArray[i];                 //numArray[i]=3, diff=2
            if(numObj.hasOwnProperty(diff)){              //check to see if diff is on table
                for(var j=0; j<numObj[diff]; j++)         //if yes, add one pair for each time it is counted
                    goodPairs.push([numArray[i],diff]);
            }
        }
    }
    
    return goodPairs;
}
console.log(twoSumHash(arr,5));