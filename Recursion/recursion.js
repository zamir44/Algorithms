//simple recursion program -- factorial

//first with a for loop
function factorial(num) {
    var product = 1;
    for(var i=1; i<=num; i++)
        product=product*i;
    console.log(product);
}

factorial(5);


//now with recursion
function fact(num) {
    if(num===1)
        return 1;
    else if(num>1)
        return num*fact(num-1);
}

console.log(fact(5));



function sum(arr,n) {
    //error cases
    if(n<1)
        return null;
    else if(n>arr.length)
        return null;
    //stopping point (base case)
    else if(n===1)
        return arr[0];
    //normal step (recursive step)
    else
        return sum(arr,n-1)+arr[n-1];
}

var testArr = [4,9,-2,6,0,3];
console.log(sum(testArr,4));