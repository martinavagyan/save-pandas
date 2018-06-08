// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiHost:    'http://localhost:4200/',
  apiPrefix:  'api/',
  mapbox:     {
    accessToken: 'pk.eyJ1IjoibWFydGluYXZhZ3lhbiIsImEiOiJjamZwZWdiMDAxbGVuMzNsOWtsa21waXN6In0.W09trbbm-h6pTb_JfQ_4jw',
  }
};
