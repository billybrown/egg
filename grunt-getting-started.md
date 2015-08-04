# Getting Started with Grunt and Egg

The first thing you need to do is run 'npm start' in the terminal at the root of the theme. This should download all your node packages, bower dependencies and do an innitial build of your frontend.

If you get errors, read more below.


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

**Note:** Since grunt relies on node.js, we need to document what version of node.js we are using locally, in order to help debug fringe issues. We are using a tool called [node version manager](https://github.com/creationix/nvm) to document, and install the project specific version. There is a file called .nvmrc in the root of the theme that indicates what version we are using. Everything will probably work fine using a different version of node, but if you are getting errors, this would be a good place to start.

## Grunt Tasks Available

**grunt css** - Will compile your SCSS into CSS.

**grunt build** - Will compile your entire front-end.

**grunt watch** - Will continually run until your turn it off. Then when you save SCSS files, it will compile them into CSS.


# Getting Started with Pattern Library

Learn More:
* http://patternlab.io/
* https://github.com/pattern-lab/edition-php-twig-standard

Run this to generate a new version of the pattern library (from the root of the theme):
cd patternlab; 
php core/console --generate

