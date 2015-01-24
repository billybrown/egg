'use strict';

module.exports.tasks = {

    // copy custom JS file over to the build directory
    copy: {
      customjs: {
        files: [
          {expand: true, cwd: 'src/js', src: ['scripts.js'], dest: 'build/js/'}
        ]
      }
    },

	jshint: {
		options: {
			enforceall: true,
			nocomma: false
		},
		uses_defaults: ['src/js/*.js'],
		with_overrides: {
		    options: {
		      node: true,
		      camelcase: false
		    },
	  		files: {
	  			src: ['Gruntfile.js', 'config/*.js']
	  		}
	  	}
	}
    
};
