import { fireDb } from '~/plugins/firebase.js';

// set reference to top level 'Users' collection in firestore
const refUsers = fireDb.collection('Users');


// STATE
export const state = () => ({
  all: [],
  active: {}
});

// GETTERS
export const getters = {
  onlyStarred: (state) => state.all.filter(bookmark => bookmark.isFavorite === true)
}

// ACTIONS - CRUD backend data
export const actions = {

  async fetchBookmarks( { commit, rootState } ) {

    // Get current user's uid for referencing user doc in firestore
    const uid = rootState.account.user.uid;
    // Get snapshot of current User's 'Bookmarks' collection
    const snapshot = await refUsers.doc(uid).collection('Bookmarks').get();

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

  async addBookmark( { commit, rootState }, bookmark ) {
    bookmark.created = Date.now();
    // Get current user's uid for referencing user doc in firestore
    const uid = rootState.account.user.uid;

    const response = await refUsers.doc(uid)
      .collection('Bookmarks').add(bookmark);

    bookmark.id = response.id;
    commit('MU_AddBookmark', bookmark);
  },

  async editBookmark( { commit, rootState }, bookmark ) {
    bookmark.modified = Date.now();
    console.log(bookmark.id)
    // Get current user's uid for referencing user doc in firestore
    const uid = rootState.account.user.uid;

    const response = await refUsers.doc(uid)
      .collection('Bookmarks').doc(bookmark.id).set(bookmark)

    // Commit should replace old bookmark with new bookmark in state
    // commit('MU_UpdateBookmark', bookmark);
  },

  async deleteBookmark( { commit, rootState }, id ) {
    // Get current user's uid for referencing user doc in firestore
    const uid = rootState.account.user.uid;
    // Delete from Firestore
    await refUsers.doc(uid)
      .collection('Bookmarks').doc(id).delete();
    // Update state
    commit('MU_DeleteBookmark', id);
  },

  async starBookmark( { commit, rootState }, bookmark ) {
    // Get current user's uid for referencing user doc in firestore
    const uid = rootState.account.user.uid;
    // First update the bookmark in Firestore
    const bmk = await refUsers.doc(uid)
      .collection('Bookmarks').doc(bookmark.id).update({
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
  MU_ClearBookmarks: (state) => state.all = [],
  MU_ActiveBookmark: (state, bookmark) => (state.active = bookmark),
  MU_AddBookmark: (state, bookmark) => state.all.unshift(bookmark),
  // MU_UpdateBookmark: (state, bookmark) =
  MU_DeleteBookmark: (state, id) => state.all = state.all.filter(bookmark => id !== bookmark.id),
  MU_StarBookmark: (state, id) => state.active.isFavorite = !state.active.isFavorite
};
