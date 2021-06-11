//Simple fibonacci program
function fibo(index){
    //base cases
    if(index<3)
        return 1;
    else
        return fibo(index-1)+fibo(index-2);
}

var i=12;
console.log("f("+i+")="+fibo(i));

//Memoized fibonacci
function memoFibo(index,cache){
    //base cases (already computed)
    if(index<=cache.length) //if(cache[index])
        return {
            value: cache[index-1],
            array: cache,
        };
    //if not computed
    else{
        var temp1 = memoFibo(index-1,cache);
        var temp2 = memoFibo(index-2,cache);
        var newValue = temp1.value + temp2.value;
        var newArray = temp1.array;
        newArray.push(newValue);
        return {
            value: newValue,
            array: newArray,
        };
    }
}

var fibonacci = [1,1];
console.log(memoFibo(12,fibonacci));