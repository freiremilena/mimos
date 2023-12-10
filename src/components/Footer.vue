<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <footer class="custom-footer">
        <div class="footer-content">
            <span>Todos os direitos reservados © Mimos, 2023</span>
            <img class="img-fluid" src="../assets/logo.png" alt="Logo" height="30" width="90px" />
        </div>
    </footer>
</template>
  
<style scoped>
.custom-footer {
    background-color: #222132;
    color: #ffffff;
    height: 5vh;
}

.footer-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 1rem;
}

span {
    font-size: 0.7rem;
}

.logo {
    max-width: 100px;
}
</style>