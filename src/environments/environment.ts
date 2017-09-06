// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,

	apiRoot: 'https://fwncn1u6d8.execute-api.eu-west-1.amazonaws.com/dev',

	apiKey: 'Di8Jj1C0DbaspyQxqF7ds9jGy2JugiZvaZmxbvTq',

	sts_endpoint: '',

	region: 'eu-west-1',

	identityPoolId: 'eu-west-1:1fd9d4eb-ad5f-4467-961d-3ba0053d58b3',

	userPoolId: 'eu-west-1_wkLPHKvjR',

	clientId: '139f6094je19io783c1fs9qtu8',

	cognito_idp_endpoint: '',

	cognito_identity_endpoint: '',

	staticFilesBucket: 'bootstrap-marketing-site',

	staticFilesKeyPrefix: 'media',

	staticFilesRoot: 'http://bootstrap-marketing-site.s3-website-eu-west-1.amazonaws.com',

	s3Endpoint: '',
};
