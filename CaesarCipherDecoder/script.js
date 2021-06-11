function analyzeText(){
    var paragraph = document.querySelector("#hashTable");
    var textArea = document.querySelector("#codedMessage");
    
    var message = textArea.value;
    
    //create a hash table
    var hash = {};
    var arr = message.split('');
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    
    arr.forEach(char => {
       //only add letters to the hash table
        if(alphabet.indexOf(char)>-1){
            if(hash.hasOwnProperty(char))
                hash[char]++;
            else
                hash[char] = 1;
        }
    });
    
    console.log(hash);
    
    //turn the object into a string
    var printString = "";
    for(var item in hash){
        printString = printString + item + ": " + hash[item] + " ";
    }
    
    paragraph.textContent = printString;
}

function tryToDecode(){
    var letterE = prompt("What letter do you think corresponds to the letter E?").toLowerCase();
    
    var finalMessage = document.querySelector("#finalMessage");
    var textArea = document.querySelector("#codedMessage");
    var message = textArea.value;  
    
    //determine the shift value to try
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    var guess = alphabet.indexOf(letterE);
    
    finalMessage.textContent = caesarCipher(message,4-guess);
}

function caesarCipher(str,num){ 
    //Step 2: Break string into an array
    var arr = str.toLowerCase().split('');
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
    
    //Step 5: Return the result
    return res;
}






