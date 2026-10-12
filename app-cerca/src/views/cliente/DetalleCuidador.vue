<script setup>
import ButtonBack from '@/components/ButtonBack.vue';
import { useRoute } from 'vue-router';
import cuidadores from '@/data/cuidadores.js'

const ruta = useRoute()
const id = Number(ruta.params.id)



const filtrar = cuidadores.find(cuidador => cuidador.id === id)

</script>

<template>
    <main class="bg-[url('/src/assets/images/background.png')] min-h-dvh  bg-cover bg-center bg-no-repeat">
        <ButtonBack/>

        <div v-if="filtrar">
            <div>
                <h2>{{ filtrar.nombre }}</h2>
                <p>{{ filtrar.edad }}</p>
            </div>
            
        </div>

    </main>



</template>