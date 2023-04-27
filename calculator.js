let sign = '';
let input1 =document.getElementById('smallscreen');
let input2 = document.getElementById('bigscreen');
let canclear = false;
let letter1; 
let letter2;
let ans;

function display(message) {
   if (canclear) {
       canclear=false;
       input2.value="";
   }
   if (input2.value == '0') {
      input2.value = ''
      letter1 = ''
      letter2 = ''
   }
     input2.value += message;
     letter2 = input2.value
}  

function operator(message) {
   if (sign) {
      equal()
      }
       if (input1.value=letter2) {
           input1.value='';
   }
   if (sign=message) {
      input1.value += input2.value + message
   }
   canclear=true
   letter1 = input2.value
}

function equal() {
   if (sign == '+') {
    input2.value = Number(letter1) + Number(letter2) 
   }
   if (sign == '-') {
      input2.value  = Number(letter1) - Number(letter2)
   }
   if (sign == 'x') {
      input2.value = Number(letter1) * Number(letter2)
   }
   if (sign == '÷') {
      input2.value = Number(letter1) / Number(letter2)
   }
   input1.value += letter2 + '='
}

function pcentage() {
   input2.value = input2.value/100 
}

function squareroot() {
   input1.value = `root(${input2.value})`
   input2.value = Math.sqrt(input2.value)
}

function square() {
   input1.value = `sqr(${input2.value})`
   input2.value = input2.value*input2.value
}

function fraction() {
   input1.value =`1/${input2.value}`
   input2.value = 1/input2.value
}

function clr() {
   input2.value = "0";
   input1.value = "";
}

function clrlower() {
   input2.value = "0";
}

function back() {
   input2.value =input2.value.substring(0,input2.value.length-1)
}