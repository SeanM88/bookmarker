import axios from 'axios';
import { fireDb } from '~/plugins/firebase.js';

const bookmarksRef = fireDb.collection('bookmarks');

// STATE
export const state = () => ({
  all: [],
  active: {}
});

export const getters = {
  onlyStarred: (state) => state.all.filter(bookmark => bookmark.isFavorite === true)
}

// ACTIONS - CRUD backend data
export const actions = {

  async fetchBookmarks( { commit } ) {
    const snapshot = await bookmarksRef.get();
    const items = [];
    for ( let item of snapshot.docs ) {
      let bmk = item.data();
      bmk.id = item.id;
      items.push(bmk);
    }
    commit('MU_SetBookmarks', items);
  },

  async addBookmark( { commit }, bookmark ) {
    // const response = await fireDb.collection('bookmarks').add(bookmark);
    // console.log(response);
    // commit('MU_AddBookmark', bookmark);
  },

  async deleteBookmark( { commit }, id ) {
    await bookmarksRef.doc(id).delete();
    commit('MU_DeleteBookmark', id);
  },

  async starBookmark( { commit }, id ) {
    commit('MU_ActiveBookmark', id);
    commit('MU_StarBookmark', id);
  }
};

// MUTATIONS - Update state
export const mutations = {
  MU_SetBookmarks: (state, bookmarks) => (state.all = bookmarks),
  MU_ActiveBookmark: (state, id) => state.active = state.all.find(bookmark => bookmark.id === id),
  MU_AddBookmark: (state, bookmark) => state.all.unshift(bookmark),
  MU_DeleteBookmark: (state, id) => state.all = state.all.filter(bookmark => id !== bookmark.id),
  MU_StarBookmark: (state, id) => state.active.isFavorite = !state.active.isFavorite
};
