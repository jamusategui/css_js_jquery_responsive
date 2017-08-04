// JavaScript Document
jQuery(function($){
	// Das ist der jQuery Coder für die Tabs unter Rooms
	$('ul.tabs').each(function(){
		
		// Fuer jeden Satz Tabs wollen wir verfolgen welcher
		// Tab aktiv ist und der ihm zugeordnete Inhalt
		var $active, $content, $links = $(this).find('a');
		
		// Der erste Link ist der zu Anfang akitve Tab
		$active = $links.first().addClass('active');
		$content = $($active.attr('href'));
		
		// Verstecke den restlichen Inhalt
		$links.not(':first').each(function () {
			$($(this).attr('href')).hide();
		});
		
		// Binde den click event handler ein
		$(this).on('click', 'a', function(e){
		
			// Mache den alten Tab inaktiv
			$active.removeClass('active');
			$content.hide();
		
			// Aktualisiere die Variablen mit dem neuen Link und Inhalt
			$active = $(this);
			$content = $($(this).attr('href'));
		
			// Setze den Tab aktiv
			$active.addClass('active');
			$content.show();
		
			// Verhindere die Anker standard click Aktion
			e.preventDefault();
		});
	});
	
	function slideSwitch() {
		var $active = $('#slideshow img.active');
	
		if ( $active.length == 0 ) $active = $('#slideshow img:last');
	
		// use this to pull the divs in the order they appear in the markup
		var $next =  $active.next().length ? $active.next()
			: $('#slideshow img:first');
	
		// uncomment below to pull the divs randomly
		// var $sibs  = $active.siblings();
		// var rndNum = Math.floor(Math.random() * $sibs.length );
		// var $next  = $( $sibs[ rndNum ] );
	
	
		$active.addClass('last-active');
	
		$next.css({opacity: 0.0})
			.addClass('active')
			.animate({opacity: 1.0}, 1000, function() {
				$active.removeClass('active last-active');
			});
		setTimeout( function(){slideSwitch();}, 5000 );
	}
	slideSwitch();
	Shadowbox.init();
});