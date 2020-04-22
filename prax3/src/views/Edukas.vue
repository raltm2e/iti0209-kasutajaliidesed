<template>
    <div class="container-fluid text-center">
        <div class="row">
            <div class="col">
                <h1>Broneering edukas!</h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <h5>Saatsime sulle ka kinnitusega e-maili</h5>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col">
                <router-link to="/" class="btn btn-lg m-auto" role="button">Tagasi avalehele</router-link>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md d-none d-lg-block">
                <img class="img-fluid" src="../assets/images/chevy_laguna.jpg" alt="">
            </div>
            <div class="col-md d-none d-lg-block">
                <img class="img-fluid" src="../assets/images/tuuning_garaaž.png" alt="" width="780">
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Edukas"
    }
</script>

<style scoped>

</style>
