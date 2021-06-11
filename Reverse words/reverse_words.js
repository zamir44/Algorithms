var body = document.querySelector("body");

function reverseWords (str) {
    var arr = str.split(' ');

    
    for(var i = 0; i<arr.length; i++) {
        var letters = arr[i].split('');
        var newLetter = [];
    
            
            for(var j=letters.length-1; j>-1; j--) 
                newLetter.push(letters[j]);

                var newWord = newLetter.join('');

                arr[i] = newWord;
            
        
        
    }

    var joinWords = arr.join(' ');

    var oldText = document.createElement("H3");
    oldText.textContent = "Old: " + str;
    body.appendChild(oldText);
    var newText = document.createElement("H3");
    newText.textContent = "New " + joinWords;
    body.appendChild(newText);

    console.log(joinWords);
}

reverseWords('this is a string of words');