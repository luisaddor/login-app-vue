<template>
    <el-container>
        <LoginForm />
    </el-container>
</template>

<script>
    import LoginForm from '../components/LoginForm.vue'

    export default {
        name: 'Login',
        components: {
            LoginForm
        }
    }
</script>