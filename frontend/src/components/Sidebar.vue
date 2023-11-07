<template>
    <div class="d-flex flex-column flex-shrink-0 bg-light" style="width: 280px">
        <h5>Pesquisa</h5>
        <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        </form>
        <hr>
        <h5>Listar por</h5>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Ordem alfabética
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Relevância
            </label>
        </div>
        <hr>
        <h5>Agrupar por</h5>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Autor
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Obra
            </label>
        </div>
    </div>
</template>

<style scoped>
    .d-flex {
        padding: 16px;
        margin: 0 0 16px 0;
        box-shadow: 0px 2px 4px 0px rgba(25,25,112,0.25);
    }
</style>
