'use strict';

module.exports.tasks = {

    // Build HTML from templates and data
    assemble: {
      site: {
        options: {
          layout: ['src/templates/layouts/default.hbs'],
          partials: ['src/templates/partials/*.hbs'],
          data: ['src/templates/data/*.yaml'],
          prettify: { indent: 2 },
          flatten: true
        },
        files: {
          'build/': ['src/templates/pages/*.hbs']
        }
      }
    },

  // this generates css based on an html input and injects it in the top of an html file
  // critical: {
  //   test: {
  //     options: {
  //       base: './',
  //       css: [
  //         'build/css/main.css'
  //       ],
  //       width: 1200,
  //       height: 600
  //     },
  //     src: 'build/index.html',
  //     dest: 'build/index.html'
  //   }
  // },

  // reindent, etc. the html to make it good looking
  'html-prettyprinter': {
    single: {
      // HTML file to beauty
      src: 'build/index.html',

      // Destination of HTML file
      dest: 'build/index.html'
    }
  },

  htmllint: {
      options: {
          ignore: ['Bad value “X-UA-Compatible” for attribute “http-equiv” on XHTML element “meta”.']
      },
      all: ["build/**/*.html"]
  }

    
};