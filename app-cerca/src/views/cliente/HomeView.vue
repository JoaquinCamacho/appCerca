<script setup>
import mandados from '../../assets/images/mandados.png'
import cuidados from '../../assets/images/solicitarCuidados.png'
import compañia from '../../assets/images/compania.png'
import ButtonBack from '@/components/ButtonBack.vue'

const nombre = "Joaquin"

const servicios = [
    {titulo: 'Mandados', color:'bg-rosa', imagen: mandados, tipo:"mandados"},
    {titulo: 'Solicitar cuidados', color:'bg-celeste', imagen: cuidados, tipo:"cuidados"},
    {titulo: 'Compañia', color:'bg-rosa', imagen: compañia, tipo: "compania"}

]

</script>

<template>

        <main class="  bg-[url('/src/assets/images/background.png')] min-h-dvh  bg-cover bg-center bg-no-repeat pb-30">

                <ButtonBack/>

            <div class="bg-banner w-fit py-5 px-6 rounded-r-xl text-xl">
                
                <h1 class="texto">Bienvenido {{ nombre }}! <br>
                    ¿Que necesitas hoy?
                </h1>
            </div>

            <div class="flex flex-col gap-4 bg-white p-5 rounded-xl mx-5 mt-10  shadow-xl ">
                <RouterLink 
                v-for="servicio in servicios" 
                :key="servicio.titulo" 
                :class="[servicio.color, 'rounded-xl p-4']"
                :to="`/cliente/servicios/${servicio.tipo}`"
                >

                    <h2 class="titulo text-xl ">{{ servicio.titulo }}</h2>
                    <img class="w-full" :src="servicio.imagen" alt="">

                </RouterLink>
            </div>
        </main>
</template>

