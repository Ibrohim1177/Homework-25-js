var num1 = prompt("Son kiriting!")
var num2 = prompt("Daraja kiriting!")
 var javob = ""

for(i = 1; i <= num2; i++){
   javob = num1 * num2;
    javob *= num2
}
console.log(javob);


do {
    var num = prompt('Son kiriting!')

    if(num % 2 === 0){
        alert('Bu juft son')
    }else if(num % 2 === 1){
       alert('Bu toq son')
   }else if(isNaN(num)){
        alert('Iltios son kiriting')
  }
} while (num);


