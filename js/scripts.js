/*global $:false, jQuery:false, document:false, window:false, console:false, setTimeout:false, enquire:false, Waypoint:false, sticky: false */

jQuery( document ).ready( function( $ ) {
	"use strict";

	var Engine = {
		
		InitializePlugin : {

			Fitvids : function() {
				// this makes all videos responsive
				$(".main").fitVids();
			}
		},

		UI: {

			EqualizeCardHeights: function() {
				$('.CardGrid__cell .Card').matchHeight();
			},

			CardCarousel: function() {

				// 3up card grids turn into a carousel on small screens
				// more info about the flickity carousel here: http://flickity.metafizzy.co/
				$('.CardGrid--3up').flickity({
				  // options
				  contain: true,
				  imagesLoaded: true,
				  watchCSS: true
				});
			},

			ClassTrigger : function(trigger, receiver, classer) {
				// trigger the adding and removing of classes. Actual animation is handled by CSS.
				$(trigger).click(function() {
					$(receiver).toggleClass(classer);
				});
			}
		}
	};

	Engine.InitializePlugin.Fitvids();
	Engine.UI.EqualizeCardHeights();
	Engine.UI.CardCarousel();
	Engine.UI.ClassTrigger('#MobileMenu__close, #MobileMenu__open', 'html', 'active-MobileMenu');

});