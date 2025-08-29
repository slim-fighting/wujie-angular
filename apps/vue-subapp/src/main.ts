import { createApp, type App as VueApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

let app: VueApp<Element> | null = null

function mount() {
    if (app) return
    app = createApp(App)
    app.use(router)
    app.mount('#app')
}

function unmount() {
    if (!app) return
    app.unmount()
    app = null
}


if (!window.__POWERED_BY_WUJIE__) {
    mount();
}

window.__WUJIE_MOUNT = mount;
window.__WUJIE_UNMOUNT = unmount
