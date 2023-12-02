<script setup lang="ts">
    import AccountDropdown from "@/components/AccountDropdown.vue"
</script>

<template>
    <nav class="navbar navbar-expand-md mb-3 shadow-sm">
        <div class="container-fluid">
            <div class="navbar-brand">CITADOR</div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                        <router-link to="/citacoes">
                            Citações
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/obras">
                            Obras
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/autores">
                            Autores
                        </router-link>
                    </li>
                </ul>
                <AccountDropdown></AccountDropdown>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .navbar-brand {
        background: #0d6efd;
        padding: 4px 8px 4px 8px;
        color: white;
        font-weight: bold;
        border-radius: .2em;
        user-select: none;
    }

    a {
        color: black;
        text-decoration: none;
        margin-right: 1em;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
