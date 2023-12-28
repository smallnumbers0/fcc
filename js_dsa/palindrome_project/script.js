const checkButton = document.querySelector('#check-btn');
const result = document.querySelector('#result')


checkButton.addEventListener("click", () => {
    const textInput = document.querySelector('#text-input').value;
    if(textInput === "") {
        alert("Please input a value");
        return;
    }
   
    let modifiedString = cleanString(textInput);
    // document.getElementById('input-container').style.background = "linear-gradient(90deg, red,blue)";
    // document.getElementById('input-container').style.padding = "10px";
    if(checkPalindrome(modifiedString) || modifiedString.length === 1) {
        result.innerHTML= `${textInput} is a palindrome`
    }
    else {
        result.innerHTML= `${textInput} is not a palindrome`
    }
   
})

const checkPalindrome = (phrase) => {

    if(phrase === phrase.split("").reverse().join("")) {
        return true;
    }
    else {
        return false;
    }
}

const cleanString = (str) => {
    str = str.toLowerCase();
    return str.replace(/[^a-zA-Z0-9]/g, '')
}