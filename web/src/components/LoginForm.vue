<template>
    <el-card class="box-card">
        <h2 class="h2">Faça seu login</h2>
        <el-form ref="loginForm">
            <el-form-item>
                <el-input
                    placeholder="Usuário"
                    v-model="username">
                </el-input>
            </el-form-item>

            <el-form-item>
                <el-input 
                    placeholder="Senha"
                    type="password"
                    v-model="password">
                </el-input>
            </el-form-item>

            <el-form-item>
                <el-button @click="handleSubmit" type="primary">Login</el-button>

                <router-link class="el-button el-button--default" to="/register">
                   Registre-se
                </router-link>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
    export default {
        name: 'loginForm',
        data () {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            handleSubmit() {
                const { username, password} = this;

                if (username && password) {
                    this.$store.dispatch('login', { username, password })
                } else {
                    alert('Valide se os campos foram preenchidos corretamente')
                }
            }
        }
    }
</script>

<style>
    a {
        text-decoration: none;
    }

    .text {
    font-size: 14px;
    }

    .item {
    padding: 18px 0;
    }

    .box-card {
    width: 380px;
    margin: 0 auto;
    padding: 0 18px;
    }
</style>