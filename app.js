var orange = '100';
var apple = '120';

if(orange < apple){
  alert('みかんの値段がりんごより安い');
}else if(orange == apple){
  alert('みかんとりんごが同じ値段');
}else{
  alert('みかんの値段がりんごより高い');
}

var max = 100;
var num = 1;
var count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}
alert('２を掛け続けて' + max +'を超えるのに必要だった回数は' + count + '回です');

var i;
var num = 0;

for(i = 1;i < 11;i++){
  num = num + i;
}

alert('１から１０まで足し算した結果は' + num + 'です');

alert('10+10=' + (10 + 10));
alert('10-10=' + (10 - 10));
alert('10×10=' + (10 * 10));
alert('10÷10=' + (10 / 10));