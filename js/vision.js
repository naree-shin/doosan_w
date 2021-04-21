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
		var num = 100; //변수지정

		if(st >= num){
			$("div.sm1_main").animate({top: '100px', opacity: '1'}, 700);
			
		}
    });


	$(window).scroll(function(){

		var st = $(window).scrollTop();
		console.log(st);
		var num = 700; //변수지정

		if(st >= num){    //num지정한 변수
			// $("section.news>ul").fadeIn(),
			// $("section.news>ul").animate({bottom: '100px'});
			$("div.sm1_credo > h1").animate({top: '0px', opacity: '1'}, 700);
			$("div.sm1_credo > p:first-of-type").animate({top: '0px', opacity: '1'}, 1000);
			$("div.sm1_credo > p + p").animate({top: '0px', opacity: '1'}, 1300);
		}/*else{
			$("section.news>ul>li").animate({top: '300px', opacity: '0.5'}, "slow");
		}*/
    });

    $(window).scroll(function(){

		var st = $(window).scrollTop();
		console.log(st);
		var num = 1200; //변수지정

		if(st >= num){
			$("div.circle").addClass("on");
			/*$("div.circle").animate({rotate: '0deg', opacity: '1'}, 700);*/
			
		}
    });



});