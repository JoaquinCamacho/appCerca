<script setup>

    import { useRouter } from 'vue-router';
    import { ChevronLeft } from 'lucide-vue-next'

    const router = useRouter()

    function volver(){
        router.back()
    }

</script>

<template>

    <button type="button" @click="volver">

        <ChevronLeft class="py-5 size-25" />
    
    </button> 
    
</template>
