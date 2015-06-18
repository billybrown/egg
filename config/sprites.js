'use strict';

module.exports.tasks = {

    // exporting SVGs can be tricky. Here are some good blog posts if you are having trouble
    // if you can't save its position correctly: http://graphicdesign.stackexchange.com/questions/39505/illustrator-exporting-svg-viewbox-doesnt-match-artboard-size
    // if the exported scss file can't calculate widht/height - gives you a bunch of 'NaNpx' values: https://github.com/drdk/grunt-dr-svg-sprites/issues/26

    "dr-svg-sprites": {
        basic: {
            options: {
                spriteElementPath: "img/svg",
                spritePath: "build/img/sprite.svg",
                cssPath: "sass/sprites.scss",
                prefix: "svg",
                layout: "vertical"
            }
        }
    }

};