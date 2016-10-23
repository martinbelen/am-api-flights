const coreConfig = {
	apiKey: '5512c8d59932b3da984cc7de',
	statics: {
		basePath: '//static.almundo.com'
	},
	library: {
		basePath: 'http://dev.almundo.com:3000',
		version: ''
	},
	cart: {
		basePath: 'http://dev.almundo.com:5001'
	},
	'am-components': {
		basePath: 'http://dev.almundo.com:5002/am-components',
		backBasePath: 'http://dev.almundo.com:5002/am-components',
		frontBasePath: '//dev.almundo.com:5002/am-components'
	},
	hotels: {
		basePath: 'http://localhost:5000/hotels'
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
		basePath: 'http://apiautocomp01st.almundo.it:8080/api/autocomplete/suggest'
	},
	tripadvisor: {
		apiKey: '069F43EFFDC54C2BBF73B75A59ED4795',
		partnerKey: 'B22D880181784BF5912ADA81CCA4ECDC',
		version: '2.0',
		framePath: 'http://www.tripadvisor.com/WidgetEmbed-cdspropertydetail',
		basePath: 'http://api.tripadvisor.com/api/partner/'
	},
	default_domain: 'ARG',
	default_channel: 'WEB',
	default_brand: 'almundo',
	locales: ['es', 'es-AR', 'es-BO', 'es-CL', 'es-CO', 'es-CR', 'es-DO', 'es-EC', 'es-GT', 'es-HN', 'es-MX', 'es-NI', 'es-PA', 'es-PE', 'es-PR', 'es-PY', 'es-SV', 'es-UY', 'pt-BR'],

	session: {
		name: '_k',
		keys: ['711a8ad03a8862dad42963acc2fb18c8', 'd8e8209b6824a94be50664a6f5690bbd'],
		secureProxy: false,

		data: {
			name: '_am.sid',
			secret: 'am-accounting-session-secret-key',
			saveUninitialized: false,
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
		db: 5
	},

	debug: true,

	empresas: {
		corporate: 'http://empresas.dev.almundo.com.ar:5001/corporate',
		home: 'http://empresas.dev.almundo.com.ar:5000/home',
		homeCorporate: 'http://empresas.dev.almundo.com.ar:5000/home/corporate'
	}
};

coreConfig.assets = {
	libJs: `${coreConfig.library.basePath }/library/static/js`,
	libCss: `${coreConfig.library.basePath }/library/static/css`,
	libImage: `${coreConfig.library.basePath }/library/static/images`,
	libTemplates: `${coreConfig.library.basePath }/library/static/templates`
};

module.exports = coreConfig;
