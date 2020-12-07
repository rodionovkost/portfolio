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
    	$('#gmail').css('right','205px');
    }
    else if($top <= 100){
    	$('.second_block h1').css('left','-1500px');
    	$('.top_menu').css('background','rgba(16, 78, 131,0)');
    	$('#inst').css('right','-100px');
    	$('#vk').css('right','-100px');
    	$('#telegram').css('right','-100px');
    	$('#gmail').css('right','-100px');
    	$('#lang').css('right','-100px');
    }
    if ( $top >= 200 ) {
    	$('.second_block .project').css('left','0');
    	$('#all_projects').css('left','0');
    }
    else if($top <= 200){
    	$('.second_block .project').css('left','-1500px');
    	$('#all_projects').css('left','-1500px');
    }
    if ( $top >= 900 ) {
    	$('.about').css('opacity','1');
    	$('.about h1').css('left','0');
    	setTimeout(age,500);
    	setTimeout(city,1000);
    	setTimeout(experience,1500);
    	setTimeout(education,2000);
    	setTimeout(knowledge_lang,2500);
    	
    }
    else if($top <= 900){
    	$('.about').css('opacity','0');
    }
    if($top >= 1300){
    	$('.skill_block').css('opacity','1');
    	$('.skill_block h1').css('right','0');
    	setTimeout(html5,1000);
    	setTimeout(css3,1500);
    	setTimeout(js,2000);
    	setTimeout(jquery,2500);
    }
    else if($top <= 1300){
    	$('.skill_block').css('opacity','0');
    	$('.skill_block h1').css('right','-1500px');
    }
    /* else if ( $top <= 100 ) {
	  $('.topmenu').css('width','103%');
      $('.topmenu').css('background','rgba(0,0,0,0)');
      $('.logoname').css('color','white');
      $('.logodvig').css('background','rgba(0,0,0,0)');
      $('.logodvig').css('padding','0');
      $('#logo').css('width','2.5vmax');
      $('.topmenu').css('box-shadow','0 0 0px rgba(0,0,0,0.5)');
      $('.itemsmenu li b').css('color','lightgray');
      $(".itemsmenu li b")
      	.mouseenter(function() {
      		if ($top >= 100) {
    			$(this).css("color", "Dimgrey");
    		}
    		else{
    			$(this).css("color", "white");
    		}
		})
      	.mouseleave(function() {
      		if ($top >= 100){
      			$(this).css("color", "Dimgrey");
      		}
     		else{
     			$(this).css("color", "lightgrey");
     		}
		});
    }
    if ($top >=500 && $top<=1400) {
    	$('#item1 b').css('color','black');
    	$('#item1').css('border-bottom','3px solid teal');
    	$('#item2').css('border-bottom','0px solid teal');
    }
    else if ($top >=1400) {
    	$('#item1').css('border-bottom','0px solid teal');
    	$('#item2 b').css('color','black');
    	$('#item2').css('border-bottom','3px solid teal');
    }
    else{
    	$('#item1').css('border-bottom','0px solid teal');
    	$('#item2').css('border-bottom','0px solid teal');
    }*/
  });