window.var_top_menu = 100;
window.var_top_projects = 110;
window.var_top_about = 1100;
window.var_top_about_link = 1500;
window.var_top_skills = 1700;
window.var_top_skills_link = 2100;
window.var_top_skills_link_2 = 2500;
window.var_top_interest = 2350;

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
function json(){
    $('#json').css('opacity','1');
}
function show_projects(){
    $('.projects .project').css('opacity','1');
}

function project_underline(){
    $('.top_projects').on("mouseover",".img_block img",function(){
        $(this).parent().next().children('a').addClass('show_after_line');
    });
    $('.top_projects').on("mouseout",".img_block img",function(){
        $(this).parent().next().children('a').removeClass('show_after_line');
    });
}

function top_projects(callback,callback2){
    var length =  mainJSON.projects.length;
    for (var i=0; i<6; i++){
        $('#all_projects').before("<div class='col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 project'><span style='display:none' class='project_id'>"+mainJSON.projects[i].id+"</span><div class='img_block'><img src='"+mainJSON.projects[i].image+"'></div><p><a class='mylink' target='_blank'>"+mainJSON.projects[i].name+" | "+mainJSON.projects[i].description+"</a></p></div>");
    }
    callback();
    callback2();

}

function show_more_projects(callback,callback2){
    var length =  mainJSON.projects.length;
    var last_project = parseInt($('.project').last().find('.project_id').html());
    if(length!=last_project+1){
        var remainder = length - last_project - 1;
        if(remainder>=6){
            for (var i=last_project+1; i<last_project+7; i++){
                $('#all_projects').before("<div class='col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 project' style='left:0;opacity:0'><span style='display:none' class='project_id'>"+mainJSON.projects[i].id+"</span><div class='img_block'><img src='"+mainJSON.projects[i].image+"'></div><p><a class='mylink' target='_blank'>"+mainJSON.projects[i].name+" | "+mainJSON.projects[i].description+"</a></p></div>");
            }
            setTimeout(function(){
                $('.top_projects .project').css('opacity','1');   
            },200);
            window.var_top_about +=800;
            window.var_top_about_link +=800;
            window.var_top_skills +=800;
            window.var_top_skills_link +=800;
            window.var_top_skills_link_2 +=800;
            window.var_top_interest +=800;
            setTimeout(function(){
                last_project = parseInt($('.project').last().find('.project_id').html());
                remainder = length - last_project - 1;
                if(remainder==0){
                    $('#all_projects input').val('Скрыть');
                }   
            },200);
        }
        else{
            for (var i=last_project+1; i<length; i++){
                $('#all_projects').before("<div class='col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 project' style='left:0;opacity:0'><span style='display:none' class='project_id'>"+mainJSON.projects[i].id+"</span><div class='img_block'><img src='"+mainJSON.projects[i].image+"'></div><p><a class='mylink' target='_blank'>"+mainJSON.projects[i].name+" | "+mainJSON.projects[i].description+"</a></p></div>");
            }
            setTimeout(function(){
                $('.top_projects .project').css('opacity','1');   
            },200);
            if(remainder>3){
                window.var_top_about +=800;
                window.var_top_about_link +=800;
                window.var_top_skills +=800;
                window.var_top_skills_link +=800;
                window.var_top_skills_link_2 +=800;
                window.var_top_interest +=800; 
            }
            else if(remainder<=3){
                window.var_top_about +=400;
                window.var_top_about_link +=400;
                window.var_top_skills +=400;
                window.var_top_skills_link +=400;
                window.var_top_skills_link_2 +=400;
                window.var_top_interest +=400; 
                $('#all_projects input').val('Скрыть');
            }
        }
    }
    else{
        $('.project').each(function(){
            $(this).remove();
        });
        for (var i=0; i<6; i++){
            $('#all_projects').before("<div class='col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 project'><span style='display:none' class='project_id'>"+mainJSON.projects[i].id+"</span><div class='img_block'><img src='"+mainJSON.projects[i].image+"'></div><p><a class='mylink' target='_blank'>"+mainJSON.projects[i].name+" | "+mainJSON.projects[i].description+"</a></p></div>");
        }
        window.var_top_menu = 100;
        window.var_top_projects = 110;
        window.var_top_about = 1100;
        window.var_top_about_link = 1500;
        window.var_top_skills = 1700;
        window.var_top_skills_link = 2100;
        window.var_top_skills_link_2 = 2600;
        window.var_top_interest = 2350;
        $('#all_projects input').val('Показать еще');
        $('body,html').animate({scrollTop: 900}, 700);
    }
    
}
function show_detail_project(){
       var length =  mainJSON.projects.length;
        $('.top_projects').on("click",".project img",function(){
            let this_id = $(this).parent().parent().children('.project_id').html();
            for(var i = 0;i<length;i++){
                if(mainJSON.projects[i].id==this_id){
                    if(mainJSON.projects[i].responsibilities){
                      var responsibilities = "";
                        for(var j = 0;j<mainJSON.projects[i].responsibilities.length;j++){
                               responsibilities += "<p> - "+mainJSON.projects[i].responsibilities[j]+"</p>" ;
                        }  
                        if($('.detail_project_responsibilities').length==0){
                            $('.detail_project').append("<div class='detail_project_responsibilities'><h2>Обязанности:</h2>"+responsibilities+"</div>");
                        }
                        
                    }
                    if(mainJSON.projects[i].technologies){
                      var technologies = "<p>";
                        for(var j = 0;j<mainJSON.projects[i].technologies.length;j++){
                            if(j!=mainJSON.projects[i].technologies.length-1){ 
                               technologies += "<span>"+mainJSON.projects[i].technologies[j]+", </span>" ;
                            }
                            else{
                                technologies += "<span>"+mainJSON.projects[i].technologies[j]+"  </span>" ;
                            }
                        }  
                         technologies += "</p>";
                        if($('.detail_project_technologies').length==0){
                            $('.detail_project').append("<div class='detail_project_technologies'><h2>Используемые языки и технологии:</h2>"+technologies+"</div>");
                        }
                        
                    }
                    if(mainJSON.projects[i].screens){
                      var screens = "";
                        for(var j = 0;j<mainJSON.projects[i].screens.length;j++){
                               
                               screens += "<a data-fancybox='gallery' href='"+mainJSON.projects[i].screens[j].image+"'><div><div class='screen' style='background-image:url("+mainJSON.projects[i].screens[j].image+")'></div></div></a>";
                               
                        }  
                        if($('.detail_project_screens').length==0){
                            $('.detail_project').append("<div class='detail_project_screens'>"+screens+"</div>");
                        }
                        
                    }
                }
            }
            $('.detail_project').css('display','flex');
            $('.detail_project').hide();
            $('.detail_project').fadeIn();
            $('html').css('overflow-y','hidden');
            $('.detail_project').css('overflow-y','auto');
        });
        $('#detail_close').click(function(){
            $('.detail_project_responsibilities').remove();
            $('.detail_project_technologies').remove();
            $('.detail_project_screens').remove();
            $('.detail_project').fadeOut();
            $('html').css('overflow-y','scroll');
            $('.detail_project').css('overflow-y','hidden');
        }); 
}
