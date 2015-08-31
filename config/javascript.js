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
	  	custom: ['src/js/scripts.js']
	},

    bower_concat: {
        all: {
            dest: 'src/js/compiled_bower.js',
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
        vendorjs: {
            files: [
                { expand: true, cwd: 'src/js/vendor', src: ['*'], dest: 'build/js/'}
            ]
        }
        // chosensprite: {
        //     files: [
        //         { expand: true, cwd: 'bower_components/chosen', src: ['chosen-sprite.png', 'chosen-sprite@2x.png'], dest: 'build/css/'}
        //     ]
        // }
    },

    uglify: {
        my_target: {
            files: {
              'build/js/plugins.min.js': ['src/js/compiled_bower.js', 'src/js/scripts.js']
            }
        }
    },

    clean: {
        js_all: ['build/js/**']
    }
    
};
