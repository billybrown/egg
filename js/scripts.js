/*global $:false, jQuery:false, document:false, window:false, console:false, setTimeout:false, enquire:false, Waypoint:false, sticky: false */

jQuery( document ).ready( function( $ ) {
	"use strict";

	var Engine = {
		
		InitializePlugin : {

			Fitvids : function() {
				// this makes all videos responsive inside the main content area
				$(".SiteMain").fitVids();
			}

			// ChosenSelect : function() {
			// 	// this makes all select elements with this wrapping class have the chosen style
			// 	$(".u-select select").chosen();
			// }	
		},

		UI: {

			ClassTrigger : function(trigger, receiver, classer) {
				// trigger the adding and removing of classes. Actual animation is handled by CSS.
				$(trigger).click(function() {
					$(receiver).toggleClass(classer);
				});
			}

			// EqualizeHeights: function() {
			// 	// using enquire to only trigger match height at a certain breakpoint
			//  enquire.register("screen and (min-width:940px)", {
			//		match : function() {
			//			$('.CardColorGrid .Card').matchHeight();
			//               }, unmatch : function() {
			//                   $('.CardColorGrid .Card').matchHeight('remove');
			//               }
			//           }, true);
			//       }
			//	}

		}
	};

	Engine.InitializePlugin.Fitvids();
	Engine.UI.ClassTrigger('#MobileMenu__close, #MobileMenu__open', 'html', 'active-MobileMenu');

});