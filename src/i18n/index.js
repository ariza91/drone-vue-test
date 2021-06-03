import Vue from 'vue'
import VueI18n from 'vue-i18n'
import lang from '@/constants/languages'

// COMMENT: this could be imported by a CMS
import en from './en.json'

Vue.use(VueI18n)

export default new VueI18n({
    locale: lang.en,
    fallbackLocale: lang.en,
    messages: { en }
})