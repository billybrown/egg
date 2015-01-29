'use strict';

module.exports.tasks = {

  // Build HTML from templates and data
  assemble: {
    site: {
      options: {
        layout: ['src/templates/layouts/default.hbs'],
        partials: ['src/templates/partials/*.hbs'],
        data: ['src/templates/data/*.yaml'],
        flatten: true
      },
      files: {
        'build/': ['src/templates/pages/*.hbs']
      }
    }
  },

  prettify: {
    options: {
      indent: 4,
      "unformatted": ["script", "a", "span", "strong", "em"]
    },
    all: {
      expand: true,
      cwd: 'build/',
      ext: '.html',
      src: ['*.html'],
      dest: 'build/'
    }
  },

  htmllint: {
      options: {
          ignore: ['Bad value “X-UA-Compatible” for attribute “http-equiv” on XHTML element “meta”.']
      },
      all: ["build/*.html"]
  }

  // for single page sites that dont need assemble this is a task to copy over the index
  // copy: {
  //   html: {
  //     files: [
  //       {expand: true, cwd: 'src/', src: ['index.html'], dest: 'build/'}
  //     ]
  //   }
  // }
    
};