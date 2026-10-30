<script setup>
import ButtonBack from '@/components/ButtonBack.vue';
import { useRoute } from 'vue-router';
import { supabase } from '../../../supabase';
import { ref,onMounted } from 'vue';

const route = useRoute()

const tipoServicio = route.params.tipo
const servicios = {
    mandados: 1,
    cuidados: 2,
    compania: 3
}

const idServicio = servicios[tipoServicio]

const cuidadores = ref([])

async function obtenerCuidadores() {
    const { data, error } = await supabase
        .from('Cuidador')
        .select(`
            id,
            archivo,
            Usuarios (
                id,
                nombre,
                apellido,
                foto_perfil
            )
        `)
        .eq('id_servicio', idServicio)

    console.log('Cuidadores con usuarios:', data)
    console.log('Error:', error)
}

onMounted(() => {
    obtenerCuidadores()
})
</script>

<template>

    <main class="bg-[url('/src/assets/images/background.png')] min-h-dvh  bg-cover bg-center bg-no-repeat">
        <ButtonBack/>

        <div class="flex flex-col gap-4 bg-white p-5 rounded-xl mx-5 mt-5  shadow-xl">

            <h2 class="titulo text-2xl">Estas son algunas de las opciones:</h2>

            <div
                v-for="cuidador in cuidadores"
                :key="cuidador.id"
                :class="'bg-card p-5 shadow-lg rounded-xl flex flex-col gap-5  '"
            >
            <div class="flex flex-row ">
                    <img class="rounded-full size-20 object-cover shrink-0" :src="cuidador.Usuarios.foto_perfil" alt="foto del cuidador">

                    <div class="flex flex-col ml-5">
                        <h3 class="text-xl titulo">{{ cuidador.Usuarios.nombre  }} {{ cuidador.Usuarios.apellido }}</h3>
                        
                    </div>

            </div>

            
            <RouterLink :to="`/cliente/detallecuidador/${cuidador.id}`" class="texto text-xl bg-banner px-10 py-2 rounded-lg self-center w-fit shadow-xl">Ver mas</RouterLink>
            </div>

        </div>

    </main>
    



</template>