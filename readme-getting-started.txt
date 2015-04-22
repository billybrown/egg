# General overview
========================================

This site uses a few node.js based tools to compile our front end code, mainly:

Grunt - http://gruntjs.com/
	- a javscript task runner
	- compiles everything. CSS from sass, JS minification and aggregation, image optimization (etc.)



# Getting Started
========================================

You need node version 0.10.3 - you can download it here: http://nodejs.org/

You also need grunt - If you have never used grunt before on your machine, follow the 
instructions here: http://gruntjs.com/getting-started (here is a top level intro video to grunt as well: https://www.youtube.com/watch?v=TMKj0BxzVgw)

If it exists in the repo when you first clone or download this project, delete the 'node_modules' directory.

Now in the theme root, run: 'npm install' - this will download all the node modules needed to compile the theme locally. It will create and put them inside a directoy called "node_modules"

Now run, 'grunt build' to build the theme. Every time you run a grunt task, the first task that gets run is a node version manager task. This will make sure you are using the right version of node. For this project it's 0.10.33. If you don't have that installed NVM will tell you to download it. NVM will handle switching from different versions of node (in the same way RVM works), so its OK to have more then one version of node on your machine.



# Grunt tasks available
========================================

To build the whole theme run: grunt build

To build specific things on save (CSS, JS, etc.) run: grunt watch
