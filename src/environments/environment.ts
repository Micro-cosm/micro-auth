// V5 with bingo 2

//  UNIQUE TO EACH MIFE
	// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	EXPLICITLY-DEFINED ENVIRONMENT
	const	TARGET_ALIAS		= process.env.TARGET_ALIAS			|| 'dev';
	const	THIS_NICKNAME		= process.env.NICKNAME				|| 'auth-element';
	const	THIS_TITLE			= process.env.THIS_TITLE			|| 'WèJá Töö ' + THIS_NICKNAME + '(' + TARGET_ALIAS + ')';
	const	TARGET_PROJECT_ID	= process.env.TARGET_PROJECT_ID		|| 'weja-us';
	const	TARGET_DOMAIN		= process.env.TARGET_DOMAIN			|| 'weja.us';
	const	TARGET_REALM		= process.env.TARGET_REALM			|| 'too.fb.';
	const	DEBUG				= process.env.DEBUG					|| 'true';
	const	LOGS				= process.env.LOGS					|| 'true';
	const	GA4_MEASUREMENT_ID	= process.env.GA4_MEASUREMENT_ID	|| 'GTM-KSPP85J';
	const	CMS_SHEET 			= process.env.CMS_SHEET 			||
		'https://docs.google.com/spreadsheets/d/14T-GM6Cx-OpT_s4MCytc1VL8fQax8eOC8IHdne-1Wf4/edit#gid=1055269632';

//  LESS FREQUENT -- MIFE ADDS/UPDATES
	// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////	GLOBAL CONSTANTS
	const LOCAL_PROTOCOL 				= process.env.LOCAL_PROTOCOL			|| 'http://';
	const REMOTE_PROTOCOL				= process.env.REMOTE_PROTOCOL			|| 'https://';
	// const THIS_PROTOCOL				= process.env.THIS_PROTOCOL				|| REMOTE_PROTOCOL;
	// const STAGE_REMOTE_REALM_BASE	= process.env.STAGE_REMOTE_REALM_BASE	|| REMOTE_PROTOCOL	+ 'too.fb.' + TARGET_DOMAIN;
	const PROD_REMOTE_REALM_BASE		= process.env.PROD_REMOTE_REALM_BASE	|| REMOTE_PROTOCOL	+ 'foo.fb.' + TARGET_DOMAIN;
	// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////	LOCALLY REGISTERED SERVICES
	const LOCAL_REALM_BASE 					= process.env.LOCAL_REALM_BASE				|| LOCAL_PROTOCOL	+ 'localhost:';
	const AUTH_LOCAL_PORT_ROUTE				= process.env.AUTH_LOCAL_PORT_ROUTE			|| '4420/auth-element/#/';
	// const CHAT_LOCAL_PORT_ROUTE			= process.env.CHAT_LOCAL_PORT_ROUTE			|| '4415/chat/#/';
	// const CMS_LOCAL_PORT_ROUTE			= process.env.CMS_LOCAL_PORT_ROUTE			|| '4411/cms/#/';
	// const FORM_LOCAL_PORT_ROUTE			= process.env.FORM_LOCAL_PORT_ROUTE			|| '4423/form-element/#/';
	// const PRIVATE_LOCAL_PORT_ROUTE		= process.env.PRIVATE_LOCAL_PORT_ROUTE		|| '4421/private-element/#/';
	// const PUBLIC_LOCAL_PORT_ROUTE		= process.env.PUBLIC_LOCAL_PORT_ROUTE		|| '5002/server-auth/';
	// const SERVER_AUTH_LOCAL_PORT_ROUTE	= process.env.SERVER_AUTH_LOCAL_PORT_ROUTE	|| '4420/auth-element/#/';
	const AUTH_LOCAL_SERVICE				= process.env.AUTH_LOCAL_SERVICE			|| LOCAL_REALM_BASE	+ AUTH_LOCAL_PORT_ROUTE;
	// const CHAT_LOCAL_SERVICE				= process.env.CHAT_LOCAL_SERVICE			|| LOCAL_REALM_BASE	+ CHAT_LOCAL_PORT_ROUTE;
	// const CMS_LOCAL_SERVICE				= process.env.CMS_LOCAL_SERVICE				|| LOCAL_REALM_BASE	+ CMS_LOCAL_PORT_ROUTE;
	// const FORM_LOCAL_SERVICE				= process.env.FORM_LOCAL_SERVICE			|| LOCAL_REALM_BASE	+ FORM_LOCAL_PORT_ROUTE;
	// const PRIVATE_LOCAL_SERVICE			= process.env.PRIVATE_LOCAL_SERVICE			|| LOCAL_REALM_BASE	+ PRIVATE_LOCAL_PORT_ROUTE;
	// const PUBLIC_LOCAL_SERVICE			= process.env.PUBLIC_LOCAL_SERVICE			|| LOCAL_REALM_BASE	+ PUBLIC_LOCAL_PORT_ROUTE;
	// const SERVER_AUTH_LOCAL_SERVICE		= process.env.AUTH_LOCAL_SERVICE			|| LOCAL_REALM_BASE	+ SERVER_AUTH_LOCAL_PORT_ROUTE;
	// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////	REMOTELY REGISTERED SERVICES
	const TARGET_REMOTE_REALM			= process.env.TARGET_REMOTE_REALM			|| TARGET_REALM		+ TARGET_DOMAIN;
	const TARGET_REMOTE_REALM_BASE		= process.env.REMOTE_REALM_BASE				|| REMOTE_PROTOCOL	+ TARGET_REMOTE_REALM;
	// const AUTH_REMOTE_SERVICE		= process.env.AUTH_REMOTE_SERVICE			|| TARGET_REMOTE_REALM_BASE	+ '/auth-element/#/';
	const CHAT_REMOTE_SERVICE			= process.env.CHAT_REMOTE_SERVICE			|| TARGET_REMOTE_REALM_BASE	+ '/chat/#/';
	const CMS_REMOTE_SERVICE			= process.env.CMS_REMOTE_SERVICE			|| PROD_REMOTE_REALM_BASE	+ '/cms';
	const FORM_REMOTE_SERVICE			= process.env.FORM_REMOTE_SERVICE			|| TARGET_REMOTE_REALM_BASE	+ '/form-element/#/';
	const PRIVATE_REMOTE_SERVICE		= process.env.PRIVATE_REMOTE_SERVICE		|| TARGET_REMOTE_REALM_BASE	+ '/private-element/#/';
	const PUBLIC_REMOTE_SERVICE			= process.env.PUBLIC_REMOTE_SERVICE			|| TARGET_REMOTE_REALM_BASE	+ '/public/#/';
	const SERVER_AUTH_REMOTE_SERVICE	= process.env.SERVER_AUTH_REMOTE_SERVICE	|| TARGET_REMOTE_REALM_BASE	+ '/server-auth/';
	// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////	MISC ASSETS
	const ASSETS_BUCKET					= process.env.ASSETS_BUCKET					|| 'https://storage.googleapis.com/' + TARGET_DOMAIN;
	const CMS_ALIAS						= process.env.CMS_ALIAS						|| TARGET_ALIAS + '-EN_US';
	// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////	FIREBASE
	const FB_CREDS_API_KEY				= process.env.FB_CREDS_API_KEY				|| 'AIzaSyACF9vblOxUSQbRu6LsRgWuDBIqRjzYYyM';
	const FB_CREDS_AUTH_DOMAIN			= process.env.FB_CREDS_AUTH_DOMAIN			|| TARGET_REMOTE_REALM;
	const FB_CREDS_DATABASE_URL			= process.env.FB_CREDS_DATABASE_URL			|| 'https://' + TARGET_PROJECT_ID + '.firebaseio.com/';
	const FB_CREDS_PROJECT_ID			= process.env.FB_CREDS_PROJECT_ID			|| TARGET_PROJECT_ID;
	const FB_CREDS_MEASUREMENT_ID		= process.env.FB_CREDS_MEASUREMENT_ID		|| GA4_MEASUREMENT_ID;
	const FB_CREDS_STORAGE_BUCKET		= process.env.FB_CREDS_STORAGE_BUCKET		|| TARGET_PROJECT_ID + '.appspot.com';
	const FB_CREDS_APP_ID				= process.env.FB_CREDS_APP_ID				|| '"1:68199260028:web:e619292af013b9a10a8ef9';
	const FB_CREDS_MESSAGING_SENDER_ID	= process.env.FB_CREDS_MESSAGING_SENDER_ID	|| '68199260028';
	
//  MORE FREQUENT --  CUSTOM DEVELOPMENT/INTEGRATION
	// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	THIS MIFE
	const THIS_HOST				= process.env.HOST					|| LOCAL_REALM_BASE;
	const THIS_SERVICE			= process.env.AUTH_SERVICE			|| AUTH_LOCAL_SERVICE;
	// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	OTHER MIFEN
	const AUTH_SERVICE			= process.env.AUTH_SERVICE			|| THIS_SERVICE;
	const CMS_SERVICE			= process.env.CMS_SERVICE			|| CMS_REMOTE_SERVICE;
	const CHAT_SERVICE			= process.env.CHAT_SERVICE			|| CHAT_REMOTE_SERVICE;
	const FORM_SERVICE			= process.env.FORM_SERVICE			|| FORM_REMOTE_SERVICE;
	const PRIVATE_SERVICE		= process.env.PRIVATE_SERVICE		|| PRIVATE_REMOTE_SERVICE;
	const PUBLIC_SERVICE		= process.env.PUBLIC_SERVICE		|| PUBLIC_REMOTE_SERVICE;
	const SERVER_AUTH_SERVICE	= process.env.SERVER_AUTH_SERVICE	|| SERVER_AUTH_REMOTE_SERVICE;
	// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	REGISTER FORMS
	// const FORM_CONTACT	= process.env.FORM_CONTACT	|| 'pVYsWezP';
	// const FORM_REGISTER	= process.env.FORM_REGISTER	|| 'axJT9FLX';
	// const FORM_FEEDBACK	= process.env.FORM_FEEDBACK	|| 'vIKRhjtU';


export const environment = {
	production:	Boolean( TARGET_ALIAS	=== 'prod' ),
	this:		{ host: THIS_HOST, nickname: THIS_NICKNAME, service: THIS_SERVICE, title: THIS_TITLE },
	target:		{ alias: TARGET_ALIAS, domain: TARGET_DOMAIN, realm: TARGET_REALM, remote: TARGET_REMOTE_REALM },
	realm:		{ base: TARGET_REMOTE_REALM_BASE },
	assets:		{ bucket: ASSETS_BUCKET },
	auth:		{ service: AUTH_SERVICE, register: AUTH_SERVICE + 'register' },
	cms:		{ service: CMS_SERVICE, sheet: CMS_SHEET, alias: CMS_ALIAS },
	chat:		{ service: CHAT_SERVICE },
	form:		{ service: FORM_SERVICE },
	private:	{ service: PRIVATE_SERVICE },
	public:		{ service: PUBLIC_SERVICE },
	server:		{
		auth:	{ service: SERVER_AUTH_SERVICE }
	},
	authGuardRemoteFallbackURL:	AUTH_SERVICE	+ 'login',
	authGuardRemoteLoggedInURL:	PRIVATE_SERVICE	+ 'home',
	firebase: {
		creds: {
			appId:				FB_CREDS_APP_ID,
			apiKey:				FB_CREDS_API_KEY,
			authDomain:			FB_CREDS_AUTH_DOMAIN,
			databaseURL:		FB_CREDS_DATABASE_URL,
			measurementId:		FB_CREDS_MEASUREMENT_ID,
			messagingSenderId:	FB_CREDS_MESSAGING_SENDER_ID,
			projectId:			FB_CREDS_PROJECT_ID,
			storageBucket:		FB_CREDS_STORAGE_BUCKET,
		},
		configs: {
			authGuardFallbackURL:		'/login',
			authGuardLoggedInURL:		'/home',
			enableEmailVerification:	true,
			enableFirestoreSync:		true,
			nameMaxLength:				50,
			nameMinLength:				2,
			passwordMaxLength:			60,
			passwordMinLength:			8,
			toastMessageOnAuthSuccess:	false,
			toastMessageOnAuthError:	true,
			guardProtectedRoutesUntilEmailIsVerified:	true,
		},
	},
	google: { analytics: { trackingCode: FB_CREDS_MEASUREMENT_ID }},
	debug:	Boolean( DEBUG	=== 'true' ),
	logs:	Boolean( LOGS	=== 'true' ),
	timeZone: 'America/Denver'
};

import 'zone.js/dist/zone-error';
