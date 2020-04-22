<template>
    <div class="container-fluid align-text-bottom mb-0">
        <div class="container-lg">
            <div class="row text-right mr-2">
                <div class="col">
                    <h1>Remont ja hooldus</h1>
                </div>
            </div>
            <div class="row text-right mr-2">
                <div class="col">
                    <h3>Broneeri aeg kiirelt ja mugavalt</h3>
                </div>
            </div>
            <div class="row float-right mr-4 mt-3">
                <router-link to="broneeri" class="btn btn-lg" role="button">Broneeri</router-link>
            </div>
        </div>
        <div class="media align-items-end">
            <img src="../assets/images/e46_m3.png" class="img-fluid d-none d-md-block" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>

</style>
