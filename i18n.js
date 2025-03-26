
const browserLang =
typeof window === 'undefined'
? 'en'
: window.navigator.language.includes('vn') ||
window.navigator.language.includes('VN')
? 'vn'
: 'en';



module.exports ={
  locales: [ 'vn', 'en'],
  // defaultLocale: browserLang,
  defaultLocale: 'vn',
  localeDetection: false, 
  
  // ...rest of config
  loadLocaleFrom: (lang, ns) =>
    import(`./locales/${lang}/${ns}.json`).then(m => m.default),
  pages: {
    '*': [
      'home',
      'auth'
    ]
  }
};
