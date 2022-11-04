    $(".hide").on('click', function(){
        $("nav a").toggle('slow');

    });
    
    $window.resize(function(){
    var anchoVentana = $(this).width();
    if (anchoVentana > 768){
        $("nav a").show();
    }else if(anchoVentana <= 768){
        $("nav a").hide();
    }
    });


    

    