<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="login-container container-fluid">
        <div class="left-side bg-dark text-light d-flex align-items-center justify-content-center">
            <div class="logo-container text-center">
                <img src="../assets/logo.png" alt="Logo" class="img-fluid" />
            </div>
        </div>

        <div class="right-side d-flex align-items-center justify-content-center">
            <div>
                <h1 class="mb-4">Login</h1>
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label for="username" class="form-label">Usuário:</label>
                        <input v-model="username" type="text" class="form-control" id="username" name="username" />
                    </div>

                    <div class="mb-3">
                        <label for="password" class="form-label">Senha:</label>
                        <input v-model="password" type="password" class="form-control" id="password" name="password" />
                    </div>

                    <button type="submit" class="btn btn-primary w-100">Entrar</button>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const username = ref('');
        const password = ref('');

        const login = () => {
            console.log(username.value, password.value)

            router.push('/home');
        };

        return {
            username,
            password,
            login,
        };
    },
};
</script>
  
<style lang="scss" scoped>
.login-container {
    display: flex;
    height: 100vh;
    padding: 0;

}

.left-side,
.right-side {
    flex: 1;
}

.left-side {
    min-width: 300px;
}

.logo-container {
    max-width: 200px;
    max-height: 100px;
}

button {
    background-color: #F95C19;
    border: none;
}

.right-side {
    padding: 20px;
}

h1 {
    font-size: 24px;
}
</style>