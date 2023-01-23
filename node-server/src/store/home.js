import { defineStore } from 'pinia'

const useHomeStore = defineStore('home', {
  state() {
    return {
      count: 10
    }
  },
  actions: {
    increment() {
      this.count++
    }
  }
})

export default useHomeStore
