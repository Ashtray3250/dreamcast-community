    var click = $("#click")[0];
    $(".InnerLinks a").click(function() {
      click.play();
    });




$(function () {                             // когда страница загружена
    $('.menu-main  a').each(function () {     
        var location = window.location.href 
        var link = this.href                
        var result = location.match(link);  
 
        if(result != null) {                
            $(this).parents('li').addClass('selected');
        }
    });
});


