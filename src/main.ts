import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '../global.scss'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

// Vue Leaflet
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';

const app = createApp(App)

app.use(createPinia())

app.use(router)
app.use(vuetify)
app.use(vuetify)

app.component('l-map', LMap);
app.component('l-tile-layer', LTileLayer);
app.component('l-marker', LMarker);
app.component('l-popup', LPopup);
app.component('l-tooltip', LTooltip);

app.mount('#app')
