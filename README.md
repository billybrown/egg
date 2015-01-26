# egg
A starting point for my web projects.

Uses assemble for templating, libsass for css, and assumes deployment to github pages.

## to do

- Consider seperating production and development builds
- Create and integrate a coding styleguide and css architecture readme

## on hold

- Sass source maps. There is a bug currently in libsass - waiting for final release of libsass 2.0.
- Scss linting. The only grunt plugin for scss-lint requires a ruby dependency - which we don't want.
- Critical CSS. Add if necessary - but at the moment I don't understand it thoroughly enough to include it by default.
- Uncss. Add if necessary, but I found it somewhat buggy. I think it needs to mature a little bit before including it by default here.