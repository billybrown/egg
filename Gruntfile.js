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


  grunt.registerTask('default', ['node_version']);
  grunt.registerTask('css', ['node_version', 'sass', 'autoprefixer', 'concat', 'csso']);
  grunt.registerTask('javascript', ['node_version', 'jshint:custom']);
  grunt.registerTask('images', ['node_version', 'imagemin']);
  grunt.registerTask('makefavicons', ['node_version', 'favicons']);
  grunt.registerTask('sprites', ['node_version', 'svg_sprite']);


  grunt.registerTask('build', [
    'node_version',
    'jshint:grunt',
    'jshint:custom',
    'svg_sprite', 
    'imagemin',
    'sass',
    'autoprefixer',
    'concat',
    'csso',
    'clean:css'
  ]);
};

