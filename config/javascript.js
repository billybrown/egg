'use strict';

module.exports.tasks = {

	jshint: {
		options: {
			enforceall: true,
			nocomma: false
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
                //'jquery-waypoints': ['lib/jquery.waypoints.min.js', 'lib/shortcuts/sticky.min.js'] // we have a sticky nav here
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
                { expand: true, cwd: 'bower_components/jquery/dist', src: ['jquery.min.js'], dest: 'build/js/'}
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
