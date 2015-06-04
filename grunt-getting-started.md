# Getting Started with Egg

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

Every time you run a grunt task, the first task that gets run is a node version manager task. This will make sure you are using the right version of node (specified in the package.json file). If you don't have that version installed, NVM will tell you to download it. NVM will handle switching from different versions of node (the same way RVM works), so it is OK to have more then one version of node on your machine.



## Grunt tasks available

**grunt** - Will check to make sure your running the right version of node.

**grunt css** - Will compile your SCSS into CSS.

**grunt build** - Will compile your entire front-end.

**grunt watch** - Will continually run until your turn it off. Then when you save SCSS files, it will compile them into CSS.
