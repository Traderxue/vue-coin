import {createI18n} from "vue-i18n"
import zh from './zh'
import en from './en'
import zh_hk from "./zh-hk"

const i18n = createI18n({
    locale:'zh',
    messages:{
        zh,
        en,
        zh_hk
    }
})

export default i18n;