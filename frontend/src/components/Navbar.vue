<script>
    import { ref } from "vue";
     
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
    <div class="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Nova citação</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="newQuoteContent" class="form-label">Texto</label>
                            <textarea class="form-control" id="newQuoteContent"></textarea>
                        </div>
                        <div class="mb-3">
                            <label for="newQuotePage" class="form-label">Número da página</label>
                            <input type="number" class="form-control" id="newQuotePage">
                        </div>
                        <div class="form-group">
                            <label for="newQuoteWork">Obra</label>
                            <select class="form-control" id="newQuoteObra">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="newQuoteIsPublic">
                            <label class="form-check-label" for="newQuoteIsPublic">Privada</label>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    <button type="submit" class="btn btn-primary">Salvar</button>
                </div>
            </div>
        </div>
    </div>
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
