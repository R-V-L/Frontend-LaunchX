<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav1">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img
                    src="./assets/PanaderiaLogo2.png"
                    alt=""
                    width="64"
                    class="d-inline-block align-text-top"
                />
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/"
                            >Pasteleria Castillo</a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/pastelero">Pagina Pastelero</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button class="btn btn-warning" type="submit">
                        Buscar
                    </button>
                </form>
            </div>
        </div>
    </nav>
    <router-view />
</template>

<style>
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav1 {
    font-weight: bold;
    font-size: 18px;
    background: transparent !important;
}
</style>
