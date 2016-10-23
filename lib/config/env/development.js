const coreConfig = {
	apiKey: '5512c8d59932b3da984cc7de',
	statics: {
		basePath: '//static.almundo.com'
	},
	library: {
		basePath: '//dv.almundo.com.ar',
		version: '57'
	},
	cart: {
		basePath: ''
	},
	'am-components': {
		basePath: 'http://dv.almundo.com.ar/am-components',
		backBasePath: 'http://dv.almundo.it/am-components',
		frontBasePath: '//dv.almundo.com/am-components'
	},
	hotels: {
		basePath: 'hotels'
	},
	home: {
		basePath: ''
	},
	api: {
		basePath: 'http://apidv.almundo.it:8080/api'
	},
	xs: {
		basePath: 'http://xsdv.almundo.it:8080'
	},
	apiPayments: {
		basePath: 'http://paymentsdv.almundo.it:8080/payments'
	},
	apiWordpress: {
		basePath: 'http://wpdv.almundo.it'
	},
	cmsWordpress: {
		basePath: 'http://cmsdv.almundo.it'
	},
	autocomplete: {
		basePath: 'http://apidv.almundo.it:8080/api/autocomplete/suggest'
	},
	tripadvisor: {
		apiKey: '069F43EFFDC54C2BBF73B75A59ED4795',
		partnerKey: 'B22D880181784BF5912ADA81CCA4ECDC',
		version: '2.0',
		framePath: '//www.tripadvisor.com/WidgetEmbed-cdspropertydetail',
		basePath: 'http://api.tripadvisor.com/api/partner/'
	},
	default_domain: 'ARG',
	default_channel: 'WEB',
	default_brand: 'almundo',
	locales: ['es', 'es-AR', 'es-BO', 'es-CL', 'es-CO', 'es-CR', 'es-DO', 'es-EC', 'es-GT', 'es-HN', 'es-MX', 'es-NI', 'es-PA', 'es-PE', 'es-PR', 'es-PY', 'es-SV', 'es-UY', 'pt-BR'],
  //See: https://github.com/expressjs/cookie-session
	session: {
		name: '_k',
		keys: ['711a8ad03a8862dad42963acc2fb18c8', 'd8e8209b6824a94be50664a6f5690bbd'],
		secureProxy: false,

		data: {
			name: '_am.sid',
			secret: 'am-accounting-session-secret-key',
			saveUninitialized: false,
			httpOnly: false,
			resave: false
		},
		store: {
			prefix: 'account:',
			ttl: 7200
		}
	},
	redis: {
		host: 'redis01dv.almundo.it',
		prefix: 'am:',
		port: 6379,
		db: 6
	},

	debug: true,

	empresas: {
		corporate: 'http://empresas.dv.almundo.com.ar/corporate',
		home: 'http://empresas.dv.almundo.com.ar/home',
		homeCorporate: 'http://empresas.dv.almundo.com.ar/home/corporate'
	}
};

coreConfig.assets = {
	libJs: `${coreConfig.library.basePath }/library/static/${ coreConfig.library.version }/js`,
	libCss: `${coreConfig.library.basePath }/library/static/${ coreConfig.library.version }/css`,
	libImage: `${coreConfig.library.basePath }/library/static/${ coreConfig.library.version }/images`,
	libTemplates: `${coreConfig.library.basePath }/library/static/${ coreConfig.library.version }/templates`
};

module.exports = coreConfig;
