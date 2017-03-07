/*
** getNumber.js
**
** (c) kayover
*/

$(document).ready(function() {
    $("#key").keydown(function (e) {
        // Allow: backspace, delete, tab, escape and enter
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
             // Allow: Ctrl/cmd+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+C
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+X
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});

$(document).ready(function(){
    $('#key').keypress(function(e){
      if(e.keyCode==13)
      $('#getButton').click();
    });
});

var numberFormat = function(number, width) { // useful for padding numbers with 0's
	return new Array(width + 1 - (number + '').length).join('0') + number;
}

function getNumber() {
	var key = document.getElementById('key').value;
	
	if (key == '') {
		$('#fox_note').stop(true).fadeOut(100, function () {
			$('.note_bl').html("Не введен номер объекта");
		});
		$('#fox_note').fadeIn(300, function () {
			$(this).delay(3500).fadeOut(100);
		});
		$('#fox_err_2').hide();
		$('#fox_err_1').show();
		$('#key').addClass('fox_err');
	} else {
		var paddedKey = numberFormat(key, 6); // change '1' to '000001', etc.
		
		$.ajax({
			url:'./show/' + paddedKey + '.html',
			type:'HEAD',
			error: function()
			{
				$('#fox_note').stop(true).fadeOut(100, function () {
					$('.note_bl').html("Такого объекта не существует");
				});
				$('#fox_note').fadeIn(300, function () {
					$(this).delay(3500).fadeOut(100);
				});
				$('#fox_err_1').hide();
				$('#fox_err_2').show();
				$('#key').addClass('fox_err');
			},
			success: function()
			{
				$('#fox_note').stop(true).fadeOut(100, function () {
					$('.note_bl').html("");
				});
				$('#fox_err_1').hide();
				$('#fox_err_2').hide();
				$.when(
				$('#key').removeClass('fox_err')
				).done(function() {
					location.href = './show/'+paddedKey+'.html';
				});
				
			}
		});
	}
}