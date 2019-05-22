import axios from 'axios';
import { fireDb } from '~/plugins/firebase.js';

// set reference to 'bookmarks' collection in firestore
const refBookmarks = fireDb.collection('bookmarks');

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
    // Get snapshot of bookmarks collection
    const snapshot = await refBookmarks.get();
    // Build array of bookmarks from snapshot data
    const items = [];
    for ( let item of snapshot.docs ) {
      let bmk = item.data();
      // Add the document id to bookmark object
      bmk.id = item.id;
      items.push(bmk);
    }
    // Update state
    commit('MU_SetBookmarks', items);
  },

  async addBookmark( { commit }, bookmark ) {
    bookmark.created = Date.now();
    const response = await refBookmarks.add(bookmark);
    bookmark.id = response.id;
    commit('MU_AddBookmark', bookmark);
  },

  async editBookmark( { commit }, bookmark ) {
    bookmark.modified = Date.now();
  },

  async deleteBookmark( { commit }, id ) {
    // Delete from Firestore
    await refBookmarks.doc(id).delete();
    // Update state
    commit('MU_DeleteBookmark', id);
  },

  async starBookmark( { commit }, bookmark ) {
    // First update the bookmark in Firestore
    const bmk = await refBookmarks.doc(bookmark.id).update({
      'isFavorite': !bookmark.isFavorite
    });
    // Then update state
    commit('MU_ActiveBookmark', bookmark);
    commit('MU_StarBookmark', bookmark.id);
  }
};

// MUTATIONS - Update state
export const mutations = {
  MU_SetBookmarks: (state, bookmarks) => (state.all = bookmarks),
  // MU_ActiveBookmark: (state, id) => state.active = state.all.find(bookmark => bookmark.id === id),
  MU_ActiveBookmark: (state, bookmark) => (state.active = bookmark),
  MU_AddBookmark: (state, bookmark) => state.all.unshift(bookmark),
  MU_DeleteBookmark: (state, id) => state.all = state.all.filter(bookmark => id !== bookmark.id),
  MU_StarBookmark: (state, id) => state.active.isFavorite = !state.active.isFavorite
};
