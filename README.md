# egg
A starting point for my web projects.

Uses assemble for templating, libsass for css, and assumes deployment to github pages.

## to do

- Consider seperating out production and development builds
    - Only have takana script in dev environment
    - unminified and unaggregated js/css/html in dev for easier debugging. In production aggregate and minify everything.
- Create and integrate a coding styleguide and css architecture readme. Look at the following for inspiration:
    - https://github.com/gilbox/css-bliss
    - https://github.com/north/north
    - http://css-tricks.com/sass-style-guide/
    - http://css-tricks.com/css-style-guides/
    - http://sass-guidelin.es/
    - http://www.sitepoint.com/css-sass-styleguide/

## on hold

- Sass source maps. There is a bug currently in node-sass (the node compiler for libsass) - waiting for it to be fixed.
- Scss linting. The only grunt plugin for scss-lint requires a ruby dependency - which we don't want.
- Critical CSS. Add if necessary - but at the moment I don't understand it thoroughly enough to include it by default.
- Uncss. Add if necessary, but I found it somewhat buggy. I think it needs to mature a little bit before including it by default here.