import Vue from "vue";
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.options.credentials = true;

const apiKey = 'AIzaSyDqevJCF2dbQYfsd8eWN0Wkxvs_Md9lgLk';

const state = {
    jsonGoogle: [],
    lastStatus: ''
};
const actions = {
    // getGoogleJson({state, dispatch, commit},searchUrl) {
    //     return new Promise((resolve, reject) => {
    //         Vue.http.get('https://spreadsheets.google.com/feeds/cells/1yjH3rctdqPJ0WQaFls1BChVVAxYyGjetmgg1McIFYEo/1/public/values?alt=json-in-script').then(
    //             (response) => {
    //                 console.log(response);
    //                 resolve();
    //             },
    //             () => {
    //                 reject();
    //             }
    //         )
    //     });
    // },
};
const getters = {
};
const mutations = {
};
export default {
    state,
    getters,
    actions,
    mutations
};