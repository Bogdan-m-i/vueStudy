export default {
  install (app, options) {
    let current = 'ru'

    const changeLanguage = name => {
      current = name
    }

    app.config.globalProperties.$alert = text => {
      window.alert(text)
      console.log(text)
    }

    app.config.globalProperties.$i18n = key => {
      return key.split('.').reduce((words, k) => {
        console.log('words', words)
        console.log('key', k)
        console.log('words[k]', words[k])
        return words[k] || '== unknown =='
      }, options[current])
    }

    app.provide('changeI18N', changeLanguage)
  }
}
