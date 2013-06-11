$(function() {
	
	$('.notify').on("click", function(e) {
		
		var name = $(this).attr("name");
		var pic = $(this).attr("src");
		addGamer(name, pic);
	});
	
});

function addGamer(name, pic) {
	$('#gamers').append("<img src='"+pic+"' class='img-circle'>");
}
