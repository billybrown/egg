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

  csslint: {
    strict: {
      options: {
        import: 2,
        "outline-none": false,
        "unqualified-attributes": false,
        "universal-selector": false,
        "star-property-hack": false,
        "adjoining-classes": false,
        "box-sizing": false,
        "compatible-vendor-prefixes": false,
        "unique-headings": false,
        "bulletproof-font-face": false
      },
      src: ['build/css/main.css']
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

  // this strips out unused css based on an html input
  uncss: {
    dist: {
      files: {
        'build/css/main.css': ['build/index.html']
      }
    }
  },

  // this minifies your css
  csso: {
    compress: {
      options: {
        report: 'gzip'
      },
      files: {
        'build/css/main.css': ['build/css/main.css']
      }
    }
  }

};
