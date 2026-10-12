<script setup>
import {Star} from 'lucide-vue-next'
import {Mail} from 'lucide-vue-next'
import {User} from 'lucide-vue-next'
import {Search} from 'lucide-vue-next'

import { useRoute, RouterLink } from 'vue-router'

const ruta = useRoute()


</script>

<template>
    
    <div class="bg-card rounded-t-xl h-18  fixed bottom-0 w-full flex justify-around items-center pb-safe">
            <RouterLink class="size-12" to="/cliente/favoritos">
                <div class="bg-card  p-3 rounded-full transition-transform duration-200 items-center"
                    :class="ruta.path === '/cliente/favoritos' ? 'text-rosa -translate-y-3 shadow-lg shadow-black/30  ' : 'text-celeste'">
                    
                    <Star class="size-6 text-celeste "
                            :class="ruta.path === '/cliente/favoritos' ? 'text-rosa' : 'text-celeste'"/>
                </div>
            </RouterLink>
            <RouterLink class="size-12" to="/cliente/solicitudes">
                <div class="bg-card p-3 rounded-full transition-transform duration-200 items-center"
                    :class="ruta.path === '/cliente/solicitudes' ? 'text-rosa -translate-y-3 shadow-lg shadow-black/30' : 'text-celeste'">

                    <Mail class="size-6 text-celeste "
                        :class="ruta.path === '/cliente/solicitudes' ? 'text-rosa' : 'text-celeste'"/>
                </div>
                
            </RouterLink>
            <RouterLink class="size-18" to="/cliente">
                <div class="bg-card p-3 rounded-full transition-transform duration-200 items-center"
                    :class="ruta.path === '/cliente' ? '-translate-y-3 shadow-lg shadow-black/30' : 'text-celeste'">

                    <img class="size-12" src="../assets/images/logo.png" alt="Logo"
                        >
                </div>
                
            </RouterLink>
            <RouterLink class="size-12" to="/cliente/perfil">
                <div class="bg-card p-3 rounded-full transition-transform duration-200 items-center"
                    :class="ruta.path === '/cliente/perfil' ? ' -translate-y-3 shadow-lg shadow-black/30' :'text-celeste'">

                    <User class="size-6 text-celeste "
                        :class="ruta.path === '/cliente/perfil' ? 'text-rosa' : 'text-celeste'"/>
                </div>
            </RouterLink>
            <RouterLink class="size-12" to="/cliente/search">
                <div class="bg-card p-3 rounded-full transition-transform duration-200 items-center"
                    :class="ruta.path === '/cliente/search' ? '-translate-y-3 shadow-lg shadow-black/30' : 'text-celeste'">

                    <Search class="size-6 text-celeste "
                        :class="ruta.path === '/cliente/search' ? 'text-rosa' : 'text-celeste'"/>
                </div>
            </RouterLink>

    </div>

</template>