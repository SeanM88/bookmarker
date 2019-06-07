// STATE
export const state = () => ({
  global: [],
  account: []
});

// MUTATIONS
export const mutations = {
  MU_AccountAlert: (state, alert) => state.account = [alert],
  MU_GlobalAlert: (state, alert) => state.global = [alert]
};
