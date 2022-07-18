
const apiApplicationPath = "https://dummyjson.com/products";

export const state = () => ({
  products: [],
})

export const getters = {

  getProducts: (state) => {
    return state.products;
  },

}

export const mutations = {

  SET_PRODUCTS(state, products) {
    state.products = products;
  },

}

export const actions = {

  async fetchProducts({ commit }) {
    try {
      const response = await this.$axios.$get('https://dummyjson.com/products');
      commit("SET_PRODUCTS", response.products);
    } catch (error) {
      // console.log(error)
    }
  },

}
