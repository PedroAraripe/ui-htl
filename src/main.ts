import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/style/global.scss'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { pt } from 'vuetify/locale'

const vuetify = createVuetify({
  components,
  directives,
  locale: {
    locale: 'pt',
    fallback: 'en',
    messages: { pt },
  },
})

// Vue Leaflet
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';

const app = createApp(App);

app.use(createPinia());

app.use(router);
app.use(vuetify);

app.component('l-map', LMap);
app.component('l-tile-layer', LTileLayer);
app.component('l-marker', LMarker);
app.component('l-popup', LPopup);
app.component('l-tooltip', LTooltip);

app.mount('#app')
