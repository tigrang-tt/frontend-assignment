export default {
  namespaced: true,

  state: {
    companyName: '',
    companySpend: '',
    companySpendAbility: '',
    notes: ''
  },

  getters: {
    data (state) { 
      return { ...state } 
    }
  },

  mutations: {
    updateState (state, newState) {
      ['companyName', 'companySpend', 'companySpendAbility', 'notes'].forEach(key => {
        state[key] = newState[key];
      });
    }
  },
}