import DetalleCuidador from "@/views/cliente/DetalleCuidador.vue";
import Favoritos from "@/views/cliente/Favoritos.vue";
import HomeView from "@/views/cliente/HomeView.vue";
import Perfil from "@/views/cliente/Perfil.vue";
import Search from "@/views/cliente/Search.vue";
import Servicios from "@/views/cliente/Servicios.vue";
import Solicitudes from "@/views/cliente/Solicitudes.vue";
import InicioView from "@/views/auth/InicioView.vue";
import RegistroDatosView from "@/views/auth/RegistroDatosView.vue";
import RegistroClienteView from "@/views/auth/RegistroClienteView.vue";

import { createRouter, createWebHashHistory } from "vue-router";
import RegistroCuidadorView from "@/views/auth/RegistroCuidadorView.vue";

const router = createRouter({
    history: createWebHashHistory(),
    
    routes:[
    {
        path:"/",
        name:"inicio-view",
        component:InicioView,
        meta:{mostrarNavbar:true}

    },
    {
        path:"/registro/datos",
        name:"registro-datos",
        component:RegistroDatosView,
        meta:{mostrarNavbar:true}
    },
    {
        path:"/registro/cliente",
        name:"registro-cliente",
        component:RegistroClienteView,
    },
    {
        path:"/registro/cuidador",
        name:"registro-cuidador",
        component:RegistroCuidadorView,
    },
    {
        path:"/cliente",
        name:"cliente-home",
        component:HomeView,

    },
    {
        path:"/cliente/servicios/:tipo",
        name:"servicios-cliente",
        component:Servicios,

    },
    {
        path:"/cliente/favoritos",
        name:"favoritos-cliente",
        component:Favoritos,

    },
    {
        path:"/cliente/solicitudes",
        name:"cliente-solicitudes",
        component:Solicitudes,

    },
    {
        path:"/cliente/perfil",
        name:"cliente-perfil",
        component:Perfil
    },
    {
        path:"/cliente/search",
        name:"cliente-search",
        component:Search
    },
    {
        path:"/cliente/detallecuidador/:id",
        name:"cliente-detallecuidador",
        component:DetalleCuidador
    }


]


})

export default router