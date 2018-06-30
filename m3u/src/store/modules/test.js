const state = {
    activeComponent: 'index',

};

const getters = {
    activeComponent: state => state.activeComponent,
};

const actions = {

};

const mutations = {
    setActiveComponent(state, component) {
        state.activeComponent = component;
    }
};


export default {
    namespaced: false,
    state,
    actions,
    mutations,
    getters
}
