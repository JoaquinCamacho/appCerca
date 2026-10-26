<script setup>

import { useRouter } from 'vue-router';
const router = useRouter()

function rolElegido(rol){
    sessionStorage.setItem('rolRegistrado', rol)
    router.push('/registro/datos')
}


</script>

<template>

        
        <main class="bg-[url('/src/assets/images/background.png')] min-h-dvh  bg-cover bg-center bg-no-repeat ">

            <div class="py-25 flex text-center justify-center">

                <div class="bg-white py-15 w-xs  flex flex-col gap-10 rounded-xl shadow-xl items-center">
                    <img class="w-30 pb-15" src="../../assets/images/logoInicio.png" alt="Logo">

                    <div class="flex justify-around w-full ">
                        <button @click="rolElegido('cuidador')" class="bg-banner w-28 py-4 titulo rounded-lg shadow-lg text-xl" >Cuidador</button>
                        <button @click="rolElegido('cliente')"  class="bg-banner w-28 py-4 titulo rounded-lg shadow-lg text-xl" >Cliente</button>
                    </div>

                    <RouterLink class="titulo text-xl">¿Ya tenes cuenta?</RouterLink>
                
                </div>


            
                
            </div>

        </main>
        

</template>