@@include('../../components/blocks/header/header.js')
@@include('../../components/blocks/footer/footer.js')

function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			//console.log($(this).find('img').attr('src'))
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}
ibg();