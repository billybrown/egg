# egg
A framework for building frameworks - currently in active development.


## to do

- **Yeoman**. This should be integrated, but only after changes slow down. At the moment I'm updating this repo daily. Need to get to a somewhat stable place first.
    - Be able to choose to use different js libraries via bower. Also update bower_concat task as necessary.
    - Be able to choose between Wordpress, Drupal, Static, etc. and add necessary files or structure.
    - Be able to choose to integrate fonts - typekit, icomoon, google webfonts, etc.
    - Be able to choose ie8 support
    - Be able to choose deployment methods (github pages, amazon s3, nothing, etc.)
    - Be able to add CSS components from a directory. Add both the scss partial and the corasponding twig file for pattern lab.

## on hold

- **Scss linting**. The only grunt plugin for scss-lint requires a ruby dependency - which we don't want.
- **CSS linting**. I would love to lint the compiled css to make sure everything is getting outputted properly - but the CSSLint task throws errors on more complicated and modern css properties - rendering it useless (for now at least). Worth checking up on at a future date and integrating back in.
- **Critical CSS**. This requires scanning a compiled HTML document. Really only possible if doing a simple static site - otherwise this should be a discussion with the backend dev.
- **Uncss**. Similar to Critical CSS in that it requires scanning HTML. Discuss with backend dev as necessary.
- **Seperate Production and Development environments** - Might need to keep this general until Yeoman can be incorporated
    - Only have takana script in dev environment
    - unminified and unaggregated js/css/html in dev for easier debugging. In production aggregate and minify everything.
