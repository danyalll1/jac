import '@/assets/base.css'
import '@/assets/fonts/stylesheet.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import headerView from '@/components/header-view.vue'
import introSetion from '@/components/intro-setion.vue'
import secondaryScetion from '@/components/secondary-scetion.vue'
import calculatorView from '@/components/calculator-view.vue'
import newItemSection from '@/components/newItem-section.vue'
import questionsSection from '@/components/questions-section.vue'
import uiButton from '@/components/ui-button.vue'
import uiCheckbox from '@/components/ui-checkbox.vue'
import uiSelect from '@/components/ui-select.vue'
import serviceSection from '@/components/service-section.vue'
import tenderSection from '@/components/tender-section.vue'
import aboutSection from '@/components/about-section.vue'
import easySection from '@/components/easy-section.vue'
import footerSection from '@/components/footer-section.vue'
import footer2Section from '@/components/footer2-section.vue'
import leezingSection from '@/components/leezing-section.vue'
import uiMinmax from '@/components/ui-minmax.vue'
import uiMinmax2 from '@/components/ui-minmax2.vue'

const app = createApp(App)

app.use(router)
app.component('uiCheckbox',uiCheckbox)
app.component('uiButton',uiButton)
app.component('headerView',headerView)
app.component('introSetion',introSetion)
app.component('secondaryScetion',secondaryScetion)
app.component('uiSelect',uiSelect)
app.component('calculatorView',calculatorView)
app.component('newItemSection',newItemSection)
app.component('questionsSection',questionsSection)
app.component('serviceSection',serviceSection)
app.component('tenderSection',tenderSection)
app.component('aboutSection',aboutSection)
app.component('easySection',easySection)
app.component('footerSection',footerSection)
app.component('footer2Section',footer2Section)
app.component('leezingSection',leezingSection)
app.component('uiMinmax',uiMinmax)
app.component('uiMinmax2',uiMinmax2)



app.mount('#app')
