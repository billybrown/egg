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
    pkg: grunt.file.readJSON('package.json'),
    dist: 'build'
  };

  //loads the various task configuration files
  var configs =   require('load-grunt-configs')(grunt, options);
  grunt.initConfig(configs);


  grunt.registerTask('default', ['node_version']);
  grunt.registerTask('css', ['node_version', 'sass', 'autoprefixer', 'concat', 'csso']);
  grunt.registerTask('javascript', ['node_version', 'copy:customjs', 'jshint:custom']);
  grunt.registerTask('images', ['node_version', 'imagemin', 'copy:images']);
  grunt.registerTask('makefavicons', ['node_version', 'favicons']);
  grunt.registerTask('templates', ['node_version', 'assemble', 'prettify']);
  // uncomment this and comment the task above for single page sites that dont need assemble
  //grunt.registerTask('templates', ['node_version', 'copy:html', 'html-prettyprinter']);
  grunt.registerTask('fast', ['node_version', 'takana']);

  grunt.registerTask('build', [
    'node_version',
    'jshint:grunt',
    'clean:build',
    'assemble',
    'prettify', 
    'copy:customjs',
    'jshint:custom',
    'imagemin',
    'copy:images',
    //'copy:fonts', //uncomment if you need fonts (including iconfonts)
    'sass',
    'autoprefixer',
    'concat',
    'csso',
    'clean:css',
    'copy:favicons'
  ]);

  grunt.registerTask('deploy', ['build', 'gh-pages']);

};
