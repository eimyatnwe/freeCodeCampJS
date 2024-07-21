const input = document.getElementById("text-input");
const btn = document.getElementById("check-btn");
const res = document.getElementById("result");

function isPalindrome(str){

  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('').toLowerCase();
  return cleanedStr === reversedStr;

}

btn.addEventListener("click",(e)=>{
  e.preventDefault();
  const inputText = input.value.trim();
  res.classList.remove("hidden");
  if(inputText == ""){
    window.alert("Please input a value");
  }else{
    if(isPalindrome(inputText)) {
      res.innerHTML = `${inputText} is a palindrome`;
  }else{
    res.innerHTML = `${inputText} is not a palindrome`;
  }
  }
  
})

