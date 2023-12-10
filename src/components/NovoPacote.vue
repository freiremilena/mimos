<!-- PackageForm.vue -->
<template>
    <div class="novo-pacote-component" style="align-self: stretch">
      <h2 class="package-title">Dados do Pacote</h2>
      <form class="package-form">
        <input
          v-model="trackingCode"
          class="form-control"
          type="text"
          placeholder="Insira o código de rastreio"
        />
        <input
          v-model="packageName"
          class="form-control"
          type="text"
          placeholder="Insira um nome"
        />
        <button @click="savePackage" class="btn btn-primary">Salvar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        trackingCode: "",
        packageName: "",
      };
    },
    methods: {
      savePackage() {
        console.log("Código de Rastreio:", this.trackingCode);
        console.log("Nome do Pacote:", this.packageName);
      },
    },
  };
  </script>
  
  <style scoped>
  .novo-pacote-component {
    margin-bottom: 2rem;
  }
  .package-title {
    color: #0c1f82;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .package-form {
    display: flex;
    gap: 10px;
  }
  
  .btn-primary {
    background-color: #0c1f82;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    width: 24rem;
  }
  </style>