// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses environment.ts, but if you do
// ng build --env=prod then environment.prod.ts will be used instead.
// The list of which env maps to which file can be found in .angular-cli.json.

export const environment = {
  production: true,

  apiRoot: 'https://xhnkgllkp4.execute-api.eu-west-1.amazonaws.com/dev',

  apiKey: 'cYUAEbiNbC1B2VnNpJXWI24WA0t11Jb12f5GIL6B',

  sts_endpoint: '',

  region: 'eu-west-1',

  identityPoolId: 'eu-west-1:ba74694c-42d8-44c0-946c-571a61a63628',

  userPoolId: 'eu-west-1_dMTnj5PYK',

  clientId: '3msns2ai934sp2nbloglde4c8d',

  cognito_idp_endpoint: '',

  cognito_identity_endpoint: '',

  staticFilesBucket: 'static-page-constructor-targetsitestore-1h9szettyz8fq',

  staticFilesKeyPrefix: 'media',

  siteRoot: 'http://static-page-constructor-targetsitestore-1h9szettyz8fq.s3-website-eu-west-1.amazonaws.com',

  staticFilesRoot: 'http://static-page-constructor-targetsitestore-1h9szettyz8fq.s3-website-eu-west-1.amazonaws.com',

  s3Endpoint: '',
};