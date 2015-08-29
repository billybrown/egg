/*

    First-time Grunt installation:
    -------------------
    npm install -g grunt-cli
    npm install -g grunt-init
    Not working? Weird errors? Try Grunt's getting started guide: http://gruntjs.com/getting-started

    Simple Dependency Install:
    --------------------------
    npm start (from the same root directory as the `package.json` file) (this runs both 'npm install' and 'bower install')

    Tasks:
    --------------------------
    grunt (default is to watch both sass, js, and images)
    grunt css (compile sass into css once)
    grunt watch (you can also explicitly call the watch task)
    grunt build (recompiled everything - sass, sprites, javascript, etc.)

    All commands are detailed by running the following:
    --------------------------
    grunt --help

    Node Version
    --------------------------
    There is a file called .nvmrc in the root of the theme that indicates what version of node we are using.
    Everything should work even if you have a different version - but in case you are getting errors
    and you suspect node - the version number in .nvmrc should work.

*/

'use strict';

module.exports = function(grunt) {
  var path = require('path');

  // this needs to go at the top - it will print out how long 
  // things took. Helps with debugging
  require('time-grunt')(grunt);
  
  // this allows you to remove all the 'loadNPMtasks' calls, and speeds up task running
  require('jit-grunt')(grunt);

  // Metadata.
  var options = {
    pkg: grunt.file.readJSON('package.json')
  };

  //loads the various task configuration files
  var configs =   require('load-grunt-configs')(grunt, options);
  grunt.initConfig(configs);


  grunt.registerTask('default', ['css']);
  grunt.registerTask('css', ['sass', 'autoprefixer', 'cssmin', 'clean:css']);
  grunt.registerTask('javascript', ['clean:js_all', 'jshint:custom', 'bower_concat', 'uglify', 'copy:jquery', 'copy:modernizr', 'copy:selectivizr']);
  grunt.registerTask('images', ['imagemin']);
  //grunt.registerTask('sprites', ['dr-svg-sprites']);

  grunt.registerTask('build', [
    'clean:build',
    'css',
    'javascript',
    //'sprites',
    //'copy:chosensprite',
    'images'
  ]);

  // this javascript task only gets called in the watch task
  // its here to avoid having to recompile all the bower scripts
  grunt.registerTask('custom-javascript', ['jshint:custom', 'uglify' ]);
};

