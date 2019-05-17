import axios from 'axios';

// STATE
export const state = () => ({
  all: [
    {
      id: 'zX9bhs',
      title: 'Google',
      url: 'https://www.google.com/',
      isFavorite: false,
      tags: ['search', 'seo']
    },
    {
      id: 'hi29sk',
      title: 'ESPN',
      url: 'http://www.espn.com/',
      isFavorite: false,
      tags: ['sports', 'NFL']
    },
    {
      id: 'o7ps8h',
      title: 'Barstool Sports',
      url: 'https://www.barstoolsports.com/',
      isFavorite: false,
      tags: ['sports', 'blog', 'comedy']
    },
    {
      id: 'l8ks6e',
      title: 'On The Water',
      url: 'https://www.onthewater.com/',
      isFavorite: true,
      tags: ['fishing', 'boating']
    }
  ],
  active: {}
});

export const getters = {
  onlyStarred: (state) => state.all.filter(bookmark => bookmark.isFavorite === true)
}

// ACTIONS
export const actions = {
  // async fetchBookmarks() {},
  async addBookmark( { commit }, bookmark ) {
    const response = await axios.post(
      'REPLACE-FIRESTORE-API-URL-HERE',
      { bookmark }
    );
    commit('mu_AddBookmark', response.data);
  },
  async deleteBookmark( { commit }, id ) {
    // await axios.delete(
    //   `REPLACE-FIRESTORE-API-URL-HERE/${id}`
    // );
    commit('mu_DeleteBookmark', id);
  },
  async starBookmark( { commit }, id ) {
    commit('mu_ActiveBookmark', id);
    commit('mu_StarBookmark', id);
  }
};

// MUTATIONS
export const mutations = {
  mu_ActiveBookmark: (state, id) => state.active = state.all.find(bookmark => bookmark.id === id),
  mu_DeleteBookmark: (state, id) => state.all = state.all.filter(bookmark => id !== bookmark.id),
  mu_StarBookmark(state, id) {
    state.active.isFavorite = !state.active.isFavorite;
    // let index = state.all.indexOf(state.active);
    // state.all[index] =
  }
};
