
$(function() {
	'use strict';

	var jq_fox_body = $('.fox_body'),
		jq_fox_send_ctrl = $('.fox_send_ctrl'),
		jq_fox_exp_phone = $('#fox_exp_phone'),
		jq_fox_note = $('#fox_note'),
		jq_express_reg = $('input[data-express-reg]');

	// --

	var conf_inpt_tel = {
		autoPlaceholder: true,
		nationalMode: false,
        preferredCountries: ['ua', 'ru', 'by', 'cz'],
        utilsScript: "./js/utils.js"
     };

	jq_fox_exp_phone.intlTelInput(conf_inpt_tel);
	jq_express_reg.intlTelInput(conf_inpt_tel);

	jq_express_reg.on('keyup', function() {

		var me = $(this);
		var isValid = me.intlTelInput("isValidNumber");

		if(isValid) {
			me.addClass('input_valid');
		} else {
			me.removeClass('input_valid');
		}

		console.log(isValid);
	});

	jq_fox_exp_phone.on('keyup', function() {
		var me = $(this);
		var isValid = me.intlTelInput("isValidNumber");

		if(isValid) {
			me.addClass('input_valid');
		} else {
			me.removeClass('input_valid');
		}
	});

	jq_fox_exp_phone.on('keyup', function() {
		var me = $(this);
		var isValid = me.intlTelInput("isValidNumber");

		if(isValid) {
			me.addClass('input_valid');
			$('#fox_err_send').empty();
		} else {
			me.removeClass('input_valid');
		}
	});

	$('#fox_create').on('click', function() {
		var phone = jq_express_reg.intlTelInput("getNumber");

		var error = jq_express_reg.intlTelInput("getValidationError");

		console.log(jq_express_reg.intlTelInput("isValidNumber"));

		if(!jq_express_reg.intlTelInput("isValidNumber")) {
			fox_error_note(error, 'reg');
			jq_express_reg.addClass('fox_err');
			return;
		}

		jq_express_reg.removeClass('fox_err');

		phone = phone.replace(/^\+/, '');

		window.location = "https://mail.ex.ua/#!express_signup/"+phone;
	});

	// ---

	jq_fox_body.on('focus', function() {
		jq_fox_send_ctrl.show();
	});

	jq_fox_body.on('blur', function() {
		if(!$(this).text().length) {
			jq_fox_send_ctrl.hide();
		}		
	});

	jq_fox_exp_phone.on('focus', function() {
		jq_fox_send_ctrl.show();
	});

	jq_fox_exp_phone.on('blur', function() {
		if(!jq_fox_body.text().length && !$(this).val().length) {
			jq_fox_send_ctrl.hide();
		}
	});

	function fox_error_note(error, type) {
		var message = '';

		switch(error) {
			case 2:
				message = fox_note.TO_SHORT;				
			break;

			case 3:
				message = fox_note.TO_LONG;
			break;

			case 4:
				message = fox_note.ONLY_NUMBERS;
			break;

			default:
				message = fox_note.DEF_INVALID;
			break;
		}

		$.note({text: message, cont: $('#fox_note')});

		if(type === 'reg') {
			$('#fox_err_reg').text(message);
		} else {
			$('#fox_err_send').text(message);
		}
	}

	// --

	$('#fox_exp_send').on('click', function() {
		var phone = jq_fox_exp_phone.intlTelInput("getNumber");
		var body = jq_fox_body.html();

		var error = jq_fox_exp_phone.intlTelInput("getValidationError");

		if(!jq_fox_exp_phone.intlTelInput("isValidNumber")) {
			fox_error_note(error);
			jq_fox_exp_phone.addClass('fox_err');
			return;
		}

		jq_fox_exp_phone.removeClass('fox_err');

		if(!jq_fox_body.text().length) {
			$.note({text: 'Вы не ввели сообщение', cont: $('#fox_note')});
			jq_fox_body.addClass('fox_err');
			return false;
		}

		jq_fox_body.removeClass('fox_err');

		$.ajax({
			url: "https://mail.ex.ua/j_compose_phone_send",
			type: "post",
			dataType: "json",
			data: {phone: phone, body: body},
			success: function(data) {
				console.log(data);
				if(data.result) {
					$.note({text: 'Сообщение отправлено', cont: $('#fox_note')});
					jq_fox_body.empty();
					jq_fox_exp_phone.val('');
				} else {
					if(res.err) {
						$.note({text: res.err.msg, cont: $('#fox_note')});
					}
				}								
			}
		});
	});

	// ---

	var noteInterval = null;
	(function($) {
	
		$.note = function(options) {
			var settings = $.extend({
				text: 'notification', 
				cont: null, 
				fixed: false,
	
				handler: undefined,
				nameEvent: '',
				eventElement: null
	
			}, options);
	
			if(settings.cont === null) return 0;
	
			settings.cont.hide();
			settings.cont.empty();
	
			var n = $('<div/>', {'class':'note_bl', html: settings.text});
	
			if(settings.handler) {
				n.find(settings.eventElement).on(settings.nameEvent, settings.handler);
			}
	
			settings.cont.append(n).fadeIn(300);		
	
			if(!settings.fixed) {
				clearTimeout(noteInterval);
				noteInterval = setTimeout(function() {
					settings.cont.fadeOut(100);
				}, 7000);
			}
		};
	
	})(jQuery);

});