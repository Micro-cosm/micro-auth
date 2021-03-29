// V3
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// DEFINED ENVIRONMENT
const	TARGET_ALIAS				= process.env.TARGET_ALIAS					|| 'dev';
const	TARGET_PROJECT_ID			= process.env.TARGET_PROJECT_ID				|| 'weja-us';
const	TARGET_DOMAIN				= process.env.TARGET_DOMAIN					|| 'weja.us';
const	TARGET_REALM				= process.env.TARGET_REALM					|| 'too';
const	THIS_TITLE					= process.env.THIS_TITLE					|| 'WèJá Töö ID' + '(' + TARGET_ALIAS + ')';
const	DEBUG						= process.env.DEBUG							|| 'true';
const	LOGS						= process.env.LOGS							|| 'true';
const	GA4_MEASUREMENT_ID			= process.env.GA4_MEASUREMENT_ID			|| 'GTM-KSPP85J';
const	CMS_SHEET					= process.env.CMS_SHEET						|| 'https://docs.google.com/spreadsheets/d/14T-GM6Cx-OpT_s4MCytc1VL8fQax8eOC8IHdne-1Wf4/edit#gid=1055269632';
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// DERIVED ENVIRONMENT
const TARGET_REMOTE_REALM			= process.env.TARGET_REMOTE_REALM			|| TARGET_REALM			+ '.fb.' + TARGET_DOMAIN;
const REMOTE_REALM_BASE 			= process.env.REMOTE_REALM_BASE				|| 'https://'			+ TARGET_REMOTE_REALM;
const LOCAL_REALM_BASE 				= process.env.REMOTE_REALM_BASE				|| 'http://localhost:';
const AUTH_LOCAL_SERVICE			= process.env.AUTH_LOCAL_SERVICE			|| LOCAL_REALM_BASE		+ '4410/auth/#/';											  // LOCAL REALM SERVICES
const CMS_LOCAL_SERVICE				= process.env.CMS_LOCAL_SERVICE				|| LOCAL_REALM_BASE		+ '4400/cms/#/';
const CHAT_LOCAL_SERVICE			= process.env.CHAT_LOCAL_SERVICE			|| LOCAL_REALM_BASE		+ '4415/chat/#/';
const FORM_LOCAL_SERVICE			= process.env.FORM_LOCAL_SERVICE			|| LOCAL_REALM_BASE		+ '4413/form/#/';
const PRIVATE_LOCAL_SERVICE			= process.env.PRIVATE_LOCAL_SERVICE			|| LOCAL_REALM_BASE		+ '4401/private/#/';
const PUBLIC_LOCAL_SERVICE			= process.env.PUBLIC_LOCAL_SERVICE			|| LOCAL_REALM_BASE		+ '4400/public/#/';
const AUTH_REMOTE_SERVICE			= process.env.AUTH_REMOTE_SERVICE			|| REMOTE_REALM_BASE	+ '/auth/#/';												 // REMOTE REALM SERVICES
const CMS_REMOTE_SERVICE			= process.env.CMS_REMOTE_SERVICE			|| REMOTE_REALM_BASE	+ '/cms/#/';
const CHAT_REMOTE_SERVICE			= process.env.CHAT_REMOTE_SERVICE			|| REMOTE_REALM_BASE	+ '/chat/#/';
const FORM_REMOTE_SERVICE			= process.env.FORM_REMOTE_SERVICE			|| REMOTE_REALM_BASE	+ '/form/#/';
const PRIVATE_REMOTE_SERVICE		= process.env.PRIVATE_REMOTE_SERVICE		|| REMOTE_REALM_BASE	+ '/private/#/';
const PUBLIC_REMOTE_SERVICE			= process.env.PUBLIC_REMOTE_SERVICE			|| REMOTE_REALM_BASE	+ '/public/#/';
const AUTH_SERVICE					= process.env.AUTH_SERVICE					|| AUTH_LOCAL_SERVICE;																   // MICRO-FRONTEND MENU
const CMS_SERVICE					= process.env.CMS_SERVICE					|| CMS_REMOTE_SERVICE;
const CHAT_SERVICE					= process.env.CHAT_SERVICE					|| CHAT_REMOTE_SERVICE;
const FORM_SERVICE					= process.env.FORM_SERVICE					|| FORM_REMOTE_SERVICE;
const PRIVATE_SERVICE				= process.env.PRIVATE_SERVICE				|| PRIVATE_REMOTE_SERVICE;
const PUBLIC_SERVICE				= process.env.PUBLIC_SERVICE				|| PUBLIC_REMOTE_SERVICE;
const FB_CREDS_API_KEY				= process.env.FB_CREDS_API_KEY				|| 'AIzaSyACF9vblOxUSQbRu6LsRgWuDBIqRjzYYyM';											   // FIREBASE SHARED
const FB_CREDS_AUTH_DOMAIN			= process.env.FB_CREDS_AUTH_DOMAIN			|| TARGET_REMOTE_REALM;
const FB_CREDS_DATABASE_URL			= process.env.FB_CREDS_DATABASE_URL			|| 'https://'			+ TARGET_PROJECT_ID + '.firebaseio.com/';
const FB_CREDS_PROJECT_ID			= process.env.FB_CREDS_PROJECT_ID			|| TARGET_PROJECT_ID;
const FB_CREDS_MEASUREMENT_ID		= process.env.FB_CREDS_MEASUREMENT_ID		|| GA4_MEASUREMENT_ID;
const FB_CREDS_STORAGE_BUCKET		= process.env.FB_CREDS_STORAGE_BUCKET		|| TARGET_PROJECT_ID	+ '.appspot.com';
const FB_CREDS_MESSAGING_SENDER_ID	= process.env.FB_CREDS_MESSAGING_SENDER_ID	|| '68199260028';
const FB_CREDS_APP_ID				= process.env.FB_CREDS_APP_ID				|| '"1:68199260028:web:e619292af013b9a10a8ef9';
const ASSETS_BUCKET					= process.env.ASSETS_BUCKET					|| 'https://storage.googleapis.com/' + TARGET_DOMAIN;										   // MISC SHARED
const CMS_ALIAS						= process.env.CMS_ALIAS						|| TARGET_ALIAS			+ '-EN_US';

export const environment = {
	production:	Boolean(TARGET_ALIAS	=== 'prod' ),
	debug:		Boolean(DEBUG			=== 'true' ),
	logs:		Boolean(LOGS			=== 'true' ),
	timeZone:	'America/Denver',
	target:		{ alias:	TARGET_ALIAS,	domain:	TARGET_DOMAIN,	realm: TARGET_REALM, remote: TARGET_REMOTE_REALM },
	realm:		{ base:		REMOTE_REALM_BASE	},
	assets:		{ bucket:	ASSETS_BUCKET		},
	this:		{ title:	THIS_TITLE			},
	auth:		{ service:	AUTH_SERVICE,	register:	AUTH_SERVICE + 'register' },
	cms:		{ service:	CMS_SERVICE,	sheet:	CMS_SHEET,	alias: CMS_ALIAS },
	chat:		{ service:	CHAT_SERVICE		},
	form:		{ service:	FORM_SERVICE		},
	private:	{ service:	PRIVATE_SERVICE		},
	public:		{ service:	PUBLIC_SERVICE		},
	authGuardRemoteFallbackURL:			AUTH_SERVICE	+ 'login',
	authGuardRemoteLoggedInURL:			PRIVATE_SERVICE	+ 'home',
	firebase: {
		creds: {
			appId:						FB_CREDS_APP_ID,
			apiKey:						FB_CREDS_API_KEY,
			authDomain:					FB_CREDS_AUTH_DOMAIN,
			databaseURL:				FB_CREDS_DATABASE_URL,
			measurementId:				FB_CREDS_MEASUREMENT_ID,
			messagingSenderId:			FB_CREDS_MESSAGING_SENDER_ID,
			projectId:					FB_CREDS_PROJECT_ID,
			storageBucket:				FB_CREDS_STORAGE_BUCKET
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
			guardProtectedRoutesUntilEmailIsVerified:	true
		}
	},
	google: { analytics: { trackingCode: FB_CREDS_MEASUREMENT_ID }}
}
