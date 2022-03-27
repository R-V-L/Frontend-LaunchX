<template>
    <div class="container d-flex align-items-center justify-content-center">
        <form>
            <h4>Agregar ingredientes extra</h4>
            <p class="text-muted">
                Seleccionar tantos como guste, cada ingrediente extra tiene un costo adicional de $15.00
            </p>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Chocolate">
                <label class="form-check-label" for="inlineCheckbox1">Chocolate</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Nuez">
                <label class="form-check-label" for="inlineCheckbox2">Nuez picada</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="Fruta">
                <label class="form-check-label" for="inlineCheckbox3">Fruta seca</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="Canela">
                <label class="form-check-label" for="inlineCheckbox4">Canela</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="Almibar">
                <label class="form-check-label" for="inlineCheckbox5">Fruta en almibar</label>
            </div>
            <br><br>
            <h4>Agregar adornos</h4>
            <p class="text-muted">
                Seleccionar tantos como guste, cada adorno tiene un costo adicional de $20.00
            </p>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="AdornoCheckbox1" value="Feliz">
                <label class="form-check-label" for="AdornoCheckbox1">Mensaje de feliz cumpleaños</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="AdornoCheckbox2" value="Nuez">
                <label class="form-check-label" for="AdornoCheckbox2">Tarjeta de regalo</label>
            </div>
            
            <br>
            <div class="mb-3">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="AdornoCheckbox3" value="Fruta">
                    <label class="form-check-label" for="AdornoCheckbox3">Agregar mensaje personalizado:</label>
                </div>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="mb-4">
                <label for="nombre" class="form-label">Nombre completo</label>
                <input type="text" class="form-control" id="nombre">
            </div>
            <div class="mb-4">
                <label for="telefono" class="form-label">Telefono</label>
                <input type="text" class="form-control" id="telefono">
            </div>
            <div class="mb-4">
                <label for="exampleInputEmail1" class="form-label">Correo electronico</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
                <label for="entrega" class="form-label">Tipo de entrega</label>
                <select id="entrega" class="form-select">
                    <option>Pasar a recoger</option>
                    <option>A domicilio</option>
                </select>
            </div>
            <div class="mb-4">
                <label for="domicilio" class="form-label">Direccion (en caso de seleccionar envio a domicilio)</label>
                <input type="text" class="form-control" id="domicilio">
            </div>
            <a class="btn btn-primary" href="/" role="button">Detalles y pago</a>
        </form>
    </div>
</template>