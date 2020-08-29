//=================index.js
//==================================product-card================================

$(document).ready(function ($) {
	// FOR QUANTITY
	$('.card').on('click', function (e) {
		const $this = $(this).closest('.item-product');

		selectCard(e, $this);
	});

	$('.product-footer__buy').on('click', function (e) {
		const $this = $(this).closest('.item-product');

		selectCard(e, $this);
	});

	function selectCard(e, $this) {
		e.preventDefault();

		if (!$this.hasClass('disabled')) {
			$this.toggleClass('selected');
		}

	}
});

