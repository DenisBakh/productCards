//=================index.js
//=========RANGE-SLIDER noUiSlider==================

window.addEventListener("load", function () {
	const priceSlider = document.getElementsByClassName('r-slider');

	for (let i = 0, len = priceSlider.length; i < len; i++) {
		const $parent = $(priceSlider[i]).closest('.target-indicator');
		const $targetBlock = $parent.find('.target-block');
		const $updateSliderValue = $parent.find('.indicator-block__info-calc');
		const $target = Number($parent.find('.target-block__target').text().slice(1));

		noUiSlider.create(priceSlider[i], {
			start: [14],
			tooltips: true,
			connect: [true, false],
			step: 1,
			range: {
				'min': 0,
				'max': $target ? $target : 1
			},
			format: wNumb({
				decimals: 0,
				thousand: ' ',
				prefix: '$'
			})

		});

		let needMore;

		priceSlider[i].noUiSlider.on('update', function (values, handle) {
			if (!handle) {
				needMore = $target - values[handle].slice(1);
				$updateSliderValue.text('$' + needMore);

				if (values[handle].slice(1) == $target) {
					$targetBlock.addClass('done');
				} else {
					$targetBlock.removeClass('done');
				}
			}
		});
	};

});

