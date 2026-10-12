<script setup>
import ButtonBack from '@/components/ButtonBack.vue';
import { useRoute } from 'vue-router';
import { Star } from 'lucide-vue-next';
import cuidadores from '@/data/cuidadores';

const router = useRoute()

const URLcompleta = router.params.tipo


const filtrar = cuidadores.filter(cuidador => cuidador.tipo === URLcompleta)

</script>

<template>

    <main class="bg-[url('/src/assets/images/background.png')] min-h-dvh  bg-cover bg-center bg-no-repeat">
        <ButtonBack/>

        <div class="flex flex-col gap-4 bg-white p-5 rounded-xl mx-5 mt-5  shadow-xl">

            <h2 class="titulo text-2xl">Estas son algunas de las opciones:</h2>

            <div
                v-for="cuidador in filtrar"
                :key="cuidador.nombre"
                :class="'bg-card p-5 shadow-lg rounded-xl flex flex-col gap-5  '"
            >
            <div class="flex flex-row ">
                    <img class="rounded-full size-20 object-cover shrink-0" :src="cuidador.foto" alt="">

                    <div class="flex flex-col ml-5">
                        <h3 class="text-xl titulo">{{ cuidador.nombre }}</h3>
                        <div class="flex gap-1 items-center text-center">
                            <h3 class="text-2xl texto">{{ cuidador.estrellas }}</h3>
                            <Star class="text-orange-500"/>
                        </div>
                        <p class="text-xl texto">{{ cuidador.edad }} Años</p>

                    </div>

            </div>

            
            <RouterLink :to="`/cliente/detallecuidador/${cuidador.id}`" class="texto text-xl bg-banner px-10 py-2 rounded-lg self-center w-fit shadow-xl">Ver mas</RouterLink>
            </div>
        </div>

    </main>
    



</template>