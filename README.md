# egg
A starting point for my web projects.

Uses assemble for templating, libsass for css, and assumes deployment to github pages.

## to do

- **Grid System**. Research and integrate a very simple, default grid system
- **Vertical Rythem**. Research and integrate a vertical ryhtem sass system
- **Build Upgrade**. Consider seperating out production and development builds
    - Only have takana script in dev environment
    - unminified and unaggregated js/css/html in dev for easier debugging. In production aggregate and minify everything.
- **Coding Styleguide**. Create and integrate a coding styleguide and css architecture readme. Look at the following for inspiration:
    - https://github.com/gilbox/css-bliss
    - https://github.com/north/north
    - http://css-tricks.com/sass-style-guide/
    - http://css-tricks.com/css-style-guides/
    - http://sass-guidelin.es/
    - http://www.sitepoint.com/css-sass-styleguide/
- **Bower**. Consider integrating Bower. I havent really realized the benefits of this tool yet - but I feel like I'm probably just missing something. Need to research.

## on hold

- **Sass source maps**. There is a bug currently in node-sass (the node compiler for libsass) - waiting for it to be fixed.
- **Scss linting**. The only grunt plugin for scss-lint requires a ruby dependency - which we don't want.
- **Critical CSS**. Add if necessary - but at the moment I don't understand it thoroughly enough to include it by default.
- **Uncss**. Add if necessary, but I found it somewhat buggy. I think it needs to mature a little bit before including it by default here.
- **Yeoman**. This should be integrated, but only after changes slow down. At the moment I'm updating this repo daily. Need to get to a somewhat stable place first.
    - Be able to choose between single page apps and something that needs assemble that generates multiple pages.
    - Be able to choose to integrate a css grid or not.
    - Be able to choose to integrate icomoon icon font or not.
    - Be able to choose deployment methods (github pages, amazon s3, nothing, etc.)