<script setup>
import { useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue';

const route = useRoute()
</script>

<template>
  <div>
    <RouterView />

    <NavBar v-if="!route.meta.mostrarNavbar"/>
  </div>



</template>


<style>
</style>