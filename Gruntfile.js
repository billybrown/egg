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
  grunt.registerTask('css', ['sass', 'autoprefixer', 'cssmin']);
  grunt.registerTask('javascript', ['jshint:custom']);
  grunt.registerTask('images', ['imagemin']);
  grunt.registerTask('sprites', ['dr-svg-sprites']);

  grunt.registerTask('build', [
    'jshint:grunt',
    'jshint:custom',
    'imagemin',
    'sass',
    'autoprefixer',
    'cssmin'
  ]);
};

