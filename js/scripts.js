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

			ClassTrigger : function(trigger, receiver, classer) {
				// trigger the adding and removing of classes. Actual animation is handled by CSS.
				$(trigger).click(function() {
					$(receiver).toggleClass(classer);
				});
			}
		}
	};

	Engine.InitializePlugin.Fitvids();
	Engine.UI.ClassTrigger('#MobileMenu__trigger, #MobileMenu__closeTrigger', 'html', 'active-MobileMenu');

});