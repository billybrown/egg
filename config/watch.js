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
      // this task must come last, and it will refresh your browser (as long
      // as you have the chrome extension) whenever certain files get changed
      livereload: {
        options: { livereload: true },
        files: [
          'build/css/style.css',
          'build/*.html',
          'build/js/scripts.js'
        ]
      }
    },

    // takana allows for live as-you-type style injection. AWESOME for designing
    // in the browser.
    takana: {
      options: {
        path: 'src/sass'
      }
    }

};
