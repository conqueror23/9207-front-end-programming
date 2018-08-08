var newWindow;

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
    newContent += "<body>\n<h1>Wala a New window.</h1>\n";
    newContent += "</body>\n</html>";
    newWindow.document.write(newContent);
    newWindow.document.close( ); 
}