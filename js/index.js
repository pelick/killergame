$(function() {
	
	var $el = $('#baraja-el'), baraja = $el.baraja();
	$('.notify').on("click", function(e) {
		var name = $(this).attr("name");
		var pic = $(this).attr("src");
		var alt = $(this).attr("alt");
		if (name == "pelick") {
			alert("我不加入游戏哦~");
		} else if (name == "死人") {
			alert("死人怎么加入游戏啊= =！");
		} else {
			addGamer(name, pic, alt, baraja);
			//baraja.close();
			$el = $('#baraja-el');
			baraja = $el.baraja();
		}
	});
	
	// $('.gamer').on("click", function(e) {
		// console.log($(this));
	// });
	
	
	$('#nav-fan5').on('click', function(event) {
		baraja.fan({
			speed : 500,
			easing : 'ease-out',
			range : 100,
			direction : 'right',
			origin : {
				x : 50,
				y : 200
			},
			center : true
		});
	});
	
	$('#nav-random').on('click', function(event) {
		baraja.close();
		baraja.randomStack(baraja.$items);
		$el = $('#baraja-el');
		baraja = $el.baraja();
		
		setTimeout(function() {
			$('#nav-fan5').click();
		}, 1000);
	});

	$('#close').on('click', function(event) {
		baraja.close();
	});

	$('#nav-prev').on('click', function(event) {
		baraja.previous();
	});

	$('#nav-next').on('click', function(event) {
		baraja.next();
	});
});

function addGamer(name, pic, alt, baraja) {
	baraja.add($("<li><img src='"+pic+"' alt='"+alt+"'/><h4>"+name+"</h4></li>"));
	$("<li><img src='"+pic+"' alt='"+alt+"'/><h4>"+name+"</h4></li>").move2front();
	//$('#baraja-el').append("<li><img src='"+pic+"' alt='"+alt+"'/><h4>"+name+"</h4></li>");
}