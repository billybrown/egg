'use strict';

module.exports.tasks = {

    // Before generating new files remove files from previous build.
    clean: {
      build: ['tmp/**/*', 'build/**/**']
    }

};
