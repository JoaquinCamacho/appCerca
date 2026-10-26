<script setup>
import ButtonBack from '@/components/ButtonBack.vue';

</script>

<template>
    <main class="bg-[url('/src/assets/images/background.png')] min-h-dvh  bg-cover bg-center bg-no-repeat">

        <ButtonBack/>
        
        <div class="mx-10 flex flex-col items-start px-4 p-5 px-2 justify-center items-center bg-white shadow-xl rounded-xl">
            <h2 class="titulo text-xl">Queremos conocerte mas:</h2>

            <form action="">
                <div class="flex bg-card gap-4 p-4">

                    <label for="">Indicar dispacidad</label>
                        <select name="" id="" >
                            <option value="">Persona adulta</option>
                            <option value=""></option>
                            <option value="">3</option>
                        
                        </select>

                </div>
            </form>
        </div>

    </main>
</template>