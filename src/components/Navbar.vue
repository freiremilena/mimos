<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img class="img-fluid" src="../assets/logo2.svg" alt="Logo" height="30" />
        </a>
  
        <div class="navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
  
            <li class="nav-item">
              <router-link to="/sign-up" class="nav-link">Criar Conta</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  import { type } from 'os';
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Navbar',
  });
  </script>
  
  <style lang="scss" scoped>
  .navbar{
    height: 5vh;
  }
  a {
    color: #F95C19;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  </style>