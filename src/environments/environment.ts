// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  apiPath: 'https://esi.tech.ccp.is/latest/',
  oauthPath: 'https://login.eveonline.com/oauth/',
  // loginPath: 'http://172.104.130.239:3000/login'
  loginPath: 'http://localhost:3000/login'
};
