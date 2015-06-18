/*global $:false, jQuery:false, document:false, window:false, console:false, setTimeout:false, enquire:false, Waypoint:false, sticky: false */

jQuery( document ).ready( function( $ ) {
	"use strict";

	var Engine = {
		ui : {

			fitvids : function() {
				// this makes all videos responsive
				$(".main").fitVids();
			},

			offcanvas : function() {

				var triggerText = '<span class="Offcanvas-triggerText">Menu</span>';
				var closeText = '<i class="Offcanvas-triggerIcon icon-close"></i>';

				$('#Offcanvas-trigger').click(function() {
					$('html').toggleClass('is-Offcanvas');
					if($(this).html() === closeText) {
						$(this).html(triggerText);
						$('.PrimaryNav-submenu').slideUp();
						$('.PrimaryNav-submenuIcon').removeClass('is-open');
					} else {
						$(this).html(closeText);
					}
				});

				// this deploys the accordian functionality on the sub menu items in the offcanvas nav
				$('.PrimaryNav-submenuIcon').click(function() {
				  $(this).siblings('.PrimaryNav-submenu').slideToggle();
				  $(this).toggleClass('is-open');
				});
			}
		}
	};

	Engine.ui.fitvids();
	Engine.ui.offcanvas();

});