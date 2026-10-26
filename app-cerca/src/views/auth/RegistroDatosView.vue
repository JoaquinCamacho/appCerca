<script setup>
import ButtonBack from '@/components/ButtonBack.vue';
import { User } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const router = useRouter()
const rol = sessionStorage.getItem('rolRegistrado')

function continuarRegistro(){
    if(rol === 'cliente'){
        router.push('/registro/cliente')
    }
    else if(rol === 'cuidador'){
        router.push('/registro/cuidador')
    }
}


</script>

<template>
    
    <main class="bg-[url('/src/assets/images/background.png')] min-h-dvh  bg-cover bg-center bg-no-repeat">
        <ButtonBack/>

        <div class="mx-10 flex flex-col pt-10 justify-center items-center bg-white ">
            <User class="text-celeste size-20 rounded-full border-2 border-celeste p-2"/>

            <form action="" class="mx-6 mt-8 bg-white flex flex-col justify-center items-center gap-8  w-full px-4 pb-10 shadow-lg rounded-xl">


                <input class="bg-card p-2 rounded-lg inset-shadow-sm w-full titulo" type="text" placeholder="Nombre">
                <input class="bg-card p-2 rounded-lg inset-shadow-sm w-full titulo" type="text" placeholder="Apellido">
                <input class="bg-card p-2 rounded-lg inset-shadow-sm w-full titulo" type="text" placeholder="Gmail">
                <input class="bg-card p-2 rounded-lg inset-shadow-sm w-full titulo" type="text" placeholder="Contraseña">
                
                <button type="button" @click="continuarRegistro" class="titulo bg-banner py-3 px-5 rounded-lg text-xl">
                    Siguiente
                </button>

                <div class="flex gap-2 justify-center bg-card p-2 w-full mt-2 rounded-lg items-center">
                    <img src="../../assets/images/google.png" alt="google">
                    <h2 class="titulo text-lg">Continuar con Google</h2>
                </div>


            </form>

        </div>
        
    </main>


</template>