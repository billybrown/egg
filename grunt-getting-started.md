# Getting Started with Grunt and Egg

Egg uses a build process using Grunt (which is built with node.js) to compile our front end code.

**Grunt - [gruntjs.com](http://gruntjs.com/)**
* a javscript task runner
* compiles everything. CSS from sass, JS minification and aggregation, image optimization (etc.)


## Steps for First Time Grunt Users

* Download node.js [here](http://nodejs.org/)
* Follow the grunt getting started guide [here](http://gruntjs.com/getting-started ) _If you want to learn more, [here](https://www.youtube.com/watch?v=TMKj0BxzVgw) is a top level intro video to grunt_
* If it exists in the repo when you first clone or download this project, delete the 'node_modules' directory.
* Now in the theme root, run: 'npm install' - this will download all the node modules needed run your build process locally. It will create and put them inside a directoy called "node_modules"
* Now run, 'grunt build' to build all your front-end files. 


## Grunt Tasks Available

**grunt css** - Will compile your SCSS into CSS.

**grunt build** - Will compile your entire front-end.

**grunt watch** - Will continually run until your turn it off. Then when you save SCSS files, it will compile them into CSS.
