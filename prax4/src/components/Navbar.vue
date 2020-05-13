<template>
    <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand"><img src="../assets/images/logo.png" width="80" height="80" alt=""> Autokoda</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
        <span class="navbar-toggler-icon">
                <i class="fas fa-bars" style="color:#fff; font-size:28px;"></i>
            </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/graafikud" class="nav-link">Andmed</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/hinnakiri" class="nav-link">Hinnakiri</router-link>>
                    </li>
                    <li class="nav-item">
                        <router-link to="/eesm2rk" class="nav-link">Eesmärk</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>
