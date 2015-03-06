'use strict';

module.exports.tasks = {

    // copy custom JS file over to the build directory
    copy: {
      customjs: {
        files: [
          {expand: true, cwd: 'src/js', src: ['**/*.js'], dest: 'build/js/'}
        ]
      }
      // jquery: {
      //   files: [
      //     {expand: true, cwd: 'src/js/vendor', src: ['jquery-2.1.3.min.js'], dest: 'build/js/'}
      //   ]
      // }
    },

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
	  	custom: ['src/js/*.js']
	}
    
};
