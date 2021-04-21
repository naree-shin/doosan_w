$(function(){

	$("li.lang").click(function(){
		$("li.lang").toggleClass("on");
		$("li.lang>ul").slideToggle();
	});


	$("section.f_site > ul > li > a").click(function(e){
		e.preventDefault();

	});

	$("section.f_site > ul > li").hover(function(){
		$(this).find("ul").stop().slideToggle();
	});

	$(window).scroll(function(){

		var st = $(window).scrollTop();
		console.log(st);
		var num = 2900; //변수지정

		if(st >= num){    //num지정한 변수
			// $("section.news>ul").fadeIn(),
			// $("section.news>ul").animate({bottom: '100px'});
			$("li.news_01").animate({top: '0px', opacity: '1'}, 700);
			$("li.news_02").animate({top: '0px', opacity: '1'}, 1000);
			$("li.news_03").animate({top: '0px', opacity: '1'}, 1300);
		}/*else{
			$("section.news>ul>li").animate({top: '300px', opacity: '0.5'}, "slow");
		}*/
    });

	$(window).scroll(function(){

		var st = $(window).scrollTop();
		console.log(st);
		var num = 2300; //변수지정

		if(st >= num){    //num지정한 변수
			// $("section.news>ul").fadeIn(),
			// $("section.news>ul").animate({bottom: '100px'});
			$("div.m_sub li:nth-child(1)").animate({top: '0px', opacity: '1'}, 500);
			$("div.m_sub li:nth-child(2)").animate({top: '0px', opacity: '1'}, 700);
			$("div.m_sub li:nth-child(3)").animate({top: '0px', opacity: '1'}, 1000);
		}/*else{
			$("section.news>ul>li").animate({top: '300px', opacity: '0.5'}, "slow");
		}*/
    });


});