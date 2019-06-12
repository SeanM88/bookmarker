// STATE
export const state = () => ({
  global: [],
  account: []
});

// MUTATIONS
export const mutations = {

  MU_GlobalAlert: (state, alert) => state.global = [alert],

  MU_ClearGlobalAlerts: (state) => state.global = [],

  MU_AccountAlert: (state, alert) => state.account = [alert]

};
