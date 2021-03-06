import Vue from 'vue'
import Vuex from 'vuex'
import {state} from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
import VueResource from 'vue-resource';
import modules from './module'


import playlist from './modules/playlist'


Vue.use(Vuex);
Vue.use(VueResource);
Vue.http.options.credentials = true;

export const store = new Vuex.Store({
    modules,
    state,
    actions,
    getters,
    mutations,
    playlist
})

