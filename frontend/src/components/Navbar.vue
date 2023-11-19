<script setup lang="ts">
    import NewQuote from "@/components/NewQuote.vue";
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">CITADOR</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Citações</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Obras</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Autores</a>
                </li>
            </ul>
            <ul class="navbar-nav mr-left">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Conta
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModalCenter">Nova citação</a>
                        <a class="dropdown-item" href="#">Fichar obra</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Configurações</a>
                        <a class="dropdown-item" href="#">Sair</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Entrar
                    </a>
                    <form class="dropdown-menu p-4 dropdown-menu-right" style="width: 280px;">
                        <div class="form-group">
                            <label for="exampleDropdownFormEmail2">Endereço eletrônico</label>
                            <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="exemplo@exemplo.com">
                        </div>
                        <div class="form-group">
                            <label for="exampleDropdownFormPassword2">Senha</label>
                            <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="*****">
                        </div>
                        <div class="form-check" style="margin-bottom: 8px;">
                            <input type="checkbox" class="form-check-input" id="dropdownCheck2">
                            <label class="form-check-label" for="dropdownCheck2">
                                Lembrar de mim
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary">Entrar</button>
                    </form>
                </li>
            </ul>
        </div>
    </nav>
    <NewQuote></NewQuote>
</template>

<style>
    .navbar-brand {
        color: white;
        background: navy;
        font-weight: bold !important;
        padding-left: 8px;
        padding-right: 8px;
    }

    .navbar-brand:visited {
        color: white;
    }

    .navbar {
        box-shadow: 0px 2px 4px 0px rgba(25,25,112,0.25);
    }
</style>
