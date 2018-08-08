
String.prototype.CountDoubles = function() {
  var count=0;
  for (var i = 0;i<this.length;i++) {
      if (this.charAt(i-1)==this.charAt(i)){
          count++;}}
  return count
    // body...
 };

function compute(){
var c= new String(document.getElementById('data').value);
document.getElementById('result').innerHTML=c.CountDoubles();
}
