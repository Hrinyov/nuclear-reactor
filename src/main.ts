import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import { createAuth0 } from '@auth0/auth0-vue';

import './assets/main.css';

const app = createApp(App);

app.use(
    createAuth0({
      // set here domain from Auth0
        domain: "" as string,
        // set here clientId from Auth0
        clientId: "" as string,
        authorizationParams: {
          redirect_uri: window.location.origin,
        },
      })
)
app.use(router)
app.use(store)
app.mount('#app')
