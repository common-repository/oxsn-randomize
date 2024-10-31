(function($) {

	$.fn.randomize = function(selector){
		var $elems = selector ? $(this).find(selector) : $(this).children(),
		$parents = $elems.parent();

		$parents.each(function(){
			$(this).children(selector).sort(function(){
				return Math.round(Math.random()) - 0.5;

			}).detach().appendTo(this);
		});

		return this;
	};

	$('.oxsn_randomize_parent').randomize('.oxsn_randomize_child');

})(jQuery);