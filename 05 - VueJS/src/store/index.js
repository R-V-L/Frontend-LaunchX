import { createStore } from 'vuex'

export default createStore({
    state: {
        pasteles: [
            {
                titulo: 'Flan',
                precio: 150,
                imagen: 'https://multicongelados.net/web/image/product.template/729/image_256/%5B2010%5D%20FLAN%20DE%20CARAMELO?unique=67a6e36'
            },
            {
                titulo: '3 leches',
                precio: 150,
                imagen: 'http://2.bp.blogspot.com/-GVtEvfLh0lA/VCtG4TzugGI/AAAAAAAABJA/A0SR384ABx4/s1600/1411925335494.jpg'
            },
            {
                titulo: 'Chocoflan',
                precio: 180,
                imagen: 'https://www.aspicyperspective.com/wp-content/uploads/2018/08/chocoflan-impossible-cake-100-256x256.jpg'
            },
            {
                titulo: 'Cheesecake',
                precio: 180,
                imagen: 'https://www.aspicyperspective.com/wp-content/uploads/2017/01/perfect-slow-cooker-cheesecake-11-256x256.jpg'
            },
            {
                titulo: 'Zanahoria',
                precio: 230,
                imagen: 'https://i-ticketing.iwos.com/256x256-th/products/192/products_192_19.jpg'
            },
            {
                titulo: 'Yogurth',
                precio: 280,
                imagen: 'https://images.freeimages.com/images/premium/small-comps/4159/41590776-strawberry-and-marshmallow-yogurt-cake.jpg'
            },
            {
                titulo: 'Cajeta',
                precio: 240,
                imagen: 'https://images.rappi.com.mx/products/975770757-1625265605149.png?d=200x200&e=webp'
            },
            {
                titulo: 'Capuchino',
                precio: 250,
                imagen: 'https://images.rappi.com.mx/products/2109591598-1630521079631.png?d=200x200&e=webp'
            },
            {
                titulo: 'Chocofresa',
                precio: 240,
                imagen: 'https://cdn.kiwilimon.com/recetaimagen/12536/th5-320x320-5395.jpg'
            },
            {
                titulo: 'Aleman',
                precio: 250,
                imagen: 'https://i.pinimg.com/474x/6e/51/64/6e516466d4569184db5b9e2d23db07c5.jpg'
            }
        ],
        ingredientes: [
            'Azucar',
            'Betun',
            'Canela',
            'Chocolate',
            'Chocolate Blanco',
            'Harina',
            'Huevos',
            'Leche',
            'Mantequilla'
        ],
        extras: [
            'Chocolate',
            'Nuez picada',
            'Fruta seca',
            'Canela',
            'Fruta en almibar'
        ],
        pedidos: [
            {
                id: 698,
                nombre: 'Juan Perez',
                estatus: 'Completado',
                fecha: '2022-03-02'
            },
            {
                id: 699,
                nombre: 'Pablo Zazueta',
                estatus: 'En progreso',
                fecha: '2022-03-03'
            },
            {
                id: 700,
                nombre: 'Carlos Peregrina',
                estatus: 'Cancelado',
                fecha: '2022-03-03'
            },
            {
                id: 701,
                nombre: 'Pedro Juarez',
                estatus: 'En progreso',
                fecha: '2022-03-04'
            }
        ]
    },
    getters: {
        cuadrado(state) {
            return state.contador * state.contador
        },
        numeroRandom() {
            return Math.floor(Math.random() * 20)
        },
        ingredienteRandom(state) {
            return state.ingredientes[Math.floor(Math.random() * state.ingredientes.length)]
        },
        productoRandom(state) {
            return state.pasteles[Math.floor(Math.random() * state.pasteles.length)].titulo
        },
        extraRandom(state) {
            return state.extras[Math.floor(Math.random() * state.extras.length)]
        }
    },
    mutations: {
        subirContador(state, random) {
            state.contador += random;
        },
        bajarContador(state, random) {
            state.contador -= random;
        },
        resetContador(state) {
            state.contador = 0;
        }
    },
    actions: {
        async subirContador({ commit }) {
            const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new')
            const results = await res.json()
            console.log(results)
            commit("subirContador", results)
        },
        async bajarContador({ commit }) {
            const res = await fetch('https://www.random.org/integers/?num=1&min=1&max=8&col=1&base=10&format=plain&rnd=new')
            const results = await res.json()
            console.log(results)
            commit("bajarContador", results)
        }
    },
    modules: {
    }
})