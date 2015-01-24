'use strict';

module.exports.tasks = {

    // this task allows you to publish to github pages
    'gh-pages': {
      options: {
        base: 'build'
      },
      src: ['**']
    }
    
};