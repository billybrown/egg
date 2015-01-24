'use strict';

module.exports = function(grunt) {

  // this needs to go at the top - it will print out how long 
  // things took. Helps with debugging
  require('time-grunt')(grunt);
  
  // this allows you to remove all the 'loadNPMtasks' calls, and speeds up task running
  require('jit-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // this task makes sure you are running the right version of node
    node_version: {
      options: {
        alwaysInstall: false,
        errorLevel: 'fatal',
        globals: [],
        maxBuffer: 200*1024,
        nvm: true,
        override: ''
      }
    },

    // this task compiles your sass to css using Libsass, a C++ version of sass
    sass: {
      dest: {
        options: {
            outputStyle: 'compressed',
            map: true
        },
            files: {
                'build/css/main.css': 'src/sass/main.scss'
            }
      },
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
        options: {
          map: true
        },
        src: 'build/css/*.css'
      }
    },

    csso: {
      compress: {
        options: {
          report: 'gzip',
          map: true
        },
        files: {
          'build/css/main.css': ['build/css/main.css']
        }
      },
    },

    uncss: {
      dist: {
        files: {
          'build/css/main.css': ['build/index.html']
        }
      }
    },

    critical: {
        test: {
            options: {
                base: './',
                css: [
                    'build/css/main.css',
                ],
                width: 1200,
                height: 600
            },
            src: 'build/index.html',
            dest: 'build/index.html'
        }
    },

    // this task optimizes your images
    imagemin: {
      png: {
        files: [{
          expand: true,
          cwd: 'src/img',
          src: ['**/*.png', '**/*.jpg', '**/*.gif'],
          dest: 'src/img',
        }]
      },
      svg: {
        files: [{
          expand: true,
          cwd: 'src/img',
          src: ['**/*.svg'],
          ext: '.svg',
          dest: 'src/img',
        }]
      },
    },

    // this tasks copies stuff over
    copy: {
      images: {
        files: [
          {expand: true, cwd: 'src/img', src: ['**/*.png', '**/*.jpg', '**/*.svg', '**/*.gif'], dest: 'build/img/'}
        ],
      },
      customjs: {
        files: [
          {expand: true, cwd: 'src/js', src: ['scripts.js'], dest: 'build/js/'}
        ],
      }
    },

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

    // Before generating new files remove files from previous build.
    clean: {
      build: ['tmp/**/*', 'build/**/**']
    },

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
        ],
      }
    },

    // takana allows for live as-you-type style injection. AWESOME for designing
    // in the browser.
    takana: {
      options: {
        path: 'src/sass'
      }
    },

    // this task allows you to publish to github pages
    'gh-pages': {
      options: {
        base: 'build'
      },
      src: ['**']
    }
    

  });

  grunt.registerTask('default', ['node_version']);
  grunt.registerTask('css', ['node_version', 'sass', 'autoprefixer']);
  grunt.registerTask('templates', ['node_version', 'assemble']);
  grunt.registerTask('javascript', ['node_version', 'copy:customjs']);
  grunt.registerTask('images', ['node_version', 'imagemin', 'copy:images']);
  grunt.registerTask('fast', ['node_version', 'takana']);

  grunt.registerTask('build', [
    'node_version',
    'clean',
    'imagemin',
    'assemble',
    'copy',
    'sass',
    'autoprefixer',
    'uncss',
    'csso',
    'critical'
  ]);

  grunt.registerTask('deploy', ['build', 'gh-pages']);

};
