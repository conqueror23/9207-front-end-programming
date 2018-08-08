
/*var n=200;
var m=-150;
*/
/*
let carmove=function(n,m){
$('#car').animate({left:'(n-m)px'},500)
return n;
};
*/
//console.log(n)
/*
var carmove=function(){
    $('#car').animate({left:'200px'},500,carmove())
}
*/
//$(document).ready(function (){
    // body...

    /*
    $('#carmove').click(function(){
        var n=0;
        while (true){
            if (n%2==0) {
                $('#car').animate({left:'700px'},1500,
                function(n){
                $('#car').attr('src','002.jpg');
                n++;
                return n;
                })
                $('#carstop').click(function(){
                    $('#car').stop(true,false);})
                }

            else {
                $('#car').animate({left:'0px'},1500,
                    function(n){
                    $('#car').attr('src','001.jpg');
                n++;
                    return n;
                })
                $('#carstop').click(function(){
                $('#car').stop(true,false);})
            }
            }
        })
        */
// from internet solution cause whole page move
/*
$('#carmove').click(animatethis($('#car'),500));

        $('#carstop').click(function(){
            $('#car').stop()
        })
})

function animatethis(targetElement, speed) {
    $(targetElement).animate({ marginLeft: "+=250px"},
    {
        duration: speed,
        complete: function ()
        {
            targetElement.animate({ marginLeft: "-=250px" },
            {
                duration: speed,
                complete: function ()
                {
                    animatethis(targetElement, speed);
                }
            });
        }
    });
    */

    /*
    var car_p = {left:'500px'};
    $("#carmove").click(function(){
        if(car_p.left=='500px')
            {$("#car").css("left","500px");
             $("#car").animate(car_p,1000,rowBack);}
        else
            {$("#car").css("left","0px");
             $("#car").animate(car_p,1000,rowBack);}
    function rowBack(){
        if(car_p.left=='0px')
            {$("#car").attr('src','002.jpg');
            car_p.left='500px';
            $("#car").animate(car_p,1000);
            }
        else if(car_p.left=='500px')
            {$("#car").attr('src','001.jpg');
            car_p.left='0px';
            $("#car").animate(car_p,1000);
            }
        $("#car").animate(car_p,1000,rowBack);
        }

  })
   $("#carstop").click(function(){
    $("#car").stop();
  })
  */
/*
var car_p={left:'400px'};
$('#carmove').click(function()
{
    if(car_p.left=='400px'){
        $('#car').animate(car_p,500,turnOver);
        $('#car').attr('src','001.jpg');
        car_p.left='400px';
    }
    else{
        $('#car').animate(car_p,500,turnOver);
        $('#car').attr('src','002.jpg');
        car_p.left='0px';
    }
    function turnOver(){
        if (car_p.left=='400') {
            $('#car').attr('src','002.jpg');
            car_p.left='0px';
            $('#car').animate(car_p,500)
        }
        else{
            $('#car').attr('src','001.jpg');
            car_p.left='400px';
            $('#car').animate(car_p,500)
        }
    }
})
$('#carstop').click(function(){
    $('#car').stop();
})
*/
// The samplest functional
/*
$('#carmove').click(function move(){
    n={left:'400px'}
    $('#car').animate(n,1000,moveb);
    function moveb(){

            n.left='0px';
            $('#car').animate(n,1000,move)
$('#carstop').click(function(){
    $('#car').stop(true);

})

    }
})
$('#carstop').click(function(){
    $('#car').stop(true);

})
*/
/*
$(document).ready(function(){
    var car_p={left:'400px'};
    $('#carmove').click(function movef(){

        $('#car').animate(car_p,1000,moveb);
        car_p.left='400px';
        $('#car').attr('src','001.jpg')

        function moveb(){
            car_p.left='0px';
            $('#car').attr('src','002.jpg');
            $('#car').animate(car_p,1000,movef)
        }
        $('#carstop').click(function(){
            $('#car').stop()

        })

    })
        $('#carstop').click(function(){
            $('#car').stop()

        })

})
*/
$(document).ready(function(){
    var car_p={left:'400px'};
    $('#carmove').click(

        function movef(){

        $('#car').animate(car_p,1000, );
        car_p.left='400px';
        $('#car').attr('src','001.jpg')

        function moveb(){
            car_p.left='0px';
            $('#car').attr('src','002.jpg');
            $('#car').animate(car_p,1000,movef)
        }

        $('#carstop').click(function(){
            $('#car').stop()

        })

    })
        $('#carstop').click(function(){
            $('#car').stop()

        })
})
/*
$(document).ready(function(){
    var car_p={left:'400px'};
    $('#carmove').click(

        function movef(){

        $('#car').animate(car_p,1000,moveb).animate({left:'0px'},1000,movef())
})
    movef();
})*/
