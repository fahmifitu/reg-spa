import * as types from '../mutation-types'
import axios from 'axios'

// state
export const state = {
  guest: null,
}

// getters
export const getters = {
  guest: state => state.guest,
  check: state => state.guest !== null
}

// mutations
export const mutations = {
  [types.REMOVE_GUEST] (state) {
    state.guest = null
  },
  [types.SAVE_GUEST] (state, { guest }) {
    state.guest = guest
  }
}

// actions
export const actions = {
  saveGuest ({ commit, dispatch }, payload) {
    commit(types.SAVE_GUEST, payload)
  },

  removeGuest ({ commit }) {
    commit(types.REMOVE_GUEST)
  }
}
