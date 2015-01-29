'use strict';

module.exports.tasks = {

  // this task compiles your sass to css using Libsass, a C++ version of sass
  sass: {
    dest: {
      options: {
        outputStyle: 'compressed'
      },
      files: {
        'build/css/main.css': 'src/sass/main.scss'
      }
    }
  },

  // this task applies vendor prefixes (ie: -webkit, -moz, -o) to your css
  autoprefixer: {
    options: {
      browsers: [
        '> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', // default support (recommended by autoprefixer)
        'ie >= 9',
        'Firefox >= 23', 
        'Chrome >= 22',
        'Safari >= 4',
        'iOS >= 5.1',
        'Android >= 4.1'
      ]
    },
    custom: {
      src: 'build/css/*.css'
    }
  },

  csslint: {
    strict: {
      options: {
        "outline-none": false,
        "unqualified-attributes": false,
        "universal-selector": false,
        "star-property-hack": false,
        "adjoining-classes": false,
        "box-sizing": false,
        "compatible-vendor-prefixes": false,
        "unique-headings": false,
        "bulletproof-font-face": false,
        "box-model": false,
        "font-sizes": false,
        "duplicate-properties": false
      },
      src: ['build/css/main.css']
    }
  },

  // this concatenates the css
  concat: {
    dist: {
      src: ['build/css/main.css'], //add more css to concat here. for example 'src/fonts/icomoon/style.css', 
      dest: 'build/css/main.min.css'
    }
  },

  // this minifies your css
  csso: {
    compress: {
      options: {
        report: 'gzip'
      },
      files: {
        'build/css/main.min.css': ['build/css/main.min.css']
      }
    }
  },

  // this strips out unused css based on an html input
  // commented out for now since its a little buggy and not ready for prime time
  // uncss: {
  //   dist: {
  //     files: {
  //       'build/css/main.css': ['build/index.html']
  //     }
  //   }
  // },

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
  
  clean: {
    css: ['build/css/main.css']
  }



};
