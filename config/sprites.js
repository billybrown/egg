'use strict';

module.exports.tasks = {

    svg_sprite : {
        basic : {

            // Target basics
            expand : true,
            cwd : 'img/svg',
            src : ['**/*.svg'],
            dest : 'css/svgsprites',

            // Target options
            options : {
                mode : {
                    view: {
                        render: {
                            scss: true
                        }
                    }
                }
            }
        }
    }

};