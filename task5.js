let num1 = -5;
let num2 =-5;
let num3 =8;
if (num1>0 && num2>0 && num3>0){
  console.log("3ta musbat son bor");
} else if((num1 >0 && num2 > 0 && num3 <=0)||(num1 >0 && num2 <= 0 && num3 >0)||(num1 <= 0 && num2 > 0 && num3 > 0)) {
  console.log("2ta musbat son 1ta manfiy son bor");
}
else if((num1 >0 && num2 <= 0 && num3 <=0)||(num1 <= 0 && num2 <= 0 && num3 >0)||(num1 <= 0 && num2 > 0 && num3 >= 0)){
  console.log("1ta musbat son va 2ta manfiy son bor");
}
else {
  console.log("3ta butun son ham manfiy");}
