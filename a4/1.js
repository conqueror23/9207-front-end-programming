
$(document).ready(function(){
    $("#b2_0").click(function(){
        $("#vail").hide();
    });
    $("#b2_1").click(function(){
        $("#vail").show();
    });
    $("#b2_2").click(function(){
        $(" #fadep").fadeIn(100);
    });
        $("#b2_3").click(function(){
        $(" #fadep").fadeOut(100);
    });
        $("#slide").click(function(){
        $("#slidec ").slideDown(1000);
    });
        $("#slide").click(function(){
        $("#slidec ").slideUp(1000);
    });
        $("#ts").click(function(){
        $("#tsc ").slideToggle(1000);
    });
            $("#fadetob").click(function(){
        $("#fadeto").fadeTo('slow',0.4);
    });
        $("#movel").click(function(){
            $("#movep").animate({left:'-300px'},5000);
    });
    /*  $("#movel").click(function(){
            $("#movep").animate({left:'0px'},5000);
    });
*/
            $("#moves").click(function(){
        $("#movep").stop();
    });
    $('#html_text').click(function(){
        $('#result').text($('#html1').text())

    })
    $('#html_ht').click(function(){
        $('#result').text($('#html1').html())

    })
    
    $('#html_addb').click(function(){
        $('#html1').prepend('add before')

    })
$('#html_adda').click(function(){
        $('#html1').append('add after')

    })
$('#html_remove').click(function(){
        $('#html1').remove()

    })
$('#html_addc').click(function(){
        $('#html1').addClass('be')

    })
$('#html_removec').click(function(){
        $('#html1').removeClass('be')

    })
$('#html_togglec').click(function(){
        $('#html1').toggleClass('be')

    })
/*
$('#html_checkc').click(function(){
        $('#html1').hasClass('be')
    })
    */
$('#html_backg').click(function(){
        $('#html1').css({'background':'green'})

    })
$('#changep').click(function(){
        $('#cp').attr('src','001.jpg')

    })
$('#b1').click(function(){
        $('#input1').text($('#inputtext').val())

    })
$('#innerwidth').click(function(){
        $('#input1').text($('#inputtext').innerWidth())

    })
$('#outerwidth').click(function(){
        $('#input1').text($('#inputtext').outerWidth())

    })
 
   });


