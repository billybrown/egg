'use strict';

module.exports = function(grunt) {
  var path = require('path');

  // this needs to go at the top - it will print out how long 
  // things took. Helps with debugging
  require('time-grunt')(grunt);
  
  // this allows you to remove all the 'loadNPMtasks' calls, and speeds up task running
  require('jit-grunt')(grunt, {
    htmllint: 'grunt-html'
  });

  // Metadata.
  var options = {
    pkg: grunt.file.readJSON('package.json')
  };

  //loads the various task configuration files
  var configs =   require('load-grunt-configs')(grunt, options);
  grunt.initConfig(configs);


  grunt.registerTask('default', ['node_version']);
  grunt.registerTask('css', ['node_version', 'sass', 'autoprefixer', 'csso', 'csslint']);
  grunt.registerTask('javascript', ['node_version', 'jshint', 'copy:customjs']);
  grunt.registerTask('images', ['node_version', 'imagemin', 'copy:images']);
  grunt.registerTask('makefavicons', ['node_version', 'favicons']);
  grunt.registerTask('templates', ['node_version', 'assemble', 'html-prettyprinter', 'htmllint']);
  // uncomment this and comment the task above for single page sites that dont need assemble
  //grunt.registerTask('templates', ['node_version', 'copy:html', 'html-prettyprinter', 'htmllint']);
  grunt.registerTask('fast', ['node_version', 'takana']);

  grunt.registerTask('build', [
    'node_version',
    'clean:build',
    'favicons',
    'imagemin',
    'assemble', // remove this for single page sites that dont need assemble
    'copy',
    'sass',
    'autoprefixer',
    'csso',
    'clean:css',
    'html-prettyprinter', 
    'csslint',
    'jshint',
    'htmllint'
  ]);

  grunt.registerTask('deploy', ['build', 'gh-pages']);

};
