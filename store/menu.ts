import { defineStore } from 'pinia'
import axios from 'axios'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    menu: {},
  }),
  getters: {
    getMenu(state) {
      return state.menu
    },
  },
  actions: {
    async fetchMenu() {
      try {
        const data = await axios.get(
          'https://trg-api.co.uk/wagamama-takeout/location/164/menu',
          {
            headers: {
              'Content-Type': 'application/json',
              'x-auth-mws-token': 'XIPu21Fh5EvHArvevviZbv3eZLQZxDvt',
            },
          }
        )
        this.menu = data.data
      } catch (error) {
        alert(error)
      }
    },
  },
})
