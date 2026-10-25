<script setup>
import ButtonBack from '@/components/ButtonBack.vue';
import { User } from 'lucide-vue-next';

</script>

<template>
    
    <main class="bg-[url('/src/assets/images/background.png')] min-h-dvh  bg-cover bg-center bg-no-repeat">
        <ButtonBack/>

        <div class="mx-10 flex flex-col pt-10 justify-center items-center bg-white ">
            <User class="text-celeste size-15 rounded-full border-2 border-celeste p-2"/>

            <form action="" class="mx-6 mt-8 bg-white flex flex-col justify-center items-center gap-5  w-full px-4 pb-10 shadow-lg rounded-xl">


                <input class="bg-card p-2 rounded-lg inset-shadow-sm w-full" type="text" placeholder="Nombre">
                <input class="bg-card p-2 rounded-lg inset-shadow-sm w-full" type="text" placeholder="Apellido">
                <input class="bg-card p-2 rounded-lg inset-shadow-sm w-full" type="text" placeholder="Gmail">
                <input class="bg-card p-2 rounded-lg inset-shadow-sm w-full" type="text" placeholder="Contraseña">


            </form>

        </div>
        
    </main>


</template>