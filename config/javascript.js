'use strict';

module.exports.tasks = {

	jshint: {
		options: {
			enforceall: true,
			nocomma: false,
            camelcase: false
		},
		grunt: {
		    options: {
		      node: true,
		      camelcase: false
		    },
	  		files: {
	  			src: ['Gruntfile.js', 'config/*.js']
	  		}
	  	},
	  	custom: ['js/*.js']
	},

    bower_concat: {
        all: {
            dest: 'build/js/plugins.js',
            cssDest: 'build/css/plugins.css',
            exclude: [
                'jquery',
                'modernizr'
            ],
            mainFiles: {
                'matchmedia': ['./matchMedia.js', './matchMedia.addListener.js'], // bower main file doesnt include the listener (which is required for ie9 support of enquire)
                'selectivizr': 'selectivizr.js' // no main file since this guy is super old.
                //'chosen': ['chosen.min.css', 'chosen.jquery.min.js'], // the bower main file has the wrong css file in there ...
            },
            dependencies: {
                'enquire': 'matchmedia'
            },
            bowerOptions: {
                relative: false
            }
        }
    },

    //copy custom JS file over to the build directory
    copy: {
        jquery: {
            files: [
                { expand: true, cwd: 'js/vendor', src: ['jquery-1.11.3.min.js'], dest: 'build/js/'}
            ]
        },
        modernizr: {
            files: [
                { expand: true, cwd: 'bower_components/modernizr', src: ['modernizr.js'], dest: 'build/js/'}
            ]
        },
        custom_modernizr: {
            files: [
                { expand: true, cwd: 'js/vendor', src: ['modernizr.custom.js'], dest: 'build/js/'}
            ]
        },
        chosensprite: {
            files: [
                { expand: true, cwd: 'bower_components/chosen', src: ['chosen-sprite.png', 'chosen-sprite@2x.png'], dest: 'build/css/'}
            ]
        },
        selectivizr: {
            files: [
                { expand: true, cwd: 'js/vendor', src: ['selectivizr-min.js'], dest: 'build/js/'}
            ]
        }
    },

    uglify: {
        my_target: {
            files: {
              'build/js/plugins.min.js': ['build/js/plugins.js', 'js/scripts.js']
            }
        }
    },

    clean: {
        js_all: ['build/js/**']
    }
    
};
