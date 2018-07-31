(function($) {
	$(function() {
		$('.nabar__toggle').click(function() {
			$('nav').toggleClass('show');
			$('.nabar__toggle').toggleClass('-active');
		});
	});
})(jQuery);

// function Hamburger(x) {
// 	x.classList.toggle("-active");
// }

(function (d, w, c) {
	(w[c] = w[c] || []).push(function() {
		try {
			w.yaCounter49804669 = new Ya.Metrika2({
				id:49804669,
				clickmap:true,
				trackLinks:true,
				accurateTrackBounce:true,
				webvisor:true,
				ut:"noindex"
			});
		} catch(e) { }
	});

	var n = d.getElementsByTagName("script")[0],
		s = d.createElement("script"),
		f = function () { n.parentNode.insertBefore(s, n); };
	s.type = "text/javascript";
	s.async = true;
	s.src = "https://mc.yandex.ru/metrika/tag.js";

	if (w.opera == "[object Opera]") {
		d.addEventListener("DOMContentLoaded", f, false);
	} else { f(); }
})(document, window, "yandex_metrika_callbacks2");