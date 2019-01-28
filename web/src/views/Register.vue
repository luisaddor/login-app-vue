<template>
    <el-card class="box-card">
        <h2 class="h2">Faça seu login</h2>
        <el-form ref="registerForm" @submit.prevent="handleSubmit">
            <el-form-item
              :rules="[
                  { required: true, message: 'This field is required'},
              ]">
              <el-input
                  placeholder="Nome"
                  v-model="name">
              </el-input>
            </el-form-item>

            <el-form-item
              :rules="[
                  { required: true, message: 'This field is required'},
              ]">
              <el-input
                  placeholder="Ocupação"
                  v-model="title">
              </el-input>
            </el-form-item>

            <el-form-item
                :rules="[
                    { required: true, message: 'This field is required'},
                ]">
                <el-input
                    placeholder="Usuário"
                    v-model="username">
                </el-input>
            </el-form-item>

            <el-form-item
                :rules="[
                    { required: true, message: 'This field is required'},
                ]">
                <el-input 
                    placeholder="Senha"
                    type="password"
                    v-model="password">
                </el-input>
            </el-form-item>

            <el-form-item>
                <el-button @click="handleSubmit" type="primary">Registrar</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
    export default {
        name: 'registerForm',
        data () {
            return {
                name: '',
                title: '',
                username: '',
                password: '',
            }
        },
        methods: {
            handleSubmit() {
                const { name, title, username, password} = this;

                if (name && title && username && password) {
                    this.$store.dispatch('register', { name, title, username, password })
                }
            }
        }
    }
</script>