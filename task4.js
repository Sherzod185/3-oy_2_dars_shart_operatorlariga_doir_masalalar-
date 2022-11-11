let num1 = -5;
let num2 =-5;
let num3 =-5;
let num;
if (num1>0 && num2>0 && num3>0){
  num = 3;
  console.log(num);
} else if((num1 >0 && num2 > 0 && num3 <=0)||(num1 >0 && num2 <= 0 && num3 >0)||(num1 <= 0 && num2 > 0 && num3 > 0)) {
  num=2;
  console.log(num);
}
else if((num1 >0 && num2 <= 0 && num3 <=0)||(num1 <= 0 && num2 <= 0 && num3 >0)||(num1 <= 0 && num2 > 0 && num3 >= 0)){
  num=1;
  console.log(num);
}
else {
  console.log("Uchala butun son ham manfiy");}
