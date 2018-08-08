var b=0;
function color_change(b) {
  while (true) {
    console.log(b);
     b++;
     if (b%2==1){
       console.log('1');
       //$('tr:even').css('background-color','red');
     }
     else {
       console.log('2');
       //$('tr:even').setAttribute('background-color','green');
     }
       //(b%2==0)?1=$('tr:even').css('background-color','red'):0=('tr:even').css('background-color','green');
}};
