# Angular 2 starter pack.
## Important: WIP, do not use

Angular 2 starter pack is a production ready seed repo with the base configuration that follows official 
angular 2 [style guide](https://angular.io/docs/ts/latest/guide/style-guide.html).

# Features 

- Webpack 2
- HMR (Hot Module Replacement)
- Ngrx (Redux)
- Typescript
- Sass
- Bootstrap 3 styles
- Tslint
- Stylelint
- Karma/Jasmine testing

## Quick start
```bash
# install the repo package dependencies with npm
npm install

# start development server
npm start
``` 

go to [http://localhost:8080](http://localhost:8080) in your browser

## Ngrx log monitor

The ngrx log monitor can be enabled or disabled with the environment variable (DEV_TOOLS) on `package.json` file.

Commands:
- Toggle: `ctrl + h`
- Change position: `ctrl + m`

# Bootstrap styles

Customize Bootstrap variables in `src/sass/bootstrap/_variables.scss`

Bootstrap styles can be enabled / disabled in `.bootstraprc`

## Counter component
Is a Redux demo component

### TODO:
- Router store
- AOT
- Firebase
- Server side rendering
- Reducer for mobile menu state
