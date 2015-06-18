'use strict';

module.exports.tasks = {

    // this task 'watches' files and triggers other grunt tasks when those
    // files are saved.
    watch: {
      sass: {
        files: ['sass/**/**/*.scss'],
        tasks: ['css']
      },
      js: {
        files: ['js/scripts.js'],
        tasks: ['javascript']
      },
      images: {
        files: ['img/*'],
        tasks: ['images']
      },
      // this task must come last, and it will refresh your browser (as long
      // as you have the chrome extension) whenever certain files get changed
      livereload: {
        options: { livereload: true },
        files: [
          'css/main.css',
          'js/scripts.js'
        ]
      }
    }

    // takana allows for live as-you-type style injection. AWESOME for designing
    // in the browser. There is a grunt plugin - but i find its more beneficial just to run it locally
    // and only use it at the beginning of a project.

};
