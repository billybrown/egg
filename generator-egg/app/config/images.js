'use strict';

module.exports.tasks = {

    // this task optimizes your images
    imagemin: {
      png: {
        files: [{
          expand: true,
          cwd: 'src/img',
          src: ['**/*.png', '**/*.jpg', '**/*.gif'],
          dest: 'src/img'
        }]
      },
      svg: {
        files: [{
          expand: true,
          cwd: 'src/img',
          src: ['**/*.svg'],
          ext: '.svg',
          dest: 'src/img'
        }]
      }
    }
};
