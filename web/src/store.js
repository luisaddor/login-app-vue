import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost:4000'

let token = 'token';

export default new Vuex.Store({
  state: {
    users: [],
    token: localStorage.getItem('access_token') || null,
    access: null,
  },
  mutations: {
    updateUser(state, data) {
      state.access = data[0]
      state.token = token

      if(state.access.username && state.token) {
        localStorage.setItem('access_token', token);
        localStorage.setItem('user', state.access.name);
        router.push('/');
      }
    },
    updateUsers(state, users) {
      state.users = users
    },
    removeUser(state, id) {
      state.users = state.users.filter(user => user.id !== id)
    },
    registerUser() {
      router.push('/login');
    },
    logout(state) {
      state.token = null;
      state.access = null;

      localStorage.removeItem('user');
      localStorage.removeItem('access_token');
      router.push('/login');
    }
  },
  actions: {
    login(context, payload) {
      axios.get(`/users?username=${payload.username}&password=${payload.password}`)
        .then(response => {
          context.commit('updateUser', response.data)
        })
        .catch(error => {
          console.log('nao encontrado')
        })
    },
    register(context, payload) {
      var user = {...payload}

      axios.post(`/users`, user)
        .then(() => {
          context.commit('registerUser')
        })
        .catch(error => {
          console.log('nao encontrado')
        })
    },
    getAllUsers(context) {
      axios.get('/users')
        .then(response => {
          context.commit('updateUsers', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    removeUser(context, payload) {
      axios.delete(`/users/${payload}`)
        .then(() => {
          context.commit('removeUser', payload)
        })
        .catch(error => {
          console.log(error)
        })
    },
    logout(context) {
      context.commit('logout')
    }
  }
})
