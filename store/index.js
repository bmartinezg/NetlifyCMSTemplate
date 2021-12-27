export const state = () => ({
  headerData: {},
})

export const mutations = {
  SET_HEADER_DATA(state, data) {
    state.headerData = data
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const data = await this.$content('single_types/header').fetch()
    commit('SET_HEADER_DATA', data)
  },
}
