<script setup lang="ts">
    import Navbar from '@/components/Navbar.vue'
    import Sidebar from '@/components/Sidebar.vue'
    import Resultados from '@/components/Resultados.vue'
</script>

<template>
    <Navbar/>
    <div class="container d-flex">
        <Sidebar/>
        <Resultados/>
    </div>
</template>

<style scoped>
    .container {
        margin: 16px 0 0 0;
    }
</style>
