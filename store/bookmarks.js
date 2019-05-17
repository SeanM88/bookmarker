import axios from 'axios';

// STATE
export const state = () => ({
  all: [
    {
      id: 7,
      title: 'Google',
      url: 'https://www.google.com/',
      starred: false,
      tags: ['search', 'seo']
    },
    {
      id: 9,
      title: 'ESPN Lies',
      url: 'http://www.espn.com/',
      starred: false,
      tags: ['sports', 'NFL']
    }
  ],
  active: {}
});

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
  async deleteBookmark({ commit }, id ) {
    // await axios.delete(
    //   `REPLACE-FIRESTORE-API-URL-HERE/${id}`
    // );
    commit('mu_DeleteBookmark', id);
  }
};

// MUTATIONS
export const mutations = {
  mu_DeleteBookmark: (state, id) => state.all = state.all.filter(bookmark => id !== bookmark.id)
};
