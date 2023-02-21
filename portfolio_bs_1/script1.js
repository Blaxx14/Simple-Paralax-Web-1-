//smooth scroll
$('.scroll1').on('click', function(e) {
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    if(elemenTujuan === 'home'){
        $('html, body').animate({
            scrollTop : elemenTujuan
        }, 1000);
    
    }
    else{
        $('html, body').animate({
            scrollTop : elemenTujuan.offset().top - 100}, 1000);
    }
    

    e.preventDefault();
});


//paralax effect
$(window).scroll(function(){
    var vscroll = $(this).scrollTop();

    $('#home img').css({
        'transform' : 'translate(0, '+ vscroll/3 +'%)'
    })

    function heading(x){
        if (x.matches){
            $(window).scroll(function(){
                var vscroll = $(this).scrollTop();
            
                $('#home h2').css({
                    'transform' : 'translate(0, '+ vscroll +'%)'
                })
            });
        }
        else {
            $(window).scroll(function(){
                var vscroll = $(this).scrollTop();
            
                $('#home h2').css({
                    'transform' : 'translate(0, '+ vscroll/1.5 +'%)'
                })
            });
        }
    };
    
    var y = window.matchMedia("(max-width:600px)");
    heading(y);
    
    function par(a){
        if(a.matches){
            $(window).scroll(function(){
                var vscroll = $(this).scrollTop();
            
                $('#home p').css({
                    'transform' : 'translate(0, '+ vscroll/2 +'%)'
                })
            });
        }
        else {
            $(window).scroll(function(){
                var vscroll = $(this).scrollTop();
            
                $('#home p').css({
                    'transform' : 'translate(0, '+ vscroll +'%)'
                })
            });
        }
    };
    
    var c = window.matchMedia("(max-width:600px)");
    par(c);

    if(vscroll > $('.container').offset().top - 30){
            $('.container .wrap1').addClass('timbul');
            $('.container .wrap2').addClass('timbul');
            $('.container .wrap3').addClass('timbul');
        }
        else {
            $('.container .wrap1').toggleClass('timbul');
            $('.container .wrap2').toggleClass('timbul');
            $('.container .wrap3').toggleClass('timbul');
        }
});




