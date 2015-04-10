'use strict';

module.exports.tasks = {

    // this task 'watches' files and triggers other grunt tasks when those
    // files are saved.
    watch: {
      sass: {
        files: ['src/sass/**/**/*.scss'],
        tasks: ['css']
      },
      templates: {
        files: [
          'src/templates/pages/*.hbs', 
          'src/templates/layouts/*.hbs', 
          'src/templates/partials/*.hbs', 
          'src/templates/data/*.yaml'
        ],
        tasks: ['templates']
      },
      js: {
        files: ['src/js/scripts.js'],
        tasks: ['javascript']
      },
      images: {
        files: ['src/img/*'],
        tasks: ['images']
      },
      // this task must come last, and it will refresh your browser (as long
      // as you have the chrome extension) whenever certain files get changed
      livereload: {
        options: { livereload: true },
        files: [
          '<%= dist %>/css/main.min.css',
          '<%= dist %>/*.html',
          '<%= dist %>/js/scripts.js'
        ]
      }
    },

    // takana allows for live as-you-type style injection. AWESOME for designing
    // in the browser. There is a grunt plugin - but i find its more beneficial just to run it locally
    // and only use it at the beginning of a project.

};
