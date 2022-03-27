<template>
    <div class="container">
        <h2>Ingredientes</h2>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Cantidad disponible</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="ingrediente in $store.state.ingredientes" :set="numero = $store.getters.numeroRandom">
                    <th>{{ ingrediente }}</th>
                    <td v-if="numero < 1" class="table-danger">{{ numero }}</td>
                    <td v-else-if="numero < 6" class="table-warning">{{ numero }}</td>
                    <td v-else>{{ numero }}</td>
                </tr>
            </tbody>
        </table>
        <h2>Pedidos</h2>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre comprador</th>
                    <th>Producto</th>
                    <th>Ingredientes extra</th>
                    <th>Estatus</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pedido in $store.state.pedidos">
                    <th>{{ pedido.id }}</th>
                    <td>{{ pedido.nombre }}</td>
                    <th>{{ $store.getters.productoRandom }}</th>
                    <td>{{ $store.getters.extraRandom }}</td>
                    <td v-if="pedido.estatus == 'En progreso'" class="table-info">{{ pedido.estatus }}</td>
                    <td v-else-if="pedido.estatus == 'Completado'" class="table-success">{{ pedido.estatus }}</td>
                    <td v-else class="table-danger">{{ pedido.estatus }}</td>
                    <th>{{ pedido.fecha }}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>