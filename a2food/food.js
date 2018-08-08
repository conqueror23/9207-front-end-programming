alert('welcom to best food website')
function changeText(tx){
    tx.innerHTML='goodchoice'
}
function maxn(){
    document.getElementById('br').innerHTML= ''+Math.max(1,3,159,12)

}

function calo(){
    var all,a,b=0;
    var a=document.getElementById('fo').value;
    var b=document.getElementById('so').value;
    all=a+b;
    document.getElementById('combination').innerHTML=''+all;
}

function hiderest(){
document.getElementById('#sds').hide()
}
function mOver(obj)
{
    obj.innerHTML='nice choice'
}
function mOut(obj){
    obj.innerHTML='good to see you next time'
}
function dt(){
    document.getElementById('current').innerHTML=Date()
}

function textvalid() {
    var x, text;

    // Get the value of the input field with id="corpcode"
    x = document.getElementById("corpcode").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "corpcode is not valid";
    } else {
        text = "code is OK";
    }
    document.getElementById("corpd").innerHTML = text;
}
function disable() {
    document.getElementById("degree").disabled=true;
}
function enable() {
    document.getElementById("degree").disabled=false;
}
function dh(){
    document.getElementById('timg').style.visibility='visible';
}

//make new windows for 1.html
/*var newWindow;

function makeNewWindow( ) {
   
    if (!newWindow || newWindow.closed) {
        newWindow = window.open("","sub","height=200,width=300");
        setTimeout("writeToWindow( )", 500);
    } else if (newWindow.focus) {
        newWindow.focus( );
    }
}
function writeToWindow( ) {
    var newContent = "<html><head><title>Sub Window</title></head>\n";
    newContent += "<body>\n<h1>thank you "+span.corpname.value+"you have ordered "+span.product.value+"</h1>\n";
    newContent += "</body>\n</html>";
    newWindow.document.write(newContent);
    newWindow.document.close( ); 
}
*/
/*
// color flow of word
var totalCycles = 0;
var currColor = 0;
var colors, intervalID;
// Build array of color names
function init( ) {
    colors = ["red", "green", "yellow", "blue"];
}
// Advance the color by one
function cycleColors( ) {
    // reset counter to 0 if it reaches 3; otherwise increment by 1
    currColor = (currColor == 3) ? 0 : ++currColor;
    // set style color to new color from array
    document.getElementById("topic").style.color = colors[currColor];
    // invoke this function again until total =  27 so it ends on red
    if (totalCycles++ < 50) {
        intervalID = setTimeout("cycleColors( )", 500);
    } else {
        clearTimeout(intervalID);
    }
}
*/

//random number
/*
function rdn(){
    var num1=0;
    num1=document.getElementById('num1').value();
    var rn=Math.floor(Math.random()*num1);  
    document.getElementById('rnum').innerHTML=''+rn;
}
*/

