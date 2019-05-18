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

// ACTIONS - CRUD backend data
export const actions = {
  // async fetchBookmarks() {},
  async addBookmark( { commit }, bookmark ) {
    // const response = await axios.post(
    //   'REPLACE-FIRESTORE-API-URL-HERE',
    //   { bookmark }
    // );
    // commit('MU_AddBookmark', response.data);
    commit('MU_AddBookmark', bookmark);
  },
  async deleteBookmark( { commit }, id ) {
    // await axios.delete(
    //   `REPLACE-FIRESTORE-API-URL-HERE/${id}`
    // );
    commit('MU_DeleteBookmark', id);
  },
  async starBookmark( { commit }, id ) {
    commit('MU_ActiveBookmark', id);
    commit('MU_StarBookmark', id);
  }
};

// MUTATIONS - Update state
export const mutations = {
  MU_ActiveBookmark: (state, id) => state.active = state.all.find(bookmark => bookmark.id === id),
  MU_AddBookmark: (state, bookmark) => state.all.unshift(bookmark),
  MU_DeleteBookmark: (state, id) => state.all = state.all.filter(bookmark => id !== bookmark.id),
  MU_StarBookmark: (state, id) => state.active.isFavorite = !state.active.isFavorite
};
