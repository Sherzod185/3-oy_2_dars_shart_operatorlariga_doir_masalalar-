let a=5;
let b=8;
let c=8;
let d=9;
if(a==b && b==c){
  console.log(4);
}
else if(a==b && b==d){
  console.log(3);
}
else if(a==c && c==d ){
  console.log(2);
}
else if(b==c && c==d ){
  console.log(1);
}
else {
  console.log("Teng qiymatlar 3ta emas");
}