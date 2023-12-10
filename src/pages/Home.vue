<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <Navbar />
        <div class="home-screen">
            <div class="content-container">
                <div class="text-container">
                    <h1>O serviço de rastreios de encomendas mais confiável</h1>
                    <p>Personalize suas encomendas <br>e acompanhe com notificações</p>
                    <button>Comece agora</button>
                </div>
                <div class="image-container">
                    <img src="../assets/Take Away-pana.png" alt="Imagem" />
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
  
<script setup lang="ts">
</script>
  
<style lang="scss" scoped>
.home-screen {
    background-color: #EEA297;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        color: #261134;
    }

    p {
        color: #4D4D4D;

        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
    }
}

.content-container {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
}

.text-container {
    flex: 1;
    padding: 2rem;
    text-align: left;
    max-width: 30rem;

    button {
        display: flex;
        height: 3.125rem;
        padding: 0rem 1rem;
        justify-content: center;
        align-items: center;
        width: 10rem;

        border-radius: 0.6875rem;
        background: #0C1F82;
        color: white;
        border: none;
    }
}

.image-container {
    flex: 1;
}

img {
    max-width: 100%;
    height: auto;
}
</style>