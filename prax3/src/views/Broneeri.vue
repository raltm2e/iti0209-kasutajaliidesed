<template>
    <div class="container-fluid">
        <div class="row align-items-center" style="height: 100%">
            <div class="col-6 text-center d-none d-lg-block">
                <h1>Sisesta auto andmed</h1>
                <img src="https://img.icons8.com/ios/100/000000/car-badge.png" alt=""/>
            </div>
            <div class="col">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <div class="card">
                            <article class="card-body">
                                <h6 style="visibility: hidden">html valideerimine</h6>
                                <form>
                                    <div class="form-group">
                                        <label for="automark">Automark:</label>
                                        <select id="automark" class="form-control">
                                            <option disabled selected>Vali...</option>
                                            <option>BMW</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="mudel">Mudel:</label>
                                        <select id="mudel" class="form-control">
                                            <option disabled selected>Vali...</option>
                                            <option>1.-4. seeria</option>
                                            <option>5.-7. seeria</option>
                                            <option>X1-X7</option>
                                            <option>M1-M8</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="mootor">Mootor:</label>
                                        <select id="mootor" class="form-control">
                                            <option disabled selected>Vali...</option>
                                            <option>Bensiin</option>
                                            <option>Diisel</option>
                                            <option>Hübriid</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="käigukast">Käigukast:</label>
                                        <select id="käigukast" class="form-control">
                                            <option disabled selected>Vali...</option>
                                            <option>Manuaal</option>
                                            <option>Automaat</option>
                                            <option>SMG</option>
                                        </select>
                                    </div>
                                    <div class="form-row" style="width: 100%">
                                        <div class="form-group m-auto">
                                            <router-link to="/hooldus" class="btn btn-lg">Hooldusesse</router-link>
                                        </div>
                                        <div class="form-group m-auto">
                                            <router-link to="/remont" class="btn btn-lg">Remonti</router-link>
                                        </div>
                                    </div> <!-- form-group// -->
                                </form>
                            </article> <!-- card-body end .// -->
                        </div> <!-- card.// -->
                    </div> <!-- col.//-->
                </div> <!-- row.//-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Broneeri"
    }
</script>

<style scoped>

</style>
