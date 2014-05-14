//on click, appends the time div tag to display timevalue
$('.b1').click(function() {
	$('.time').html(new Date($.now()));
});

// on click, uses the language selector to target "eng" element 
$('.b2').click(function() {
	$(':lang(eng)').css('color', '#001ac4');
});

// on click, uses the language selector to target "de" element 
$('.b2').click(function() {
	$(':lang(de)').css('color', '#ab0000');
});

// on click, adds the class "stayClassy" which  applies new font size and color
$('.b3').click(function() {
	$('.aBt3').addClass('stayClassy');
});

$('.b4').click(function() {
	$('.aBt4').slideToggle('');
});

$('.b5').click(function() {
	$('.aBt5').hide();
});

$('.b6').click(function() {
	$('.aBt6').resize();
});

$('.b7').click(function() {
	$('.aBt7').clone().appendTo('.aBt7');
});
 
$('.b8').click(function() {
	$('.aBt8').add('<p id="new">BAM! NEW p tag right here, yo!</p>').css( 'color', '#ab0000' );
});

$('.b9').click(function() {
	$('.aBt9').hide().fadeIn(3000);
});

$('.b10').click(function() {
	$('form input:checkbox');
});

$('.b11').click(function() {
		$('.forMouseEnter').on('mousemove', function(event) { $('.forMouseEnter').text('The mouse pointer is ' + event.pageX + ' CSS pixels away from the left edge of the page, and ' + event.pageY + ' CSS pixels away from the top of the page.').css('font-size', '14px');
		});
});

$('.b12').click(function() {
	$('.aBt12')/*.delay(10000000)*/.css( 'color', '#ab0000' );
});