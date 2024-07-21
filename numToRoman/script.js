const inputValue = document.getElementById("number");

const btn = document.getElementById("convert-btn");

const output = document.getElementById("output");

const arr = [
  {
    roman : "M",
    num : 1000,
  },
  {
    roman : "CM",
    num : 900,
  },
  {
    roman : "D",
    num : 500,
  },
  {
    roman : "CD",
    num : 400,
  },
  {
    roman : "C",
    num : 100,
  },
  {
    roman : "XC",
    num : 90,
  },
  {
    roman : "L",
    num : 50,
  },
  {
    roman : "XL",
    num : 40,
  },
  {
    roman : "X",
    num : 10,
  },
  {
    roman : "IX",
    num : 9,
  },
  {
    roman : "V",
    num : 5,
  },
  {
    roman : "IV",
    num : 4,
  },
  {
    roman : "I",
    num : 1,
  },
]

const getVal = () => {
  let val = inputValue.value.trim();
  if (val === "" || isNaN(val)) {
    return null;
  }
  return Number(val);
};

const converter = (num) =>{
  let res = "";
  for(let i = 0; i < arr.length; i++){
    // console.log(arr[i]);
    while(num >= arr[i].num){
      res += arr[i].roman;
      num -= arr[i].num;
    }
  }
  return res;
}

// converter();

btn.addEventListener("click",()=>{
  let values = getVal();
  output.classList.remove("hidden");
  if(values === null){
    output.style.background = "red";
    output.innerHTML = "Please enter a valid number";
  }else if(values < 0){
    output.style.background = "red";
    output.innerHTML = "Please enter a number greater than or equal to 1";
  }else if(values > 3999){
    output.style.background = "red";
    output.innerHTML = "Please enter a number less than or equal to 3999";
  }else{
    output.style.background = "#7a7a96";
    output.innerHTML = `${converter(values)}`
    ;
  }
  setTimeout(()=>{
    inputValue.value = "";
    output.innerHTML = "";
  },3000);
  
  
});