import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'
import SweetAlertMixin from '~/mixins/sweetalert'
import { VueMaskDirective } from 'v-mask'
import '~/plugins'
import '~/components'

Vue.config.productionTip = false

Vue.mixin(SweetAlertMixin);
Vue.directive('mask', VueMaskDirective);
/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})
