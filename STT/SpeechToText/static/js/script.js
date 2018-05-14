$(document).ready(function(){
	var id;
	var currStock;
	$('.updateBut').click(function(){
		id = $(this).parent().find('h4').text();
	});
	$('.updatePrice').submit(function(){
		$('<input />').attr('type','hidden')
			.attr('name',"delcode")
			.attr('value',id)
			.appendTo(".updatePrice");
		return true;
	});
	$('.addQ').click(function(){
		id = $(this).parent().find('h4').text();
		currStock = $(this).parent().find('h3').text();
		console.log(currStock);
	});
	$('.addStock').submit(function(){
		$('<input />').attr('type','hidden')
			.attr('name',"delcode")
			.attr('value',id)
			.appendTo(".addStock");
		$('<input />').attr('type','hidden')
			.attr('name',"currStock")
			.attr('value',currStock)
			.appendTo(".addStock");
		return true;
	});
});