<script setup>
import ButtonBack from '@/components/ButtonBack.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const discapacidad = ref('')
const sexo = ref('')
const edad = ref('')
const descripcion = ref('')

function continuarRegistro() {
    console.log({
        discapacidad: discapacidad.value,
        sexo: sexo.value,
        edad: edad.value,
        descripcion: descripcion.value
    })
    
    if(!discapacidad.value || !sexo.value || !edad.value ){
        alert('Completa los campos obligatorios')
        return
    }
    
    router.push('/cliente')
}
</script>

<template>
   <main class="bg-[url('/src/assets/images/background.png')] min-h-dvh bg-cover bg-center bg-no-repeat">

        <ButtonBack/>

        <div class="mx-10 flex flex-col items-center px-4 p-5 bg-white shadow-xl rounded-xl ">

            <h2 class="titulo text-xl pb-4">Queremos conocerte más:</h2>

            <form @submit.prevent="continuarRegistro" class="flex flex-col gap-4 w-full">

                <div class="flex flex-col bg-card gap-2 p-4 rounded-xl inset-shadow-sm">

                    <select v-model="discapacidad">
                        <option class="titulo" value="">¿Tenes alguna discapacidad?</option>
                        <option value="ninguna">Ninguna</option>
                        <option value="motora">Motora</option>
                        <option value="visual">Visual</option>
                        <option value="auditiva">Auditiva</option>
                        <option value="otra">Otra</option>
                    </select>
                </div>

                <div class="flex flex-col bg-card gap-2 p-4 rounded-xl inset-shadow-sm">
                    <label class="titulo">Edad</label>

                    <input v-model="edad" type="number" min="18" step="1" placeholder="Ingresá tu edad">
                </div>

                <div class="flex flex-col bg-card gap-2 p-4 rounded-xl inset-shadow-sm">

                    <select v-model="sexo">
                        <option class="titulo" value="">Sexo</option>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                        <option value="otro">Otro</option>
                        <option value="prefiero_no_decirlo">Prefiero no decirlo</option>
                    </select>
                </div>


                <div class="flex flex-col bg-card gap-2 p-4 rounded-xl inset-shadow-sm">
                    <label class="titulo">Hablanos de vos </label>

                    <textarea v-model="descripcion" placeholder="hobbies,gustos,etc"></textarea>
                </div>

                <button type="submit" class="bg-banner rounded-lg p-3 titulo">
                    Listo
                </button>

            </form>
        </div>
    </main>
</template>