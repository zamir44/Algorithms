//Set up global parameters (query selector, variables, etc.)
 var body = document.querySelector("body");

//Step 1: Caesar cipher function
function caesarCipher(str,num){
    //Step 2: Break string into an array
    var arr = str.split('');
    //console.log(arr); (test passed)
    
    
    //Step 3: Advance each letter by num places (hard step!)
    
    //Step 3a: set up alphabet
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var alphabet = alpha.split('');
    
    for(var i=0; i<arr.length; i++){
        //Step 3b: look up letters in str/arr
        var letterNum = alphabet.indexOf(arr[i]);
        if(letterNum!==-1){
            //Step 3c: add num and fix if too big
            letterNum=(letterNum+num)%26;
            if(letterNum<0)
                letterNum+=26;
            //Step 3d: convert letterNum to newLetter
            var newLetter = alphabet[letterNum];
            //Step 3e: store the newLetter
            arr[i]=newLetter;
        }
    }
    
    //Step 4: Turn new array back into string
    var res = arr.join('');
    console.log(res);
    
    //Step 5: Print result to the webpage (DOM Manipulation)
    var oldText = document.createElement("H3");
    oldText.textContent = "Old: " + str;
    body.appendChild(oldText);
    var newText = document.createElement("H3");
    newText.textContent = "New: " + res;
    body.appendChild(newText);
}



//Test the function
caesarCipher("hello my name is justin",-217);

