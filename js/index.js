$(document).ready(function()
{
	
	$("#img-wewb").hover(function(event)
	{
		var infoQr = $(".join-ofo-Qr");
		var x = document.body.clientWidth/2-70;
		var y = -document.body.clientHeight/2 + 470;
		
		// alert(y1);
		console.log(x + "   -   " + y);
		infoQr.css({
			opacity : "0",
			left : x + "px",
			top: "-500px"
		}).animate({
			opacity: "1",
			left : x + "px",
			top: "-130px"
		},800)
	},function()
		{
			$(".join-ofo-Qr").animate({
				left : (document.body.clientWidth/2-70) + "px",
				top: "-500px",
				opacity:0
		},800)
	});


	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        speed: 600,
    });
})


