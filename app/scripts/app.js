import $ from 'jquery';
import slick from "slick-carousel";
import WOW from "wowjs";

$(() => {
	$('.map__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		speed: 1000,
		prevArrow: $('.map__wrap__button-prev'),
        nextArrow: $('.map__wrap__button-next'),
	});
        if($(window).width() <= 768) {
            console.log("Мобильное устройство");
			$('.map__pin.south, .map__pin.center, .map__pin.north, .map__pin.ural, .map__pin.siberia').hide();
			$(".map__wrap__button-prev, .map__wrap__button-next").css("pointer-events", "none");
			$('.map__wrap-pin-mobile').hide();

			$('.map__btn-close').on('click', function() {
				$('.map__info').hide();
				$('.map__wrap-pin-mobile').show();
				$(".map__wrap__button-prev, .map__wrap__button-next").css("pointer-events", "auto");
				$('.map__pin.siberia').fadeIn();
			});

			$('.map__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
				$('.map__pin.south, .map__pin.center, .map__pin.north, .map__pin.ural, .map__pin.siberia').fadeOut();
			});

			$('.map__point.siberia').on('click', function() {
				$('.map__pin.south, .map__pin.center, .map__pin.north, .map__pin.ural').fadeOut();
				$('.map__pin.siberia').fadeIn();
			})
			$('.map__point.south').on('click', function() {
				$('.map__pin.center, .map__pin.north, .map__pin.ural, .map__pin.siberia').fadeOut();
				$('.map__pin.south').fadeIn();
			})
			$('.map__point.north').on('click', function() {
				$('.map__pin.south, .map__pin.center, .map__pin.ural, .map__pin.siberia').fadeOut();
				$('.map__pin.north').fadeIn();
			})
			$('.map__point.ural').on('click', function() {
				$('.map__pin.south, .map__pin.center, .map__pin.north, .map__pin.siberia').fadeOut();
				$('.map__pin.ural').fadeIn();
			})
			$('.map__point.center').on('click', function() {
				$('.map__pin.south, .map__pin.north, .map__pin.ural, .map__pin.siberia').fadeOut();
				$('.map__pin.center').fadeIn();
			})

			$('.map__slider').on('afterChange', function(event, slick, currentSlide) {
				let text = $('.slick-active').text();
				switch (text) {
					case 'Май':
						$('.map__pin.siberia').fadeIn();
						$(".map__pin-text.south").text("Платан, сирень, одуванчик, орех, свекла, сосна, каштан, липа, шелковица, табак");
						$(".map__pin-text.center").text("Береза, клен, дуб, сосна");
						$(".map__pin-text.north").text("Ольха, ива, береза, ясень, тополь, вяз, клен");
						$(".map__pin-text.ural").text("Ива, ольха, осина, береза, лещина, вяз, клен, дуб, ясень, сосна, липа, мятлик, тимофеевка, овсянница");
						$(".map__pin-text.siberia").text("Береза, одуванчик");
					break;
					case 'Июнь':
						$('.map__pin.siberia').fadeIn();
						$(".map__pin-text.south").text("Каштан, липа, шелковица, табак, камыш, клещевина, рожь, лещина, подсолнечник");
						$(".map__pin-text.center").text("Сосна, одуванчик, лисохвост, липа");
						$(".map__pin-text.north").text("Ива, береза, ясень, дуб, хвойные, щавель");
						$(".map__pin-text.ural").text("Вяз, клен, сосна, липа, мятлик, тимофеевка, овсянница, рожь");
						$(".map__pin-text.siberia").text("Одуванчик");
					break;
					case 'Июль':
						$('.map__pin.siberia').fadeIn();
						$(".map__pin-text.south").text("Лещина, подсолнечник, бузина, лебеда, полынь, софора, амброзия");
						$(".map__pin-text.center").text("Липа, тимофеевка, мятлик");
						$(".map__pin-text.north").text("Щавель, липа");
						$(".map__pin-text.ural").text("Липа, мятлик, тимофеевка, овсянница, лебеда");
						$(".map__pin-text.siberia").text("Одуванчик, тимофеевка, овсяница, лебеда, подсолнечник, полынь");
					break;
					case 'Август':
						$('.map__pin.siberia').fadeIn();
						$(".map__pin-text.south").text("Лещина, подсолнечник, амброзия");
						$(".map__pin-text.center").text("Полынь, амброзия");
						$(".map__pin-text.north").text("Лебеда, полынь");
						$(".map__pin-text.ural").text("Лебеда, тимофеевка, овсянница");
						$(".map__pin-text.siberia").text("Лебеда, подсолнечник, кукуруза, полынь, одуванчик");
					break;
					case 'Сентябрь':
						$(".map__pin.ural").hide();
						$('.map__pin.siberia').fadeIn();
						$(".map__pin-text.south").text("Амброзия");
						$(".map__pin-text.center").text("Полынь, амброзия");
						$(".map__pin-text.north").text("Лебеда, полынь");
						$(".map__pin-text.siberia").text("Полынь");
					break;
					case 'Октябрь':
						$('.map__pin.siberia').fadeIn();
						$(".map__pin-text.south").text("Лещина, подсолнечник, амброзия");
						$(".map__pin-text.center").text("Полынь, амброзия");
						$(".map__pin-text.north").text("Щавель, липа");
						$(".map__pin-text.ural").text("Лебеда, тимофеевка, овсянница");
						$(".map__pin-text.siberia").text("Лебеда, подсолнечник, кукуруза, полынь, одуванчик");
					break;
					case 'Ноябрь':
						$('.map__pin.siberia').fadeIn();
						$(".map__pin-text.south").text("Нет цветений");
						$(".map__pin-text.center").text("Нет цветений");
						$(".map__pin-text.north").text("Нет цветений");
						$(".map__pin-text.ural").text("Нет цветений");
						$(".map__pin-text.siberia").text("Нет цветений");
					break;
					case 'Декабрь':
						$('.map__pin.siberia').fadeIn();
						$(".map__pin-text.south").text("Нет цветений");
						$(".map__pin-text.center").text("Нет цветений");
						$(".map__pin-text.north").text("Нет цветений");
						$(".map__pin-text.ural").text("Нет цветений");
						$(".map__pin-text.siberia").text("Нет цветений");
					break;
					case 'Январь':
						$('.map__pin.siberia').fadeIn();
						$(".map__pin-text.south").text("Нет цветений");
						$(".map__pin-text.center").text("Нет цветений");
						$(".map__pin-text.north").text("Нет цветений");
						$(".map__pin-text.ural").text("Нет цветений");
						$(".map__pin-text.siberia").text("Нет цветений");
					break;
					case 'Февраль':
						$('.map__pin.siberia').fadeIn();
						$(".map__pin-text.south").text("Нет цветений");
						$(".map__pin-text.center").text("Нет цветений");
						$(".map__pin-text.north").text("Нет цветений");
						$(".map__pin-text.ural").text("Нет цветений");
						$(".map__pin-text.siberia").text("Нет цветений");
					break;
					case 'Март':
						$(".map__pin.south, .map__pin.center, .map__pin.north, .map__pin.ural, .map__pin.siberia").fadeOut();
						$('.map__pin.south').fadeIn();
						$(".map__pin-text.south").text("Абрикос, алыча, кипари, верба");
					break;
					case 'Апрель':
						$(".map__pin.south, .map__pin.center, .map__pin.north, .map__pin.ural, .map__pin.siberia").fadeOut();
						$('.map__pin.ural').fadeIn();
						$(".map__pin-text.south").text("Верба, вишня, дуб, клен, ясень, платан, сирень");
						$(".map__pin-text.center").text("Ольха, ива, орешник,  осина, тополь");
						$(".map__pin-text.north").text("Лещина, ольха, ива");
						$(".map__pin-text.ural").text("Ива, ольха, осина, береза, лещина, вяз, клен");
					break;
				}
			});
        } else {
            console.log("Десктопное устройство");
			$('.map__pin.south, .map__pin.center, .map__pin.north, .map__pin.ural, .map__pin.siberia').hide();
			$(".map__wrap__button-prev, .map__wrap__button-next").css("pointer-events", "none");
			$('.map__wrap-pin-mobile').hide();

			$('.map__btn-close').on('click', function() {
				$('.map__info').hide();
				$('.map__wrap-pin-mobile').show();
				$(".map__wrap__button-prev, .map__wrap__button-next").css("pointer-events", "auto");
				$('.map__pin.south, .map__pin.center, .map__pin.north, .map__pin.ural, .map__pin.siberia').fadeIn();
			});

			$('.map__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
				$('.map__pin.south, .map__pin.center, .map__pin.north, .map__pin.ural, .map__pin.siberia').fadeOut();
			});

			$('.map__slider').on('afterChange', function(event, slick, currentSlide) {
				let text = $('.slick-active').text();
				switch (text) {
					case 'Май':
						$('.map__pin.south, .map__pin.center, .map__pin.north, .map__pin.ural, .map__pin.siberia').fadeIn();
						$(".map__pin-text.south").text("Платан, сирень, одуванчик, орех, свекла, сосна, каштан, липа, шелковица, табак");
						$(".map__pin-text.center").text("Береза, клен, дуб, сосна");
						$(".map__pin-text.north").text("Ольха, ива, береза, ясень, тополь, вяз, клен");
						$(".map__pin-text.ural").text("Ива, ольха, осина, береза, лещина, вяз, клен, дуб, ясень, сосна, липа, мятлик, тимофеевка, овсянница");
						$(".map__pin-text.siberia").text("Береза, одуванчик");
					break;
					case 'Июнь':
						$('.map__pin.south, .map__pin.center, .map__pin.north, .map__pin.ural, .map__pin.siberia').fadeIn();
						$(".map__pin-text.south").text("Каштан, липа, шелковица, табак, камыш, клещевина, рожь, лещина, подсолнечник");
						$(".map__pin-text.center").text("Сосна, одуванчик, лисохвост, липа");
						$(".map__pin-text.north").text("Ива, береза, ясень, дуб, хвойные, щавель");
						$(".map__pin-text.ural").text("Вяз, клен, сосна, липа, мятлик, тимофеевка, овсянница, рожь");
						$(".map__pin-text.siberia").text("Одуванчик");
					break;
					case 'Июль':
						$('.map__pin.south, .map__pin.center, .map__pin.north, .map__pin.ural, .map__pin.siberia').fadeIn();
						$(".map__pin-text.south").text("Лещина, подсолнечник, бузина, лебеда, полынь, софора, амброзия");
						$(".map__pin-text.center").text("Липа, тимофеевка, мятлик");
						$(".map__pin-text.north").text("Щавель, липа");
						$(".map__pin-text.ural").text("Липа, мятлик, тимофеевка, овсянница, лебеда");
						$(".map__pin-text.siberia").text("Одуванчик, тимофеевка, овсяница, лебеда, подсолнечник, полынь");
					break;
					case 'Август':
						$('.map__pin.south, .map__pin.center, .map__pin.north, .map__pin.ural, .map__pin.siberia').fadeIn();
						$(".map__pin-text.south").text("Лещина, подсолнечник, амброзия");
						$(".map__pin-text.center").text("Полынь, амброзия");
						$(".map__pin-text.north").text("Лебеда, полынь");
						$(".map__pin-text.ural").text("Лебеда, тимофеевка, овсянница");
						$(".map__pin-text.siberia").text("Лебеда, подсолнечник, кукуруза, полынь, одуванчик");
					break;
					case 'Сентябрь':
						$(".map__pin.ural").hide();
						$('.map__pin.south, .map__pin.center, .map__pin.north, .map__pin.siberia').fadeIn();
						$(".map__pin-text.south").text("Амброзия");
						$(".map__pin-text.center").text("Полынь, амброзия");
						$(".map__pin-text.north").text("Лебеда, полынь");
						$(".map__pin-text.siberia").text("Полынь");
					break;
					case 'Октябрь':
						$('.map__pin.south, .map__pin.center, .map__pin.north, .map__pin.ural, .map__pin.siberia').fadeIn();
						$(".map__pin-text.south").text("Лещина, подсолнечник, амброзия");
						$(".map__pin-text.center").text("Полынь, амброзия");
						$(".map__pin-text.north").text("Щавель, липа");
						$(".map__pin-text.ural").text("Лебеда, тимофеевка, овсянница");
						$(".map__pin-text.siberia").text("Лебеда, подсолнечник, кукуруза, полынь, одуванчик");
					break;
					case 'Ноябрь':
						$(".map__pin.south, .map__pin.center, .map__pin.north, .map__pin.ural, .map__pin.siberia").fadeOut();
					break;
					case 'Декабрь':
						$(".map__pin.south, .map__pin.center, .map__pin.north, .map__pin.ural, .map__pin.siberia").fadeOut();
					break;
					case 'Январь':
						$(".map__pin.south, .map__pin.center, .map__pin.north, .map__pin.ural, .map__pin.siberia").fadeOut();
					break;
					case 'Февраль':
						$(".map__pin.south, .map__pin.center, .map__pin.north, .map__pin.ural, .map__pin.siberia").fadeOut();
					break;
					case 'Март':
						$(".map__pin.south, .map__pin.center, .map__pin.north, .map__pin.ural, .map__pin.siberia").fadeOut();
						$('.map__pin.south').fadeIn();
						$(".map__pin-text.south").text("Абрикос, алыча, кипари, верба");
					break;
					case 'Апрель':
						$(".map__pin.siberia").fadeOut();
						$('.map__pin.south, .map__pin.center, .map__pin.north, .map__pin.ural').fadeIn();
						$(".map__pin-text.south").text("Верба, вишня, дуб, клен, ясень, платан, сирень");
						$(".map__pin-text.center").text("Ольха, ива, орешник,  осина, тополь");
						$(".map__pin-text.north").text("Лещина, ольха, ива");
						$(".map__pin-text.ural").text("Ива, ольха, осина, береза, лещина, вяз, клен");
					break;
				}
			});
        }
    });
