const coreConfig = {
	apiKey: '5512c8d59932b3da984cc7de',
	statics: {
		basePath: '//static.almundo.com'
	},
	library: {
		basePath: '//st.almundo.com',
		version: '32'
	},
	cart: {
		basePath: ''
	},
	'am-components': {
		basePath: 'http://st.almundo.com/am-components',
		backBasePath: 'http://st.almundo.com/am-components',
		frontBasePath: '//st.almundo.com/am-components'
	},
	hotels: {
		basePath: 'http://st.almundo.com/hotels'
	},
	home: {
		basePath: '/home'
	},
	api: {
		basePath: 'http://apist.almundo.it:8080/api'
	},
	xs: {
		basePath: 'http://xsst.almundo.it:8080'
	},
	apiPayments: {
		basePath: 'https://payments.almundo.com/payments'
	},
	apiWordpress: {
		basePath: 'http://wpst.almundo.it'
	},
	cmsWordpress: {
		basePath: 'http://cmsst.almundo.it'
	},
	autocomplete: {
		basePath: 'http://apiautocomp01st.almundo.it:8080/api/autocomplete/suggest'
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
		keys: ['711a8ad03a8862dad42963acc2fb18c8', 'a1e15ce42591bc2541cab755faae513c'],
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
		host: 'redis01st.almundo.it',
		prefix: 'am:',
		port: 6379,
		db: 6
	},

	empresas: {
		corporate: 'http://empresas.st.almundo.com.ar/corporate',
		home: 'http://empresas.st.almundo.com.ar/home',
		homeCorporate: 'http://empresas.st.almundo.com.ar/home/corporate'
	}
};

coreConfig.assets = {
	libJs: `${coreConfig.library.basePath }/library/static/${ coreConfig.library.version }/js`,
	libCss: `${coreConfig.library.basePath }/library/static/${ coreConfig.library.version }/css`,
	libImage: `${coreConfig.library.basePath }/library/static/${ coreConfig.library.version }/images`,
	libTemplates: `${coreConfig.library.basePath }/library/static/${ coreConfig.library.version }/templates`
};

module.exports = coreConfig;
