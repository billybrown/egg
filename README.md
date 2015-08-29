# egg
A starting point for my web projects.


## to do

- **Yeoman**. This should be integrated, but only after changes slow down. At the moment I'm updating this repo daily. Need to get to a somewhat stable place first.
    - Be able to choose to use different js libraries
    - Be able to choose between single page apps and something that needs assemble that generates multiple pages.
    - Be able to choose to integrate icomoon icon font or not.
    - Be able to choose deployment methods (github pages, amazon s3, nothing, etc.)

## on hold

- **Scss linting**. The only grunt plugin for scss-lint requires a ruby dependency - which we don't want.
- **CSS linting**. I would love to lint the compiled css to make sure everything is getting outputted properly - but the CSSLint task throws errors on more complicated and modern css properties - rendering it useless (for now at least). Worth checking up on at a future date and integrating back in.
- **Critical CSS**. Add if necessary - but at the moment I don't understand it thoroughly enough to include it by default.
- **Uncss**. Add if necessary, but I found it somewhat buggy. I think it needs to mature a little bit before including it by default here.
- **Incorporate Build Process for static sites** - Might need to keep this general until Yeoman can be incorporated
    - Only have takana script in dev environment
    - unminified and unaggregated js/css/html in dev for easier debugging. In production aggregate and minify everything.
