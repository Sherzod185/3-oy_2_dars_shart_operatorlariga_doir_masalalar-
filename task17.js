let a =1;
let b =2;
let c=18;
if (a<b && b<c){
  a*=2;
  b*=2;
  c*=2;
  console.log(`a =12 edi a'=`,a );
  console.log(`b =20 edi b'=`,b);
  console.log(`c =18 edi c'=`,c);
}
else if (c<b && b<a){
  a*=2;
  b*=2;
  c*=2;
  console.log(`a =12 edi a'=`,a );
  console.log(`b =20 edi b'=`,b);
  console.log(`c =18 edi c'=`,c);
}
else{
  a*=-1;
  b*=-1;
  c*=-1;
  console.log(`a =12 edi a'=`,a );
  console.log(`b =20 edi b'=`,b);
  console.log(`c =18 edi c'=`,c);
}