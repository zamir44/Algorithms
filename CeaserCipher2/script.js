function analyzeText(){
    var paragraph = document.querySelector("#hashTable");
    var textArea = document.querySelector("#codedMessage");

    var message = textArea.value;

    paragraph.textContent = message;
}