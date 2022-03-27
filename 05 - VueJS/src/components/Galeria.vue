<template>
    <div class="row row-cols-1 row-cols-md-5 g-4">
        <div v-for="pastel in $store.state.pasteles" class="col">
            <div class="card">
                <img
                    v-bind:src="pastel.imagen"
                    v-bind:alt="pastel.titulo"
                />
                <div class="card-body">
                    <h5 class="card-title">{{ pastel.titulo }}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${{ pastel.precio }}.00</h6>
                    <a
                        class="btn btn-warning"
                        href="/comprar"
                        role="button"
                        >Comprar</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Galeria",
};
</script>