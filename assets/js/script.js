$(document).ready(function(){
	$('.main').fadeIn(1500,function(){
		$('#hello').css('left','25%');
		
	});
    function showmenu(){
        $('.menu_list').fadeIn();
        //$('#lang').css('right','10px');
        $('#inst').fadeIn();
        $('#vk').fadeIn();
        $('#telegram').fadeIn();
    }
    setTimeout(showmenu,2500);
    if($('.top_projects')){
        top_projects(show_detail_project,project_underline);
    }
    $(".menu_list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });
});
$(window).scroll(function() {
    $top = $(this).scrollTop();
    if ( $top >= window.var_top_menu ) {
    	$('.top_menu').css('background','rgba(16, 78, 131,0.9)');
    	
    }
    else if($top < window.var_top_menu){
    	$('.top_menu').css('background','rgba(16, 78, 131,0)');
    }
    if ( $top >= window.var_top_projects ) {
    	$('.top_projects h1').css('left','0');
    	$('.top_projects .project').css('left','0');
    	$('#all_projects').css('left','0');
        $('#menu_link_top_projects').addClass('show_after_line');
    }
    else if($top < window.var_top_projects){
    	$('.top_projects h1').css('left','-100%');
    	$('.top_projects .project').css('left','-110%');
    	$('#all_projects').css('left','-100%');
        $('#menu_link_top_projects').removeClass('show_after_line');
        $('#menu_link_about').removeClass('show_after_line');
        $('#menu_link_skills').removeClass('show_after_line');
    }
    if ( $top >= window.var_top_about ) {
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
    else if($top < window.var_top_about){
    	$('.about').css('opacity','0');
    }
    if( $top >= window.var_top_about_link ){
        $('#menu_link_about').addClass('show_after_line');
        $('#menu_link_top_projects').removeClass('show_after_line');
    }
    else if($top < window.var_top_about_link){
        $('#menu_link_about').removeClass('show_after_line');
    }
    if($top >= window.var_top_skills){
    	$('.skill_block').css('opacity','1');
    	$('.skill_block h1').css('right','0');
        $('.skills').css('right','0');
    	setTimeout(html5,1000);
    	setTimeout(css3,1500);
    	setTimeout(js,2000);
        setTimeout(php,2500);
        setTimeout(sql,3000);
    	setTimeout(jquery,3500);
        setTimeout(ajax,4000);
        setTimeout(json,4500);
        //setTimeout(nodejs,4500);
        //setTimeout(express,5000);
        setTimeout(bootstrap,5000);
        setTimeout(bitrix,5500);
        setTimeout(modx,6000);
        //setTimeout(csv,7000);
        setTimeout(git,6500);
    }
    else if($top < window.var_top_skills){
    	$('.skill_block').css('opacity','0');
        $('.skill_block h1').css('right','-100%');
        $('.skills').css('right','-100%');
        
    }
    if( $top >= window.var_top_skills_link ){
        $('#menu_link_skills').addClass('show_after_line');
        $('#menu_link_top_projects').removeClass('show_after_line');
        $('#menu_link_about').removeClass('show_after_line');
    }
    else if($top < window.var_top_skills_link){
        $('#menu_link_skills').removeClass('show_after_line');
    }
     if( $top >= window.var_top_skills_link_2 ){
        $('#menu_link_skills').removeClass('show_after_line');
    }
    if($top >= window.var_top_interest){
    	$('.interest').css('opacity','1');
    }
    else if($top < window.var_top_interest){
    	$('.interest').css('opacity','0');
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
        $('.modal_menu').fadeIn(400,function(){
            $('#close').css('opacity','1');
            $(this).children('ul').fadeIn(400);
        });
});
$('#close').click(function(){
        $('#close').css('opacity','0');
        $('.modal_menu ul').fadeOut(400);
        $('.modal_menu').fadeOut(400,function(){
            $('#hamb').css('left','10px');
            $('.top_menu').css('background','rgba(16, 78, 131,0.9)');
            $('#lang').css('right','10px');
            $('#inst').css('right','80px');
            $('#vk').css('right','125px');
            $('#telegram').css('right','165px');
        });
});
$('#all_projects input').click(function(){
    show_more_projects(show_detail_project,project_underline);
});