function showmenu(){
	$('#hamb').css('left','10px');
	$('#hamb').css('top','10px');
}
function experience(){
	$('#experience').css('left','0');
}
function education(){
	$('#education').css('left','0');
}
function age(){
	$('#age').css('left','0');
}
function city(){
	$('#city').css('left','0');
}
function knowledge_lang(){
	$('#knowledge_lang').css('left','0');
}
function support_projects(){
    $('#support_projects').css('left','0');
}
function success_bitrix(){
    $('#success_bitrix').css('left','0');
}
function html5(){
	$('#html5').css('opacity','1');
}
function css3(){
	$('#css3').css('opacity','1');
}
function js(){
	$('#js').css('opacity','1');
}
function jquery(){
	$('#jquery').css('opacity','1');
}
function ajax(){
    $('#ajax').css('opacity','1');
}
function php(){
    $('#php').css('opacity','1');
}
function bitrix(){
    $('#bitrix').css('opacity','1');
}
function modx(){
    $('#modx').css('opacity','1');
}
function nodejs(){
    $('#nodejs').css('opacity','1');
}
function express(){
    $('#express').css('opacity','1');
}
function bootstrap(){
    $('#bootstrap').css('opacity','1');
}
function sql(){
    $('#sql').css('opacity','1');
}
function csv(){
    $('#csv').css('opacity','1');
}
function git(){
    $('#git').css('opacity','1');
}
function show_projects(){
    $('.projects .project').css('opacity','1');
}
$(document).ready(function(){
	$('.main').show(1500,function(){
		$('#hello').css('left','25%');
		setTimeout(showmenu,1000);
	});
});
$(window).scroll(function() {
    $top = $(this).scrollTop();
    if ( $top >= 100 ) {
    	$('.second_block h1').css('left','0');
    	$('.top_menu').css('background','rgba(16, 78, 131,0.9)');
    	$('#lang').css('right','10px');
    	$('#inst').css('right','80px');
    	$('#vk').css('right','125px');
    	$('#telegram').css('right','165px');
    }
    else if($top <= 100){
    	$('.second_block h1').css('left','-100%');
    	$('.top_menu').css('background','rgba(16, 78, 131,0)');
    	$('#inst').css('right','-100px');
    	$('#vk').css('right','-100px');
    	$('#telegram').css('right','-100px');
    	$('#lang').css('right','-100px');
    }
    if ( $top >= 200 ) {
    	$('.second_block .project').css('left','0');
    	$('#all_projects').css('left','0');
    }
    else if($top <= 200){
    	$('.second_block .project').css('left','-110%');
    	$('#all_projects').css('left','-100%');
    }
    if ( $top >= 900 ) {
    	$('.about').css('opacity','1');
    	$('.about h1').css('left','0');
    	setTimeout(age,500);
    	setTimeout(city,1000);
    	setTimeout(experience,1500);
    	setTimeout(education,2000);
    	setTimeout(knowledge_lang,2500);
        setTimeout(support_projects,3000);
    	setTimeout(success_bitrix,3500);
    }
    else if($top <= 900){
    	$('.about').css('opacity','0');
    }
    if($top >= 1300){
    	$('.skill_block').css('opacity','1');
    	$('.skill_block h1').css('right','0');
        $('.skills').css('right','0');
    	setTimeout(html5,1000);
    	setTimeout(css3,1500);
    	setTimeout(js,2000);
    	setTimeout(jquery,2500);
        setTimeout(ajax,3000);
        setTimeout(nodejs,3500);
        setTimeout(express,4000);
        setTimeout(bootstrap,4500);
        setTimeout(php,5000);
        setTimeout(bitrix,5500);
        setTimeout(modx,6000);
        setTimeout(sql,6500);
        setTimeout(csv,7000);
        setTimeout(git,7500);
    }
    else if($top <= 1300){
    	$('.skill_block').css('opacity','0');
        $('.skill_block h1').css('right','-100%');
        $('.skills').css('right','-100%');
    }
  });
$('#hamb').click(function(){
        $(this).css('left','-100px');
        $('.top_menu').css('background','rgba(16, 78, 131,0)');
        $('#inst').css('right','-100px');
        $('#vk').css('right','-100px');
        $('#telegram').css('right','-100px');
        $('#lang').css('right','-100px');
        $('.modal_menu').css('display','flex');
        $('.modal_menu').hide();
        $('.modal_menu').fadeIn(1200,function(){
            $('#close').css('opacity','1');
            $(this).children('ul').fadeIn(500);
        });
});
$('#close').click(function(){
        $('#close').css('opacity','0');
        $('.modal_menu ul').fadeOut(500);
        $('.modal_menu').fadeOut(1200,function(){
            $('#hamb').css('left','10px');
            $('.top_menu').css('background','rgba(16, 78, 131,0.9)');
            $('#lang').css('right','10px');
            $('#inst').css('right','80px');
            $('#vk').css('right','125px');
            $('#telegram').css('right','165px');
        });
});
if($('.projects')){
    $('.projects h1').css('opacity','1');
    setTimeout(showmenu,1000);
    setTimeout(show_projects,400);
}