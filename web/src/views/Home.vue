<template>
  <div class="home">
    <h2>Bem vindo</h2>

    <p>Estes são os usuários ativos:</p>

    <el-container>
      <el-row :gutter="20">
        <el-col v-for="user in users" :key="user.id" :span="8">
          <el-card>
            <h2> {{user.name}} </h2>
            <p> {{user.title}} </p>
            <el-button type="danger" @click="removeUser(user.id)">Deletar</el-button>
          </el-card>
        </el-col>
      </el-row>
    </el-container>
    <el-button @click="logout" type="danger" plain>Logout</el-button>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapState({
          users: state => state.users,
          user: state => state.access
        })
  },
  created () {
    this.getAllUsers();
  },
  methods: {
    getAllUsers() {
      this.$store.dispatch('getAllUsers');
    },
    removeUser(id) {
      this.$store.dispatch('removeUser', id);
    },
    logout() {
      this.$store.dispatch('logout');
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-container {
    max-width: 90%;
    margin: 0 auto;

    .el-card {
      margin-bottom: 20px;
    }

    .el-row {
      width: 100%;
    }
  }

  .el-button--danger.is-plain {
      position: fixed;
      top: 10px;
      right: 10px;
    }
</style>
